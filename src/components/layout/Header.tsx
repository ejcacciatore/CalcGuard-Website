'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useScrollToSection } from '@/hooks/useScrollToSection'

const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#challenge', label: 'Challenge' },
  { href: '#platform', label: 'Platform' },
  { href: '#leadership', label: 'Leadership' },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollPosition = useScrollPosition()
  const scrollToSection = useScrollToSection()

  useEffect(() => {
    setIsScrolled(scrollPosition > 50)
  }, [scrollPosition])

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '')
    scrollToSection(sectionId)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <nav className="hidden lg:flex items-center flex-wrap gap-4">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-red-500 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex-shrink-0">
            <button onClick={() => handleNavClick('#home')}>
              <Image
                src="/images/CG_1.png"
                alt="CalcGuard Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}