import type { ChangeEvent } from 'react'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, HashRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { IngradientGlobalStyle, IngradientThemeProvider } from '@ingradient/ui/tokens'
import { Alert, IconButton, Spinner, TextareaField } from '@ingradient/ui/components'
import { Heading, Stack, Surface, Text } from '@ingradient/ui/primitives'

type DocsNode = {
  name: string
  path: string
  kind: 'folder' | 'file'
  children?: DocsNode[]
}

type DocsTreeResponse = {
  root: DocsNode
}

type DocsContentResponse = {
  path: string
  content: string
  updatedAt: string
}

const MOBILE_BP = 760

const ReaderFrame = styled.div`
  min-height: 100vh;
  background: #0b1016;
`

const ReaderLayout = styled.div`
  padding: 22px;

  @media (max-width: ${MOBILE_BP}px) {
    padding: 12px;
  }
`

const ReaderContainer = styled.div<{ $wide?: boolean }>`
  width: 100%;
  max-width: ${(p) => (p.$wide ? '100%' : '1320px')};
  margin: 0 auto;
`

const HeaderSurface = styled(Surface)`
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 10px 0 12px;
  background: #0b1016;
  border-radius: 0;
  border: 0;
  backdrop-filter: none;
  box-shadow: none;

  @media (max-width: ${MOBILE_BP}px) {
    padding: 8px 0 10px;
  }
`

const HeaderGrid = styled.div`
  display: grid;
`

const HeaderTopRow = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
`

const BreadcrumbNav = styled.nav`
  min-width: 0;
`

const BreadcrumbRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  color: var(--ig-color-text-muted);
  font-size: 13px;
`

const BreadcrumbLinkButton = styled.button<{ $active?: boolean }>`
  appearance: none;
  border: 0;
  background: none;
  padding: 0;
  color: ${(p) => (p.$active ? 'var(--ig-color-text-primary)' : 'var(--ig-color-text-muted)')};
  font: inherit;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: var(--ig-color-text-primary);
  }
`

const MainGrid = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
  grid-template-columns: minmax(0, 1fr);
`

const FolderContentWrap = styled.div`
  width: 100%;
`

const ContentPanel = styled(Surface)`
  min-height: calc(100vh - 176px);
  border: 0;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;

  @media (max-width: ${MOBILE_BP}px) {
    min-height: calc(100vh - 152px);
  }
`

const ContentScroll = styled.div`
  height: 100%;
  overflow: auto;
  padding: 18px;

  @media (max-width: ${MOBILE_BP}px) {
    padding: 14px 12px 18px;
  }
`

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;

  @media (max-width: ${MOBILE_BP}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const NodeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const TreeItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const TreeRow = styled.div<{ $active?: boolean; $depth: number }>`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 7px 6px;
  padding-left: ${(p) => 14 + p.$depth * 18}px;
  border: 0;
  border-radius: 12px;
  background: ${(p) => (p.$active ? 'rgba(255, 255, 255, 0.06)' : 'transparent')};
`

const TreeExpandButton = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--ig-color-text-muted);
  width: 28px;
  height: 28px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: var(--ig-color-text-primary);
    background: rgba(255, 255, 255, 0.08);
  }
`

const TreeLabelButton = styled.button`
  appearance: none;
  border: 0;
  background: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  padding: 0;
  cursor: pointer;
  text-align: left;
`

const TreeLabel = styled.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--ig-color-text-primary);
  font-weight: 600;
`

const TreeHint = styled.span`
  font-size: 12px;
  color: var(--ig-color-text-muted);
