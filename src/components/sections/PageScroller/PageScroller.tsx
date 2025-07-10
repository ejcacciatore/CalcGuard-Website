'use client'

import { useEffect, useState, useRef } from 'react'
import styles from './PageScroller.module.css'
/*test8*/
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

const PageScroller: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const SECTION_DURATION = 6000 // 6 seconds per section

  useEffect(() => {
    startProgress()
    return () => stopProgress()
  }, [currentIndex])

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

  const goToSection = (index: number) => {
    if (index === currentIndex) return
    setCurrentIndex(index)
    setProgress(0)
  }

  const CurrentComponent = sections[currentIndex].component

  return (
    <div className={styles.pageScrollerContainer}>
      {/* Compact Progress Bar System - Palantir Style */}
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
                    width: index === currentIndex ? `${progress}%` : 
                           index < currentIndex ? '100%' : '0%'
                  }}
                />
              </div>
            </div>
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

export default PageScroller