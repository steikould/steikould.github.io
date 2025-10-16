import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Skills from '@/components/home/Skills'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturedProjects />
      <Skills />
    </div>
  )
}