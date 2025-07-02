'use client'

import { useState, useEffect } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  
  const navItems = [
    { name: 'HOME', href: '#hero', id: 'hero' },
    { name: 'WHAT WE DO', href: '#what-we-do', id: 'what-we-do' },
    { name: 'CHALLENGE', href: '#challenge', id: 'challenge' },
    { name: 'PLATFORM', href: '#platform', id: 'platform' },
    { name: 'INEFFICIENCIES', href: '#inefficiencies', id: 'inefficiencies' },
    { name: 'TRINITY', href: '#trinity', id: 'trinity' },
    { name: 'EVIDENCE', href: '#evidence', id: 'evidence' },
    { name: 'DISCOVERY', href: '#discovery', id: 'discovery' },
    { name: 'ANALYTICS', href: '#analytics', id: 'analytics' },
    { name: 'AI', href: '#ai-barriers', id: 'ai-barriers' },
    { name: 'EDGE', href: '#competitive-edge', id: 'competitive-edge' },
    { name: 'LEADERSHIP', href: '#leadership', id: 'leadership' },
    { name: 'DISCLAIMER', href: '#disclaimer', id: 'disclaimer' }
  ]

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    } else if (targetId === 'hero') {
      // If hero section doesn't exist with ID, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    // Close mobile menu if open
    setMobileMenuOpen(false)
  }

  // Handle logo click - always go to top/hero
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(section => section.element)

      const scrollPosition = window.scrollY + 100

      // If at the very top, set HOME as active
      if (window.scrollY < 50) {
        setActiveSection('hero')
        return
      }

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 3px solid white;
          z-index: 1000;
          padding: 12px 24px;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .nav-desktop {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .nav-link {
          color: #64748b;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-link.active {
          color: #ef4444;
        }

        .nav-link:hover {
          color: #ef4444;
        }

        .logo-link {
          cursor: pointer;
          transition: transform 0.2s ease;
          display: flex;
          align-items: center;
        }

        .logo-link:hover {
          transform: scale(1.05);
        }

        .logo {
          height: 32px;
          width: auto;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: #64748b;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          cursor: pointer;
          padding: 8px 12px;
          transition: all 0.2s ease;
        }

        .mobile-menu-button:hover {
          color: #ef4444;
        }

        .mobile-nav {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.1);
          padding: 16px;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .mobile-nav.open {
          display: grid;
        }

        .mobile-nav-link {
          color: #64748b;
          text-decoration: none;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 8px;
          text-align: center;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .mobile-nav-link.active {
          color: #ef4444;
          background-color: rgba(239, 68, 68, 0.1);
        }

        .mobile-nav-link:hover {
          background-color: rgba(239, 68, 68, 0.05);
          color: #ef4444;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .header {
            padding: 8px 16px;
          }
          
          .nav-desktop {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
          
          .logo {
            height: 24px;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-container">
          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>

          {/* Logo */}
          <a 
            href="#hero" 
            className="logo-link"
            onClick={handleLogoClick}
            aria-label="Go to home"
          >
            <img 
              src="/images/CG_1.png" 
              alt="CalcGuard Logo" 
              className="logo"
            />
          </a>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>
    </>
  )
}

export default Header