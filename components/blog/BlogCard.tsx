'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Card, { CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { formatDate, calculateReadTime } from '@/lib/utils'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  publishedDate: string
  updatedDate?: string
  featured: boolean
  status: 'published' | 'draft'
  readTime?: number
}

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const readTime = post.readTime || calculateReadTime(post.content)

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden group">
        {/* Featured Image Area */}
        <div className="h-48 bg-gradient-to-br from-primary-dark to-primary-dark-secondary relative overflow-hidden">
          {/* Abstract Tech Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-12 h-12 border-2 border-accent-blue rounded-lg transform rotate-12"></div>
            <div className="absolute top-8 right-8 w-8 h-8 bg-accent-blue rounded-full"></div>
            <div className="absolute bottom-6 left-8 w-6 h-6 bg-accent-blue transform rotate-45"></div>
            <div className="absolute bottom-4 right-6 w-10 h-10 border border-accent-blue rounded-full"></div>
          </div>

          {/* Code/Data Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-accent-blue"></div>
            <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-accent-blue"></div>
            <div className="absolute top-0 left-1/3 w-0.5 h-full bg-accent-blue"></div>
            <div className="absolute top-0 right-1/4 w-0.5 h-full bg-accent-blue"></div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant={getCategoryColor(post.category)} size="sm">
              {post.category}
            </Badge>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent"></div>
        </div>

        {/* Content */}
        <CardContent className="flex-1 flex flex-col p-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-accent-blue transition-colors leading-tight">
              {post.title}
            </h3>

            <p className="text-text-muted mb-6 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" size="sm">
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 3 && (
                <Badge variant="secondary" size="sm">
                  +{post.tags.length - 3}
                </Badge>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="space-y-4">
            {/* Meta Info */}
            <div className="flex items-center justify-between text-sm text-text-muted">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedDate)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readTime} min read</span>
              </div>
            </div>

            {/* Read More Link */}
            <Link
              href={`/blog/${post.id}`}
              className="inline-flex items-center gap-2 text-accent-blue hover:text-blue-600 font-medium transition-colors group/link"
            >
              Read More
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}