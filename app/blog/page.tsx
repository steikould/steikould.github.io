import BlogCard from '@/components/blog/BlogCard'
import { blogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog | Professional Portfolio',
  description: 'Insights, tutorials, and thoughts on data engineering, machine learning, and technology.',
}

export default function BlogPage() {
  return (
    <div className="pt-16 min-h-screen bg-primary-light">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-display-1 font-bold text-text-dark mb-6">
              Blog
            </h1>
            <p className="text-body-lg text-text-muted max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on data engineering, machine learning,
              and the evolving landscape of technology.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="text-center mt-16 py-12">
            <p className="text-lg text-text-muted">
              More blog posts coming soon! Stay tuned for insights on the latest
              in data engineering and machine learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}