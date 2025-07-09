'use client'

import { useState, useEffect } from 'react'

const AIBarriersSection = () => {
  const [showPercentage, setShowPercentage] = useState(false)
  const [privacyFlash, setPrivacyFlash] = useState(false)

  // Auto-show percentage after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPercentage(true)
      setPrivacyFlash(true)
      setTimeout(() => setPrivacyFlash(false), 800)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handlePrivacyInteraction = () => {
    setShowPercentage(true)
    setPrivacyFlash(true)
    setTimeout(() => setPrivacyFlash(false), 800)
  }

  return (
    <>
      <style jsx>{`
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

        .ai-barriers-wrapper {
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
        }

        /* Background Pattern */
        .ai-barriers-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
          z-index: 1;
        }

        .ai-barriers-container {
          width: 100%;
          max-width: 1600px;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 0;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        /* Left Section */
        .left-section {
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .ai-icon {
          width: 80px;
          height: 60px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          transform: skew(-20deg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
        }

        .ai-icon svg {
          transform: skew(20deg);
        }

        .section-subtitle {
          color: #94a3b8;
          font-size: 16px;
          margin-bottom: 20px;
          font-weight: 500;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          letter-spacing: 0.5px;
        }

        .main-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 40px;
          color: #ffffff;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          text-transform: uppercase;
          letter-spacing: -1px;
        }

        .accent-line {
          height: 4px;
          width: 60px;
          background: linear-gradient(90deg, #ef4444, #f97316);
          margin-bottom: 32px;
          border-radius: 2px;
        }

        .description-text {
          font-size: 18px;
          color: #cbd5e1;
          line-height: 1.7;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 400;
        }

        /* Right Section - Diagonal Ribbon Flow */
        .right-section {
          position: relative;
          height: 100%;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Diagonal Ribbon Steps */
        .barrier-ribbon {
          position: relative;
          margin: 15px 0;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .barrier-ribbon:hover {
          transform: translateX(10px);
        }

        .barrier-label {
          background: linear-gradient(135deg, #e5e7eb, #f3f4f6);
          padding: 20px 40px;
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transform: skew(-20deg);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          z-index: 5;
          min-width: 200px;
          text-align: center;
        }

        .barrier-content {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
          padding: 24px 40px;
          margin-left: -20px;
          border-radius: 0 12px 12px 0;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          flex: 1;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .barrier-subtitle {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .barrier-description {
          font-size: 14px;
          color: #475569;
          line-height: 1.6;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 400;
        }

        /* Privacy Ribbon - More Colorful Styling */
        .barrier-ribbon.privacy .barrier-label {
          background: linear-gradient(135deg, #ef4444, #dc2626, #f97316);
          color: #ffffff;
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
          border: 2px solid rgba(255, 255, 255, 0.3);
          font-weight: 800;
        }

        .barrier-ribbon.privacy .barrier-content {
          background: linear-gradient(135deg, #fef2f2, #fee2e2, #fef3c7);
          border: 2px solid #ef4444;
          box-shadow: 0 12px 30px rgba(239, 68, 68, 0.2);
        }

        .barrier-ribbon.privacy .barrier-subtitle {
          color: #dc2626;
          font-weight: 800;
        }

        .barrier-ribbon.privacy .barrier-description {
          color: #7c2d12;
          font-weight: 500;
        }

        .barrier-ribbon.privacy.flash .barrier-label {
          background: linear-gradient(135deg, #ffffff, #fef3c7);
          color: #1e293b;
          animation: flashLabel 0.8s ease-in-out;
        }

        @keyframes flashLabel {
          0%, 100% { 
            background: linear-gradient(135deg, #ef4444, #dc2626, #f97316);
            color: #ffffff;
          }
          50% { 
            background: linear-gradient(135deg, #ffffff, #fef3c7);
            color: #1e293b;
          }
        }

        /* 86% Circle */
        .percentage-display {
          position: absolute;
          left: 150px;
          top: 50%;
          transform: translateY(-50%);
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.00), rgba(248, 250, 252, 0.00));
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.01);
          border: 3px solid #ef4444;
          z-index: 10;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(1px);
        }

        .percentage-display:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 15px 40px rgba(239, 68, 68, 0.3);
        }

        .percentage {
          font-size: 32px;
          font-weight: 900;
          color: #000000;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -1px;
        }

        .percentage.show {
          opacity: 1;
          transform: scale(1);
          animation: bounceIn 0.8s ease-out;
        }

        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.2); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* Disclaimer - Positioned Lower */
        .disclaimer {
          position: absolute;
          bottom: -20px;
          right: 30px;
          font-size: 11px;
          color: #64748b;
          max-width: 400px;
          line-height: 1.4;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: italic;
          font-weight: 400;
          z-index: 5;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .ai-barriers-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .left-section {
            padding: 40px;
          }

          .main-title {
            font-size: 42px;
          }

          .right-section {
            min-height: 500px;
          }

          .percentage-display {
            left: 120px;
            width: 100px;
            height: 100px;
          }

          .percentage {
            font-size: 24px;
          }
        }

        @media (max-width: 768px) {
          .left-section {
            padding: 30px 20px;
          }

          .main-title {
            font-size: 32px;
            letter-spacing: -0.5px;
          }

          .section-subtitle {
            font-size: 14px;
          }

          .description-text {
            font-size: 16px;
          }

          .barrier-label {
            padding: 16px 24px;
            font-size: 14px;
            min-width: 150px;
            letter-spacing: 1px;
          }

          .barrier-content {
            padding: 20px 24px;
          }

          .barrier-subtitle {
            font-size: 14px;
          }

          .barrier-description {
            font-size: 13px;
          }

          .percentage-display {
            left: 80px;
            width: 80px;
            height: 80px;
          }

          .percentage {
            font-size: 20px;
          }
        }
      `}</style>

      <section id="ai-barriers" className="ai-barriers-wrapper">
        <div className="ai-barriers-container">
          
          {/* Left Section */}
          <div className="left-section">
            <div className="ai-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            
            <p className="section-subtitle">Safe, Compliant and Trusted AI.</p>
            
            <h2 className="main-title">
              OVERCOME EVERY AI BARRIER IN ONE MOVE
            </h2>
            
            <div className="accent-line"></div>
            
            <p className="description-text">
              Unlocking high-value use cases previously limited by data, risk or governance barriers
            </p>
          </div>

          {/* Right Section - Diagonal Ribbon Flow */}
          <div className="right-section">
            
            {/* Security Ribbon */}
            <div className="barrier-ribbon">
              <div className="barrier-label">SECURITY</div>
              <div className="barrier-content">
                <div className="barrier-subtitle">ZERO-TRUST PROTECTION</div>
                <div className="barrier-description">
                  Zero-trust with micro-segmentation, encryption, anonymization prevents insider misuse and external attacks on AI, APIs, data.
                </div>
              </div>
            </div>

            {/* Privacy Ribbon with 86% Circle */}
            <div 
              className={`barrier-ribbon privacy ${privacyFlash ? 'flash' : ''}`}
              onMouseEnter={handlePrivacyInteraction}
              onClick={handlePrivacyInteraction}
            >
              <div className="barrier-label">PRIVACY</div>
              <div className="barrier-content">
                <div className="barrier-subtitle">ISOLATED PROTECTION</div>
                <div className="barrier-description">
                  Single-tenant spheres isolate training, blocking data leakage, re-identification and inversion attack risks.
                </div>
              </div>
              
              {/* 86% Circle */}
              <div className="percentage-display">
                <div className={`percentage ${showPercentage ? 'show' : ''}`}>
                  86%*
                </div>
              </div>
            </div>

            {/* Trust Ribbon */}
            <div className="barrier-ribbon">
              <div className="barrier-label">TRUST</div>
              <div className="barrier-content">
                <div className="barrier-subtitle">BIAS CONTROLS</div>
                <div className="barrier-description">
                  Conventional and graph algorithms establish AI guardrails, limit bias and ensure transparent validation of sensitive data.
                </div>
              </div>
            </div>

            {/* Operational Ribbon */}
            <div className="barrier-ribbon">
              <div className="barrier-label">OPERATIONAL</div>
              <div className="barrier-content">
                <div className="barrier-subtitle">META-DATA CONTROLS</div>
                <div className="barrier-description">
                  Metadata checks enforce provenance, validation, classification and dependency mapping to mitigate integrity, drift and explainability risks.
                </div>
              </div>
            </div>

          </div>

          {/* Disclaimer */}
          <p className="disclaimer">
            * April 30, 2025: Collibra Harris Poll Finds 86% of Data Leaders Cite Privacy as Top Concern Amid AI Adoption
          </p>
        </div>
      </section>
    </>
  )
}

export default AIBarriersSection