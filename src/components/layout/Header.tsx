'use client'

import { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    { name: 'HOME', href: '#home', active: true },
    { name: 'WHAT WE DO', href: '#what-we-do' },
    { name: 'CHALLENGE', href: '#challenge' },
    { name: 'PLATFORM', href: '#platform' },
    { name: 'INEFFICIENCIES', href: '#inefficiencies' },
    { name: 'TRINITY', href: '#trinity' },
    { name: 'EVIDENCE', href: '#evidence' },
    { name: 'DISCOVERY', href: '#discovery' },
    { name: 'ANALYTICS', href: '#analytics' },
    { name: 'AI', href: '#ai-barriers' },
    { name: 'EDGE', href: '#competitive-edge' },
    { name: 'LEADERSHIP', href: '#leadership' },
    { name: 'DISCLAIMER', href: '#disclaimer' }
  ]

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
        }

        .logo-link:hover {
          transform: scale(1.1);
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
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`nav-link ${item.active ? 'active' : ''}`}
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
          <a href="#home" className="logo-link">
            <img 
              src="/images/CG_1.png" 
              alt="CalcGuard Logo" 
              className="logo"
            />
          </a>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`mobile-nav-link ${item.active ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
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