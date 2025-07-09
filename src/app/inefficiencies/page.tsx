import { Metadata } from 'next'
import InefficienciesSection from '@/components/sections/inefficiencies/InefficienciesSection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'InefficienciesSection | CalcGuard',
}

export default function InefficienciesSectionPage() {
  return (
    <MainLayout>
      <InefficienciesSection />
    </MainLayout>
  )
}
