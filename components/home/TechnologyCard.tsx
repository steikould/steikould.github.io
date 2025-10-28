'use client'

import { useState } from 'react'

interface TechnologyCardProps {
  name: string
  icon: string
  color: string
  hoverContent: string
}

// SVG icons for each technology
const techIcons: { [key: string]: JSX.Element } = {
  gcp: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="#4285F4"/>
    </svg>
  ),
  python: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M14.25 2.1l-.25-.03-.25.03-10.5 1.71-.25.12v15.54l.25.12 10.5 1.71.25.03.25-.03 10.5-1.71.25-.12V3.93l-.25-.12-10.5-1.71zM15 18.6l-1-.13V5.52l1-.13v13.21zm7-1.07l-5 .81V5.66l5-.81v12.68z" fill="#3776AB"/>
    </svg>
  ),
  tensorflow: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M12 2.5l-9 4v6.5c0 5.25 3.5 10.5 9 12 5.5-1.5 9-6.75 9-12V6.5l-9-4zm0 2.19l7 3.11v5.7c0 4.16-2.84 8.6-7 9.81-4.16-1.21-7-5.65-7-9.81V7.8l7-3.11z" fill="#FF6F00"/>
    </svg>
  ),
  kubernetes: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M12 2L3.5 7v10l8.5 5 8.5-5V7L12 2zm0 2.18L18.3 7.5v9l-6.3 3.68L5.7 16.5v-9L12 4.18z" fill="#326CE5"/>
      <circle cx="12" cy="12" r="2" fill="#326CE5"/>
    </svg>
  ),
  beam: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M7 7h10v3H7zm0 7h10v3H7z" fill="#00D1B2"/>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 18.54L4 16.18V7.82L12 3.46l8 4.36v8.36l-8 4.36z" stroke="#00D1B2" fill="none" strokeWidth="1.5"/>
    </svg>
  ),
  mlflow: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0194E2" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  terraform: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M8 2v8l7 4V6L8 2zm7 8l7 4v8l-7-4v-8zM1 6v8l7 4V10L1 6z" fill="#7B42BC"/>
    </svg>
  ),
  bigquery: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M17.6 9.4l-5.6 9.7-5.6-9.7h11.2M12 2L2 20h20L12 2z" fill="#4285F4"/>
    </svg>
  ),
  llamaindex: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M12 2l4 4-4 4-4-4 4-4zm0 8l4 4-4 4-4-4 4-4zm6 6l4 4-4 4-4-4 4-4zm-12 0l4 4-4 4-4-4 4-4z" fill="#8B5CF6"/>
    </svg>
  ),
  feast: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" fill="#FF6B6B"/>
      <rect x="14" y="3" width="7" height="7" fill="#FF6B6B" opacity="0.7"/>
      <rect x="3" y="14" width="7" height="7" fill="#FF6B6B" opacity="0.7"/>
      <rect x="14" y="14" width="7" height="7" fill="#FF6B6B"/>
    </svg>
  ),
  kubeedge: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M12 2L3.5 7v10l8.5 5 8.5-5V7L12 2z" fill="none" stroke="#00C7B7" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="3" fill="#00C7B7"/>
      <circle cx="12" cy="6" r="1.5" fill="#00C7B7"/>
      <circle cx="12" cy="18" r="1.5" fill="#00C7B7"/>
    </svg>
  ),
  qdrant: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" fill="#DC2626"/>
      <circle cx="6" cy="6" r="2" fill="#DC2626" opacity="0.7"/>
      <circle cx="18" cy="6" r="2" fill="#DC2626" opacity="0.7"/>
      <circle cx="6" cy="18" r="2" fill="#DC2626" opacity="0.7"/>
      <circle cx="18" cy="18" r="2" fill="#DC2626" opacity="0.7"/>
    </svg>
  ),
  lakefs: (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M12 2L4 6v6l8 4 8-4V6l-8-4z" fill="#4F46E5"/>
      <path d="M4 12v6l8 4 8-4v-6" fill="#4F46E5" opacity="0.6"/>
    </svg>
  )
}

export default function TechnologyCard({ name, icon, color, hoverContent }: TechnologyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-gray-800 hover:border-accent-blue/50 transition-all group cursor-pointer">
        {techIcons[icon] || techIcons.gcp}
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
          {name}
        </span>
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute z-50 w-80 p-4 mt-2 bg-gray-900 border border-accent-blue/30 rounded-lg shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-sm text-gray-300 leading-relaxed">
            {hoverContent}
          </div>
          {/* Arrow pointer */}
          <div className="absolute -top-2 left-8 w-4 h-4 bg-gray-900 border-l border-t border-accent-blue/30 transform rotate-45"></div>
        </div>
      )}
    </div>
  )
}
