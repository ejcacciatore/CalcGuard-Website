'use client'

import { useEffect, useRef, useState } from 'react'

const sections = [
  {
    id: 'what-we-do',
    title: 'What We Do',
    description:
      'Scalable, secure B2B infrastructure for data normalization, AI enablement, and institutional-grade insights.',
  },
  {
    id: 'challenge',
    title: 'The Challenge',
    description:
      'Fragmented systems and siloed data are breaking the first and last mile of analytics delivery.',
  },
  {
    id: 'platform',
    title: 'The Platform',
    description:
      'A zero-trust private sphere for ingestion, collaboration, and real-time routing optimization.',
  },
  {
    id: 'discovery',
    title: 'Discovery',
    description:
      'Reveal insights through a flexible interface for exploring hidden trends, anomalies, and risks across datasets.',
  },
]

const OverviewSection = () => {
  const missionStatementRef = useRef<HTMLHeadingElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const titleEl = missionStatementRef.current
    if (!titleEl) return

    const text = titleEl.textContent || ''
    const letters = text.split('')
    titleEl.innerHTML = ''

    letters.forEach((letter, i) => {
      const span = document.createElement('span')
      if (letter === ' ') {
        span.innerHTML = '&nbsp;'
      } else {
        span.textContent = letter
      }
      span.style.opacity = '0'
      span.style.display = 'inline-block'
      span.style.transition = `all 0.8s cubic-bezier(0.4,0,0.2,1)`
      span.style.transitionDelay = `${i * 15}ms`
      span.style.transform = 'translateY(30px)'
      titleEl.appendChild(span)
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleEl.querySelectorAll('span').forEach((span) => {
            span.style.opacity = '1'
            span.style.transform = 'translateY(0)'
          })
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(titleEl)
    return () => observer.disconnect()
  }, [])

  // Use the same scrollTo logic as HamburgerOverlay
  const scrollTo = (id: string) => {
    const isHome = window.location.pathname === '/'
    if (isHome) {
      let element: Element | null = null
      
      // For sections that have both overview and detailed pages, 
      // target the detailed section components, not the overview
      if (['what-we-do', 'challenge', 'platform'].includes(id)) {
        // Try to find the main section component (not the overview subsection)
        const detailedSelectors = [
          // Look for the main section component wrapper
          `section.${id}-section`,
          `div.${id}-section`, 
          `section[data-section="${id}"][class*="section"]`,
          // Look for section that contains the detailed content (not just overview)
          `section:has(.${id}-content)`,
          `div:has(.${id}-content)`,
          // Find sections that come after overview
          `section[id="${id}"]:not(.section-block)`,
          `div[id="${id}"]:not(.section-block)`
        ]
        
        for (const selector of detailedSelectors) {
          try {
            element = document.querySelector(selector)
            if (element) {
              // Check if this is likely the detailed section (not overview)
              const htmlElement = element as HTMLElement
              const isOverviewSection = element.closest('.overview-root') || 
                                      element.classList.contains('section-block') ||
                                      htmlElement.offsetHeight < 200 // Small sections are likely overview
              if (!isOverviewSection) {
                break // Found the detailed section
              } else {
                element = null // Keep looking
              }
            }
          } catch (e) {
            continue
          }
        }
        
        // If still not found, try to get all sections with this ID and pick the larger one
        if (!element) {
          const allSections = document.querySelectorAll(`[id="${id}"], section[data-section="${id}"]`)
          let bestMatch: Element | null = null
          let maxHeight = 0
          
          allSections.forEach(section => {
            const htmlSection = section as HTMLElement
            const isOverview = section.closest('.overview-root') || section.classList.contains('section-block')
            if (!isOverview && htmlSection.offsetHeight > maxHeight) {
              maxHeight = htmlSection.offsetHeight
              bestMatch = section
            }
          })
          
          element = bestMatch
        }
      } else {
        // For other sections, use standard lookup
        element = document.getElementById(id)
      }
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      
      // Fallback: try standard selectors
      const fallbackSelectors = [
        `section[id="${id}"]`,
        `div[id="${id}"]`,
        `[data-section="${id}"]`
      ]
      
      for (const selector of fallbackSelectors) {
        try {
          element = document.querySelector(selector)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            return
          }
        } catch (e) {
          continue
        }
      }
      
      // Debug: log available sections
      console.log(`Section not found: ${id}. Available sections:`, 
        Array.from(document.querySelectorAll('section[id], div[id]')).map(el => {
          const htmlEl = el as HTMLElement
          return {
            id: el.id, 
            classes: el.className,
            height: htmlEl.offsetHeight,
            isOverview: el.closest('.overview-root') ? 'yes' : 'no'
          }
        })
      )
    }
  }

  const handleSectionClick = (sectionId: string) => {
    scrollTo(sectionId)
  }

  return (
    <>
      <style jsx>{`
        .overview-root {
          font-family: 'Montserrat', 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #fff;
          color: #111;
        }

        .mission-hero {
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          padding: 0 8rem;
        }

        .mission-statement {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: clamp(2rem, 4.5vw, 4rem);
          line-height: 1.15;
          text-align: center;
          max-width: 100rem;
          margin: 0 auto;
          color: #111;
          letter-spacing: -0.02em;
          word-break: break-word;
          overflow-wrap: break-word;
          white-space: normal;
        }

        .sections-column {
          max-width: 42rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-block {
          padding: 2.5rem 0 2rem 0;
        }

        .section-title {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 300;
          margin-bottom: 1.2rem;
          color: #222;
          text-align: left;
          transition: color 0.3s ease;
          line-height: 1.1;
        }

        .section-title.hovered,
        .section-title:hover {
          color: #e11d48;
        }

        .section-description {
          font-family: 'Raleway', sans-serif;
          font-size: 1.25rem;
          font-weight: 400;
          color: #666;
          line-height: 1.5;
          text-align: left;
        }

        @media (max-width: 768px) {
          .mission-hero {
            padding: 0 4rem;
          }

          .mission-statement {
            font-size: clamp(1.5rem, 5vw, 2.5rem);
            max-width: 80%;
          }

          .sections-column {
            padding: 0 1rem;
          }

          .section-block {
            padding: 2rem 0 1.5rem 0;
          }

          .section-title {
            font-size: clamp(1.75rem, 4vw, 2.5rem);
          }

          .section-description {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .mission-hero {
            padding: 0 2.5rem;
          }

          .mission-statement {
            font-size: clamp(1.25rem, 4.5vw, 2rem);
            max-width: 85%;
          }

          .section-title {
            font-size: clamp(1.5rem, 4.5vw, 2rem);
          }

          .section-description {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="overview-root">
        {/* Mission Statement */}
        <section className="mission-hero">
          <h1 ref={missionStatementRef} className="mission-statement">
            CalcGuard unifies fragmented transactional data into secure, zero‑trust pipelines—powering transparent, collaborative, confident, and compliant decisions across the capital&nbsp;markets trade&nbsp;lifecycle.
          </h1>
        </section>

        {/* Sections */}
        <div className="sections-column">
          {sections.map((section, idx) => (
            <section key={section.id} className="section-block" id={section.id}>
              <button
                onClick={() => handleSectionClick(section.id)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  padding: 0,
                  margin: 0,
                  width: '100%',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
                tabIndex={-1}
                aria-label={section.title}
              >
                <h2 className={`section-title${hoveredIndex === idx ? ' hovered' : ''}`}>
                  {section.title}
                </h2>
              </button>
              <p className="section-description">{section.description}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}

export default OverviewSection