'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Search } from 'lucide-react'
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
          background: rgba(255, 255, 255, 0.005);
          backdrop-filter: saturate(150%) blur(10px);
          -webkit-backdrop-filter: saturate(150%) blur(5px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.004);
          padding: 3px 17px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transform: translateY(0);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .header.hide {
          transform: translateY(-100%);
        }

        .dark-header .logo-text,
        .dark-header .icon-button,
        .dark-header .get-started {
          color: #111 !important;
        }

        .dark-header .logo-img {
          filter: brightness(0);
        }

        .logo-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo-block:hover {
          transform: scale(1.04);
        }

        .logo-img {
          height: 30px;
          transition: filter 0.3s ease;
        }

        .logo-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 450;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #ffffff;
          line-height: 1.1;
          margin-top: 2px;
          transition: color 0.3s ease;
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .icon-button {
          background: #ffffff;
          border: none;
          border-radius: 2px;
          color: #111;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s ease;
          width: 34px;
          height: 34px;
        }

        .icon-button:hover {
          opacity: 0.85;
        }

        .get-started {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          background: #ffffff;
          color: #111;
          border: none;
          padding: 6px 16px;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .get-started:hover {
          background: #f1f1f1;
        }

        @media (max-width: 768px) {
          .header {
            padding: 6px 14px;
          }

          .logo-img {
            height: 24px;
          }

          .logo-text {
            font-size: 0.7rem;
          }

          .get-started {
            padding: 5px 12px;
            font-size: 0.7rem;
          }

          .icon-button {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>

      <header
        className={`header ${scrollDirection === 'down' ? 'hide' : ''} ${
          isLightBackground ? 'dark-header' : ''
        }`}
      >
        <div className="logo-block" onClick={scrollToTop}>
          <img src="/images/CG_1.png" alt="CG Logo" className="logo-img" />
          <span className="logo-text">
            CALCGUARD<sup>®</sup>
            <br />
            TECHNOLOGIES
          </span>
        </div>

        <div className="actions">
          <Link href="/get-started">
            <button className="get-started">Get Started</button>
          </Link>
          <button className="icon-button" onClick={() => alert('🔍 Search placeholder')}>
            <Search size={16} />
          </button>
          <button className="icon-button" onClick={() => setMenuOpen(true)}>
            <Menu size={18} />
          </button>
        </div>
      </header>

      {menuOpen && <HamburgerOverlay onClose={() => setMenuOpen(false)} />}
    </>
  )
}

export default Header
