import { Metadata } from 'next'
import CompetitiveEdgeSection from '@/components/sections/competitive-edge/CompetitiveEdgeSection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'CompetitiveEdgeSection | CalcGuard',
}

export default function CompetitiveEdgeSectionPage() {
  return (
    <MainLayout>
      <CompetitiveEdgeSection />
    </MainLayout>
  )
}
