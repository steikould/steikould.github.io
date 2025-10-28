'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Code,
  Database,
  Cloud,
  Cpu,
  GitBranch,
  BarChart3,
  Shield,
  Zap,
  Server,
  Globe
} from 'lucide-react'

interface SkillCategory {
  title: string
  icon: any
  skills: {
    name: string
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
    experience: string
    description: string
    icon?: string
  }[]
}

// Industrial context descriptions for each technology
const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      {
        name: 'Python',
        level: 'Expert',
        experience: '5+ years',
        description: 'Primary language for industrial IoT data pipelines, ML model deployment in oil & gas operations, and real-time sensor analytics.',
        icon: '🐍'
      },
      {
        name: 'SQL',
        level: 'Expert',
        experience: '5+ years',
        description: 'Enterprise data warehouse optimization for pipeline monitoring systems, time-series analytics on fuel system telemetry.',
        icon: '📊'
      },
      {
        name: 'TypeScript/JavaScript',
        level: 'Advanced',
        experience: '3+ years',
        description: 'Production dashboards for fuel pipeline operations, real-time monitoring interfaces for critical infrastructure.',
        icon: '⚡'
      },
      {
        name: 'Scala',
        level: 'Advanced',
        experience: '2+ years',
        description: 'High-performance distributed data processing for industrial sensor networks, streaming analytics on Apache Spark.',
        icon: '⚙️'
      },
      {
        name: 'Go',
        level: 'Intermediate',
        experience: '1+ year',
        description: 'Microservices for IoT data collection, high-throughput API gateways for industrial telemetry systems.',
        icon: '🔧'
      },
      {
        name: 'Rust',
        level: 'Beginner',
        experience: '<1 year',
        description: 'Exploring edge computing applications for mission-critical pump control systems and real-time safety monitoring.',
        icon: '🦀'
      }
    ]
  },
  {
    title: 'Data Engineering',
    icon: Database,
    skills: [
      {
        name: 'Apache Spark',
        level: 'Expert',
        experience: '4+ years',
        description: 'Petabyte-scale processing of industrial IoT sensor data from fuel pipeline networks, batch & streaming workloads.',
        icon: '⚡'
      },
      {
        name: 'Apache Kafka',
        level: 'Advanced',
        experience: '3+ years',
        description: 'Real-time streaming for 10M+ events/day from fuel pipeline sensors, pump monitoring systems, and SCADA integration.',
        icon: '📡'
      },
      {
        name: 'Apache Airflow',
        level: 'Advanced',
        experience: '3+ years',
        description: 'Orchestration of critical ETL pipelines for oil & gas operations, automated data quality checks for industrial systems.',
        icon: '🌀'
      },
      {
        name: 'dbt',
        level: 'Advanced',
        experience: '2+ years',
        description: 'Data transformation framework for enterprise analytics, modeling pipeline operations and fuel system performance metrics.',
        icon: '🔄'
      },
      {
        name: 'Snowflake',
        level: 'Advanced',
        experience: '2+ years',
        description: 'Enterprise data warehouse for multi-terabyte industrial datasets, supporting critical infrastructure analytics.',
        icon: '❄️'
      },
      {
        name: 'BigQuery',
        level: 'Expert',
        experience: '4+ years',
        description: 'Serverless analytics engine for time-series data from industrial sensors, cost-optimized queries on massive datasets.',
        icon: '🔍'
      }
    ]
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: [
      {
        name: 'AWS',
        level: 'Advanced',
        experience: '4+ years',
        description: 'Enterprise cloud infrastructure for industrial IoT platforms, real-time analytics pipelines for critical systems.',
        icon: '☁️'
      },
      {
        name: 'Google Cloud Platform',
        level: 'Expert',
        experience: '5+ years',
        description: 'Production data lakes and industrial ML systems for oil & gas, serverless architectures for sensor data processing.',
        icon: '🌐'
      },
      {
        name: 'Azure',
        level: 'Intermediate',
        experience: '1+ year',
        description: 'Hybrid cloud deployments for manufacturing operations, integration with enterprise on-premise systems.',
        icon: '🔷'
      },
      {
        name: 'Kubernetes',
        level: 'Advanced',
        experience: '3+ years',
        description: 'Container orchestration for mission-critical ML model serving, auto-scaling industrial IoT data processing workloads.',
        icon: '☸️'
      },
      {
        name: 'Docker',
        level: 'Expert',
        experience: '4+ years',
        description: 'Containerized deployment of ML pipelines, reproducible environments for industrial data science workflows.',
        icon: '🐳'
      },
      {
        name: 'Terraform',
        level: 'Advanced',
        experience: '3+ years',
        description: 'Infrastructure-as-code for enterprise cloud platforms, automated provisioning of industrial analytics environments.',
        icon: '🏗️'
      }
    ]
  },
  {
    title: 'Machine Learning & AI',
    icon: Cpu,
    skills: [
      {
        name: 'TensorFlow',
        level: 'Advanced',
        experience: '3+ years',
        description: 'Deep learning models for predictive maintenance on pump systems, anomaly detection in pipeline sensor networks.',
        icon: '🧠'
      },
      {
        name: 'PyTorch',
        level: 'Advanced',
        experience: '2+ years',
        description: 'Neural network research for industrial forecasting, time-series models for fuel demand prediction.',
        icon: '🔥'
      },
      {
        name: 'scikit-learn',
        level: 'Expert',
        experience: '4+ years',
        description: 'Production ML models for industrial optimization, ensemble methods for fuel blending and demand forecasting.',
        icon: '🎯'
      },
      {
        name: 'MLflow',
        level: 'Advanced',
        experience: '2+ years',
        description: 'Model lifecycle management for industrial ML systems, experiment tracking for production pipeline optimization.',
        icon: '📈'
      },
      {
        name: 'Hugging Face',
        level: 'Advanced',
        experience: '1+ year',
        description: 'LLM fine-tuning for industrial document processing, transformer models for operational intelligence.',
        icon: '🤗'
      },
      {
        name: 'OpenAI/LangChain',
        level: 'Advanced',
        experience: '1+ year',
        description: 'AI agents for operational insights on industrial time-series data, LLM-powered analytics for pipeline operations.',
        icon: '🤖'
      }
    ]
  },
  {
    title: 'DevOps & MLOps',
    icon: GitBranch,
    skills: [
      {
        name: 'CI/CD (GitHub Actions)',
        level: 'Advanced',
        experience: '3+ years',
        description: 'Automated deployment pipelines for industrial ML models, continuous integration for mission-critical data systems.',
        icon: '🚀'
      },
      {
        name: 'Monitoring (Prometheus)',
        level: 'Advanced',
        experience: '2+ years',
        description: 'Real-time monitoring of industrial data pipelines, alerting systems for critical infrastructure ML deployments.',
        icon: '📊'
      },
      {
        name: 'GitOps (ArgoCD)',
        level: 'Intermediate',
        experience: '1+ year',
        description: 'Declarative deployment of data engineering platforms, version-controlled infrastructure for industrial systems.',
        icon: '🔄'
      },
      {
        name: 'Model Deployment',
        level: 'Advanced',
        experience: '3+ years',
        description: 'Production serving of ML models for real-time pump optimization, A/B testing frameworks for industrial algorithms.',
        icon: '⚙️'
      },
      {
        name: 'A/B Testing',
        level: 'Advanced',
        experience: '2+ years',
        description: 'Experimentation frameworks for industrial optimization strategies, statistical validation of operational improvements.',
        icon: '🧪'
      },
      {
        name: 'Infrastructure as Code',
        level: 'Advanced',
        experience: '3+ years',
        description: 'Reproducible deployments for enterprise data platforms, automated scaling for industrial IoT workloads.',
        icon: '📦'
      }
    ]
  },
  {
    title: 'Analytics & Visualization',
    icon: BarChart3,
    skills: [
      {
        name: 'Tableau',
        level: 'Advanced',
        experience: '3+ years',
        description: 'Executive dashboards for fuel pipeline operations, real-time visualization of industrial KPIs and anomaly detection.',
        icon: '📊'
      },
      {
        name: 'Looker',
        level: 'Advanced',
        experience: '2+ years',
        description: 'Self-service BI for operational teams, embedded analytics for industrial monitoring systems.',
        icon: '👁️'
      },
      {
        name: 'Power BI',
        level: 'Intermediate',
        experience: '1+ year',
        description: 'Enterprise reporting for manufacturing operations, integration with on-premise industrial data sources.',
        icon: '📈'
      },
      {
        name: 'Jupyter/JupyterLab',
        level: 'Expert',
        experience: '5+ years',
        description: 'Interactive analysis of industrial sensor data, prototype development for production ML models.',
        icon: '📓'
      },
      {
        name: 'R/RStudio',
        level: 'Intermediate',
        experience: '2+ years',
        description: 'Statistical modeling for industrial process optimization, time-series analysis of pipeline performance.',
        icon: '📉'
      },
      {
        name: 'D3.js',
        level: 'Intermediate',
        experience: '1+ year',
        description: 'Custom visualizations for industrial IoT dashboards, interactive charts for real-time sensor monitoring.',
        icon: '🎨'
      }
    ]
  }
]

