import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a0e1a',          // Dark navy background
          'dark-secondary': '#1a1f2e', // Slightly lighter card background
          'dark-card': '#2a2f3e',   // Even lighter for timeline cards
          light: '#f8f9fa',
        },
        accent: {
          blue: '#5b7cff',          // Primary accent blue
          'blue-hover': '#7d95ff',  // Lighter blue for hover
          success: '#00ff88',       // Green for active status
          warning: '#fbbf24',       // Yellow for development
        },
        text: {
          light: '#ffffff',         // Pure white for headlines
          'light-gray': '#e0e0e0',  // Light gray for subheadlines
          gray: '#b0b0b0',          // Gray for body text
          muted: '#6b7280',         // Muted gray for labels
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        // Desktop sizes (default)
        'name-logo': ['28px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'eyebrow': ['14px', { lineHeight: '1.4', fontWeight: '400', letterSpacing: '0.1em' }],
        'headline': ['48px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }],
        'subheadline': ['20px', { lineHeight: '1.4', fontWeight: '400' }],
        'body': ['17px', { lineHeight: '1.6', fontWeight: '400' }],
        'metric-number': ['32px', { lineHeight: '1.1', fontWeight: '700' }],
        'metric-label': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
        'section-heading': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'card-title': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'button': ['16px', { lineHeight: '1.5', fontWeight: '500' }],

        // Mobile sizes (use with sm: breakpoint)
        'name-logo-mobile': ['22px', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-mobile': ['36px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }],
        'subheadline-mobile': ['17px', { lineHeight: '1.4', fontWeight: '400' }],
        'body-mobile': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'metric-number-mobile': ['24px', { lineHeight: '1.1', fontWeight: '700' }],
        'section-heading-mobile': ['28px', { lineHeight: '1.2', fontWeight: '700' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 16px rgba(91, 124, 255, 0.3)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.2)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config