`

const TreeChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const MarkdownArticle = styled.article`
  max-width: 980px;
  color: var(--ig-color-text-secondary);
  line-height: 1.7;

  h1,
  h2,
  h3,
  h4 {
    color: var(--ig-color-text-primary);
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: 34px;
    margin: 0 0 22px;
  }

  h2 {
    font-size: 24px;
    margin: 30px 0 14px;
  }

  h3 {
    font-size: 20px;
    margin: 24px 0 12px;
  }

  p,
  li,
  blockquote {
    font-size: 15px;
  }

  ul,
  ol {
    padding-left: 22px;
  }

  a {
    color: var(--ig-color-text-accent);
  }

  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  }

  pre {
    margin: 16px 0;
    padding: 16px 18px;
    border-radius: 18px;
    overflow: auto;
    border: 1px solid var(--ig-color-border-subtle);
    background: rgba(3, 6, 10, 0.56);
    color: var(--ig-color-text-primary);
  }

  pre code {
    background: transparent;
    padding: 0;
  }

  :not(pre) > code {
    padding: 2px 6px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.06);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 18px 0;
    display: block;
    overflow-x: auto;
  }

  th,
  td {
    padding: 10px 12px;
    border: 1px solid var(--ig-color-border-subtle);
    text-align: left;
    vertical-align: top;
    white-space: nowrap;
  }

  blockquote {
    margin: 16px 0;
    padding: 4px 0 4px 16px;
    border-left: 3px solid rgba(77, 136, 255, 0.4);
    color: var(--ig-color-text-muted);
  }

  hr {
    border: 0;
    border-top: 1px solid var(--ig-color-border-subtle);
    margin: 22px 0;
  }

  img {
    max-width: 100%;
    border-radius: 18px;
  }

  @media (max-width: ${MOBILE_BP}px) {
    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 18px;
    }
  }
`

const EditorField = styled(TextareaField)`
  width: 100%;
  min-height: 420px;
  resize: none;
  overflow: hidden;
  padding: 20px 22px;
  line-height: 1.7;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 14px;
  white-space: pre;
`

function normalizeRoutePath(value: string | undefined) {
  return (value ?? '').replace(/^\/+|\/+$/g, '')
}

function encodeRoutePath(value: string) {
  return value
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/')
}

function buildAncestorPaths(pathValue: string) {
  const normalized = normalizeRoutePath(pathValue)
  if (!normalized) return new Set<string>([''])

  const segments = normalized.split('/')
  const ancestors = new Set<string>([''])
  const isFile = normalized.endsWith('.md')
  const folderSegments = isFile ? segments.slice(0, -1) : segments

  folderSegments.forEach((_, index) => {
    ancestors.add(folderSegments.slice(0, index + 1).join('/'))
  })

  return ancestors
}

function findNode(root: DocsNode | null, targetPath: string): DocsNode | null {
  if (!root) return null
  if (root.path === targetPath) return root
  for (const child of root.children ?? []) {
    const found = findNode(child, targetPath)
    if (found) return found
  }
  return null
}

function isExternalHref(href: string) {
  return /^(https?:)?\/\//.test(href) || href.startsWith('mailto:')
}

function resolveRelativeDocPath(currentPath: string, href: string) {
  if (!href || href.startsWith('#') || isExternalHref(href)) return null

  const [rawPath] = href.split('#')
  const currentDir = currentPath.endsWith('.md')
    ? currentPath.split('/').slice(0, -1).join('/')
    : currentPath

  const baseUrl = new URL(`https://docs.local/${currentDir ? `${currentDir}/` : ''}`)
  const resolved = new URL(rawPath, baseUrl)
  return resolved.pathname.replace(/^\/+/, '')
}

