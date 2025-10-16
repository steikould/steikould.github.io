'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Card, { CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { getFeaturedProjects } from '@/lib/projects'

const featuredProjects = getFeaturedProjects()

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-primary-light">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 font-bold text-text-dark mb-6">
            Featured Projects
          </h2>
          <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
            A showcase of complex data engineering and machine learning projects
            that demonstrate scalable architecture and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                {/* Project Image */}
                <div className="h-12 bg-gradient-to-br from-primary-dark to-primary-dark-secondary relative overflow-hidden">
                  {/* Tech Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-accent-blue transform rotate-45"></div>
                    <div className="absolute top-8 right-8 w-6 h-6 bg-accent-blue rounded-full"></div>
                    <div className="absolute bottom-6 left-8 w-12 h-12 border border-accent-blue rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-4 h-4 bg-accent-blue transform rotate-45"></div>
                  </div>

                  {/* Hexagonal Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <pattern id="hexagon" x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
                          <polygon
                            points="10,0 15,8.66 10,17.32 5,8.66"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#hexagon)" className="text-accent-blue" />
                    </svg>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent"></div>
                </div>

                <CardContent className="flex-1 flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    {project.icon && (
                      <div className="flex-shrink-0 mt-1">
                        <Image
                          src={project.icon}
                          alt={`${project.title} icon`}
                          width={28}
                          height={28}
                          className="w-7 h-7"
                        />
                      </div>
                    )}
                    <h3 className="text-display-3 font-bold text-text-dark group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-text-muted mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-3 mb-6">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                      <Badge key={key} variant="primary" className="text-xs">
                        {value}
                      </Badge>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href={`/projects/${project.id}`} className="w-full">
                    <Button className="w-full group">
                      SHOW DETAILS
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button variant="secondary" size="lg" className="group">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}