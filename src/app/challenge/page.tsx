import { Metadata } from 'next'
import ChallengeSection from '@/components/sections/challenge/ChallengeSection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'ChallengeSection | CalcGuard',
}

export default function ChallengeSectionPage() {
  return (
    <MainLayout>
      <ChallengeSection />
    </MainLayout>
  )
}
