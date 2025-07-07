'use client'

import { useState, useEffect } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [moreInfoOpen, setMoreInfoOpen] = useState(false)
  const [showMoreInfo, setShowMoreInfo] = useState(false)
  
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

  const moreInfoItems = [
    { name: 'LOGIN', href: '/login' },
    { name: 'NEWS', href: '/news' },
    { name: 'BLOG', href: '/blog' },
    { name: 'IMAC', href: '/imac' },
    { name: 'BROKER INTEGRATION DOCS', href: '/broker-docs' }
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

  // Handle more info button interactions
  const handleMoreInfoClick = () => {
    if (!showMoreInfo) {
      setShowMoreInfo(true)
    } else {
      setMoreInfoOpen(!moreInfoOpen)
    }
  }

  const handleMoreInfoHover = () => {
    if (!showMoreInfo) {
      setShowMoreInfo(true)
    }
  }

  const handleMoreInfoLeave = () => {
    if (!moreInfoOpen) {
      setShowMoreInfo(false)
    }
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.more-info-container')) {
        setMoreInfoOpen(false)
        setShowMoreInfo(false)
      }
    }

    if (moreInfoOpen || showMoreInfo) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [moreInfoOpen, showMoreInfo])

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

        /* Fixed Position More Info Container */
        .more-info-container-fixed {
          position: fixed;
          top: 80px;
          right: 30px;
          z-index: 1002;
          display: flex;
          align-items: center;
        }

        .hamburger-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          transition: all 0.3s ease;
          border-radius: 8px;
          position: relative;
          opacity: 0.2;
        }

        .hamburger-button::before {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.06) 0%, transparent 70%);
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .hamburger-button:hover {
          opacity: 0.8;
        }

        .hamburger-button:hover::before {
          opacity: 1;
        }

        .hamburger-line {
          width: 20px;
          height: 2px;
          background-color: rgba(100, 116, 139, 0.3);
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .hamburger-button:hover .hamburger-line {
          background-color: rgba(239, 68, 68, 0.7);
          opacity: 1;
        }

        .more-info-text {
          display: none;
        }

        .more-info-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(239, 68, 68, 0.1);
          border-radius: 10px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
          padding: 16px 0;
          min-width: 240px;
          z-index: 1003;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-15px) translateX(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 12px;
        }

        .more-info-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) translateX(0);
        }

        .dropdown-item {
          display: block;
          padding: 14px 24px;
          color: #64748b;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          border-left: 3px solid transparent;
        }

        .dropdown-item:hover {
          background-color: rgba(239, 68, 68, 0.04);
          color: #ef4444;
          border-left-color: #ef4444;
          transform: translateX(6px);
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
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
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
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
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
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
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

          .more-info-container-fixed {
            top: 60px;
            right: 20px;
          }

          .hamburger-button {
            padding: 6px;
          }

          .hamburger-line {
            width: 14px;
          }

          .more-info-dropdown {
            min-width: 200px;
          }

          .more-info-text {
            font-size: 8px;
            margin-left: 4px;
          }

          .dropdown-item {
            font-size: 10px;
            padding: 10px 16px;
          }
        }

        @media (max-width: 480px) {
          .more-info-container-fixed {
            top: 55px;
            right: 15px;
          }

          .more-info-dropdown {
            min-width: 180px;
          }

          .hamburger-line {
            width: 12px;
          }

          .hamburger-button {
            padding: 4px;
          }

          .more-info-text {
            font-size: 7px;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-container">
          {/* Left Section with More Info Button */}
          <div className="left-section">
            <div 
              className="more-info-container"
              onMouseEnter={handleMoreInfoHover}
              onMouseLeave={handleMoreInfoLeave}
            >
              <button 
                className="hamburger-button"
                onClick={handleMoreInfoClick}
                aria-label="More information menu"
              >
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
              </button>
              
              <span className={`more-info-text ${showMoreInfo ? 'show' : ''}`}>
                More Info
              </span>

              <div className={`more-info-dropdown ${moreInfoOpen ? 'open' : ''}`}>
                {moreInfoItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="dropdown-item"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

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
          </div>

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