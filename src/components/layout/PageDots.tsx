'use client'

import { useScrollToSection } from '@/hooks/useScrollToSection'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'what-we-do', label: 'What We Do' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'platform', label: 'Platform' },
  { id: 'inefficiencies', label: 'Inefficiencies' },
  { id: 'trinity', label: 'Trinity' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'discovery', label: 'Discovery' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'ai-barriers', label: 'AI Barriers' },
  { id: 'competitive-edge', label: 'Competitive Edge' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'disclaimer', label: 'Disclaimer' },
]

interface PageDotsProps {
  activeSection: string
}

export const PageDots = ({ activeSection }: PageDotsProps) => {
  const scrollToSection = useScrollToSection()

  return (
    <nav className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-3">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 group relative border-2 ${
              activeSection === section.id
                ? 'bg-red-500 border-red-500 scale-125'
                : 'bg-gray-200 border-gray-300 hover:border-red-400 hover:bg-red-100 hover:scale-110'
            }`}
            title={section.label}
          >
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}