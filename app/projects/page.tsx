'use client'

import { useSearchParams } from 'next/navigation'
import ProjectGrid from '@/components/projects/ProjectGrid'

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  return (
    <div className="pt-8 min-h-screen bg-primary-dark">
      <div className="py-8">
        <div className="container-max">
          {/* Projects Grid */}
          <ProjectGrid initialCategory={category || undefined} />
        </div>
      </div>
    </div>
  )
}