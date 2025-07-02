'use client'

import { useState, useEffect } from 'react'

interface Section {
  id: string;
  name: string;
}

const PageDots = () => {
  const [activeSection, setActiveSection] = useState('home')

  const sections: Section[] = [
    { id: 'home', name: 'Home' },
    { id: 'what-we-do', name: 'What We Do' },
    { id: 'challenge', name: 'Challenge' },
    { id: 'platform', name: 'Platform' },
    { id: 'inefficiencies', name: 'Inefficiencies' },
    { id: 'trinity', name: 'Trinity' },
    { id: 'evidence', name: 'Evidence' },
    { id: 'discovery', name: 'Discovery' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'ai-barriers', name: 'AI Barriers' },
    { id: 'competitive-edge', name: 'Edge' },
    { id: 'leadership', name: 'Leadership' },
  ]

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
        threshold: 0.5
      }
    )

    sections.forEach(section => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      <style jsx>{`
        .page-dots {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .dot:hover {
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        .dot.active {
          background-color: #ef4444;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
        }

        .dot-tooltip {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .dot:hover .dot-tooltip {
          opacity: 1;
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
          >
            <div className="dot-tooltip">{section.name}</div>
          </div>
        ))}
      </nav>
    </>
  )
}

export default PageDots