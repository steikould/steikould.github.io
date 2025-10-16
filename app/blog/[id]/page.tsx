'use client'

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { getBlogPostById, getRecentPosts } from '@/lib/blog'
import Card, { CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { formatDate, calculateReadTime } from '@/lib/utils'

export default function BlogPostPage() {
  const params = useParams()
  const id = params.id as string
  const post = getBlogPostById(id)

  if (!post) {
    notFound()
  }

  const readTime = post.readTime || calculateReadTime(post.content)
  const recentPosts = getRecentPosts(3).filter(p => p.id !== post.id).slice(0, 2)

  const getCategoryColor = (category: string) => {
    const colors: Record<string, 'primary' | 'secondary' | 'success' | 'warning'> = {
      'technical': 'primary',
      'career': 'success',
      'tutorial': 'warning',
      'insights': 'secondary'
    }
    return colors[category] || 'secondary'
  }

  return (
    <div className="pt-16 min-h-screen bg-primary-light">
      <div className="section-padding">
        <div className="container-max max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent-blue hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-8">
              <CardContent className="p-8 md:p-12">
                {/* Category Badge */}
                <div className="mb-4">
                  <Badge variant={getCategoryColor(post.category)} size="md">
                    {post.category}
                  </Badge>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Excerpt */}
                <p className="text-xl text-text-muted mb-8 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-text-muted mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{formatDate(post.publishedDate)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{readTime} min read</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex items-start gap-3 mb-8">
                  <Tag className="w-5 h-5 text-text-muted mt-1 flex-shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-text-dark leading-relaxed whitespace-pre-line">
                    {post.content}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.article>

          {/* Related Posts */}
          {recentPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-text-dark mb-6">
                More Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="group">
                    <CardContent className="p-6">
                      <Badge variant={getCategoryColor(relatedPost.category)} size="sm" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-accent-blue transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-text-muted text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="text-accent-blue hover:text-blue-600 text-sm font-medium transition-colors"
                      >
                        Read More →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  )
}