function linkifyMarkdownDocPaths(markdown: string) {
  const lines = markdown.split('\n')
  let insideFence = false

  return lines
    .map((line) => {
      if (/^\s*```/.test(line)) {
        insideFence = !insideFence
        return line
      }

      if (insideFence) {
        return line
      }

      return line.replace(/`([^`\n]+?\.md(?:#[^`\s]+)?)`/g, '[`$1`]($1)')
    })
    .join('\n')
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={open ? 'M6 9l6 6 6-6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 3v6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PencilIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TreeList({
  nodes,
  currentPath,
  ancestorPaths,
  expandedFolders,
  onNavigate,
  onToggleFolder,
  depth = 0,
}: {
  nodes: DocsNode[]
  currentPath: string
  ancestorPaths: Set<string>
  expandedFolders: Set<string>
  onNavigate: (path: string) => void
  onToggleFolder: (path: string) => void
  depth?: number
}) {
  return (
    <TreeChildren>
      {nodes.map((node) => (
        <TreeListItem
          key={node.path || '__root__'}
          node={node}
          currentPath={currentPath}
          ancestorPaths={ancestorPaths}
          expandedFolders={expandedFolders}
          onNavigate={onNavigate}
          onToggleFolder={onToggleFolder}
          depth={depth}
        />
      ))}
    </TreeChildren>
  )
}

function TreeListItem({
  node,
  currentPath,
  ancestorPaths,
  expandedFolders,
  onNavigate,
  onToggleFolder,
  depth,
}: {
  node: DocsNode
  currentPath: string
  ancestorPaths: Set<string>
  expandedFolders: Set<string>
  onNavigate: (path: string) => void
  onToggleFolder: (path: string) => void
  depth: number
}) {
  const hasChildren = node.kind === 'folder' && (node.children?.length ?? 0) > 0
  const open = ancestorPaths.has(node.path) || expandedFolders.has(node.path)

  return (
    <TreeItemWrap>
      <TreeRow $active={currentPath === node.path} $depth={depth}>
        {node.kind === 'folder' ? (
          <TreeExpandButton
            type="button"
            aria-label={open ? `${node.name} 접기` : `${node.name} 펼치기`}
            onClick={() => onToggleFolder(node.path)}
          >
            <ChevronIcon open={open} />
          </TreeExpandButton>
        ) : (
          <div style={{ width: 28 }} />
        )}
        <TreeLabelButton type="button" onClick={() => onNavigate(node.path)}>
          {node.kind === 'folder' ? <FolderIcon /> : <FileIcon />}
          <TreeLabel>{node.name}</TreeLabel>
        </TreeLabelButton>
        {node.kind === 'folder' ? <TreeHint>{node.children?.length ?? 0}</TreeHint> : <TreeHint>.md</TreeHint>}
      </TreeRow>
      {hasChildren && open ? (
        <TreeList
          nodes={node.children ?? []}
          currentPath={currentPath}
          ancestorPaths={ancestorPaths}
          expandedFolders={expandedFolders}
          onNavigate={onNavigate}
          onToggleFolder={onToggleFolder}
          depth={depth + 1}
        />
      ) : null}
    </TreeItemWrap>
  )
}

const IS_DEV = import.meta.env.DEV
const BASE_URL = import.meta.env.BASE_URL

async function fetchTree() {
  const url = IS_DEV ? '/api/docs/tree' : `${BASE_URL}docs-data/tree.json`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('문서 트리를 불러오지 못했습니다.')
  }
  return response.json() as Promise<DocsTreeResponse>
}

async function fetchContent(pathValue: string) {
  if (IS_DEV) {
    const response = await fetch(`/api/docs/content?path=${encodeURIComponent(pathValue)}`)
    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as { error?: string } | null
      throw new Error(payload?.error || '문서를 불러오지 못했습니다.')
    }
    return response.json() as Promise<DocsContentResponse>
  }
  const response = await fetch(`${BASE_URL}docs-data/content/${pathValue}.json`)
  if (!response.ok) {
    throw new Error('문서를 불러오지 못했습니다.')
  }
  return response.json() as Promise<DocsContentResponse>
}

async function saveContent(pathValue: string, content: string) {
  const response = await fetch(`/api/docs/content?path=${encodeURIComponent(pathValue)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })
  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { error?: string } | null
    throw new Error(payload?.error || '문서를 저장하지 못했습니다.')
  }
  return response.json() as Promise<DocsContentResponse>
}