const getLevelDots = (level: string): number => {
  switch (level) {
    case 'Expert':
      return 5
    case 'Advanced':
      return 4
    case 'Intermediate':
      return 3
    case 'Beginner':
      return 2
    default:
      return 1
  }
}

// Accent color variations for visual interest
const getAccentColor = (index: number) => {
  const colors = [
    { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgb(59, 130, 246)', shadow: 'rgba(59, 130, 246, 0.4)', glow: 'rgba(59, 130, 246, 0.2)' }, // Blue
    { bg: 'rgba(139, 92, 246, 0.15)', border: 'rgb(139, 92, 246)', shadow: 'rgba(139, 92, 246, 0.4)', glow: 'rgba(139, 92, 246, 0.2)' }, // Purple
    { bg: 'rgba(20, 184, 166, 0.15)', border: 'rgb(20, 184, 166)', shadow: 'rgba(20, 184, 166, 0.4)', glow: 'rgba(20, 184, 166, 0.2)' }, // Teal
  ]
  return colors[index % colors.length]
}

interface SkillCardProps {
  name: string
  level: string
  experience: string
  description: string
  skillIcon?: string
  index: number
}

function SkillCard({ name, level, experience, description, skillIcon, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const filledDots = getLevelDots(level)
  const totalDots = 5
  const accentColor = getAccentColor(index)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-lg border border-gray-800/50 transition-all duration-300 cursor-pointer"
      style={{
        background: `linear-gradient(135deg, rgba(26, 32, 44, 0.95) 0%, rgba(23, 28, 38, 0.98) 100%)`,
        boxShadow: isHovered
          ? `0 8px 24px ${accentColor.shadow}, 0 0 0 1px ${accentColor.border}`
          : '0 2px 8px rgba(0, 0, 0, 0.3)',
        borderColor: isHovered ? accentColor.border : 'rgba(55, 65, 81, 0.5)'
      }}
    >
      {/* Hover overlay with accent color */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: accentColor.bg,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Content */}
      <div className="relative p-4 h-full flex flex-col justify-between">
        {/* Top section with icon and name */}
        <div className="mb-3">
          <div className="flex items-center gap-2.5 mb-1">
            {skillIcon && (
              <span
                className="text-lg transition-transform duration-300"
                style={{
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
                }}
              >
                {skillIcon}
              </span>
            )}
            <h4
              className="text-sm font-semibold text-text-light transition-colors duration-300"
              style={{
                letterSpacing: '0.01em',
                color: isHovered ? '#ffffff' : '#e2e8f0'
              }}
            >
              {name}
            </h4>
          </div>
        </div>

        {/* Bottom section with dots */}
        <div className="flex gap-1.5">
          {[...Array(totalDots)].map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: i < filledDots ? accentColor.border : 'rgba(75, 85, 99, 0.5)',
                boxShadow: i < filledDots && isHovered ? `0 0 8px ${accentColor.glow}` : 'none'
              }}
            />
          ))}
        </div>

        {/* Hover Description Overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-center p-4 transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${accentColor.bg} 0%, ${accentColor.bg.replace('0.15', '0.25')} 100%)`,
            backdropFilter: 'blur(8px)',
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none'
          }}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wide uppercase" style={{ color: accentColor.border }}>
                {level}
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-400">{experience}</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-200" style={{ lineHeight: '1.5' }}>
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Industrial-style corner accent */}
      <div
        className="absolute bottom-0 right-0 w-12 h-12 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, transparent 0%, ${accentColor.glow} 100%)`,
          opacity: isHovered ? 0.3 : 0,
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
        }}
      />
    </motion.div>
  )
}

