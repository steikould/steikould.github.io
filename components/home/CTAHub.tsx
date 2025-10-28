'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Folder, Download, Mail, ArrowRight, FileText } from 'lucide-react'

interface CTACard {
  title: string
  description: string
  icon: JSX.Element
  link: string
  buttonText: string
  color: string
  isExternal?: boolean
  fileInfo?: string
}

const ctaCards: CTACard[] = [
  // Disabled - Coming Soon
  // {
  //   title: 'View Projects',
  //   description: 'Explore my portfolio of deployed systems',
  //   icon: <Folder className="w-8 h-8" />,
  //   link: '/projects',
  //   buttonText: 'Browse',
  //   color: 'from-blue-500/20 to-purple-500/20'
  // },
  {
    title: 'Download Resume',
    description: 'Full technical background & achievements',
    icon: <Download className="w-8 h-8" />,
    link: '/MCourseyResume.pdf',
    buttonText: 'Download Resume',
    color: 'from-green-500/20 to-emerald-500/20',
    isExternal: true,
    fileInfo: '📥 PDF (2 pages)'
  },
  {
    title: 'Get In Touch',
    description: 'Available for select consulting projects',
    icon: <Mail className="w-8 h-8" />,
    link: 'mailto:steikould@gmail.com',
    buttonText: "Let's Talk",
    color: 'from-orange-500/20 to-red-500/20',
    isExternal: true
  }
]

interface CTACardComponentProps {
  card: CTACard
  index: number
}

function CTACardComponent({ card, index }: CTACardComponentProps) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-accent-blue/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 text-accent-blue group-hover:text-white group-hover:scale-110 transition-all duration-300">
          {card.icon}
        </div>

        {/* Title */}
        <h3 className="text-[24px] font-bold text-white mb-3 group-hover:text-white transition-colors">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 group-hover:text-gray-200 transition-colors">
          {card.description}
        </p>

        {/* File Info (if applicable) */}
        {card.fileInfo && (
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
            <FileText className="w-4 h-4" />
            {card.fileInfo}
          </div>
        )}

        {/* Button */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue group-hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 group-hover:shadow-lg">
          {card.buttonText}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-accent-blue via-purple-500 to-accent-blue opacity-50 blur-sm" />
      </div>
    </motion.div>
  )

  if (card.isExternal) {
    return (
      <a
        href={card.link}
        target={card.link.startsWith('mailto:') ? undefined : '_blank'}
        rel={card.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        className="block h-full"
        download={card.link.endsWith('.pdf') ? true : undefined}
      >
        {CardContent}
      </a>
    )
  }

  return (
    <Link href={card.link} className="block h-full">
      {CardContent}
    </Link>
  )
}

export default function CTAHub() {
  return (
    <section className="bg-primary-dark text-white py-20">
      <div className="container-max px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-heading md:text-section-heading-mobile font-bold mb-4">
            Ready to <span className="text-accent-blue">Connect?</span>
          </h2>
          <p className="text-card-title text-text-gray max-w-2xl mx-auto">
            Let's turn your data challenges into business opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ctaCards.map((card, index) => (
            <CTACardComponent key={card.title} card={card} index={index} />
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-gray-800 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">
              Available for select consulting projects starting Q2 2025
            </span>
          </div>
        </motion.div>

        {/* Social Proof / Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 pt-12 border-t border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="metric-number mb-2">$8M+</div>
              <div className="metric-label">Annual Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="metric-number mb-2">15+</div>
              <div className="metric-label">Production ML Systems</div>
            </div>
            <div className="text-center">
              <div className="metric-number mb-2">10M+</div>
              <div className="metric-label">Events Processed Daily</div>
            </div>
            <div className="text-center">
              <div className="metric-number mb-2">99.9%</div>
              <div className="metric-label">System Reliability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
