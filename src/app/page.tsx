'use client'
import HeroSection from '@/components/sections/hero/HeroSection'
//import PageScroller from '@/components/sections/PageScroller/PageScroller'
//import OverviewSection from '@/components/sections/overview/OverviewSection'
import WhatWeDoSection from '@/components/sections/what-we-do/WhatWeDoSection'
import ChallengeSection from '@/components/sections/challenge/ChallengeSection'
import PlatformSection from '@/components/sections/platform/PlatformSection'
import DiscoverySection from '@/components/sections/discovery/DiscoverySection'
import LeadershipSection from '@/components/sections/leadership/LeadershipSection'
import DisclaimerSection from '@/components/sections/disclaimer/DisclaimerSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <PageScroller /> */}
      {/* <OverviewSection /> */}
      <WhatWeDoSection />
      <ChallengeSection />
      <PlatformSection />
      <DiscoverySection />
      <LeadershipSection />
      <DisclaimerSection />
    </>
  )
}
