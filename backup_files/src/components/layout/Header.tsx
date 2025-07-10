'use client'

import { useState } from 'react'
import { useScrollDirection } from '@/lib/hooks/useScrollDirection'
import { Menu, X } from 'lucide-react'

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

          background: rgba(255, 255, 255, 0.002);
          backdrop-filter: saturate(20%) blur(0px);
          -webkit-backdrop-filter: saturate(20%) blur(0px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.008);

          padding: 12px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transform: translateY(0);
          transition: transform 0.3s ease, padding 0.3s ease;
        }

        .header.hide {
          transform: translateY(-100%);
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo-section:hover {
          transform: scale(1.02);
        }

        .logo-img {
          height: 48px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .company-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
          line-height: 1.2;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

         .icon-button {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .icon-button:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 300px;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(25px);
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          padding: 32px 24px;
          z-index: 999;
          transition: transform 0.3s ease;
        }

        .menu-header {
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .menu-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .nav-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 8px 0;
          border-bottom: 1px solid transparent;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #ef4444;
          border-bottom-color: #ef4444;
          transform: translateX(8px);
        }

        @media (max-width: 768px) {
          .header {
            padding: 10px 16px;
          }

          .logo-img {
            height: 40px;
          }

          .company-name {
            font-size: 0.9rem;
          }

          .get-started-btn {
            padding: 8px 16px;
            font-size: 0.8rem;
          }

          .menu-panel {
            width: 280px;
            padding: 24px 20px;
          }
        }
      `}</style>

      <header className={`header ${scrollDirection === 'down' ? 'hide' : ''}`}>
        <div className="logo-section" onClick={() => handleScrollTo('hero')}>
          <img src="/images/CG_1.png" alt="CalcGuard Logo" className="logo-img" />
          <div className="company-name">
            CALCGUARD<sup>®</sup> TECHNOLOGIES Inc
          </div>
        </div>

        
      {menuOpen && (
        <div className="menu-panel">
          <div className="menu-header">
            <div className="menu-title">Navigation</div>
          </div>
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
      </header>
    </>
  )
}

export default Header