'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { useActiveSection } from '@/hooks/useActiveSection'

const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#what-we-do', label: 'What We Do', id: 'what-we-do' },
  { href: '#challenge', label: 'Challenge', id: 'challenge' },
  { href: '#platform', label: 'Platform', id: 'platform' },
  { href: '#leadership', label: 'Leadership', id: 'leadership' },
]

interface HeaderProps {
  className?: string
}

export const Header = ({ className = '' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const scrollToSection = useScrollToSection()
  const activeSection = useActiveSection()

  useEffect(() => {
    setIsScrolled(scrollPosition > 50)
  }, [scrollPosition])

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '')
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const isActiveSection = (sectionId: string) => {
    return activeSection === sectionId
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm'
      } ${className}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Left Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAVIGATION_ITEMS.slice(0, 2).map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-xs font-semibold uppercase tracking-wider transition-all duration-200 relative ${
                    isActiveSection(item.id)
                      ? 'text-red-500'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActiveSection(item.id) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center lg:flex-none">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center group"
              >
                <Image
                  src="/images/CG_l.png"
                  alt="CalcGuard Technologies"
                  width={120}
                  height={40}
                  className="h-8 w-auto transition-transform duration-200 group-hover:scale-105"
                />
              </button>
            </div>

            {/* Right Navigation - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {NAVIGATION_ITEMS.slice(2).map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-xs font-semibold uppercase tracking-wider transition-all duration-200 relative ${
                    isActiveSection(item.id)
                      ? 'text-red-500'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActiveSection(item.id) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 rounded-full" />
                  )}
                </button>
              ))}
              
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-sm text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 z-60"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className={`w-6 h-6 text-slate-600 transition-transform duration-200 ${
                  isMobileMenuOpen ? 'rotate-45' : ''
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl">
            <div className="pt-20 px-6">
              <nav className="space-y-6">
                {NAVIGATION_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left text-lg font-semibold uppercase tracking-wider transition-colors duration-200 py-3 ${
                      isActiveSection(item.id)
                        ? 'text-red-500 border-l-4 border-red-500 pl-4'
                        : 'text-slate-600 hover:text-slate-900 hover:pl-4'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-sm text-lg font-semibold uppercase tracking-wider transition-colors duration-200 mt-8"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}