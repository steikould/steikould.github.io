'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="bg-primary-dark text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent-blue/20 rounded-full"></div>
      </div>

      <div className="container-max px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-display-1 font-bold mb-6 text-balance">
              Building Intelligent{' '}
              <span className="text-accent-blue">Data Solutions</span>{' '}
              for Tomorrow's Challenges
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Data Engineer | ML Engineer | AI Consultant specializing in scalable data
              infrastructure, machine learning pipelines, and intelligent automation systems
              that drive business transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link href="/projects">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="/MCourseyResume.pdf" download>
              <Button variant="secondary" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-800"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-blue">500+</div>
              <div className="text-sm text-gray-400">Hours of ML Training</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-blue">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-blue">10+</div>
              <div className="text-sm text-gray-400">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-blue">3+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-accent-blue rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}