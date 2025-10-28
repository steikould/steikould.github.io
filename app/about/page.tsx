import Timeline from '@/components/about/Timeline'
import SkillsList from '@/components/about/SkillsList'
import Hero from '@/components/about/Hero'
import Certifications from '@/components/about/Certifications'

export const metadata = {
  title: 'About | Professional Portfolio',
  description: 'Learn about my background, experience, and skills in data engineering, machine learning, and AI.',
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <Hero />
      <div className="bg-primary-light">
        <Timeline />
        {/* <SkillsList /> */}
        <Certifications />
      </div>
    </div>
  )
}