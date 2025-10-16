import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2'

  const variants = {
    primary: 'bg-accent-blue text-white hover:bg-blue-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white',
    outline: 'bg-white border-2 border-gray-300 text-text-dark hover:border-accent-blue hover:text-accent-blue'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}