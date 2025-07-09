import { Metadata } from 'next'
import LeadershipSection from '@/components/sections/leadership/LeadershipSection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'LeadershipSection | CalcGuard',
}

export default function LeadershipSectionPage() {
  return (
    <MainLayout>
      <LeadershipSection />
    </MainLayout>
  )
}
