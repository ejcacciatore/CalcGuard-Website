'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const HamburgerOverlay = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter()

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
        onClose()
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
            onClose()
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
      onClose()
    } else {
      router.push(`/#${id}`)
      setTimeout(() => onClose(), 300)
    }
  }

  const goTo = (path: string) => {
    onClose()
    setTimeout(() => {
      router.push(path)
    }, 50)
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <>
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #0f0f0f;
          color: white;
          z-index: 1002;
          display: flex;
          flex-direction: column;
          padding: 40px 60px;
          overflow-y: auto;
        }

        .top-row {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 48px;
        }

        .sections {
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
        }

        .column {
          flex: 1 1 300px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .column-title {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #94a3b8;
          margin-bottom: 8px;
        }

        .link {
          font-size: 24px;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
          color: #f8fafc;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .link:hover {
          color: #ef4444;
          transform: scale(1.05);
        }

        .sublink-block {
          margin-top: 8px;
        }

        .sublink-title {
          font-size: 18px;
          font-weight: 600;
          color: #e2e8f0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .sublink-title:hover {
          color: #ef4444;
          transform: translateX(4px);
        }

        .sublink-desc {
          font-size: 13px;
          color: #94a3b8;
          margin-top: 2px;
          margin-bottom: 10px;
          line-height: 1.4;
          max-width: 280px;
        }

        .socials {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }

        .social-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f8fafc;
          font-size: 16px;
          transition: background 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .social-circle:hover {
          background: #ef4444;
        }

        @media (max-width: 768px) {
          .overlay {
            padding: 24px 20px;
          }
          .sections {
            flex-direction: column;
            gap: 40px;
          }
          .link {
            font-size: 20px;
          }
          .sublink-title {
            font-size: 16px;
          }
          .sublink-desc {
            font-size: 12px;
          }
        }
      `}</style>

      <div className="overlay">
        <div className="top-row">
          <span onClick={onClose} style={{ cursor: 'pointer' }}>
            <X size={28} />
          </span>
        </div>

        <div className="sections">
          {/* LEFT COLUMN */}
          <div className="column">
            <div className="column-title">Main Sections</div>
            <span className="link" onClick={() => scrollTo('hero')}>Home</span>
            <span className="link" onClick={() => scrollTo('what-we-do')}>What We Do</span>
            <span className="link" onClick={() => scrollTo('challenge')}>Challenge</span>
            <span className="link" onClick={() => scrollTo('platform')}>Platform</span>
            <span className="link" onClick={() => scrollTo('discovery')}>Discovery</span>
            <span className="link" onClick={() => scrollTo('leadership')}>Leadership</span>
            <span className="link" onClick={() => goTo('/disclaimer')}>Disclaimer</span>
           
            <div className="column-title" style={{ marginTop: '24px' }}>More Pages</div>

            <div className="sublink-block">
              <div className="sublink-title" onClick={() => goTo('/inefficiencies')}>Inefficiencies</div>
              <div className="sublink-desc">Structural blind spots in trade flow</div>
            </div>

            <div className="sublink-block">
              <div className="sublink-title" onClick={() => goTo('/trinity')}>Trinity</div>
              <div className="sublink-desc">Three forces reshaping execution transparency</div>
            </div>

            <div className="sublink-block">
              <div className="sublink-title" onClick={() => goTo('/evidence')}>Evidence</div>
              <div className="sublink-desc">Empirical data models and forensic signals</div>
            </div>

            <div className="sublink-block">
              <div className="sublink-title" onClick={() => goTo('/analytics')}>Analytics</div>
              <div className="sublink-desc">Real-time metrics and post-trade diagnostics</div>
            </div>

            <div className="sublink-block">
              <div className="sublink-title" onClick={() => goTo('/ai')}>AI</div>
              <div className="sublink-desc">Embedded intelligence for decision support</div>
            </div>

            <div className="sublink-block">
              <div className="sublink-title" onClick={() => goTo('/edge')}>Edge</div>
              <div className="sublink-desc">Tools for competitive advantage</div>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="column">
            <div className="column-title">Content</div>
            <span className="link" onClick={() => goTo('/news')}>Current News</span>
            <span className="link" onClick={() => goTo('/blog')}>Blog</span>
          </div>

          {/* RIGHT COLUMN */}
          <div className="column">
            <div className="column-title">Quick Links</div>
            <span className="link" onClick={() => goTo('/imac')}>IMAC</span>
            <span className="link" onClick={() => goTo('/broker-docs')}>Broker Integration Docs</span>
            <span className="link" onClick={() => goTo('/login')}>Client Login</span>

            <div className="socials">
              <a 
                href="https://x.com/CalcGuard" 
                className="social-circle" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                𝕏
              </a>
              <a 
                href="https://www.linkedin.com/company/calcguard-technologies/posts/?feedView=all" 
                className="social-circle" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HamburgerOverlay