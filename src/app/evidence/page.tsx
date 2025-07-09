import { Metadata } from 'next'
import EvidenceSection from '@/components/sections/evidence/EvidenceSection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'EvidenceSection | CalcGuard',
}

export default function EvidenceSectionPage() {
  return (
    <MainLayout>
      <EvidenceSection />
    </MainLayout>
  )
}
