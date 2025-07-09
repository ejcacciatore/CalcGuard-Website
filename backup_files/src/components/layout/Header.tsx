'use client'

import { useState } from 'react'
import { useScrollDirection } from '@/lib/hooks/useScrollDirection'
import { Menu, X, Search } from 'lucide-react'

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'What We Do', id: 'what-we-do' },
  { name: 'Challenge', id: 'challenge' },
  { name: 'Platform', id: 'platform' },
  { name: 'Inefficiencies', id: 'inefficiencies' },
  { name: 'Trinity', id: 'trinity' },
  { name: 'Evidence', id: 'evidence' },
  { name: 'Discovery', id: 'discovery' },
  { name: 'Analytics', id: 'analytics' },
  { name: 'AI', id: 'ai-barriers' },
  { name: 'Edge', id: 'competitive-edge' },
  { name: 'Leadership', id: 'leadership' },
  { name: 'Disclaimer', id: 'disclaimer' }
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollDirection = useScrollDirection()

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;

          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: saturate(180%) blur(28px);
          -webkit-backdrop-filter: saturate(180%) blur(28px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);

          padding: 10px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transform: translateY(0);
          transition: transform 0.3s ease, padding 0.3s ease;
        }

        .header.hide {
          transform: translateY(-100%);
        }

        .logo-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo-block:hover {
          transform: scale(1.05);
        }

        .logo-img {
          height: 36px;
          margin-bottom: 2px;
        }

        .logo-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #ffffff;
          line-height: 1.1;
          margin-top: 2px;
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .icon-button {
          background: none;
          border: none;
          color: #111;
          cursor: pointer;
          padding: 4px;
          transition: opacity 0.2s ease;
        }

        .icon-button:hover {
          opacity: 0.75;
        }

        .menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 260px;
          height: 100vh;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(25px);
          box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          padding: 24px;
          z-index: 999;
          transition: transform 0.3s ease;
        }

        .nav-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          color: #374151;
          margin-bottom: 18px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #ef4444;
        }

        @media (max-width: 768px) {
          .header {
            padding: 8px 16px;
          }

          .logo-img {
            height: 30px;
          }

          .logo-text {
            font-size: 0.75rem;
          }
        }
      `}</style>

      <header className={`header ${scrollDirection === 'down' ? 'hide' : ''}`}>
        <div className="logo-block" onClick={() => handleScrollTo('hero')}>
          <img src="/images/CG_1.png" alt="CG Logo" className="logo-img" />
          <span className="logo-text">
            CALCGUARD<sup>®</sup>
            <br />
            TECHNOLOGIES
          </span>
        </div>

        <div className="actions">
          <button className="icon-button" onClick={() => alert('🔍 Search placeholder')}>
            <Search size={20} />
          </button>
          <button className="icon-button" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="menu-panel">
          {navItems.map((item) => (
            <span
              key={item.id}
              className="nav-link"
              onClick={() => handleScrollTo(item.id)}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
    </>
  )
}

export default Header
