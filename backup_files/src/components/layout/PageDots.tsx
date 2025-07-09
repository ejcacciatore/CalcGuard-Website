'use client'

import { useState, useEffect } from 'react'

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'what-we-do', name: 'What We Do' },
  { id: 'challenge', name: 'Challenge' },
  { id: 'platform', name: 'Platform' },
  { id: 'leadership', name: 'Leadership' },
  { id: 'disclaimer', name: 'Disclaimer' }
]

const PageDots = () => {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
      }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <style jsx>{`
        .page-dots {
          position: fixed;
          top: 50%;
          right: 24px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 1000;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot:hover {
          background-color: rgba(255, 255, 255, 0.9);
        }

        .dot.active {
          background-color: #ef4444;
          width: 12px;
          height: 12px;
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.3);
        }

        @media (max-width: 768px) {
          .page-dots {
            display: none;
          }
        }
      `}</style>

      <nav className="page-dots">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`dot ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            title={section.name}
          />
        ))}
      </nav>
    </>
  )
}

export default PageDots
