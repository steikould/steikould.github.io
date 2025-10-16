'use client'

import { motion } from 'framer-motion'
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
import Card, { CardContent, CardHeader } from '@/components/ui/Card'

interface SkillCategory {
  title: string
  icon: any
  color: string
  skills: {
    name: string
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
    experience: string
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', level: 'Expert', experience: '5+ years' },
      { name: 'SQL', level: 'Expert', experience: '5+ years' },
      { name: 'TypeScript/JavaScript', level: 'Advanced', experience: '3+ years' },
      { name: 'Scala', level: 'Advanced', experience: '2+ years' },
      { name: 'Go', level: 'Intermediate', experience: '1+ year' },
      { name: 'Rust', level: 'Beginner', experience: '<1 year' }
    ]
  },
  {
    title: 'Data Engineering',
    icon: Database,
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'Apache Spark', level: 'Expert', experience: '4+ years' },
      { name: 'Apache Kafka', level: 'Advanced', experience: '3+ years' },
      { name: 'Apache Airflow', level: 'Advanced', experience: '3+ years' },
      { name: 'dbt', level: 'Advanced', experience: '2+ years' },
      { name: 'Snowflake', level: 'Advanced', experience: '2+ years' },
      { name: 'BigQuery', level: 'Expert', experience: '4+ years' }
    ]
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'AWS', level: 'Advanced', experience: '4+ years' },
      { name: 'Google Cloud Platform', level: 'Expert', experience: '5+ years' },
      { name: 'Azure', level: 'Intermediate', experience: '1+ year' },
      { name: 'Kubernetes', level: 'Advanced', experience: '3+ years' },
      { name: 'Docker', level: 'Expert', experience: '4+ years' },
      { name: 'Terraform', level: 'Advanced', experience: '3+ years' }
    ]
  },
  {
    title: 'Machine Learning & AI',
    icon: Cpu,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'TensorFlow', level: 'Advanced', experience: '3+ years' },
      { name: 'PyTorch', level: 'Advanced', experience: '2+ years' },
      { name: 'scikit-learn', level: 'Expert', experience: '4+ years' },
      { name: 'MLflow', level: 'Advanced', experience: '2+ years' },
      { name: 'Hugging Face', level: 'Advanced', experience: '1+ year' },
      { name: 'OpenAI/LangChain', level: 'Advanced', experience: '1+ year' }
    ]
  },
  {
    title: 'DevOps & MLOps',
    icon: GitBranch,
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'CI/CD (GitHub Actions)', level: 'Advanced', experience: '3+ years' },
      { name: 'Monitoring (Prometheus)', level: 'Advanced', experience: '2+ years' },
      { name: 'GitOps (ArgoCD)', level: 'Intermediate', experience: '1+ year' },
      { name: 'Model Deployment', level: 'Advanced', experience: '3+ years' },
      { name: 'A/B Testing', level: 'Advanced', experience: '2+ years' },
      { name: 'Infrastructure as Code', level: 'Advanced', experience: '3+ years' }
    ]
  },
  {
    title: 'Analytics & Visualization',
    icon: BarChart3,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Tableau', level: 'Advanced', experience: '3+ years' },
      { name: 'Looker', level: 'Advanced', experience: '2+ years' },
      { name: 'Power BI', level: 'Intermediate', experience: '1+ year' },
      { name: 'Jupyter/JupyterLab', level: 'Expert', experience: '5+ years' },
      { name: 'R/RStudio', level: 'Intermediate', experience: '2+ years' },
      { name: 'D3.js', level: 'Intermediate', experience: '1+ year' }
    ]
  }
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'text-green-700 bg-green-100'
    case 'Advanced':
      return 'text-blue-700 bg-blue-100'
    case 'Intermediate':
      return 'text-yellow-700 bg-yellow-100'
    case 'Beginner':
      return 'text-gray-700 bg-gray-100'
    default:
      return 'text-gray-700 bg-gray-100'
  }
}

const getLevelWidth = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'w-full'
    case 'Advanced':
      return 'w-4/5'
    case 'Intermediate':
      return 'w-3/5'
    case 'Beginner':
      return 'w-2/5'
    default:
      return 'w-1/5'
  }
}

export default function SkillsList() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 font-bold text-text-dark mb-6">
            Technical Skills
          </h2>
          <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across the full stack
            of modern data engineering and machine learning technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-text-dark">{category.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05)
                          }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-text-dark">{skill.name}</span>
                            <div className="flex items-center gap-2">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}
                              >
                                {skill.level}
                              </span>
                              <span className="text-xs text-text-muted">{skill.experience}</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className={`h-2 bg-gradient-to-r ${category.color} rounded-full ${getLevelWidth(skill.level)}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: 'auto' }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications & Education Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-text-dark mb-6 text-center">
                Certifications & Education
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-text-dark mb-2">AWS Certified</h4>
                  <p className="text-text-muted text-sm">Solutions Architect Professional</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-text-dark mb-2">MS Data Science</h4>
                  <p className="text-text-muted text-sm">UC Berkeley (3.9 GPA)</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-text-dark mb-2">BS Computer Science</h4>
                  <p className="text-text-muted text-sm">UT Austin (Summa Cum Laude)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}