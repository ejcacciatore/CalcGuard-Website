import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/hero/HeroSection'
import WhatWeDoSection from '@/components/sections/what-we-do/WhatWeDoSection'
import ChallengeSection from '@/components/sections/challenge/ChallengeSection'
import PlatformSection from '@/components/sections/platform/PlatformSection'
import InefficienciesSection from '@/components/sections/inefficiencies/InefficienciesSection'
import TrinitySection from '@/components/sections/trinity/TrinitySection'
import EvidenceSection from '@/components/sections/evidence/EvidenceSection'
import DiscoverySection from '@/components/sections/discovery/DiscoverySection'
import AnalyticsSection from '@/components/sections/analytics/AnalyticsSection'
import AIBarriersSection from '@/components/sections/ai-barriers/AIBarriersSection'
import CompetitiveEdgeSection from '@/components/sections/competitive-edge/CompetitiveEdgeSection'
import LeadershipSection from '@/components/sections/leadership/LeadershipSection'
import PageDots from '@/components/layout/PageDots'

export default function HomePage() {
  return (
    <>
      <Header />
      <PageDots />
      <HeroSection />
      <WhatWeDoSection />
      <ChallengeSection />
      <PlatformSection />
      <InefficienciesSection />
      <TrinitySection />
      <EvidenceSection />
      <DiscoverySection />
      <AnalyticsSection />
      <AIBarriersSection />
      <CompetitiveEdgeSection />
      <LeadershipSection />
    </>
  )
}