function DocsReaderPage() {
  const params = useParams<{ '*': string }>()
  const navigate = useNavigate()
  const currentPath = normalizeRoutePath(params['*'])
  const [treeRoot, setTreeRoot] = useState<DocsNode | null>(null)
  const [treeError, setTreeError] = useState<string | null>(null)
  const [treeLoading, setTreeLoading] = useState(true)
  const [content, setContent] = useState('')
  const [draft, setDraft] = useState('')
  const [contentError, setContentError] = useState<string | null>(null)
  const [contentLoading, setContentLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [updatedAt, setUpdatedAt] = useState<string | null>(null)
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())
  const contentScrollRef = useRef<HTMLDivElement | null>(null)
  const editorRef = useRef<HTMLTextAreaElement | null>(null)
  const preservedScrollRef = useRef<number | null>(null)
  const preservedPageScrollRef = useRef<number | null>(null)
  const restorePendingRef = useRef(false)

  useEffect(() => {
    let active = true
    setTreeLoading(true)
    setTreeError(null)
    fetchTree()
      .then((payload) => {
        if (!active) return
        setTreeRoot(payload.root)
      })
      .catch((error) => {
        if (!active) return
        setTreeError(error instanceof Error ? error.message : '문서 트리를 불러오지 못했습니다.')
      })
      .finally(() => {
        if (active) {
          setTreeLoading(false)
        }
      })
    return () => {
      active = false
    }
  }, [])

  const currentNode = useMemo(() => findNode(treeRoot, currentPath), [treeRoot, currentPath])
  const ancestorPaths = useMemo(() => buildAncestorPaths(currentPath), [currentPath])
  const currentChildren = currentNode?.kind === 'folder' ? currentNode.children ?? [] : []
  const breadcrumbItems = useMemo(() => {
    const normalized = normalizeRoutePath(currentPath)
    const items = [{ label: 'docs', path: '' }]
    if (!normalized) return items
    const parts = normalized.split('/')
    parts.forEach((segment, index) => {
      items.push({
        label: segment,
        path: parts.slice(0, index + 1).join('/'),
      })
    })
    return items
  }, [currentPath])

  const navigateToPath = useCallback(
    (nextPath: string) => {
      navigate(nextPath ? `/${encodeRoutePath(nextPath)}` : '/')
    },
    [navigate],
  )

  useEffect(() => {
    setExpandedFolders((prev) => {
      const next = new Set(prev)
      ancestorPaths.forEach((path) => {
        if (path) {
          next.add(path)
        }
      })
      return next
    })
  }, [ancestorPaths])

  const toggleFolder = useCallback((path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev)
      if (next.has(path)) {
        next.delete(path)
      } else {
        next.add(path)
      }
      return next
    })
  }, [])

  useEffect(() => {
    if (currentNode?.kind !== 'file') {
      setContent('')
      setDraft('')
      setContentError(null)
      setContentLoading(false)
      setUpdatedAt(null)
      setIsEditing(false)
      return
    }

    let active = true
    setContentLoading(true)
    setContentError(null)
    setIsEditing(false)
    fetchContent(currentNode.path)
      .then((payload) => {
        if (!active) return
        setContent(payload.content)
        setDraft(payload.content)
        setUpdatedAt(payload.updatedAt)
      })
      .catch((error) => {
        if (!active) return
        setContentError(error instanceof Error ? error.message : '문서를 불러오지 못했습니다.')
      })
      .finally(() => {
        if (active) {
          setContentLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [currentNode])

  useLayoutEffect(() => {
    if (!isEditing || !editorRef.current) return
    editorRef.current.style.height = 'auto'
    editorRef.current.style.height = `${editorRef.current.scrollHeight}px`
  }, [draft, isEditing])

  const restoreScroll = useCallback(() => {
    if (preservedScrollRef.current != null && contentScrollRef.current) {
      contentScrollRef.current.scrollTop = preservedScrollRef.current
    }

    if (preservedPageScrollRef.current != null) {
      const nextTop = preservedPageScrollRef.current
      window.scrollTo({ top: nextTop, left: 0, behavior: 'auto' })
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: nextTop, left: 0, behavior: 'auto' })
      })
    }
  }, [])

  const queueScrollRestore = useCallback(() => {
    restorePendingRef.current = true
  }, [])

  useLayoutEffect(() => {
    if (!restorePendingRef.current || contentLoading) return

    restorePendingRef.current = false
    let rafOne = 0
    let rafTwo = 0
    const timeoutId = window.setTimeout(() => {
      restoreScroll()
    }, 120)

    restoreScroll()
    rafOne = window.requestAnimationFrame(() => {
      restoreScroll()
      rafTwo = window.requestAnimationFrame(() => {
        restoreScroll()
      })
    })

    return () => {
      window.cancelAnimationFrame(rafOne)
      window.cancelAnimationFrame(rafTwo)
      window.clearTimeout(timeoutId)
    }
  }, [isEditing, content, currentPath, contentLoading, restoreScroll])

  useEffect(() => {
    if (!isEditing || !editorRef.current) return
    editorRef.current.focus({ preventScroll: true })
    restoreScroll()
  }, [isEditing, restoreScroll])

  const rememberScroll = useCallback(() => {
    preservedScrollRef.current = contentScrollRef.current?.scrollTop ?? 0
    preservedPageScrollRef.current = window.scrollY
  }, [])

  const handleEditToggle = useCallback(() => {
    rememberScroll()
    queueScrollRestore()
    setDraft(content)
    setIsEditing(true)
  }, [content, rememberScroll, queueScrollRestore])

  const handleSave = useCallback(async () => {
    if (currentNode?.kind !== 'file') return
    rememberScroll()
    queueScrollRestore()
    setIsSaving(true)
    setContentError(null)
    try {
      const payload = await saveContent(currentNode.path, draft)
      setContent(draft)
      setUpdatedAt(payload.updatedAt)
      setIsEditing(false)
    } catch (error) {
      setContentError(error instanceof Error ? error.message : '문서를 저장하지 못했습니다.')
    } finally {
      setIsSaving(false)
    }
  }, [currentNode, draft, rememberScroll, queueScrollRestore])

  const folderCount = currentChildren.filter((child) => child.kind === 'folder').length
  const fileCount = currentChildren.filter((child) => child.kind === 'file').length
  const renderedContent = useMemo(() => linkifyMarkdownDocPaths(content), [content])
  const isFolderView = currentNode?.kind === 'folder'

  return (
    <ReaderFrame>
      <ReaderLayout>
        <ReaderContainer $wide={isFolderView}>
          <HeaderSurface elevation="panel">
            <HeaderGrid>
              <HeaderTopRow>
                <IconButton variant="secondary" aria-label="이전 화면으로 이동" onClick={() => navigate(-1)}>
                  <ArrowLeftIcon />
                </IconButton>
                <BreadcrumbNav aria-label="Breadcrumb">
                  <BreadcrumbRow>
                    {breadcrumbItems.map((item, index) => {
                      const isLast = index === breadcrumbItems.length - 1
                      return (
                        <span
                          key={`${item.path}-${item.label}`}
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, minWidth: 0 }}
                        >
                          <BreadcrumbLinkButton
                            type="button"
                            $active={isLast}
                            onClick={() => navigateToPath(item.path)}
                          >
                            {item.label}
                          </BreadcrumbLinkButton>
                          {!isLast ? <span>/</span> : null}
                        </span>
                      )
                    })}
                  </BreadcrumbRow>
                </BreadcrumbNav>
                {IS_DEV && currentNode?.kind === 'file' && !contentLoading ? (
                  <IconButton
                    variant={isEditing ? 'accent' : 'secondary'}
                    aria-label={isEditing ? '저장하고 읽기 모드로 전환' : '편집 모드로 전환'}
                    onClick={isEditing ? handleSave : handleEditToggle}
                    disabled={isSaving}
                  >
                    {isEditing ? <CheckIcon /> : <PencilIcon />}
                  </IconButton>
                ) : (
                  <div style={{ width: 36, height: 36 }} />
                )}
              </HeaderTopRow>
            </HeaderGrid>
          </HeaderSurface>

          <MainGrid>
            {treeLoading ? (
              <ContentPanel elevation="panel">
                <ContentScroll ref={contentScrollRef}>
                  <Stack gap={16} align="center" justify="center" style={{ minHeight: 420 }}>
                    <Spinner />
                    <Text tone="secondary">문서 트리를 불러오는 중입니다.</Text>
                  </Stack>
                </ContentScroll>
              </ContentPanel>
            ) : treeError ? (
              <ContentPanel elevation="panel">
                <ContentScroll ref={contentScrollRef}>
                  <Alert $tone="danger">{treeError}</Alert>
                </ContentScroll>
              </ContentPanel>
            ) : !currentNode ? (
              <ContentPanel elevation="panel">
                <ContentScroll ref={contentScrollRef}>
                  <Alert $tone="danger">요청한 경로를 찾을 수 없습니다.</Alert>
                </ContentScroll>
              </ContentPanel>
            ) : currentNode.kind === 'folder' ? (
              <FolderContentWrap>
                <Stack gap={18}>
                  <PanelHeader>
                    <Stack gap={6}>
                      <Heading level={2}>{currentNode.path ? currentNode.name : 'docs'}</Heading>
                    </Stack>
                    <Text tone="secondary">{currentChildren.length} items</Text>
                  </PanelHeader>
                  {currentChildren.length > 0 ? (
                    <NodeList>
                      <TreeList
                        nodes={currentChildren}
                        currentPath={currentPath}
                        ancestorPaths={ancestorPaths}
                        expandedFolders={expandedFolders}
                        onNavigate={navigateToPath}
                        onToggleFolder={toggleFolder}
                      />
                    </NodeList>
                  ) : (
                    <Alert $tone="info">이 폴더에는 아직 표시할 Markdown 문서가 없습니다.</Alert>
                  )}
                </Stack>
              </FolderContentWrap>
            ) : (
              <ContentPanel elevation="panel">
                <ContentScroll ref={contentScrollRef}>
                  {contentLoading ? (
                    <Stack gap={16} align="center" justify="center" style={{ minHeight: 420 }}>
                      <Spinner />
                      <Text tone="secondary">문서를 불러오는 중입니다.</Text>
                    </Stack>
                  ) : (
                    <Stack gap={16}>
                      {contentError ? <Alert $tone="danger">{contentError}</Alert> : null}
                      {isEditing ? (
                        <EditorField
                          ref={editorRef}
                          value={draft}
                          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setDraft(event.target.value)}
                          spellCheck={false}
                        />
                      ) : (
                        <MarkdownArticle>
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              a: ({ href = '', children }) => {
                                const nextPath = resolveRelativeDocPath(currentPath, href)
                                if (!nextPath) {
                                  return (
                                    <a href={href} target={isExternalHref(href) ? '_blank' : undefined} rel="noreferrer">
                                      {children}
                                    </a>
                                  )
                                }
                                return <Link to={nextPath ? `/${encodeRoutePath(nextPath)}` : '/'}>{children}</Link>
                              },
                            }}
                          >
                            {renderedContent}
                          </ReactMarkdown>
                        </MarkdownArticle>
                      )}
                    </Stack>
                  )}
                </ContentScroll>
              </ContentPanel>
            )}
          </MainGrid>
        </ReaderContainer>
      </ReaderLayout>
    </ReaderFrame>
  )
}

export function App() {
  const Router = IS_DEV ? BrowserRouter : HashRouter
  return (
    <IngradientThemeProvider>
      <IngradientGlobalStyle />
      <Router>
        <Routes>
          <Route path="/*" element={<DocsReaderPage />} />
        </Routes>
      </Router>
    </IngradientThemeProvider>
  )
}
