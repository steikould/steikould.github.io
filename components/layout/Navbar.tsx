'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  FileText,
  Mail,
  Github
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/lib/personal-info'

// Primary navigation pages
const primaryPages = [
  // { name: 'Projects', href: '/projects' }, // Disabled - Coming Soon
  // { name: 'Blog', href: '/blog' }, // Disabled - Coming Soon
  { name: 'About', href: '/about' },
]

// Utility links (right side)
const utilityLinks = [
  { name: 'Resume', icon: FileText, href: '/MCoursyResume.pdf', download: true },
  { name: 'GitHub', icon: Github, href: personalInfo.social.github },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Left: Logo with Profile Photo */}
          <Link href="/about" className="flex items-center gap-3 group">
            {/* Profile Photo */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue to-purple-500 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <Image
                  src="/images/headshot.jpg"
                  alt="Max Coursey"
                  width={40}
                  height={40}
                  className="rounded-full border border-accent-blue/50 object-cover"
                  priority
                />
              </div>
            </div>
            {/* Name */}
            <span className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">
              Max Coursey
            </span>
          </Link>

          {/* Center: Primary Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {primaryPages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                className={cn(
                  "text-base font-medium transition-colors",
                  pathname === page.href
                    ? "text-accent-blue"
                    : "text-white hover:text-accent-blue"
                )}
              >
                {page.name}
              </Link>
            ))}
          </div>

          {/* Right: Utility Links */}
          <div className="hidden md:flex items-center gap-4">
            {/* Available Status Badge */}
            <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-dark-secondary border border-accent-success/30">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-success rounded-full animate-ping opacity-75" />
                <div className="w-2 h-2 bg-accent-success rounded-full relative z-10" />
              </div>
              <span className="text-xs text-accent-success font-medium">Available Q2 2026</span>
            </div>

            {/* Contact Button */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white hover:text-accent-blue transition-colors p-2 rounded-lg hover:bg-primary-dark-secondary"
              title="Contact"
            >
              <Mail className="w-5 h-5" />
            </a>

            {utilityLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-accent-blue transition-colors p-2 rounded-lg hover:bg-primary-dark-secondary"
                  title={link.name}
                  {...(link.download && { download: true })}
                  {...(!link.download && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-accent-blue transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-dark border-t border-gray-800 animate-slide-down">
            <div className="px-6 py-4 space-y-4">
              {/* Primary Pages */}
              <div className="space-y-2">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Pages</p>
                {primaryPages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className={cn(
                      "block text-base font-medium transition-colors py-2",
                      pathname === page.href
                        ? "text-accent-blue"
                        : "text-white hover:text-accent-blue"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-800"></div>

              {/* Utility Links */}
              <div className="space-y-2">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Quick Links</p>

                {/* Available Status Badge */}
                <div className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-primary-dark-secondary border border-accent-success/30 w-fit">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent-success rounded-full animate-ping opacity-75" />
                    <div className="w-2 h-2 bg-accent-success rounded-full relative z-10" />
                  </div>
                  <span className="text-xs text-accent-success font-medium">Available Q2 2026</span>
                </div>

                {/* Contact Button */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-accent-blue hover:bg-accent-blue/80 text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Contact</span>
                </a>

                {utilityLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-3 text-white hover:text-accent-blue transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                      {...(link.download && { download: true })}
                      {...(!link.download && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{link.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}