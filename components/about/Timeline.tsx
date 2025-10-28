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
      'Developed natural language query interface enabling non-technical pipeline operators to request sensor data through conversational prompts without SQL knowledge, prototyping in Vertex AI Workbench with Gemini models before transitioning to deterministic rule-based prompting for reliable BigQuery SQL generation',
      'Implemented automated data validation workflows with configurable business rules enforcing operational limits across pipeline segments, designing centralized business rules table in BigQuery with temporal versioning and complete audit history',
      'Developed machine learning models for pump anomaly detection, progressing from BigQuery ML statistical methods (78% accuracy) to Vertex AI AutoML Tables (85% accuracy), evaluating production ensemble architecture combining Isolation Forest, LSTM neural networks, and XGBoost with SHAP-based explainability',
      'Engineered real-time ML inference pipeline using Dataflow streaming jobs processing IoT sensor data with automated feature engineering (rolling statistics, rate-of-change calculations, cross-sensor correlations) before routing to Vertex AI prediction endpoints',
      'Enabled advanced analytics across industrial IoT infrastructure by architecting intelligent sensor data transformation system converting sparse, exception-driven streams into continuous time-series datasets using statistical ML models and automated outlier detection',
      'Orchestrated MLOps pipelines on Vertex AI with automated CI/CD workflows, custom containerization, and secure deployment practices for regulated industrial environments'
    ],
    technologies: ['Python', 'TypeScript', 'Vertex AI', 'BigQuery', 'BigQuery ML', 'Dataflow', 'Cloud Run', 'Gemini', 'AutoML', 'LSTM', 'XGBoost', 'Isolation Forest', 'SHAP', 'MLOps'],
    achievements: [
      '$1M+ annual operational savings through AI transformation',
      'Deployed production ML inference with 85% anomaly detection accuracy',
      'Enabled non-technical operators to query sensor data via natural language'
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
      'Transformed experimental TensorFlow notebook into enterprise-grade forecasting system, architecting robust MLOps infrastructure on Vertex AI with automated training pipelines, GPU acceleration, and distributed processing for scalable deployment',
      'Optimized model architecture using advanced programming and constraint optimization, implementing concurrent and mixed-integer programming, early stopping, and gradient descent to achieve 4% performance improvement over O9 Solutions baseline',
      'Deployed production forecasting solution projected to deliver $1M annual savings, validated through comprehensive five-year historical backtesting and rigorous performance analysis',
      'Engineered end-to-end ML pipelines on GCP, utilizing Vertex AI for time series forecasting with custom TensorFlow, PyTorch, Prophet, and GreyKite models while supporting automated deployment capabilities',
      'Built comprehensive ML infrastructure including feature selection tools, distributed model training, and support for custom models, BigQuery ML, and AutoML',
      'Enhanced model training efficiency by 25% through optimized data access and storage, creating feature stores on BigQuery and leveraging managed datasets and metadata frameworks',
      'Implemented comprehensive data governance strategy using GCP Dataplex with hierarchical metadata tagging and labeling, establishing data mesh architecture for domain-driven data ownership'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Vertex AI', 'BigQuery', 'BigQuery ML', 'Prophet', 'GreyKite', 'AutoML', 'GCP Dataplex', 'TensorBoard', 'Vizier'],
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
      'Architected scalable ETL pipeline infrastructure using PySpark frameworks, processing TB+ of diverse academic and transportation datasets across 5+ concurrent research projects while establishing automated data preparation workflows',
      'Built enterprise-grade data standardization and ingestion platform leveraging PySpark SQL and Pandas, creating reusable pipeline templates that accelerated retraining cycles by 60% and enabled 5+ researchers to rapidly prototype and deploy solutions',
      'Established comprehensive cloud infrastructure supporting 5+ research scientists, managing AWS/GCP environments including Jupyter notebooks, compute instances, and distributed processing pipelines with 90%+ uptime SLA',
      'Developed full-stack transportation optimization platform with real-time vehicle tracking system and ML-based route optimization, serving 50+ daily shuttle operations while integrating manual routing adjustments and predictive analytics'
    ],
    technologies: ['PySpark', 'Pandas', 'AWS', 'GCP', 'Jupyter', 'SQL', 'ML Optimization'],
    achievements: [
      'Reduced research setup time from weeks to hours',
      'Improved operational efficiency by 25% with predictive analytics',
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
      'Sole technical architect responsible for end-to-end platform development, from initial architecture through production deployment',
      'Built complete data infrastructure processing TB+ datasets, ML operations platform, and full-stack applications serving 50+ daily users',
      'Owned entire technical lifecycle: architecture design, implementation, model integration, user testing, and iterative improvements based on customer feedback',
      'Established scalable foundations that enabled 5+ researchers to rapidly prototype and deploy ML solutions'
    ],
    technologies: ['Python', 'React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker', 'ML Operations'],
    achievements: [
      'Company remains profitable and operating successfully for 5+ years',
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
      'Led team of 5-10 engineers and consultants, managing $1-1.5M annual project portfolio across large corporate clients',
      'Delivered $50M+ in client value through digital transformation initiatives surrounding tax and financial strategies with large-scale commercial real estate, technology companies, and automated outsourcing solutions',
      'Drove digital transformation initiatives generating multi-million-dollar client savings by automating tax/financial calculations, aggregating data, and optimizing tax positioning strategies',
      'Established technical architecture and governance frameworks to ensure GAAP/IFRS compliance and regulatory adherence, providing domain expertise and maintaining strict data integrity and audit trail requirements',
      'Built enduring client relationships from startups to large corporations, translating technical capabilities into business value and maintaining client communication throughout project lifecycle'
    ],
    technologies: ['SQL', 'Python', 'ETL Tools', 'ERP Systems', 'Data Warehousing', 'GAAP/IFRS Compliance'],
    achievements: [
      'Delivered $50M+ in client value through digital transformation',
      'Managed $1-1.5M annual project portfolio',
      'Built governance frameworks ensuring regulatory compliance'
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
      'Managed geographically diverse team, processes, and sales pipeline for tax fixed asset and R&D tax credit projects',
      'Designed and implemented new statistical sampling process for repairs and R&D credit projects reducing project labor expenses by 30-60%',
      'Supported practice growth by architecting client acquisition processes, contributing to doubling practice size and generating $2M+ annual revenue across 30+ concurrent engagements',
      'Managed all project aspects including initial scoping, budgeting, project planning and control, delivery, internal software/tool development, and internal training'
    ],
    technologies: ['Business Intelligence', 'SQL', 'Statistical Sampling', 'Project Management Tools'],
    achievements: [
      'Doubled practice size generating $2M+ annual revenue',
      'Reduced project labor expenses by 30-60% through statistical sampling',
      'Managed 30+ concurrent engagements successfully'
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
      'Architected automated SQL-based fixed asset workflow solution for the $12B MGM CityCenter mega-project, producing 3x results over peers',
      'Developed historical client/project database with simple linear regression model to accurately estimate potential benefits and identify industries, clients, and project types delivering the highest margin',
      'Consistently achieved top-tier performance recognition (5/5 ratings, top 15% firmwide), demonstrating technical leadership excellence and strategic value delivery in high-stakes enterprise technology implementations'
    ],
    technologies: ['MicroStrategy', 'SQL', 'Data Warehousing', 'Linear Regression', 'Workflow Automation'],
    achievements: [
      'Produced 3x results over peers on $12B mega-project',
      'Top 15% firmwide performance consistently',
      'Developed predictive models for project margin optimization'
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