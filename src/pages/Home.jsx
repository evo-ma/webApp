import { useSEO } from '@/hooks/useSEO'
import Hero from '@/components/sections/Hero'
import StatsStrip from '@/components/sections/StatsStrip'
import { ECHOCard } from '@/pages/BaylingAndECHOCard'
import SolutionsGrid from '@/components/sections/SolutionsGrid'
import AIShowcase from '@/components/sections/AIShowcase'
import WhyEVO from '@/components/sections/WhyEVO'
import DeploymentSteps from '@/components/sections/DeploymentSteps'
import CTABanner from '@/components/sections/CTABanner'

export default function HomePage() {
  useSEO(
    'La téléphonie d\'entreprise, réinventée',
    'EVO Technologies — Solutions Microsoft Teams, Contact Center, Agent IA Vocal et analytique pour entreprises au Maroc. Déploiement en 72h, support 24/7.'
  )
  return (
    <>
      <Hero />
      <StatsStrip />
      <ECHOCard />
      <SolutionsGrid />
      <AIShowcase />
      <WhyEVO />
      <DeploymentSteps />
      <CTABanner />
    </>
  )
}