export default function SkillsList() {
  let skillIndex = 0

  return (
    <section className="section-padding bg-primary-dark relative overflow-hidden">
      {/* Subtle background pattern for industrial feel */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 font-bold text-text-light mb-6" style={{ letterSpacing: '-0.02em' }}>
            Industrial Technology Stack
          </h2>
          <p className="text-body-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            Production-grade expertise across the full stack of enterprise data engineering, machine learning,
            and cloud infrastructure. Battle-tested in critical infrastructure and industrial IoT environments.
          </p>
        </motion.div>

        <div className="space-y-14">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            const categoryAccent = getAccentColor(categoryIndex)
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header with accent color */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2.5 rounded-lg border transition-all duration-300"
                    style={{
                      backgroundColor: categoryAccent.bg,
                      borderColor: categoryAccent.border + '40',
                      boxShadow: `0 0 16px ${categoryAccent.glow}`
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: categoryAccent.border }} />
                  </div>
                  <h3 className="text-xl font-bold text-text-light" style={{ letterSpacing: '0.01em' }}>
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px ml-4" style={{
                    background: `linear-gradient(90deg, ${categoryAccent.border}40 0%, transparent 100%)`
                  }} />
                </div>

                {/* Skills Grid - more horizontal cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill) => {
                    const currentIndex = skillIndex
                    skillIndex++
                    return (
                      <SkillCard
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        experience={skill.experience}
                        description={skill.description}
                        skillIcon={skill.icon}
                        index={currentIndex}
                      />
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced legend with industrial styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex justify-center"
        >
          <div
            className="flex flex-wrap items-center gap-6 px-8 py-5 rounded-lg border"
            style={{
              background: 'linear-gradient(135deg, rgba(26, 32, 44, 0.8) 0%, rgba(23, 28, 38, 0.9) 100%)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)'
            }}
          >
            <span className="text-sm font-semibold text-gray-300 tracking-wide">PROFICIENCY LEVEL:</span>

            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'rgb(59, 130, 246)' }} />
                ))}
              </div>
              <span className="text-xs font-medium text-text-light tracking-wide">Expert</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: i < 4 ? 'rgb(59, 130, 246)' : 'rgba(75, 85, 99, 0.5)' }}
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-text-light tracking-wide">Advanced</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: i < 3 ? 'rgb(59, 130, 246)' : 'rgba(75, 85, 99, 0.5)' }}
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-text-light tracking-wide">Intermediate</span>
            </div>
          </div>
        </motion.div>

        {/* Industrial callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-400 italic">
            Hover over any technology to see real-world applications in industrial & enterprise environments
          </p>
        </motion.div>
      </div>
    </section>
  )
}