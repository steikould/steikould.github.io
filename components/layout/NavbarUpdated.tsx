'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  Menu,
  X,
  Code,
  Cpu,
  Zap,
  Database,
  Briefcase,
  FileText
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/lib/personal-info'

const categories = [
  { name: 'Data Engineering', icon: Database, href: '/projects?category=data-engineering' },
  { name: 'Machine Learning', icon: Cpu, href: '/projects?category=machine-learning' },
  { name: 'AI & Automation', icon: Zap, href: '/projects?category=ai-automation' },
  { name: 'Full Stack', icon: Code, href: '/projects?category=full-stack' },
  { name: 'Career', icon: Briefcase, href: '/blog?category=career' },
  { name: 'Technical', icon: FileText, href: '/blog?category=technical' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo - Uses central config */}
          <Link href="/" className="text-xl font-bold text-white hover:text-accent-blue transition-colors">
            {personalInfo.name.split(' ')[0]} {/* Just first name for navbar */}
          </Link>

          {/* Rest of component stays the same... */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center space-x-1 text-white hover:text-accent-blue transition-colors"
              >
                <span>Categories</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isCategoriesOpen && "rotate-180"
                )} />
              </button>

              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-primary-light rounded-2xl shadow-xl border border-gray-200 animate-slide-down">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => {
                        const Icon = category.icon
                        return (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-accent-blue-light transition-colors group"
                            onClick={() => setIsCategoriesOpen(false)}
                          >
                            <Icon className="w-5 h-5 text-accent-blue group-hover:text-accent-blue" />
                            <span className="text-sm font-medium text-text-dark">{category.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-white hover:text-accent-blue transition-colors",
                  pathname === item.href && "text-accent-blue"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-accent-blue transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-primary-dark border-t border-gray-800 animate-slide-down">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block text-white hover:text-accent-blue transition-colors",
                    pathname === item.href && "text-accent-blue"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-800">
                <p className="text-sm font-medium text-gray-400 mb-3">Categories</p>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-center space-x-3 text-white hover:text-accent-blue transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{category.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isCategoriesOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsCategoriesOpen(false)}
        />
      )}
    </nav>
  )
}