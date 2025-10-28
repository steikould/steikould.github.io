'use client'

import { motion } from 'framer-motion'
import { Building, GraduationCap, Award, MapPin, Calendar } from 'lucide-react'
import Card, { CardContent } from '@/components/ui/Card'

interface TimelineEvent {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  type: 'work' | 'education' | 'certification'
  description: string[]
  technologies?: string[]
  achievements?: string[]
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'Senior Data Engineer & Business Strategist',
    company: 'Colonial Pipeline',
    location: 'Atlanta, GA',
    startDate: 'April 2025',
    type: 'work',
    description: [
      'Architected intelligent sensor data transformation system converting sparse IoT streams into continuous time-series datasets using statistical ML models and automated outlier detection',
      'Led multi-agent AI architecture for drag-reducing agent optimization, migrating legacy spreadsheet analysis into scalable web platform with natural language queries',
      'Delivered enterprise AI transformation generating $1M+ annual savings through automated vendor selection, fuel blending optimization, and intelligent procurement'
    ],
    technologies: ['Python', 'Vertex AI', 'BigQuery', 'MLflow', 'LangGraph', 'RAG', 'Google ADK'],
    achievements: [
      '$1M+ annual operational savings delivered',
      'Built comprehensive MLOps framework for regulated industrial environments',
      'Deployed intelligent procurement system saving $150K+ annually'
    ]
  },
  {
    id: '2',
    title: 'ML/Senior Data Engineer',
    company: 'Gordon Food Services',
    location: 'Advanced Analytics',
    startDate: '2022',
    endDate: 'April 2025',
    type: 'work',
    description: [
      'Transformed experimental TensorFlow notebook into enterprise-grade forecasting system with automated training pipelines and GPU acceleration on Vertex AI',
      'Optimized model architecture using constraint optimization and mixed-integer programming, achieving 4% improvement over O9 Solutions baseline',
      'Deployed production forecasting solution projected to deliver $1M annual savings, validated through five-year historical backtesting'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Vertex AI', 'BigQuery', 'Prophet', 'GreyKite', 'PySpark'],
    achievements: [
      '$1M projected annual savings from forecasting system',
      'Enhanced model training efficiency by 25%',
      'Reduced BigQuery costs by 10% through strategic optimization'
    ]
  },
  {
    id: '3',
    title: 'Research Engineer/Developer',
    company: 'Vanderbilt University - ScopeLab AI Research Lab',
    location: 'Nashville, TN',
    startDate: '2021',
    endDate: '2022',
    type: 'work',
    description: [
      'Architected scalable ETL pipeline infrastructure using PySpark, processing 10TB+ datasets across 5+ concurrent research projects',
      'Built enterprise-grade data standardization platform that accelerated retraining cycles by 60% for 5+ researchers',
      'Developed full-stack transportation optimization platform with real-time vehicle tracking and ML-based route optimization serving 50+ daily operations'
    ],
    technologies: ['PySpark', 'Pandas', 'AWS', 'GCP', 'Jupyter', 'SQL'],
    achievements: [
      'Reduced research setup time from weeks to hours',
      'Improved operational efficiency by 25%',
      'Maintained 90%+ uptime SLA for ML experimentation infrastructure'
    ]
  },
  {
    id: '4',
    title: 'Technical Lead & Founding Engineer',
    company: 'Mobius.ai',
    location: 'Nashville, TN',
    startDate: '2019',
    endDate: '2021',
    type: 'work',
    description: [
      'Sole technical architect responsible for end-to-end platform development from architecture through production deployment',
      'Built complete data infrastructure processing 10TB+ datasets and full-stack applications serving 50+ daily users',
      'Established scalable foundations enabling 5+ researchers to rapidly prototype and deploy ML solutions'
    ],
    technologies: ['Python', 'React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    achievements: [
      'Company remains profitable after 5+ years',
      'Owned entire technical lifecycle from design to deployment',
      'Built platform serving 50+ daily users with ML-powered optimization'
    ]
  },
  {
    id: '5',
    title: 'Director, Business Technology Solutions',
    company: 'Grant Thornton',
    location: 'Atlanta, GA',
    startDate: '2014',
    endDate: '2019',
    type: 'work',
    description: [
      'Led team of 10-15 engineers managing $2-4M annual project portfolio across Fortune 500 clients',
      'Delivered $100M+ in client value through digital transformation initiatives for tax and financial strategies',
      'Drove automation initiatives generating multi-million-dollar savings by optimizing financial calculations and tax positioning'
    ],
    technologies: ['SQL', 'Python', 'ETL Tools', 'ERP Systems', 'Data Warehousing'],
    achievements: [
      'Scaled from Manager to Director in 3 years',
      'Grew practice revenue by 15% with 80% team retention',
      'Led migrations standardizing millions of financial records'
    ]
  },
  {
    id: '6',
    title: 'Manager, National Leader Tax Technology Solutions',
    company: 'Cherry Bekaert, LLP',
    location: 'Atlanta, GA',
    startDate: '2012',
    endDate: '2014',
    type: 'work',
    description: [
      'Supported practice growth by architecting client acquisition processes, contributing to doubling practice size',
      'Generated $2M+ annual revenue across 30+ concurrent engagements',
      'Led technical hiring and project management across distributed teams in 5 locations'
    ],
    technologies: ['Business Intelligence', 'SQL', 'Project Management Tools'],
    achievements: [
      'Doubled practice size generating $2M+ annual revenue',
      'Improved project success rates by 30%',
      'Reduced client onboarding time by 40%'
    ]
  },
  {
    id: '7',
    title: 'Senior Associate, Tax Technology & Integration Services',
    company: 'EY, LLP',
    location: 'Atlanta, GA',
    startDate: '2007',
    endDate: '2011',
    type: 'work',
    description: [
      'Architected enterprise data warehousing solution for $12B MGM CityCenter mega-project',
      'Orchestrated cloud migration of 500GB+ critical data to MicroStrategy Cloud for 100+ users',
      'Consistently achieved top-tier performance recognition (5/5 ratings, top 15% firmwide)'
    ],
    technologies: ['MicroStrategy', 'SQL', 'Data Warehousing', 'Cloud Migration'],
    achievements: [
      'Led technical design for $12B mega-project analytics',
      'Early cloud adoption pioneer with enterprise migration',
      'Top 15% firmwide performance consistently'
    ]
  }
]

