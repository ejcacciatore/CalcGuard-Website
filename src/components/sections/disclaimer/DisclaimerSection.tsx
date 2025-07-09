'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ContactDisclaimerSection = () => {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null)

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Raleway:wght@300;400;500;600&display=swap');

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 2fr 2fr 2fr 2fr;
          gap: 32px;
          background: #ffffff;
          color: #1e293b;
          font-family: 'Raleway', sans-serif;
          font-size: 14px;
          padding: 60px 60px 40px;
          border-top: 1px solid #e2e8f0;
        }

        .footer-logo {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
        }

        .footer-logo img {
          height: 48px;
          width: auto;
          cursor: pointer;
        }

        .footer-section-title {
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
          color: #64748b;
        }

        .footer-link {
          color: #1e293b;
          margin-bottom: 10px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #ef4444;
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          font-size: 12px;
          color: #94a3b8;
        }

        .social-button {
          margin: 4px 0;
          background: none;
          border: 1px solid #94a3b8;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .social-button:hover {
          border-color: #ef4444;
          color: #ef4444;
        }

        .page-links-row {
          width: 100%;
          background: #f9fafb;
          padding: 16px 60px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
        }

        .page-link {
          color: #334155;
          transition: color 0.2s ease;
        }

        .page-link:hover {
          color: #ef4444;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            padding: 40px 20px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            padding: 30px 16px;
          }
          .page-links-row {
            padding: 16px 20px;
            gap: 12px;
            font-size: 12px;
          }
        }
      `}</style>

      <footer className="footer-grid">
        <div className="footer-logo">
          <Image src="/images/CG_1.png" alt="CalcGuard Logo" width={0} height={0} sizes="100vw" style={{ height: '48px', width: 'auto' }} />
          <div style={{ fontSize: '12px', color: '#94a3b8' }}>© 2025 CalcGuard Technologies Inc.</div>
          <div className="footer-link">Do Not Sell or Share My Personal Info</div>
          <div className="footer-link">US  |  UK  |  EU  |  JP</div>
          <button className="social-button">YOUTUBE</button>
          <button className="social-button">𝕏</button>
          <button className="social-button">LINKEDIN</button>
          <button className="social-button">GITHUB</button>
        </div>

        <div>
          <div className="footer-section-title">Offerings</div>
          <div className="footer-link">Routing Transparency</div>
          <div className="footer-link">Trade Surveillance</div>
          <div className="footer-link">Data Normalization</div>
          <div className="footer-link">FIX Integrity</div>
          <div className="footer-link">TCA Pipelines</div>
          <div className="footer-link">Dark Pool Analysis</div>
        </div>

        <div>
          <div className="footer-section-title">Industry Impact</div>
          <div className="footer-link">Asset Managers</div>
          <div className="footer-link">Execution Desks</div>
          <div className="footer-link">Compliance Teams</div>
          <div className="footer-link">Regulators</div>
          <div className="footer-link">Broker Dealers</div>
        </div>

        <div>
          <div className="footer-section-title">Capabilities</div>
          <div className="footer-link">Intent Recognition</div>
          <div className="footer-link">Venue Mapping</div>
          <div className="footer-link">Microstructure AI</div>
          <div className="footer-link">Real-Time Routing Logs</div>
          <div className="footer-link">Execution Quality Ranking</div>
        </div>

        <div>
          <div className="footer-section-title">Documents</div>
          <div className="footer-link">Broker Integration</div>
          <div className="footer-link">IMAC Council</div>
          <div className="footer-link">Client Login</div>
          <div className="footer-link">Platform Docs</div>
          <div className="footer-link">Privacy Policy</div>
          <div className="footer-link">Terms of Use</div>
        </div>
      </footer>

      <div className="page-links-row">
        <Link href="/#hero" className="page-link">Home</Link>
        <Link href="/#what-we-do" className="page-link">What We Do</Link>
        <Link href="/#challenge" className="page-link">Challenge</Link>
        <Link href="/#platform" className="page-link">Platform</Link>
        <Link href="/#leadership" className="page-link">Leadership</Link>
        <Link href="/#inefficiencies" className="page-link">Inefficiencies</Link>
        <Link href="/#trinity" className="page-link">Trinity</Link>
        <Link href="/#sphere" className="page-link">Sphere</Link>
        <Link href="/#edge" className="page-link">Edge</Link>
        <Link href="/#news" className="page-link">Current News</Link>
        <Link href="/#blog" className="page-link">Blog</Link>
        <Link href="/#events" className="page-link">Events</Link>
      </div>

      <div className="footer-bottom">
        Empowering Transparent & Secure Markets — CalcGuard.com
      </div>
    </>
  )
}

export default ContactDisclaimerSection
