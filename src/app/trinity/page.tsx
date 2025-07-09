import { Metadata } from 'next'
import TrinitySection from '@/components/sections/trinity/TrinitySection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'TrinitySection | CalcGuard',
}

export default function TrinitySectionPage() {
  return (
    <MainLayout>
      <TrinitySection />
    </MainLayout>
  )
}
