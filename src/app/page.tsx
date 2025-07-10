'use client'
/*pages changed*/
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import HeroSection from '@/components/sections/hero/HeroSection'
import PageScroller from '@/components/sections/PageScroller/PageScroller'
import WhatWeDoSection from '@/components/sections/what-we-do/WhatWeDoSection'
import ChallengeSection from '@/components/sections/challenge/ChallengeSection'
import PlatformSection from '@/components/sections/platform/PlatformSection'
import LeadershipSection from '@/components/sections/leadership/LeadershipSection'
import DisclaimerSection from '@/components/sections/disclaimer/DisclaimerSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Palantir-style Page Scroller - Between Hero and What We Do */}
      <PageScroller />

      <WhatWeDoSection />
      <ChallengeSection />
      <PlatformSection />
      <LeadershipSection />
      <DisclaimerSection />
    </>
  )
}