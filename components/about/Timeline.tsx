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
    title: 'Senior Data Engineer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    startDate: '2022-03',
    type: 'work',
    description: [
      'Lead a team of 5 engineers in building scalable data infrastructure processing 10M+ events daily',
      'Architected real-time ML pipeline platform reducing model deployment time from hours to minutes',
      'Implemented automated data quality monitoring reducing data incidents by 85%'
    ],
    technologies: ['Python', 'Apache Spark', 'Kubernetes', 'AWS', 'MLflow', 'Terraform'],
    achievements: [
      'Promoted to Senior Engineer in 18 months',
      'Led migration to cloud-native architecture saving $200K annually',
      'Mentored 3 junior engineers to successful promotions'
    ]
  },
  {
    id: '2',
    title: 'Data Engineer',
    company: 'DataFlow Analytics',
    location: 'Austin, TX',
    startDate: '2020-06',
    endDate: '2022-03',
    type: 'work',
    description: [
      'Developed and maintained ETL pipelines processing terabytes of data across multiple sources',
      'Built real-time fraud detection system achieving 99.2% accuracy with sub-100ms response times',
      'Collaborated with data scientists to productionize ML models and automate deployment workflows'
    ],
    technologies: ['Python', 'Apache Kafka', 'PostgreSQL', 'Docker', 'Airflow', 'TensorFlow'],
    achievements: [
      'Reduced data processing time by 60% through optimization',
      'Implemented CI/CD practices for data pipelines',
      'Received "Outstanding Performance" award 2021'
    ]
  },
  {
    id: '3',
    title: 'Junior Data Analyst',
    company: 'StartupCo',
    location: 'Remote',
    startDate: '2019-01',
    endDate: '2020-06',
    type: 'work',
    description: [
      'Analyzed customer behavior data to drive product decisions and optimize user experience',
      'Created automated reporting dashboards reducing manual reporting time by 80%',
      'Collaborated with product and engineering teams to implement data tracking and analytics'
    ],
    technologies: ['Python', 'SQL', 'Tableau', 'Google Analytics', 'BigQuery'],
    achievements: [
      'Built company\'s first automated dashboard system',
      'Identified key user retention insights driving 25% improvement',
      'Transitioned from analyst to engineering role'
    ]
  },
  {
    id: '4',
    title: 'Master of Science in Data Science',
    company: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    startDate: '2017-09',
    endDate: '2019-05',
    type: 'education',
    description: [
      'Specialized in machine learning, statistical modeling, and big data technologies',
      'Thesis: "Real-time Anomaly Detection in Streaming Data Using Deep Learning"',
      'Graduate Research Assistant - developed novel algorithms for time series forecasting'
    ],
    technologies: ['Python', 'R', 'TensorFlow', 'Apache Spark', 'Hadoop', 'MATLAB'],
    achievements: [
      'GPA: 3.9/4.0, Summa Cum Laude',
      'Teaching Assistant for Machine Learning course',
      'Published 2 papers in peer-reviewed conferences'
    ]
  },
  {
    id: '5',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Texas at Austin',
    location: 'Austin, TX',
    startDate: '2013-09',
    endDate: '2017-05',
    type: 'education',
    description: [
      'Major in Computer Science with focus on algorithms, data structures, and software engineering',
      'Minor in Mathematics with emphasis on statistics and linear algebra',
      'Senior Capstone: Distributed computing system for large-scale data processing'
    ],
    technologies: ['Java', 'C++', 'Python', 'SQL', 'JavaScript', 'Git'],
    achievements: [
      'Dean\'s List all semesters',
      'President of Computer Science Student Association',
      'Winner of university-wide hackathon 2016'
    ]
  },
  {
    id: '6',
    title: 'AWS Certified Solutions Architect',
    company: 'Amazon Web Services',
    location: 'Online',
    startDate: '2021-08',
    type: 'certification',
    description: [
      'Professional-level certification demonstrating expertise in designing distributed systems on AWS',
      'Covers compute, networking, storage, and database AWS services',
      'Validates ability to design cost-effective, fault-tolerant systems'
    ],
    achievements: [
      'Score: 920/1000 (Pass: 720)',
      'Valid through August 2024'
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
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 font-bold text-text-dark mb-6">
            Experience & Education
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
                    <Card className="overflow-hidden">
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