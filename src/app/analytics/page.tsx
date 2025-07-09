import { Metadata } from 'next'
import AnalyticsSection from '@/components/sections/analytics/AnalyticsSection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'AnalyticsSection | CalcGuard',
}

export default function AnalyticsSectionPage() {
  return (
    <MainLayout>
      <AnalyticsSection />
    </MainLayout>
  )
}