export default function Timeline() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Building
      case 'education':
        return GraduationCap
      case 'certification':
        return Award
      default:
        return Building
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-cyan-500'
      case 'education':
        return 'from-purple-500 to-pink-500'
      case 'certification':
        return 'from-green-500 to-teal-500'
      default:
        return 'from-gray-500 to-slate-500'
    }
  }

  return (
    <section className="section-padding bg-primary-dark">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 font-bold text-text-dark mb-6">
            Professional Experience
          </h2>
          <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
            My journey through the world of data engineering, machine learning,
            and technology leadership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-purple-500 to-accent-blue hidden md:block"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = getIcon(event.type)
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Marker */}
                  <div className="hidden md:flex items-center justify-center relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getTypeColor(event.type)} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 md:flex-none md:w-[calc(100%-6rem)]">
                    <Card className="overflow-hidden bg-primary-dark-card">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-text-dark mb-1">
                              {event.title}
                            </h3>
                            <p className="text-lg font-semibold text-accent-blue mb-2">
                              {event.company}
                            </p>
                          </div>
                          <div className="flex flex-col lg:items-end gap-1">
                            <div className="flex items-center gap-1 text-sm text-text-muted">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {event.startDate} - {event.endDate || 'Present'}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-text-muted">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {event.description.map((item, idx) => (
                              <li key={idx} className="text-text-muted leading-relaxed flex items-start gap-2">
                                <span className="text-accent-blue mt-2 text-xs">●</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        {event.technologies && (
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-text-dark mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-accent-blue-light text-accent-blue text-sm rounded-full font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Achievements */}
                        {event.achievements && (
                          <div>
                            <h4 className="text-sm font-semibold text-text-dark mb-3">Key Achievements</h4>
                            <ul className="space-y-1">
                              {event.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-text-muted text-sm flex items-start gap-2">
                                  <span className="text-green-500 mt-1 text-xs">✓</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}