import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import type { Connect } from 'vite'

type DocsTreeNode = {
  name: string
  path: string
  kind: 'folder' | 'file'
  children?: DocsTreeNode[]
}

const appDir = path.dirname(fileURLToPath(import.meta.url))
const docsRoot = path.resolve(appDir, 'docs')

function toPosix(value: string) {
  return value.split(path.sep).join('/')
}

function normalizeRelativePath(value: string) {
  return value
    .split('/')
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment))
    .join('/')
}

function isHidden(name: string) {
  return name.startsWith('.')
}

function isMarkdownFile(name: string) {
  return name.toLowerCase().endsWith('.md')
}

function sortNodes(a: DocsTreeNode, b: DocsTreeNode) {
  if (a.kind !== b.kind) {
    return a.kind === 'folder' ? -1 : 1
  }
  return a.name.localeCompare(b.name)
}

async function buildTree(relativePath = ''): Promise<DocsTreeNode> {
  const absolutePath = path.resolve(docsRoot, relativePath)
  const entries = await readdir(absolutePath, { withFileTypes: true })
  const children = await Promise.all(
    entries
      .filter((entry) => !isHidden(entry.name))
      .filter((entry) => entry.isDirectory() || (entry.isFile() && isMarkdownFile(entry.name)))
      .map(async (entry) => {
        const nextRelativePath = normalizeRelativePath(path.posix.join(toPosix(relativePath), entry.name))
        if (entry.isDirectory()) {
          return buildTree(nextRelativePath)
        }
        return {
          name: entry.name,
          path: nextRelativePath,
          kind: 'file' as const,
        }
      }),
  )

  return {
    name: relativePath ? path.basename(relativePath) : 'docs',
    path: normalizeRelativePath(relativePath),
    kind: 'folder',
    children: children.sort(sortNodes),
  }
}

function resolveContentPath(relativePath: string) {
  const normalizedPath = normalizeRelativePath(relativePath)
  const absolutePath = path.resolve(docsRoot, normalizedPath)

  if (absolutePath !== docsRoot && !absolutePath.startsWith(`${docsRoot}${path.sep}`)) {
    throw new Error('Requested path is outside the docs root.')
  }

  if (!absolutePath.toLowerCase().endsWith('.md')) {
    throw new Error('Only Markdown files are supported.')
  }

  return {
    normalizedPath,
    absolutePath,
  }
}

async function readRequestBody(req: Connect.IncomingMessage) {
  const chunks: Buffer[] = []
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }
  return Buffer.concat(chunks).toString('utf8')
}

function sendJson(res: Connect.ServerResponse, statusCode: number, payload: unknown) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(payload))
}

function sendError(res: Connect.ServerResponse, statusCode: number, message: string) {
  sendJson(res, statusCode, { error: message })
}

async function handleTree(res: Connect.ServerResponse) {
  const tree = await buildTree()
  sendJson(res, 200, { root: tree })
}

async function handleContent(res: Connect.ServerResponse, relativePath: string) {
  const { normalizedPath, absolutePath } = resolveContentPath(relativePath)
  const [content, fileStat] = await Promise.all([readFile(absolutePath, 'utf8'), stat(absolutePath)])
  sendJson(res, 200, {
    path: normalizedPath,
    content,
    updatedAt: fileStat.mtime.toISOString(),
  })
}

async function handleSave(req: Connect.IncomingMessage, res: Connect.ServerResponse, relativePath: string) {
  const { normalizedPath, absolutePath } = resolveContentPath(relativePath)
  const rawBody = await readRequestBody(req)
  const body = rawBody ? JSON.parse(rawBody) : {}

  if (typeof body.content !== 'string') {
    sendError(res, 400, 'Request body must include a string `content` field.')
    return
  }

  await writeFile(absolutePath, body.content, 'utf8')
  const fileStat = await stat(absolutePath)
  sendJson(res, 200, {
    path: normalizedPath,
    updatedAt: fileStat.mtime.toISOString(),
  })
}

function createDocsMiddleware(): Connect.NextHandleFunction {
  return async (req, res, next) => {
    if (!req.url || !req.method) {
      next()
      return
    }

    const requestUrl = new URL(req.url, 'http://localhost')

    try {
      if (requestUrl.pathname === '/api/docs/tree' && req.method === 'GET') {
        await handleTree(res)
        return
      }

      if (requestUrl.pathname === '/api/docs/content' && req.method === 'GET') {
        const requestedPath = requestUrl.searchParams.get('path') ?? ''
        await handleContent(res, requestedPath)
        return
      }

      if (requestUrl.pathname === '/api/docs/content' && req.method === 'PUT') {
        const requestedPath = requestUrl.searchParams.get('path') ?? ''
        await handleSave(req, res, requestedPath)
        return
      }

      next()
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unexpected docs API error.'
      const statusCode = message.includes('outside the docs root') || message.includes('Only Markdown')
        ? 400
        : message.includes('ENOENT')
          ? 404
          : 500
      sendError(res, statusCode, message)
    }
  }
}

export function docsApiPlugin() {
  const middleware = createDocsMiddleware()

  return {
    name: 'docs-api-plugin',
    configureServer(server: { middlewares: Connect.Server }) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server: { middlewares: Connect.Server }) {
      server.middlewares.use(middleware)
    },
  }
}
