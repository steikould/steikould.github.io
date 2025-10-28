// Server-side only blog utilities
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/components/blog/BlogCard'

const blogDetailsDirectory = path.join(process.cwd(), 'blog-details')

/**
 * Get all markdown files from blog-details directory
 */
function getAllBlogFiles(): string[] {
  if (!fs.existsSync(blogDetailsDirectory)) {
    return []
  }

  const files = fs.readdirSync(blogDetailsDirectory)
  return files.filter(file =>
    file.endsWith('.md') &&
    !file.startsWith('README') &&
    !file.startsWith('SUMMARY') &&
    !file.startsWith('FINAL')
  )
}

/**
 * Parse a markdown file and extract metadata and content
 */
export function parseBlogPost(filename: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDetailsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Generate ID from filename if not provided in frontmatter
    const id = data.id || filename.replace(/\.md$/, '')

    // Extract title from content if not in frontmatter (first H1)
    let title = data.title
    if (!title) {
      const titleMatch = content.match(/^#\s+(.+)$/m)
      title = titleMatch ? titleMatch[1] : 'Untitled Post'
    }

    // Use frontmatter data or defaults
    return {
      id,
      title,
      excerpt: data.excerpt || extractExcerpt(content),
      content: content,
      category: data.category || 'technical',
      tags: data.tags || [],
      publishedDate: data.publishedDate || new Date().toISOString().split('T')[0],
      updatedDate: data.updatedDate,
      featured: data.featured || false,
      status: data.status || 'published',
      readTime: data.readTime
    }
  } catch (error) {
    console.error(`Error parsing blog post ${filename}:`, error)
    return null
  }
}

/**
 * Extract excerpt from content (first paragraph after title)
 */
function extractExcerpt(content: string, maxLength: number = 200): string {
  // Remove title and get first paragraph
  const withoutTitle = content.replace(/^#\s+.+$/m, '').trim()
  const paragraphs = withoutTitle.split('\n\n')

  for (const para of paragraphs) {
    const cleaned = para.trim().replace(/[#*`]/g, '')
    if (cleaned.length > 50) {
      return cleaned.length > maxLength
        ? cleaned.substring(0, maxLength) + '...'
        : cleaned
    }
  }

  return 'No excerpt available'
}

/**
 * Load all blog posts from markdown files
 */
export function loadBlogPostsFromMarkdown(): BlogPost[] {
  const files = getAllBlogFiles()
  const posts = files
    .map(file => parseBlogPost(file))
    .filter((post): post is BlogPost => post !== null)
    .filter(post => post.status === 'published')
    .sort((a, b) => {
      const dateA = new Date(a.publishedDate).getTime()
      const dateB = new Date(b.publishedDate).getTime()
      return dateB - dateA // Most recent first
    })

  return posts
}

/**
 * Get a single blog post by ID
 */
export function getBlogPostFromMarkdown(id: string): BlogPost | null {
  const files = getAllBlogFiles()

  for (const file of files) {
    const post = parseBlogPost(file)
    if (post && post.id === id) {
      return post
    }
  }

  return null
}
