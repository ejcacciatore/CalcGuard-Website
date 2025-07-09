import { Metadata } from 'next'
import DiscoverySection from '@/components/sections/discovery/DiscoverySection'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'DiscoverySection | CalcGuard',
}

export default function DiscoverySectionPage() {
  return (
    <MainLayout>
      <DiscoverySection />
    </MainLayout>
  )
}
