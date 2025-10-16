'use client'

import { motion } from 'framer-motion'
import {
  Database,
  Cpu,
  Cloud,
  Code,
  GitBranch,
  BarChart3,
  Zap,
  Shield
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Data Engineering',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Apache Spark', 'Kafka', 'Airflow', 'dbt', 'Snowflake', 'BigQuery']
  },
  {
    title: 'Machine Learning',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
    skills: ['TensorFlow', 'PyTorch', 'MLflow', 'Kubeflow', 'Hugging Face', 'scikit-learn']
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: 'from-green-500 to-teal-500',
    skills: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Terraform']
  },
  {
    title: 'Programming',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    skills: ['Python', 'TypeScript', 'Scala', 'Go', 'SQL', 'Rust']
  },
  {
    title: 'DevOps & MLOps',
    icon: GitBranch,
    color: 'from-indigo-500 to-blue-500',
    skills: ['CI/CD', 'GitOps', 'Monitoring', 'Model Deployment', 'A/B Testing']
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    color: 'from-yellow-500 to-orange-500',
    skills: ['Tableau', 'Looker', 'Power BI', 'Jupyter', 'R', 'Statistical Analysis']
  },
  {
    title: 'AI & Automation',
    icon: Zap,
    color: 'from-cyan-500 to-blue-500',
    skills: ['LLMs', 'OpenAI API', 'Langchain', 'Computer Vision', 'NLP', 'AutoML']
  },
  {
    title: 'Security & Governance',
    icon: Shield,
    color: 'from-gray-500 to-slate-500',
    skills: ['Data Privacy', 'GDPR', 'IAM', 'Encryption', 'Compliance', 'Audit']
  }
]

export default function Skills() {
  return (
    <section className="section-padding bg-primary-dark text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 font-bold mb-6">
            Technical Expertise
          </h2>
          <p className="text-body-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit spanning the entire data lifecycle, from ingestion
            and processing to advanced machine learning and intelligent automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-primary-dark-secondary rounded-2xl p-6 h-full hover:bg-gray-800/50 transition-colors duration-300 border border-gray-800/50 hover:border-accent-blue/30">
                  {/* Icon with Gradient Background */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold mb-4 group-hover:text-accent-blue transition-colors">
                    {category.title}
                  </h3>

                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        className="text-sm text-gray-300 hover:text-accent-blue transition-colors cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-blue mb-2">8+</div>
              <div className="text-sm text-gray-400">Programming Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-blue mb-2">15+</div>
              <div className="text-sm text-gray-400">Cloud Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-blue mb-2">25+</div>
              <div className="text-sm text-gray-400">Tools & Frameworks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-blue mb-2">100%</div>
              <div className="text-sm text-gray-400">Always Learning</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}