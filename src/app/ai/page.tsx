import { Metadata } from 'next'
import AIBarriersSection from '@/components/sections/ai-barriers/AIBarriersSection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'AIBarriersSection | CalcGuard',
}

export default function AIBarriersSectionPage() {
  return (
    <MainLayout>
      <AIBarriersSection />
    </MainLayout>
  )
}
