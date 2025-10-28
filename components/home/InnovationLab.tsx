'use client'

import { motion } from 'framer-motion'
import { Beaker, Cog, TestTube, Rocket } from 'lucide-react'

type StatusType = 'research' | 'development' | 'beta' | 'launching'

interface Innovation {
  name: string
  description: string
  status: StatusType
  techStack: string[]
  expectedImpact: string
  learnMoreLink?: string
  icon: JSX.Element
}

const statusConfig: Record<StatusType, { label: string; color: string; bgColor: string; icon: JSX.Element }> = {
  research: {
    label: 'Research Phase',
    color: 'text-gray-400',
    bgColor: 'bg-gray-500/10 border-gray-500/30',
    icon: <Beaker className="w-3 h-3" />
  },
  development: {
    label: 'In Development',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10 border-yellow-500/30',
    icon: <Cog className="w-3 h-3" />
  },
  beta: {
    label: 'Beta Testing',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10 border-green-500/30',
    icon: <TestTube className="w-3 h-3" />
  },
  launching: {
    label: 'Launching Soon',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10 border-blue-500/30',
    icon: <Rocket className="w-3 h-3" />
  }
}

const innovations: Innovation[] = [
  {
    name: 'Operational Knowledge Assistant',
    description: 'Natural language interface for querying pipeline operations data and maintenance histories with instant expert-level answers',
    status: 'development',
    techStack: ['LangChain', 'Vertex AI', 'RAG', 'BigQuery'],
    expectedImpact: '40% faster troubleshooting',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h.01M12 10h.01M16 10h.01"/>
      </svg>
    )
  },
  {
    name: 'Enterprise Feature Store',
    description: 'Centralized feature repository for ML models across the organization with versioning and governance',
    status: 'research',
    techStack: ['Feast', 'BigQuery', 'Dataflow', 'GCS'],
    expectedImpact: '60% reduction in feature engineering time',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
      </svg>
    )
  },
  {
    name: 'Edge Intelligence Deployment',
    description: 'On-device ML inference for remote pipeline monitoring stations enabling real-time decisions without cloud connectivity',
    status: 'beta',
    techStack: ['TensorFlow Lite', 'Edge TPU', 'KubeEdge', 'MQTT'],
    expectedImpact: 'Real-time decisions at <100ms latency',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6m0 6v6M1 12h6m6 0h6"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    )
  },
  {
    name: 'Semantic Log & Sensor Search',
    description: 'Vector-based search across terabytes of operational logs and sensor data for rapid incident analysis',
    status: 'development',
    techStack: ['Vertex AI Embeddings', 'Vector Search', 'Qdrant', 'Python'],
    expectedImpact: 'Find relevant incidents 10x faster',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
        <path d="M11 8v6M8 11h6"/>
      </svg>
    )
  },
  {
    name: 'Data Lake Version Control',
    description: 'Git-like versioning for data assets and transformations ensuring full reproducibility of pipelines',
    status: 'research',
    techStack: ['lakeFS', 'Delta Lake', 'GCS', 'Apache Iceberg'],
    expectedImpact: 'Full reproducibility & audit trails',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="18" r="3"/>
        <circle cx="6" cy="6" r="3"/>
        <circle cx="18" cy="6" r="3"/>
        <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/>
        <path d="M12 12v3"/>
      </svg>
    )
  },
  {
    name: 'Autonomous Pipeline Health Monitor',
    description: 'Self-healing system that predicts and prevents failures before they occur using multi-agent AI',
    status: 'launching',
    techStack: ['Prophet', 'GPT-4', 'Multi-Agent', 'Kubernetes'],
    expectedImpact: '95% reduction in unplanned downtime',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    )
  }
]

interface InnovationCardProps {
  innovation: Innovation
  index: number
}

function InnovationCard({ innovation, index }: InnovationCardProps) {
  const status = statusConfig[innovation.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-accent-blue/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Icon */}
      <div className="mb-4 text-accent-blue">
        {innovation.icon}
      </div>

      {/* Name */}
      <h3 className="text-[20px] font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
        {innovation.name}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {innovation.description}
      </p>

      {/* Status Badge */}
      <div className="mb-4">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${status.bgColor} ${status.color} text-xs font-medium`}>
          {status.icon}
          {status.label}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {innovation.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-white/5 border border-gray-800 rounded text-xs text-gray-400 hover:border-gray-700 hover:text-gray-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expected Impact */}
      <div className="pt-4 border-t border-gray-800">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Expected Impact</p>
        <p className="text-sm font-semibold text-green-400">
          {innovation.expectedImpact}
        </p>
      </div>

      {/* Optional Learn More Link */}
      {innovation.learnMoreLink && (
        <a
          href={innovation.learnMoreLink}
          className="mt-4 inline-flex items-center gap-1 text-sm text-accent-blue hover:text-blue-400 transition-colors group/link"
        >
          Learn More
          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(65, 105, 225, 0.1), transparent 40%)`
        }}
      />
    </motion.div>
  )
}

export default function InnovationLab() {
  return (
    <section className="bg-primary-dark text-white py-20">
      <div className="container-max px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-heading md:text-section-heading-mobile font-bold mb-4">
            What's Next: <span className="text-accent-blue">Innovation Lab</span>
          </h2>
          <p className="text-card-title text-text-gray max-w-2xl mx-auto">
            AI concepts in development for industrial intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((innovation, index) => (
            <InnovationCard key={innovation.name} innovation={innovation} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
