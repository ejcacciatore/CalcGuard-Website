'use client'

import { useScrollToSection } from '@/hooks/useScrollToSection'
import { cn } from '@/lib/utils'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'what-we-do', label: 'What We Do' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'platform', label: 'Platform' },
  { id: 'leadership', label: 'Leadership' },
]

interface PageDotsProps {
  activeSection: string
}

export const PageDots = ({ activeSection }: PageDotsProps) => {
  const scrollToSection = useScrollToSection()

  return (
    <nav className="fixed right-5 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300 group relative',
              activeSection === section.id
                ? 'bg-red-500 scale-125'
                : 'bg-slate-300 hover:bg-red-400 hover:scale-110'
            )}
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