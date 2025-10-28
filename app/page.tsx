import Hero from '@/components/home/Hero'
import Capabilities from '@/components/home/Capabilities'
import BattleTestedStack from '@/components/home/BattleTestedStack'
import InnovationLab from '@/components/home/InnovationLab'
import ProjectShowcase from '@/components/home/ProjectShowcase'
import CTAHub from '@/components/home/CTAHub'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Capabilities />
      <BattleTestedStack />
      <ProjectShowcase />
      <InnovationLab />
      <CTAHub />
    </div>
  )
}