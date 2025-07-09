import { Metadata } from 'next'
import PlatformSection from '@/components/sections/platform/PlatformSection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'PlatformSection | CalcGuard',
}

export default function PlatformSectionPage() {
  return (
    <MainLayout>
      <PlatformSection />
    </MainLayout>
  )
}
