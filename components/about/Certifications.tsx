'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { personalInfo } from '@/lib/personal-info'

interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  logo?: string
  shieldUrl: string
  expired?: boolean
  validYears?: string
  type: 'certification'
}

interface Education {
  degree: string
  school: string
  location: string
  graduationYear: string
  field?: string
  gpa?: string
  honors?: string
  logo?: string
  shieldUrl: string
  type: 'education'
}

type CredentialItem = Certification | Education

// Combine and mark education and certifications with types
const allCredentials: CredentialItem[] = [
  ...((personalInfo.education || []).map(edu => ({ ...edu, type: 'education' as const }))),
  ...((personalInfo.certifications || []).map(cert => ({ ...cert, type: 'certification' as const })))
]

export default function Certifications() {
  // Helper to get border color based on type
  const getBorderColor = (type: string) => {
    return type === 'education'
      ? 'border-purple-500/30 hover:border-purple-500'
      : 'border-green-500/30 hover:border-green-500'
  }

  return (
    <section className="section-padding bg-primary-dark-secondary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display-2 font-bold text-text-dark text-center mb-12">
            Education & Certifications
          </h2>

          {/* Unified Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCredentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                title={item.type === 'certification' && (item as Certification).expired && (item as Certification).validYears
                  ? `Valid: ${(item as Certification).validYears}`
                  : undefined}
              >
                <div
                  className={`bg-primary-dark-secondary rounded-2xl border-2 ${getBorderColor(item.type)} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full p-6 ${item.type === 'certification' && (item as Certification).expired ? 'opacity-60 grayscale-[50%]' : ''}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={item.shieldUrl}
                      alt={item.type === 'education' ? `${(item as Education).school} shield` : `${(item as Certification).name} badge`}
                      className="mb-4 h-8"
                    />

                    {item.type === 'education' ? (
                      <>
                        <h3 className="text-lg font-bold text-text-light mb-2">
                          {(item as Education).degree}
                        </h3>
                        <p className="text-purple-400 font-semibold mb-1">
                          {(item as Education).school}
                        </p>
                        <p className="text-sm text-text-muted mb-2">
                          {(item as Education).location}
                        </p>
                        {((item as Education).gpa || (item as Education).honors) && (
                          <div className="pt-4 mt-4 border-t border-purple-500/20 w-full">
                            {(item as Education).gpa && (
                              <p className="text-sm text-text-muted mb-1">
                                <span className="font-semibold text-text-light">GPA:</span> {(item as Education).gpa}
                              </p>
                            )}
                            {(item as Education).honors && (
                              <p className="text-sm text-text-muted">
                                <span className="font-semibold text-text-light">Honors:</span> {(item as Education).honors}
                              </p>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <h3 className="text-lg font-bold text-text-light mb-2">
                          {(item as Certification).name}
                        </h3>
                        <p className="text-green-400 font-semibold mb-2">
                          {(item as Certification).issuer}
                        </p>
                        <p className="text-sm text-text-muted mb-3">
                          Issued: {(item as Certification).date}
                        </p>

                        {(item as Certification).expired && (item as Certification).validYears && (
                          <p className="text-xs text-red-400/80 mb-3 font-semibold">
                            Expired (Valid: {(item as Certification).validYears})
                          </p>
                        )}

                        {(item as Certification).credentialUrl && (
                          <a
                            href={(item as Certification).credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 hover:underline"
                          >
                            View Credential
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}

                        {(item as Certification).credentialId && !(item as Certification).credentialUrl && (
                          <p className="text-xs text-text-muted mt-2">
                            ID: {(item as Certification).credentialId}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Shields Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-accent-blue-light"
          >
            <h3 className="text-xl font-bold text-text-light text-center mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" className="h-7" />
              <img src="https://img.shields.io/badge/Apache_Spark-E25A1C?style=for-the-badge&logo=apache-spark&logoColor=white" alt="Spark" className="h-7" />
              <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow" className="h-7" />
              <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" className="h-7" />
              <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" className="h-7" />
              <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" className="h-7" />
              <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" className="h-7" />
              <img src="https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white" alt="Kafka" className="h-7" />
              <img src="https://img.shields.io/badge/Airflow-017CEE?style=for-the-badge&logo=apache-airflow&logoColor=white" alt="Airflow" className="h-7" />
              <img src="https://img.shields.io/badge/MLflow-0194E2?style=for-the-badge&logo=mlflow&logoColor=white" alt="MLflow" className="h-7" />
              <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" className="h-7" />
              <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" className="h-7" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
