'use client'

import { Header } from '@/components/layout/Header'
import { PageDots } from '@/components/layout/PageDots'
import { useActiveSection } from '@/hooks/useActiveSection'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { useScrollToSection } from '@/hooks/useScrollToSection'

export default function HomePage() {
  const activeSection = useActiveSection()
  const scrollToSection = useScrollToSection()

  return (
    <div className="relative">
      <Header />
      <PageDots activeSection={activeSection} />
      
      <main>
        {/* Section 1: Hero - Fixed Layout */}
        <Section id="home" background="/images/main_background.png">
          <div className="min-h-screen flex items-center justify-center relative">
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/10 z-0" />
            
            <Container className="relative z-10 text-center py-20">
              <div className="max-w-6xl mx-auto">
                <Image
                  src="/images/landing page logo.png"
                  alt="CalcGuard Technologies - Seamless B2B Data & Analytics Connectivity"
                  width={1200}
                  height={700}
                  priority
                  className="w-full h-auto max-w-4xl mx-auto drop-shadow-2xl"
                />
              </div>
            </Container>
            
            {/* Scroll indicator */}
            <button
              onClick={() => scrollToSection('what-we-do')}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 animate-bounce"
              aria-label="Scroll to What We Do section"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </Section>

        {/* Section 2: What We Do */}
        <Section id="what-we-do" background="#ffffff">
          <div className="grid md:grid-cols-2 min-h-screen">
            {/* Left Column */}
            <div className="flex flex-col justify-center p-8 md:p-16 relative">
              <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-red-500" />
              <div className="max-w-md mt-20 animate-fade-in">
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
                
                {/* Full Control Icon */}
                <div className="text-center mt-8">
                  <Image
                    src="/images/Full_Control_icon.png"
                    alt="Full Control of Sensitive Information"
                    width={80}
                    height={48}
                    className="inline-block hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative bg-gray-50 overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'url("/images/main_background.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              <div className="relative flex flex-col justify-center h-full pl-8 md:pl-24 pr-8 space-y-8 md:space-y-10 py-16">
                {/* Feature 1 */}
                <div className="animate-slide-up">
                  <Image
                    src="/images/Unify_icon.png"
                    alt="Unified Icon"
                    width={48}
                    height={48}
                    className="mb-3"
                  />
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800 mb-2">
                      UNIFIED, SECURED & CONTROLLED
                    </h3>
                    <p className="text-slate-800 leading-relaxed">
                      Our modern architecture unifies fragmented data, empowering organizations to securely harness AI for secure, efficient, low-cost collaboration.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <Image
                    src="/images/global_equity_icon.svg"
                    alt="Global Equity Icon"
                    width={48}
                    height={48}
                    className="mb-3"
                  />
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800 mb-2">
                      GLOBAL EQUITY TRADING
                    </h3>
                    <p className="text-slate-800 leading-relaxed">
                      Our current focus is global equity markets, providing advanced analytics and data interoperability for institutional investors, brokers and financial service providers.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <Image
                    src="/images/adaptive.svg"
                    alt="Adaptable Icon"
                    width={48}
                    height={48}
                    className="mb-3"
                  />
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800 mb-2">
                      ADAPTABLE & EXTENSIBLE
                    </h3>
                    <p className="text-slate-800 leading-relaxed">
                      CalcGuard's platform is architected for rapid expansion into adjacent verticals where similar data complexity, privacy and collaboration challenges exist.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 3: Challenge */}
        <Section id="challenge" background="/images/3background.png">
          <div className="grid md:grid-cols-2 min-h-screen items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center p-8 md:p-24 bg-white/90 backdrop-blur-sm h-full">
              <div className="animate-fade-in">
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
                  delivering a complete, usable solution - typically at the points 
                  of data ingestion (first mile) and analytics delivery (last mile).
                </p>
              </div>
            </div>

            {/* Right Column - Dashboard Image */}
            <div className="h-full flex items-center justify-center p-8">
              <div className="animate-scale-in">
                <Image
                  src="/images/main_dashboard.png"
                  alt="CalcGuard Platform Dashboard"
                  width={800}
                  height={600}
                  className="w-full max-w-2xl h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Section 4: Platform */}
        <Section id="platform" background="#f1f5f9">
          <Container className="flex items-center justify-center min-h-screen py-16">
            <div className="text-center animate-fade-in">
              <Image
                src="/images/page4_design.png"
                alt="CalcGuard Platform Architecture"
                width={1200}
                height={800}
                className="w-full max-w-5xl h-auto mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Container>
        </Section>

        {/* Section 5: Inefficiencies */}
        <Section id="inefficiencies" background="#fef3c7">
          <Container className="flex items-center justify-center min-h-screen py-16">
            <div className="text-center animate-fade-in">
              <Image
                src="/images/Page_Design5.png"
                alt="Inefficiencies Erode Returns"
                width={1200}
                height={800}
                className="w-full max-w-5xl h-auto mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Container>
        </Section>

        {/* Section 6: Trinity */}
        <Section id="trinity" background="#1e293b">
          <Container className="flex items-center justify-center min-h-screen py-16">
            <div className="text-center animate-fade-in">
              <Image
                src="/images/Page_Design6.png"
                alt="Unifying the Analytics Trinity"
                width={1200}
                height={800}
                className="w-full max-w-5xl h-auto mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Container>
        </Section>

        {/* Section 7: Evidence */}
        <Section id="evidence" background="#1e293b">
          <Container className="flex items-center justify-center min-h-screen py-16">
            <div className="text-center animate-fade-in">
              <Image
                src="/images/Page_Design7.png"
                alt="Evidence-Based Decisions for Equities Trading"
                width={1200}
                height={800}
                className="w-full max-w-5xl h-auto mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Container>
        </Section>

        {/* Section 8: Discovery */}
        <Section id="discovery" background="#1e293b">
          <Container className="flex items-center justify-center min-h-screen py-16">
            <div className="text-center animate-fade-in">
              <Image
                src="/images/Page_Design8.png"
                alt="Accelerate Discovery & Speed to Insight"
                width={1200}
                height={800}
                className="w-full max-w-5xl h-auto mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Container>
        </Section>

        {/* Section 9: Analytics */}
        <Section id="analytics" background="#1e293b">
          <Container className="flex items-center justify-center min-h-screen py-16">
            <div className="text-center animate-fade-in">
              <Image
                src="/images/Page_Design9.png"
                alt="Analytics Platform"
                width={1200}
                height={800}
                className="w-full max-w-5xl h-auto mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Container>
        </Section>

        {/* Section 10: AI Barriers */}
        <Section id="ai-barriers" background="#1e293b">
          <Container className="flex items-center justify-center min-h-screen py-16">
            <div className="text-center animate-fade-in">
              <Image
                src="/images/Page_Design10.png"
                alt="Overcome Every AI Barrier in One Move"
                width={1200}
                height={800}
                className="w-full max-w-5xl h-auto mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Container>
        </Section>

        {/* Section 11: Competitive Edge */}
        <Section id="competitive-edge" background="#1e293b">
          <Container className="flex items-center justify-center min-h-screen py-16">
            <div className="text-center animate-fade-in">
              <Image
                src="/images/Page_Design11.png"
                alt="Our Competitive Edge"
                width={1200}
                height={800}
                className="w-full max-w-5xl h-auto mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Container>
        </Section>

        {/* Section 12: Leadership */}
        <Section id="leadership" background="#ffffff">
          <Container className="py-16 min-h-screen flex items-center">
            <div className="grid lg:grid-cols-3 gap-8 items-start w-full">
              {/* Left Column: CalcGuard Leaders */}
              <div className="flex flex-col justify-between h-full animate-slide-up">
                <div className="space-y-8 text-center lg:text-right">
                  {/* Tim Sargent */}
                  <div className="flex flex-col lg:flex-row-reverse items-center justify-end gap-4">
                    <Image
                      src="/images/tim.png"
                      alt="Tim Sargent"
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg">TIM SARGENT, CEO</h3>
                      <p className="text-sm text-slate-600 mt-1">Founded OSG, sold to IHS Markit, led wall street quant, index and trading groups.</p>
                      <a href="#" className="text-sm text-blue-600 hover:underline">LinkedIn</a>
                    </div>
                  </div>

                  {/* Jim Northey */}
                  <div className="flex flex-col lg:flex-row-reverse items-center justify-end gap-4">
                    <Image
                      src="/images/jim.png"
                      alt="Jim Northey"
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg">JIM NORTHEY, CTO</h3>
                      <p className="text-sm text-slate-600 mt-1">FIX co-chair, 3 ISO committees, ex-Itiviti SVP: LaSalle co-founder.</p>
                      <a href="#" className="text-sm text-blue-600 hover:underline">LinkedIn</a>
                    </div>
                  </div>

                  {/* Enrico Cacciatore */}
                  <div className="flex flex-col lg:flex-row-reverse items-center justify-end gap-4">
                    <Image
                      src="/images/enrico.png"
                      alt="Enrico Cacciatore"
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg">ENRICO CACCIATORE, CPO</h3>
                      <p className="text-sm text-slate-600 mt-1">Ex-Voya quant trading and market structure analytics.</p>
                      <a href="#" className="text-sm text-blue-600 hover:underline">LinkedIn</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center lg:text-right">
                  <Image
                    src="/images/CG_Leadership.png"
                    alt="CalcGuard Leadership"
                    width={200}
                    height={100}
                    className="inline-block"
                  />
                </div>
              </div>

              {/* Center Column: Main Content */}
              <div className="text-center py-8 lg:border-l lg:border-r lg:px-8 h-full flex flex-col justify-center animate-fade-in">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  Focus, Expertise & Accountability
                </p>
                <h2 className="text-3xl font-bold text-slate-800 leading-tight mb-4">
                  A LEADERSHIP<br />TRIPLE THREAT
                </h2>
                <div className="w-16 h-1 bg-red-500 mx-auto mb-6" />
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  We've engineered a leadership triumvirate combining CalcGuard management, 
                  industry advisors and an investment management advisory council (IMAC) to 
                  ensure broad perspectives and proactively eliminate blind spots.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The IMAC unifies industry voices to advance transparency, standardize 
                  platform definitions, align integration priorities and drive innovation.
                </p>
              </div>

              {/* Right Column: Industry Advisors */}
              <div className="flex flex-col justify-between h-full animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="space-y-8 text-center lg:text-left">
                  {/* Jeff Estella */}
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    <Image
                      src="/images/jeff.png"
                      alt="Jeff Estella"
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-bold text-lg">JEFF ESTELLA</h3>
                      <p className="text-sm text-slate-600 mt-1">Senior trading roles at MFS, now advises finance industry.</p>
                      <a href="#" className="text-sm text-blue-600 hover:underline">LinkedIn</a>
                    </div>
                  </div>

                  {/* Bill Hartnett */}
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    <Image
                      src="/images/bill.png"
                      alt="Bill Hartnett"
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-bold text-lg">BILL HARTNETT</h3>
                      <p className="text-sm text-slate-600 mt-1">Ex-Citi fintech investor with deep expertise in capital markets digitization.</p>
                      <a href="#" className="text-sm text-blue-600 hover:underline">LinkedIn</a>
                    </div>
                  </div>

                  {/* Mark Schaedel */}
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    <Image
                      src="/images/mark.png"
                      alt="Mark Schaedel"
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-bold text-lg">MARK SCHAEDEL</h3>
                      <p className="text-sm text-slate-600 mt-1">Leads DataBP: 13 years at NYSE IHS Markit, COBA co-founder.</p>
                      <a href="#" className="text-sm text-blue-600 hover:underline">LinkedIn</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-24 text-center lg:text-left">
                  <Image
                    src="/images/Indsutry_Leadership.png"
                    alt="Industry Leadership"
                    width={200}
                    height={100}
                    className="inline-block"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Section 13: Disclaimer */}
        <Section id="disclaimer" background="#1e293b">
          <Container className="flex items-center justify-center min-h-screen py-16">
            <div className="text-center animate-fade-in">
              <Image
                src="/images/Page_Design13.png"
                alt="Disclaimer"
                width={1200}
                height={800}
                className="w-full max-w-5xl h-auto mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Container>
        </Section>
      </main>
    </div>
  )
}