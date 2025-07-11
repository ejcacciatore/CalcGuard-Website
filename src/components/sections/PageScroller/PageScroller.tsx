'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './PageScroller.module.css'

// Import your section components
import InefficienciesSection from '@/components/sections/inefficiencies/InefficienciesSection'
import TrinitySection from '@/components/sections/trinity/TrinitySection'
import EvidenceSection from '@/components/sections/evidence/EvidenceSection'
import DiscoverySection from '@/components/sections/discovery/DiscoverySection'
import AnalyticsSection from '@/components/sections/analytics/AnalyticsSection'
import AIBarriersSection from '@/components/sections/ai-barriers/AIBarriersSection'
import CompetitiveEdgeSection from '@/components/sections/competitive-edge/CompetitiveEdgeSection'

interface Section {
  id: string
  title: string
  component: React.ComponentType
}

const sections: Section[] = [
  { id: 'inefficiencies', title: 'INEFFICIENCIES', component: InefficienciesSection },
  { id: 'trinity', title: 'TRINITY', component: TrinitySection },
  { id: 'evidence', title: 'EVIDENCE', component: EvidenceSection },
  { id: 'discovery', title: 'DISCOVERY', component: DiscoverySection },
  { id: 'analytics', title: 'ANALYTICS', component: AnalyticsSection },
  { id: 'ai', title: 'AI BARRIERS', component: AIBarriersSection },
  { id: 'edge', title: 'COMPETITIVE EDGE', component: CompetitiveEdgeSection }
]

// Loading component for Suspense fallback
const PageScrollerLoading = () => (
  <div className={styles.pageScrollerContainer}>
    <div className={styles.progressBarSystem}>
      <div className={styles.progressBarsWrapper}>
        {sections.map((section) => (
          <div key={section.id} className={styles.progressBarItem}>
            <div className={styles.progressBarLabel}>{section.title}</div>
            <div className={styles.progressBarTrack}>
              <div className={styles.progressBarFill} style={{ width: '0%' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.contentArea}>
      <div className={styles.contentSlider}>
        <div className={styles.sectionWrapper}>
          <div>Loading...</div>
        </div>
      </div>
    </div>
  </div>
)

// Main PageScroller component
const PageScrollerContent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const SECTION_DURATION = 10000 // 10 seconds per section

  // Check if user came from external navigation or has specific section target
  useEffect(() => {
    const referrer = document.referrer
    const currentHost = window.location.host
    const isExternalNavigation = referrer && !referrer.includes(currentHost)
    const hasHashInUrl = window.location.hash
    const hasSearchParams = searchParams.toString()
    
    // If user came from external site, has hash, or has search params, pause auto-scroll
    if (isExternalNavigation || hasHashInUrl || hasSearchParams) {
      setIsAutoScrollPaused(true)
      setShowControls(true)
    } else {
      // If coming back normally (like from home page), resume auto-scrolling
      setIsAutoScrollPaused(false)
      setShowControls(false)
    }

    // Check if navigated to specific section
    const targetSection = window.location.hash.replace('#', '') || searchParams.get('section')
    if (targetSection) {
      const sectionIndex = sections.findIndex(s => s.id === targetSection)
      if (sectionIndex !== -1) {
        setCurrentIndex(sectionIndex)
        setIsAutoScrollPaused(true)
        setShowControls(true)
      }
    }
  }, [searchParams])

  // Auto-scroll logic
  useEffect(() => {
    if (isAutoScrollPaused) return
    
    startProgress()
    return () => stopProgress()
  }, [currentIndex, isAutoScrollPaused])

  const startProgress = () => {
    stopProgress()
    let elapsed = 0
    const step = 16 // ~60fps

    intervalRef.current = setInterval(() => {
      elapsed += step
      const newProgress = Math.min((elapsed / SECTION_DURATION) * 100, 100)
      setProgress(newProgress)

      if (elapsed >= SECTION_DURATION) {
        goToNext()
      }
    }, step)
  }

  const stopProgress = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % sections.length
    setCurrentIndex(nextIndex)
    setProgress(0)
  }

  // Manual section navigation - ALWAYS pauses auto-scroll
  const goToSection = (index: number) => {
    if (index === currentIndex) return
    setCurrentIndex(index)
    setProgress(0)
    setIsAutoScrollPaused(true) // Pause when user manually navigates
    setShowControls(true)       // Show controls for user management
  }

  const goHome = () => {
    // When going home, clear any pause state so when they come back it resumes
    setIsAutoScrollPaused(false)
    setShowControls(false)
    router.push('/')
  }

  const goBack = () => {
    // When going back, clear any pause state so when they return it resumes
    setIsAutoScrollPaused(false)
    setShowControls(false)
    router.back()
  }

  // Listen for page visibility changes to resume auto-scroll when returning
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // When page becomes visible again, check if we should resume
        const hasExternalContext = window.location.hash || searchParams.toString()
        if (!hasExternalContext) {
          // Resume auto-scrolling if no external context
          setIsAutoScrollPaused(false)
          setShowControls(false)
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [searchParams])

  // Listen for browser navigation to handle resume logic
  useEffect(() => {
    const handlePopState = () => {
      // When browser back/forward is used, check context
      const hasExternalContext = window.location.hash || searchParams.toString()
      if (!hasExternalContext) {
        setIsAutoScrollPaused(false)
        setShowControls(false)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [searchParams])

  return (
    <div className={styles.pageScrollerContainer}>
      {/* Desktop Progress Bar System */}
      <div className={styles.progressBarSystem}>
        <div className={styles.progressBarsWrapper}>
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`${styles.progressBarItem} ${
                index === currentIndex ? styles.active : ''
              } ${index < currentIndex ? styles.completed : ''}`}
              onClick={() => goToSection(index)}
            >
              <div className={styles.progressBarLabel}>{section.title}</div>
              <div className={styles.progressBarTrack}>
                <div
                  className={styles.progressBarFill}
                  style={{
                    width: index === currentIndex && !isAutoScrollPaused ? `${progress}%` : 
                           index < currentIndex ? '100%' : '0%'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation (Bottom Dots) */}
      <div className={styles.mobileNavigation}>
        <div className={styles.mobileDots}>
          {sections.map((section, index) => (
            <div
              key={`mobile-${section.id}`}
              className={`${styles.mobileDot} ${
                index === currentIndex ? styles.active : ''
              } ${index < currentIndex ? styles.completed : ''}`}
              onClick={() => goToSection(index)}
            />
          ))}
        </div>
      </div>

      {/* Content Display Area */}
      <div className={styles.contentArea}>
        <div 
          className={styles.contentSlider}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {sections.map((section, index) => (
            <div key={section.id} className={styles.sectionWrapper}>
              <section.component />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main export wrapped in Suspense
const PageScroller: React.FC = () => {
  return (
    <Suspense fallback={<PageScrollerLoading />}>
      <PageScrollerContent />
    </Suspense>
  )
}

export default PageScroller