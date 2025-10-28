'use client'

import { motion } from 'framer-motion'
import { Activity, TrendingUp, BarChart3, Database, Cpu } from 'lucide-react'

const capabilities = [
  {
    icon: Activity,
    title: 'Predictive Maintenance Systems',
    description: 'Forecast equipment failures months in advance',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Process Optimization',
    description: 'Reduce energy consumption and operational costs',
  },
  {
    icon: BarChart3,
    title: 'Equipment Performance Analytics',
    description: 'Turn sensor data into actionable insights',
  },
  {
    icon: Database,
    title: 'Data Governance & Integration',
    description: 'Unified data platforms for industrial IoT',
  },
  {
    icon: Cpu,
    title: 'Custom ML Pipelines',
    description: 'Production-grade models tailored to your operations',
  },
]

export default function Capabilities() {
  return (
    <section className="bg-primary-dark-secondary py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-heading md:text-section-heading-mobile text-white mb-4">
            Core Capabilities
          </h2>
          <p className="text-body text-text-gray max-w-2xl mx-auto">
            End-to-end ML solutions for cyber-physical industrial systems
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-dark rounded-lg p-6 border border-gray-800/50 hover:border-accent-blue/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-accent-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-card-title text-white mb-2 group-hover:text-accent-blue transition-colors duration-300">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-text-gray leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
