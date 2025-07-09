import { Metadata } from 'next'
import DisclaimerSection from '@/components/sections/disclaimer/DisclaimerSection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'DisclaimerSection | CalcGuard',
}

export default function DisclaimerSectionPage() {
  return (
    <MainLayout>
      <DisclaimerSection />
    </MainLayout>
  )
}
