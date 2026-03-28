import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docsRoot = path.resolve(__dirname, '..', 'docs')
const outputDir = path.resolve(__dirname, '..', 'public', 'docs-data')

async function buildTree(relativePath = '') {
  const absolutePath = path.resolve(docsRoot, relativePath)
  const entries = await readdir(absolutePath, { withFileTypes: true })
  const children = await Promise.all(
    entries
      .filter((e) => !e.name.startsWith('.'))
      .filter((e) => e.isDirectory() || (e.isFile() && e.name.toLowerCase().endsWith('.md')))
      .map(async (e) => {
        const nextPath = relativePath ? `${relativePath}/${e.name}` : e.name
        if (e.isDirectory()) return buildTree(nextPath)
        return { name: e.name, path: nextPath, kind: 'file' }
      }),
  )
  children.sort((a, b) => {
    if (a.kind !== b.kind) return a.kind === 'folder' ? -1 : 1
    return a.name.localeCompare(b.name)
  })
  return {
    name: relativePath ? path.basename(relativePath) : 'docs',
    path: relativePath,
    kind: 'folder',
    children,
  }
}

function collectFiles(node, files = []) {
  if (node.kind === 'file') files.push(node.path)
  for (const child of node.children ?? []) collectFiles(child, files)
  return files
}

async function main() {
  const tree = await buildTree()

  await mkdir(outputDir, { recursive: true })
  await writeFile(path.join(outputDir, 'tree.json'), JSON.stringify({ root: tree }))

  const contentDir = path.join(outputDir, 'content')
  const files = collectFiles(tree)

  for (const filePath of files) {
    const absolutePath = path.resolve(docsRoot, filePath)
    const content = await readFile(absolutePath, 'utf8')
    const fileStat = await stat(absolutePath)

    const outputPath = path.join(contentDir, filePath + '.json')
    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(
      outputPath,
      JSON.stringify({
        path: filePath,
        content,
        updatedAt: fileStat.mtime.toISOString(),
      }),
    )
  }

  console.log(`Generated static docs: ${files.length} files`)
}

main()
