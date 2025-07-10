'use client'

import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { useScrollDirection } from '@/lib/hooks/useScrollDirection'
import HamburgerOverlay from '@/components/layout/HamburgerOverlay'
import { useRouter, usePathname } from 'next/navigation'

const lightSections = ['what-we-do', 'platform', 'leadership']

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const scrollDirection = useScrollDirection()
  const router = useRouter()
  const pathname = usePathname()

  const isLightBackground = lightSections.includes(activeSection)

  const scrollToTop = () => {
    if (pathname === '/') {
      const el = document.getElementById('hero')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    const sections = ['hero', 'what-we-do', 'challenge', 'platform', 'leadership', 'disclaimer']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: saturate(110%) blur(2px);
          -webkit-backdrop-filter: saturate(110%) blur(2px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          padding: 8px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transform: translateY(0);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .header.hide {
          transform: translateY(-100%);
        }

        .dark-header .company-name,
        .dark-header .icon-button {
          color: #111 !important;
        }

        .dark-header .logo-img {
          filter: brightness(0);
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo-container:hover {
          transform: scale(1.02);
        }

        .logo-img {
          height: 35px;
          transition: filter 0.3s ease;
        }

        .company-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.2;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .actions {
          display: flex;
          align-items: center;
        }

        .icon-button {
          background: rgba(255, 255, 255, 0.08);
          border: none;
          border-radius: 4px;
          color: #ffffff;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
          width: 40px;
          height: 40px;
          backdrop-filter: blur(1px);
        }

        .icon-button:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .header {
            padding: 6px 16px;
          }

          .logo-img {
            height: 28px;
          }

          .company-name {
            font-size: 12px;
          }

          .logo-container {
            gap: 12px;
          }

          .icon-button {
            width: 36px;
            height: 36px;
            padding: 6px;
          }
        }

        @media (max-width: 480px) {
          .company-name {
            font-size: 10px;
            letter-spacing: 0.01em;
          }
          
          .logo-img {
            height: 24px;
          }

          .logo-container {
            gap: 8px;
          }
        }
      `}</style>

      <header
        className={`header ${scrollDirection === 'down' ? 'hide' : ''} ${
          isLightBackground ? 'dark-header' : ''
        }`}
      >
        <div className="logo-container" onClick={scrollToTop}>
          <img src="/images/CG_1.png" alt="CG Logo" className="logo-img" />
          <div className="company-name">
            CALCGUARD<sup>®</sup><br />
            TECHNOLOGIES
          </div>
        </div>

        <div className="actions">
          <button className="icon-button" onClick={() => setMenuOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </header>

      {menuOpen && <HamburgerOverlay onClose={() => setMenuOpen(false)} />}
    </>
  )
}

export default Header