import ProjectGrid from '@/components/projects/ProjectGrid'

export const metadata = {
  title: 'Projects | Professional Portfolio',
  description: 'Explore my data engineering, machine learning, and AI projects showcasing innovative solutions and technical expertise.',
}

export default function ProjectsPage() {
  return (
    <div className="pt-8 min-h-screen bg-primary-light">
      <div className="py-8">
        <div className="container-max">
          {/* Projects Grid */}
          <ProjectGrid />
        </div>
      </div>
    </div>
  )
}