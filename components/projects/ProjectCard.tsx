'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Layers, ExternalLink, Github } from 'lucide-react'
import Card, { CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image?: string
  icon?: string
  category: string
  subcategory?: string
  technologies: string[]
  metrics: {
    hours: string
    [key: string]: string | undefined
  }
  links: {
    github?: string
    demo?: string
    live?: string
  }
  featured: boolean
  status: 'completed' | 'in-progress' | 'planning'
  completedDate: string
}

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'data-engineering': 'from-blue-500 to-cyan-500',
      'machine-learning': 'from-purple-500 to-pink-500',
      'ai-automation': 'from-green-500 to-teal-500',
      'full-stack': 'from-orange-500 to-red-500',
      'analytics': 'from-yellow-500 to-orange-500',
      'devops': 'from-indigo-500 to-blue-500'
    }
    return colors[category] || 'from-gray-500 to-slate-500'
  }

  const getStatusColor = (status: string) => {
    const colors: Record<string, 'success' | 'warning' | 'secondary'> = {
      'completed': 'success',
      'in-progress': 'warning',
      'planning': 'secondary'
    }
    return colors[status] || 'secondary'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden group">
        {/* Content Section */}
        <CardContent className="flex-1 flex flex-col p-4">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-2">
              {project.icon && (
                <div className="flex-shrink-0 mt-0.5">
                  <Image
                    src={project.icon}
                    alt={`${project.title} icon`}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              )}
              <h3 className="text-base font-bold text-text-dark group-hover:text-accent-blue transition-colors line-clamp-2">
                {project.title}
              </h3>
            </div>

            <p className="text-sm text-text-muted mb-4 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Metrics Row */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary" className="flex items-center gap-1 text-xs">
                <Clock className="w-3 h-3" />
                {project.metrics.hours}
              </Badge>
              {project.metrics.projects && (
                <Badge variant="primary" className="flex items-center gap-1 text-xs">
                  <Layers className="w-3 h-3" />
                  {project.metrics.projects}
                </Badge>
              )}
              {project.metrics.models && (
                <Badge variant="primary" className="flex items-center gap-1 text-xs">
                  <Layers className="w-3 h-3" />
                  {project.metrics.models}
                </Badge>
              )}
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" size="sm" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Link href={`/projects/${project.id}`} className="block w-full">
              <Button className="w-full font-semibold tracking-wide text-xs py-2">
                SHOW DETAILS
              </Button>
            </Link>

            {/* Links Row */}
            <div className="flex gap-1.5">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full text-xs py-1.5">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full text-xs py-1.5">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full text-xs py-1.5">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live
                  </Button>
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}