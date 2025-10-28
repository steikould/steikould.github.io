import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { getBlogPostById, getRecentPosts, blogPosts } from '@/lib/blog'
import Card, { CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { formatDate, calculateReadTime } from '@/lib/utils'
import MarkdownRenderer from '@/components/blog/MarkdownRenderer'
import BlogPostClient from '@/components/blog/BlogPostClient'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostById(params.id)

  if (!post) {
    notFound()
  }

  const readTime = post.readTime || calculateReadTime(post.content)
  const recentPosts = getRecentPosts(3).filter(p => p.id !== post.id).slice(0, 2)

  return (
    <BlogPostClient
      post={post}
      readTime={readTime}
      recentPosts={recentPosts}
    />
  )
}
