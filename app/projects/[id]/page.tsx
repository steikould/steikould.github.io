import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Calendar, Clock } from 'lucide-react'
import { getProjectById, projects } from '@/lib/projects'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card, { CardContent } from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'

interface ProjectDetailPageProps {
  params: { id: string }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    }
  }

  return {
    title: `${project.title} | Professional Portfolio`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-16 min-h-screen bg-primary-light">
      <div className="section-padding">
        <div className="container-max">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-accent-blue hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary">{project.category.replace('-', ' ')}</Badge>
              <Badge variant={project.status === 'completed' ? 'success' : 'warning'}>
                {project.status.replace('-', ' ')}
              </Badge>
            </div>

            <h1 className="text-display-1 font-bold text-text-dark mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-text-muted leading-relaxed max-w-4xl">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Button className="group">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="group">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Description */}
              <Card>
                <CardContent>
                  <h2 className="text-2xl font-bold text-text-dark mb-6">Overview</h2>
                  <div className="prose prose-lg max-w-none">
                    {project.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-text-muted leading-relaxed mb-4">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technologies Used */}
              <Card>
                <CardContent>
                  <h2 className="text-2xl font-bold text-text-dark mb-6">Technologies</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" size="md">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Coming Soon */}
              <Card>
                <CardContent>
                  <h2 className="text-2xl font-bold text-text-dark mb-6">Detailed Documentation</h2>
                  <div className="text-center py-12 text-text-muted">
                    <p className="text-lg mb-4">Detailed project documentation coming soon!</p>
                    <p>This will include architecture diagrams, implementation details, and lessons learned.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Stats */}
              <Card>
                <CardContent>
                  <h3 className="text-lg font-semibold text-text-dark mb-4">Project Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted">Time Invested</span>
                      <Badge variant="primary">{project.metrics.hours}</Badge>
                    </div>
                    {project.metrics.projects && (
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">Projects</span>
                        <Badge variant="primary">{project.metrics.projects}</Badge>
                      </div>
                    )}
                    {project.metrics.models && (
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">ML Models</span>
                        <Badge variant="primary">{project.metrics.models}</Badge>
                      </div>
                    )}
                    {project.metrics.datasets && (
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">Datasets</span>
                        <Badge variant="primary">{project.metrics.datasets}</Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Project Info */}
              <Card>
                <CardContent>
                  <h3 className="text-lg font-semibold text-text-dark mb-4">Project Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-text-muted mt-0.5" />
                      <div>
                        <div className="text-sm text-text-muted">Completed</div>
                        <div className="font-medium">{formatDate(project.completedDate)}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-text-muted mt-0.5" />
                      <div>
                        <div className="text-sm text-text-muted">Status</div>
                        <div className="font-medium capitalize">{project.status.replace('-', ' ')}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Links */}
              {(project.links.github || project.links.demo || project.links.live) && (
                <Card>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-text-dark mb-4">Links</h3>
                    <div className="space-y-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent-blue hover:bg-accent-blue-light transition-colors"
                        >
                          <Github className="w-5 h-5 text-text-muted" />
                          <span className="font-medium">View Source Code</span>
                          <ExternalLink className="w-4 h-4 text-text-muted ml-auto" />
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent-blue hover:bg-accent-blue-light transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-text-muted" />
                          <span className="font-medium">Live Demo</span>
                          <ExternalLink className="w-4 h-4 text-text-muted ml-auto" />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent-blue hover:bg-accent-blue-light transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-text-muted" />
                          <span className="font-medium">Live Application</span>
                          <ExternalLink className="w-4 h-4 text-text-muted ml-auto" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}