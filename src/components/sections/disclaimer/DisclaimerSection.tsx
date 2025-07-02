'use client'

import { useState } from 'react'
import Image from 'next/image'

const ContactDisclaimerSection = () => {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null)

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Raleway:wght@300;400;500;600&display=swap');

        .contact-section {
          width: 100vw;
          min-height: 100vh;
          background-color: #ffffff;
          display: flex;
          position: relative;
          overflow: hidden;
        }

        .left-panel {
          flex: 0 0 66.67%;
          background-color: #ffffff;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          z-index: 1;
        }

        .left-content {
          position: relative;
          z-index: 2;
          padding: 40px;
        }

        .right-panel {
          flex: 0 0 33.33%;
          background-color: #ffffff;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .cg-logo {
          position: absolute;
          top: 40px;
          right: 40px;
          width: 80px;
          height: auto;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .cg-logo:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .company-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 8px;
          line-height: 1.0;
          letter-spacing: 2px;
        }

        .company-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 40px;
          line-height: 1.1;
          letter-spacing: 1px;
        }

        .red-divider {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #ef4444, #dc2626);
          margin: 0 auto 40px auto;
          border-radius: 2px;
        }

        .disclaimer-text {
          font-family: 'Raleway', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 40px;
          text-align: justify;
        }

        .contact-section-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border: 2px solid transparent;
          background: #ffffff;
        }

        .contact-item:hover {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-color: #e2e8f0;
          transform: translateX(8px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        .contact-icon {
          width: 28px;
          height: 28px;
          background: #64748b;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          font-weight: 500;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          background: #1e293b;
          transform: scale(1.1);
        }

        .contact-info {
          flex: 1;
        }

        .contact-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 4px;
        }

        .contact-value {
          font-family: 'Raleway', sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #64748b;
        }

        .contact-item:hover .contact-value {
          color: #1e293b;
        }

        .footer-accent {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 150px;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, #ef4444 50%, #dc2626 100%);
        }

        /* Mobile Styles */
        @media (max-width: 1024px) {
          .contact-section {
            flex-direction: column;
          }

          .left-panel {
            flex: 0 0 40vh;
          }

          .right-panel {
            flex: 1;
            padding: 40px 30px;
          }

          .cg-logo {
            top: 30px;
            right: 30px;
            width: 60px;
          }

          .company-title {
            font-size: 36px;
          }

          .company-subtitle {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .right-panel {
            padding: 30px 20px;
          }

          .cg-logo {
            top: 20px;
            right: 20px;
            width: 50px;
          }

          .company-title {
            font-size: 28px;
          }

          .company-subtitle {
            font-size: 14px;
          }

          .disclaimer-text {
            font-size: 10px;
          }

          .contact-section-title {
            font-size: 18px;
          }

          .contact-label {
            font-size: 14px;
          }

          .contact-value {
            font-size: 12px;
          }

          .contact-item:hover {
            transform: translateX(4px);
          }

          .background-video {
            opacity: 0.5;
          }
        }
      `}</style>

      <section id="disclaimer" className="contact-section">
        {/* Left Panel - Video Background */}
        <div className="left-panel">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/ejcacciatore_A_sophisticated_fintech_data_visualization_scene_128ca0ed-50ba-4a42-bca0-9fc6ff249fee_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="left-content">
            {/* Clean video background only */}
          </div>
        </div>

        {/* Right Panel - Content */}
        <div className="right-panel">
          <Image
            src="/images/CG_1.png"
            alt="CalcGuard Logo"
            width={80}
            height={80}
            className="cg-logo"
          />

          <div className="main-content">
            <h2 className="company-title">CALCGUARD</h2>
            <h3 className="company-subtitle">TECHNOLOGIES</h3>
            
            <div className="red-divider"></div>

            <p className="disclaimer-text">
              THIS DOCUMENT AND THE INFORMATION CONTAINED WITHIN IT ARE PROVIDED IN CONFIDENCE, 
              FOR THE SOLE PURPOSE OF EXPLORING BUSINESS OPPORTUNITIES BETWEEN THE DISCLOSING PARTY, 
              CALCGUARD TECHNOLOGIES, INC., AND THE RECEIVING PARTY AND MAY NOT BE DISCLOSED IN ANY WAY 
              WHATSOEVER TO ANY THIRD PARTY OR USED FOR ANY OTHER PURPOSE WITHOUT THE EXPRESS WRITTEN 
              CONSENT OF CALCGUARD TECHNOLOGIES, INC.
            </p>

            <h4 className="contact-section-title">Learn More & Connect</h4>

            <div className="contact-methods">
              <div 
                className="contact-item"
                onMouseEnter={() => setHoveredContact('email')}
                onMouseLeave={() => setHoveredContact(null)}
                onClick={() => window.location.href = 'mailto:info@calcguard.com'}
              >
                <div className="contact-icon">@</div>
                <div className="contact-info">
                  <div className="contact-label">Email</div>
                  <div className="contact-value">info@calcguard.com</div>
                </div>
              </div>

              <div 
                className="contact-item"
                onMouseEnter={() => setHoveredContact('phone')}
                onMouseLeave={() => setHoveredContact(null)}
                onClick={() => window.location.href = 'tel:+1-555-0123'}
              >
                <div className="contact-icon">📞</div>
                <div className="contact-info">
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">+1 (555) 012-3456</div>
                </div>
              </div>

              <div 
                className="contact-item"
                onMouseEnter={() => setHoveredContact('linkedin')}
                onMouseLeave={() => setHoveredContact(null)}
                onClick={() => window.open('https://linkedin.com/company/calcguard-technologies', '_blank')}
              >
                <div className="contact-icon">in</div>
                <div className="contact-info">
                  <div className="contact-label">LinkedIn</div>
                  <div className="contact-value">CalcGuard Technologies</div>
                </div>
              </div>

              <div 
                className="contact-item"
                onMouseEnter={() => setHoveredContact('website')}
                onMouseLeave={() => setHoveredContact(null)}
                onClick={() => window.open('https://calcguard.com', '_blank')}
              >
                <div className="contact-icon">🌐</div>
                <div className="contact-info">
                  <div className="contact-label">Website</div>
                  <div className="contact-value">www.calcguard.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-accent"></div>
        </div>
      </section>
    </>
  )
}

export default ContactDisclaimerSection