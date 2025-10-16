'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail, Twitter, Download, MapPin, Calendar } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useState } from 'react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername', color: 'hover:text-gray-900' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/yourusername', color: 'hover:text-blue-400' },
  { name: 'Email', icon: Mail, href: 'mailto:steikould@gmail.com', color: 'hover:text-red-500' },
]

// Image paths for the carousel - first one is headshot.jpg, rest are placeholders
const imageCarousel = [
  '/images/headshot.jpg',
  '/images/photo-2.jpg',
  '/images/photo-3.jpg',
  '/images/photo-4.jpg',
  '/images/photo-5.jpg',
  '/images/photo-6.jpg',
  '/images/photo-7.jpg',
  '/images/photo-8.jpg',
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCarousel.length)
  }

  return (
    <section className="bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="section-padding relative z-10">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-display-1 font-bold mb-6">
                About Me
              </h1>

              <div className="space-y-6 text-body-lg text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate <span className="text-accent-blue font-semibold">Data Engineer</span> and{' '}
                  <span className="text-accent-blue font-semibold">ML Engineer</span> with over 3 years of experience
                  building scalable data infrastructure and intelligent systems that drive business transformation.
                </p>

                <p>
                  My expertise spans the entire data lifecycle—from designing robust ETL pipelines and
                  real-time streaming architectures to developing sophisticated machine learning models
                  and deploying AI-powered automation solutions.
                </p>

                <p>
                  I'm particularly passionate about leveraging cutting-edge technologies like LLMs,
                  cloud-native architectures, and MLOps practices to solve complex business challenges
                  and unlock the power of data-driven decision making.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Available for opportunities</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="group">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <a href="mailto:steikould@gmail.com">
                  <Button variant="secondary" size="lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-8">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${link.color} transition-colors transform hover:scale-110 duration-200`}
                      aria-label={link.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-purple-600 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>

                {/* Main photo container - Clickable Carousel */}
                <div
                  className="relative bg-gray-800 rounded-2xl p-8 shadow-2xl cursor-pointer group transition-transform hover:scale-[1.02]"
                  onClick={handleImageClick}
                  title="Click to see more photos"
                >
                  <div className="w-80 h-80 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center overflow-hidden relative">
                    {/* Image stack effect - showing layered cards behind */}
                    <div className="absolute inset-0 bg-gray-700 rounded-xl transform translate-x-2 translate-y-2 opacity-30"></div>
                    <div className="absolute inset-0 bg-gray-600 rounded-xl transform translate-x-1 translate-y-1 opacity-50"></div>

                    {/* Main image */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={imageCarousel[currentImageIndex]}
                        alt={`Photo ${currentImageIndex + 1} of 8`}
                        fill
                        className="object-cover transition-opacity duration-300"
                        priority={currentImageIndex === 0}
                      />

                      {/* Image counter overlay */}
                      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full">
                        {currentImageIndex + 1} / {imageCarousel.length}
                      </div>

                      {/* Click hint overlay - appears on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                          <p className="text-sm font-medium bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                            Click to view next
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-blue rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}