'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, BarChart3, GraduationCap, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern - Subtle and professional */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent-blue/20 rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 py-24 w-full">
        {/* Main Content - Centered */}
        <div className="text-center">
          {/* Eyebrow Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-6"
          >
            Build End-to-End AI Systems That Drive Business Value
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-headline md:text-headline-mobile font-bold text-white mb-6 max-w-3xl mx-auto leading-tight"
          >
            Transform Industrial Operations with<br />
            Production-Grade ML Systems
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-subheadline md:text-subheadline-mobile text-text-light-gray mb-12 max-w-[700px] mx-auto leading-relaxed"
          >
            I design and deploy complete data intelligence solutions—integrating data engineering, ML pipelines, and AI inference into domain-specific dashboards and applications. Production-grade systems that transform raw data into actionable insights, automate complex workflows, and deliver measurable ROI for business stakeholders.
          </motion.p>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-blue/20 to-purple-500/20 border border-accent-blue/50 rounded-full">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-blue rounded-full animate-ping opacity-75" />
                <div className="w-2 h-2 bg-accent-blue rounded-full relative z-10" />
              </div>
              <span className="text-lg font-semibold text-white">Full Portfolio Coming Soon</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
