'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Technology {
  name: string
  icon: JSX.Element
  color: string
  whyItWorks: string
  realImpact: string
  keyProjects: {
    name: string
    link: string
  }[]
}

const technologies: Technology[] = [
  {
    name: 'Google Cloud Platform / Vertex AI',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="currentColor"/>
      </svg>
    ),
    color: '#4285F4',
    whyItWorks: 'Enterprise-scale infrastructure with native AI/ML integration and 99.9% uptime SLA',
    realImpact: 'Deployed 15+ production pipelines processing 10M+ sensor readings daily',
    keyProjects: [
      { name: 'IoT Sensor Intelligence', link: '/projects/industrial-iot-sensor-intelligence' },
      { name: 'Multi-Agent Optimization', link: '/projects/multi-agent-dra-optimization' }
    ]
  },
  {
    name: 'Python',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.25 2.1l-.25-.03-.25.03-10.5 1.71-.25.12v15.54l.25.12 10.5 1.71.25.03.25-.03 10.5-1.71.25-.12V3.93l-.25-.12-10.5-1.71zM15 18.6l-1-.13V5.52l1-.13v13.21zm7-1.07l-5 .81V5.66l5-.81v12.68z"/>
      </svg>
    ),
    color: '#3776AB',
    whyItWorks: 'Versatile language for ML pipelines, data processing, and industrial automation',
    realImpact: '50+ production scripts reducing manual work by 80%',
    keyProjects: [
      { name: 'Anomaly Detection', link: '/projects/fuel-pump-anomaly-detection' },
      { name: 'Genetic Fuel Blending', link: '/projects/genetic-algorithm-fuel-blending' }
    ]
  },
  {
    name: 'TensorFlow',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.5l-9 4v6.5c0 5.25 3.5 10.5 9 12 5.5-1.5 9-6.75 9-12V6.5l-9-4zm0 2.19l7 3.11v5.7c0 4.16-2.84 8.6-7 9.81-4.16-1.21-7-5.65-7-9.81V7.8l7-3.11z"/>
      </svg>
    ),
    color: '#FF6F00',
    whyItWorks: 'Production-grade ML framework with robust deployment tools for critical infrastructure',
    realImpact: '12+ models predicting equipment failures with 94% accuracy',
    keyProjects: [
      { name: 'Demand Forecasting', link: '/projects/enterprise-demand-forecasting' },
      { name: 'Anomaly Detection', link: '/projects/fuel-pump-anomaly-detection' }
    ]
  },
  {
    name: 'Kubernetes & Docker',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3.5 7v10l8.5 5 8.5-5V7L12 2zm0 2.18L18.3 7.5v9l-6.3 3.68L5.7 16.5v-9L12 4.18z"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    color: '#326CE5',
    whyItWorks: 'Container orchestration enabling scalable, reliable deployments across environments',
    realImpact: 'Zero-downtime deployments across 8 production environments',
    keyProjects: [
      { name: 'MLOps Infrastructure', link: '/projects/mlops-regulated-compliance' },
      { name: 'Mobius SaaS Platform', link: '/projects/mobius-transportation-saas' }
    ]
  },
  {
    name: 'Apache Beam / Dataflow',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 7h10M7 14h10"/>
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
      </svg>
    ),
    color: '#00D1B2',
    whyItWorks: 'Unified stream and batch processing at industrial IoT scale',
    realImpact: 'Reduced data latency from hours to <5 minutes for real-time alerts',
    keyProjects: [
      { name: 'IoT Sensor Router', link: '/projects/industrial-iot-sensor-intelligence' },
      { name: 'Feature Engineering', link: '/projects/pump-power-consumption-analysis' }
    ]
  },
  {
    name: 'MLflow / Weights & Biases',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#0194E2',
    whyItWorks: 'ML experiment tracking and model versioning with full audit trails',
    realImpact: '3x faster model iteration cycles with full reproducibility',
    keyProjects: [
      { name: 'Model Evaluation', link: '/projects/model-evaluation-framework' },
      { name: 'MLOps Platform', link: '/projects/mlops-regulated-compliance' }
    ]
  },
  {
    name: 'Terraform',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 2v8l7 4V6L8 2zm7 8l7 4v8l-7-4v-8zM1 6v8l7 4V10L1 6z"/>
      </svg>
    ),
    color: '#7B42BC',
    whyItWorks: 'Infrastructure as code for repeatable, version-controlled cloud deployments',
    realImpact: '90% reduction in infrastructure provisioning time',
    keyProjects: [
      { name: 'Multi-Cloud Setup', link: '/projects/mlops-regulated-compliance' },
      { name: 'BigQuery Optimization', link: '/projects/bigquery-cost-optimization' }
    ]
  },
  {
    name: 'BigQuery',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.6 9.4l-5.6 9.7-5.6-9.7h11.2M12 2L2 20h20L12 2z"/>
      </svg>
    ),
    color: '#4285F4',
    whyItWorks: 'Serverless data warehouse for petabyte-scale analytics with sub-second queries',
    realImpact: 'Query times reduced from hours to seconds, $12K monthly cost savings',
    keyProjects: [
      { name: 'Cost Optimization', link: '/projects/bigquery-cost-optimization' },
      { name: 'Analytics Platform', link: '/projects/industrial-iot-sensor-intelligence' }
    ]
  }
]

interface TechCardProps {
  tech: Technology
  index: number
}

function TechCard({ tech, index }: TechCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="relative group"
    >
      <div
        className={`
          relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm
          border border-gray-800/50 rounded-xl overflow-hidden
          transition-all duration-300 cursor-pointer
          ${isExpanded ? 'scale-105 shadow-2xl border-accent-blue/50 z-10' : 'hover:border-gray-700'}
        `}
        style={{
          boxShadow: isExpanded ? `0 20px 40px ${tech.color}20` : undefined
        }}
      >
        {/* Base Card */}
        <div className="p-6">
          <div className={`mb-4 transition-all duration-300`} style={{ color: tech.color }}>
            {tech.icon}
          </div>
          <h3 className="text-card-title font-medium text-white mb-2 transition-all duration-300">
            {tech.name}
          </h3>

          {/* Expanded Content */}
          <div
            className={`
              overflow-hidden transition-all duration-300
              ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="space-y-4 pt-4 border-t border-gray-800">
              <div>
                <p className="text-xs font-semibold text-accent-blue uppercase tracking-wide mb-1">
                  Why It Works
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {tech.whyItWorks}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-green-400 uppercase tracking-wide mb-1">
                  Real Impact
                </p>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">
                  {tech.realImpact}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-purple-400 uppercase tracking-wide mb-2">
                  Key Projects
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.keyProjects.map((project, idx) => (
                    <Link
                      key={idx}
                      href={project.link}
                      className="inline-flex items-center gap-1 text-xs text-accent-blue hover:text-blue-400 transition-colors group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.name}
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Indicator */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
            <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
              Hover for details
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function BattleTestedStack() {
  return (
    <section className="bg-gradient-to-b from-primary-dark-secondary to-primary-dark text-white py-20">
      <div className="container-max px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-heading md:text-section-heading-mobile font-bold mb-4">
            Battle-Tested <span className="text-accent-blue">Tech Stack</span>
          </h2>
          <p className="text-card-title text-text-gray max-w-2xl mx-auto">
            Enterprise-grade tools delivering measurable ROI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
