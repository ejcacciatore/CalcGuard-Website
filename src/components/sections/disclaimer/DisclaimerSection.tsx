'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ContactDisclaimerSection = () => {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null)
  const router = useRouter()

  const goToSection = (id: string) => {
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
      
      // If section not found on home page, navigate to separate page
      router.push(`/${id}`)
    } else {
      // If not on home page, navigate based on section type
      const mainPageSections = ['hero', 'what-we-do', 'challenge', 'platform', 'leadership', 'discovery']
      
      if (mainPageSections.includes(id)) {
        router.push(`/#${id}`)
      } else {
        router.push(`/${id}`)
      }
    }
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Raleway:wght@300;400;500;600&display=swap');

        .footer-container {
          background: #ffffff;
          color: #1e293b;
          font-family: 'Raleway', sans-serif;
          border-top: 1px solid #e2e8f0;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 60px 60px 40px;
          gap: 40px;
        }

        .footer-logo-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-logo-section img {
          height: 48px;
          width: auto;
          cursor: pointer;
        }

        .company-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 16px;
          color: #1e293b;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.2;
        }

        .contact-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-end;
          text-align: right;
        }

        .contact-item {
          font-size: 14px;
          color: #64748b;
        }

        .contact-item a {
          color: #1e293b;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-item a:hover {
          color: #ef4444;
        }

        .social-buttons {
          display: flex;
          gap: 8px;
          margin-top: 8px;
        }

        .social-button {
          background: none;
          border: 1px solid #94a3b8;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #64748b;
        }

        .social-button:hover {
          border-color: #ef4444;
          color: #ef4444;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          border-top: 1px solid #e2e8f0;
          background: #f9fafb;
        }

        .copyright {
          font-size: 12px;
          color: #94a3b8;
        }

        .page-links {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
        }

        .page-link {
          color: #334155;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .page-link:hover {
          color: #ef4444;
        }

        @media (max-width: 1024px) {
          .footer-main {
            flex-direction: column;
            gap: 30px;
            padding: 40px 20px;
          }

          .footer-logo-section {
            justify-content: center;
          }

          .contact-section {
            align-items: center;
            text-align: center;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            padding: 20px;
          }

          .page-links {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .footer-main {
            padding: 30px 16px;
          }

          .footer-logo-section {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }

          .company-name {
            font-size: 14px;
          }

          .page-links {
            gap: 12px;
            font-size: 12px;
          }

          .footer-bottom {
            padding: 16px;
          }
        }
      `}</style>

      <footer className="footer-container">
        <div className="footer-main">
          <div className="footer-logo-section">
            <Image 
              src="/images/CG_1.png" 
              alt="CalcGuard Logo" 
              width={0} 
              height={0} 
              sizes="100vw" 
              style={{ height: '48px', width: 'auto' }} 
            />
            <div className="company-name">
              CALCGUARD<sup>®</sup><br />
              TECHNOLOGIES
            </div>
          </div>

          <div className="contact-section">
            <div className="contact-item">
              <strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a>
            </div>
            <div className="contact-item">
              <strong>Email:</strong> <a href="mailto:info@calcguard.com">info@calcguard.com</a>
            </div>
            <div className="social-buttons">
              <button 
                className="social-button"
                onClick={() => window.open('https://x.com/CalcGuard', '_blank')}
              >
                𝕏
              </button>
              <button 
                className="social-button"
                onClick={() => window.open('https://www.linkedin.com/company/calcguard-technologies/posts/?feedView=all', '_blank')}
              >
                LINKEDIN
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © 2025 CalcGuard Technologies Inc.
          </div>
          
          <div className="page-links">
            <span className="page-link" onClick={() => goToSection('hero')}>Home</span>
            <span className="page-link" onClick={() => goToSection('what-we-do')}>What We Do</span>
            <span className="page-link" onClick={() => goToSection('challenge')}>Challenge</span>
            <span className="page-link" onClick={() => goToSection('platform')}>Platform</span>
            <span className="page-link" onClick={() => goToSection('leadership')}>Leadership</span>
            <span className="page-link" onClick={() => goToSection('discovery')}>Discovery</span>
            <span className="page-link" onClick={() => goToSection('inefficiencies')}>Inefficiencies</span>
            <span className="page-link" onClick={() => goToSection('trinity')}>Trinity</span>
            <span className="page-link" onClick={() => goToSection('edge')}>Edge</span>
            <span className="page-link" onClick={() => goToSection('news')}>Current News</span>
            <span className="page-link" onClick={() => goToSection('blog')}>Blog</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ContactDisclaimerSection;