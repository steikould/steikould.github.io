import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter, Download } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/steikould' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/maxcoursey' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/yourusername' },
    { name: 'Email', icon: Mail, href: 'mailto:steikould@gmail.com' },
  ]

  const footerLinks = [
    { name: 'Home', href: '/', enabled: true },
    { name: 'Projects', href: '/projects', enabled: false },
    { name: 'Blog', href: '/blog', enabled: false },
    { name: 'About', href: '/about', enabled: true },
  ]

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-max px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Max Coursey</h3>
            <p className="text-gray-400 leading-relaxed">
              Data Engineer, ML Engineer, and AI Consultant passionate about building scalable
              data solutions and intelligent systems that drive business impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-blue transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Download Resume Button */}
            <a
              href="/MCourseyResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-accent-blue hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                link.enabled ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-accent-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div
                    key={link.name}
                    className="block text-gray-600 cursor-not-allowed"
                  >
                    {link.name} <span className="text-xs text-gray-500">(Coming Soon)</span>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                Interested in collaboration or have a project in mind?
              </p>
              <Link
                href="mailto:steikould@gmail.com"
                className="inline-flex items-center space-x-2 text-accent-blue hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>steikould@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Max Coursey. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}