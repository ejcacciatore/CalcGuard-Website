'use client'

import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/hero/HeroSection'
import WhatWeDoSection from '@/components/sections/what-we-do/WhatWeDoSection'
import ChallengeSection from '@/components/sections/challenge/ChallengeSection'
import PlatformSection from '@/components/sections/platform/PlatformSection'
import LeadershipSection from '@/components/sections/leadership/LeadershipSection'
import DisclaimerSection from '@/components/sections/disclaimer/DisclaimerSection'
import PageDots from '@/components/layout/PageDots'

export default function HomePage() {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
          height: 100%;
          overflow: hidden;
        }

        #snap-container {
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: 100vh;
        }

        section {
          scroll-snap-align: start;
          height: 100vh;
          width: 100vw;
        }
      `}</style>

      {/* 🔒 Fixed Layout Elements */}
      <Header />
      <PageDots />

      {/* 🔃 Scrollable Section Snap Flow */}
      <div id="snap-container">
        <HeroSection />
        <WhatWeDoSection />
        <ChallengeSection />
        <PlatformSection />
        <LeadershipSection />
        <DisclaimerSection />
      </div>
    </>
  )
}
