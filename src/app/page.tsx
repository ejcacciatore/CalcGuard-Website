'use client'

import { Header } from '@/components/layout/Header'
import { PageDots } from '@/components/layout/PageDots'
import { useActiveSection } from '@/hooks/useActiveSection'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'

export default function HomePage() {
  const activeSection = useActiveSection()

  return (
    <div className="relative">
      <Header />
      <PageDots activeSection={activeSection} />
      
      <main>
        {/* Hero Section */}
        <Section id="home" background="/images/main_background.png">
          <Container className="flex items-center justify-center min-h-screen">
            <div className="text-center animate-fade-in">
              <Image
                src="/images/landing page logo.png"
                alt="CalcGuard Technologies"
                width={1000}
                height={600}
                priority
                className="w-full max-w-4xl h-auto mx-auto drop-shadow-2xl"
              />
            </div>
          </Container>
        </Section>

        {/* What We Do Section */}
        <Section id="what-we-do" background="#ffffff">
          <div className="grid md:grid-cols-2 min-h-screen">
            <div className="flex flex-col justify-center p-8 md:p-16 relative">
              <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-red-500" />
              <div className="max-w-md mt-20">
                <p className="text-sm text-slate-700 uppercase tracking-wider font-semibold mb-2">
                  CalcGuard® Technologies
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-slate-800 leading-tight mb-6">
                  WHAT<br />WE DO
                </h2>
                <div className="w-20 h-1 bg-red-500 mb-6" />
                <p className="text-slate-900 leading-relaxed text-lg">
                  We deliver a scalable B2B platform for secure aggregation, normalization 
                  and analysis of sensitive data, empowering organizations with actionable insights.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 flex items-center justify-center p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Platform Features</h3>
                <p className="text-slate-600">Advanced analytics and data connectivity</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Challenge Section */}
        <Section id="challenge" background="/images/3background.png">
          <div className="grid md:grid-cols-2 min-h-screen items-center">
            <div className="flex flex-col justify-center p-8 md:p-24 bg-white/90 h-full">
              <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
                Accelerate Your AI Journey
              </p>
              <h2 className="text-4xl font-bold text-slate-800 leading-tight mb-6">
                Solving The<br />
                First Mile, Last Mile<br />
                Challenge
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                The first mile and last mile are the hardest-to-solve parts of 
                delivering a complete, usable solution.
              </p>
            </div>
            <div className="h-full flex items-center justify-center p-8">
              <div className="w-full max-w-2xl h-64 bg-white/10 rounded-lg flex items-center justify-center">
                <p className="text-white text-center">Platform Dashboard Visualization</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Platform Section */}
        <Section id="platform" background="#f1f5f9">
          <Container className="flex items-center justify-center min-h-screen py-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-800 mb-8">Our Platform</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Advanced B2B data and analytics connectivity platform
              </p>
            </div>
          </Container>
        </Section>

        {/* Leadership Section */}
        <Section id="leadership" background="#ffffff">
          <Container className="py-16 min-h-screen flex items-center">
            <div className="text-center w-full">
              <h2 className="text-4xl font-bold text-slate-800 mb-8">Leadership</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Our experienced team driving innovation in fintech
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  )
}