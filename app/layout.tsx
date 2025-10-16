import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Portfolio | Data Engineer & ML Specialist',
  description: 'Data Engineer, Machine Learning Engineer, and AI Consultant specializing in scalable data solutions and intelligent systems.',
  keywords: ['Data Engineering', 'Machine Learning', 'AI', 'TypeScript', 'Python', 'Cloud Computing'],
  authors: [{ name: 'Max Coursey' }],
  openGraph: {
    title: 'Professional Portfolio | Data Engineer & ML Specialist',
    description: 'Data Engineer, Machine Learning Engineer, and AI Consultant specializing in scalable data solutions and intelligent systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}