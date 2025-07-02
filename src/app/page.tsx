import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/hero/HeroSection'
import WhatWeDoSection from '@/components/sections/what-we-do/WhatWeDoSection'
import ChallengeSection from '@/components/sections/challenge/ChallengeSection'
import PlatformSection from '@/components/sections/platform/PlatformSection'
import InefficienciesSection from '@/components/sections/inefficiencies/InefficienciesSection'
import TrinitySection from '@/components/sections/trinity/TrinitySection'
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
    </>
  )
}