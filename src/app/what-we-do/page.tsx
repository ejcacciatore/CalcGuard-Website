import { Metadata } from 'next'
import WhatWeDoSection from '@/components/sections/what-we-do/WhatWeDoSection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'WhatWeDoSection | CalcGuard',
}

export default function WhatWeDoSectionPage() {
  return (
    <MainLayout>
      <WhatWeDoSection />
    </MainLayout>
  )
}
