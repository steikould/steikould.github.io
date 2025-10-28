'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, PlayCircle, FileText, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

interface FeaturedProject {
  id: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  image?: string
  demoLink?: string
  caseStudyLink?: string
  projectLink: string
  category: string
  featured?: boolean
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'power-analysis-demo',
    title: 'Power Analysis Demo',
    subtitle: 'Interactive fuel consumption optimizer',
    description: 'AI-powered analysis platform for pump power consumption efficiency with natural language querying, automated data validation, and intelligent recommendations for operational optimization.',
    highlights: [
      'Real-time pump efficiency calculations',
      'Predictive maintenance scheduling',
      '$2.4M annual savings potential',
      'Natural language query interface'
    ],
    image: '/images/pump_excel_graph.png',
    demoLink: '/power_consumption.html',
    projectLink: '/projects/pump-power-consumption-analysis',
    category: 'AI Automation',
    featured: true
  }
  // Hidden but not deleted - Dataplex Discovery and IoT Pipeline Router
  // {
  //   id: 'dataplex-discovery',
  //   title: 'Dataplex Discovery System',
  //   subtitle: 'Metadata-driven routing for BigQuery data assets',
  //   description: 'Enterprise-grade data discovery platform built on GCP Dataplex enabling automated cataloging, governance policies, and lineage tracking across petabytes of data.',
  //   highlights: [
  //     'Automated metadata cataloging',
  //     'Policy-based governance',
  //     'Data lineage tracking',
  //     '75% reduction in data discovery time'
  //   ],
  //   projectLink: '/projects/bigquery-cost-optimization',
  //   category: 'Data Engineering'
  // },
  // {
  //   id: 'iot-pipeline-router',
  //   title: 'IoT Pipeline Router',
  //   subtitle: 'Enterprise sensor data architecture',
  //   description: 'Intelligent transformation system processing 50,000+ daily readings from industrial sensors, converting sparse exception-driven streams into continuous time-series datasets.',
  //   highlights: [
  //     'Real-time ingestion at scale',
  //     'Automated quality checks',
  //     'Multi-destination routing',
  //     '5M+ events/day with 99.9% reliability'
  //   ],
  //   projectLink: '/projects/industrial-iot-sensor-intelligence',
  //   category: 'Data Engineering'
  // }
]

interface ProjectCardProps {
  project: FeaturedProject
  index: number
  featured?: boolean
}

function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`
        group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm
        border border-gray-800/50 rounded-2xl overflow-hidden
        hover:border-accent-blue/50 hover:shadow-2xl transition-all duration-500
        ${featured ? 'lg:col-span-2' : ''}
      `}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-accent-blue/90 backdrop-blur-sm rounded-full">
          <span className="text-xs font-bold text-white uppercase tracking-wide">Featured</span>
        </div>
      )}

      <div className={`${featured ? 'lg:flex' : ''}`}>
        {/* Image/Preview Section */}
        {project.image && (
          <div className={`relative ${featured ? 'lg:w-1/2' : 'w-full h-48'} bg-gradient-to-br from-accent-blue/20 to-purple-500/20 overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-2 px-6 py-3 bg-accent-blue rounded-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <PlayCircle className="w-6 h-6 text-white" />
                    <span className="text-white font-semibold">Try Live Demo</span>
                  </div>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className={`p-6 ${featured ? 'lg:w-1/2 lg:p-8' : ''}`}>
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-xs font-medium text-accent-blue">
              {project.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-[28px] font-bold text-white mb-2 group-hover:text-accent-blue transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-card-title text-text-gray font-medium mb-4">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="mb-6">
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 group/btn"
                onClick={(e) => e.stopPropagation()}
              >
                <PlayCircle className="w-4 h-4" />
                Try Live Demo
              </a>
            )}
            {/* Case Study link disabled - Coming Soon */}
            {/* <Link
              href={project.projectLink}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-accent-blue text-white font-medium rounded-lg transition-all duration-300 group/btn"
            >
              <FileText className="w-4 h-4" />
              View Case Study
              <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link> */}
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(65, 105, 225, 0.08), transparent 40%)`
        }}
      />
    </motion.div>
  )
}

export default function ProjectShowcase() {
  return (
    <section className="bg-gradient-to-b from-primary-dark to-primary-dark-secondary text-white py-20">
      <div className="container-max px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-heading md:text-section-heading-mobile font-bold mb-4">
            Project <span className="text-accent-blue">Showcase</span>
          </h2>
          <p className="text-card-title text-text-gray max-w-2xl mx-auto">
            Real-world systems driving business outcomes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured={project.featured}
            />
          ))}
        </div>

        {/* View All Projects CTA - Disabled, Coming Soon */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button size="lg" className="group">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div> */}
      </div>
    </section>
  )
}
