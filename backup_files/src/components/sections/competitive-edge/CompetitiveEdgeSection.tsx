'use client'

import { useState } from 'react'

const CompetitiveEdgeSection = () => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())

  const handleCheckClick = (index: number) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(index)) {
      newChecked.delete(index)
    } else {
      newChecked.add(index)
    }
    setCheckedItems(newChecked)
  }

  const features = [
    {
      title: "CONSORTIUM DRIVEN",
      description: "The Investment Management Advisory Council (IMAC) guides strategy, governance & priorities"
    },
    {
      title: "COST SAVING PRIVATE CLOUD", 
      description: "Our private cloud delivers secure, scalable control with ~50% savings over public cloud."
    },
    {
      title: "SIGHTLESS & ZERO-TRUST",
      description: "Sightless, zero-trust authenticates access, micro-segments to reduce attack surfaces, threats."
    },
    {
      title: "LOW CODE ANALYSIS",
      description: "Metadata-driven Order Event Model enables low-code reuse, reducing costs and accelerating onboarding"
    },
    {
      title: "CLOUD NATIVE AI & VISUALIZATIONS",
      description: "Visualize big data to reveal hidden relationships; Kubernetes enables elastic, scalable ML/AI."
    },
    {
      title: "TRANSFORMATIVE INFOSEC",
      description: "Infosec embedded by design; TPRM, transparency and compliance standards"
    }
  ]

  return (
    <>
      <style jsx>{`
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

        .competitive-edge-wrapper {
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }

        /* Background Animation */
        .competitive-edge-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 15% 25%, rgba(239, 68, 68, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 85% 75%, rgba(239, 68, 68, 0.08) 0%, transparent 50%);
          animation: backgroundPulse 6s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes backgroundPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        .competitive-edge-container {
          width: 100%;
          max-width: 1600px;
          position: relative;
          display: flex;
          flex-direction: column;
          z-index: 10;
        }

        /* Title Banner */
        .title-banner {
          position: relative;
          margin-bottom: 60px;
          z-index: 10;
          animation: slideInLeft 0.8s ease-out;
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .title-banner-shape {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          transform: skew(-20deg);
          padding: 24px 80px 24px 60px;
          display: inline-block;
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.4);
          transition: all 0.3s ease;
        }

        .title-banner-shape:hover {
          transform: skew(-20deg) scale(1.02);
          box-shadow: 0 15px 40px rgba(239, 68, 68, 0.5);
        }

        .title-text {
          color: #ffffff;
          font-size: 36px;
          font-weight: 800;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
          transform: skew(20deg);
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          transform: skew(-8deg);
          position: relative;
          animation: slideInUp 1s ease-out 0.3s both;
        }

        @keyframes slideInUp {
          from { transform: skew(-8deg) translateY(60px); opacity: 0; }
          to { transform: skew(-8deg) translateY(0); opacity: 1; }
        }

        .content-column {
          padding: 60px 50px;
          display: flex;
          flex-direction: column;
          gap: 50px;
          transform: skew(8deg);
        }

        .content-column.dark {
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
        }

        /* Feature Item with Animation */
        .feature-item {
          display: flex;
          flex-direction: column;
          gap: 16px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .feature-item:nth-child(1) { animation-delay: 0.6s; }
        .feature-item:nth-child(2) { animation-delay: 0.9s; }
        .feature-item:nth-child(3) { animation-delay: 1.2s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-header {
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .feature-header:hover {
          transform: translateX(8px);
        }

        .check-icon {
          width: 32px;
          height: 32px;
          background: #ffffff;
          border: 2px solid #111827;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(17, 24, 39, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .check-icon svg {
          transition: all 0.3s ease;
          opacity: 0;
          transform: scale(0.5);
        }

        .check-icon.checked {
          background: #111827;
          border-color: #111827;
          box-shadow: 0 4px 12px rgba(17, 24, 39, 0.4);
        }

        .check-icon.checked svg {
          opacity: 1;
          transform: scale(1);
        }

        .check-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(17, 24, 39, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .feature-header:hover .check-icon {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(17, 24, 39, 0.3);
        }

        .feature-header:hover .check-icon::before {
          left: 100%;
        }

        .feature-title {
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .content-column.dark .feature-title {
          color: #f9fafb;
        }

        .feature-header:hover .feature-title {
          color: #ef4444;
        }

        .content-column.dark .feature-header:hover .feature-title {
          color: #ef4444;
        }

        .feature-description {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.6;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 400;
          margin-left: 52px;
          transition: all 0.3s ease;
        }

        .content-column.dark .feature-description {
          color: #d1d5db;
        }

        .feature-item:hover .feature-description {
          color: #374151;
          transform: translateX(4px);
        }

        .content-column.dark .feature-item:hover .feature-description {
          color: #f3f4f6;
        }

        /* Corner Accent with Animation */
        .corner-accent {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          transform: skew(-20deg) rotate(45deg);
          z-index: 5;
          animation: rotateAccent 8s linear infinite;
        }

        @keyframes rotateAccent {
          from { transform: skew(-20deg) rotate(45deg); }
          to { transform: skew(-20deg) rotate(405deg); }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .competitive-edge-wrapper {
            padding: 40px 20px;
          }

          .content-grid {
            grid-template-columns: 1fr;
            transform: skew(-4deg);
          }

          .content-column {
            padding: 40px 30px;
            transform: skew(4deg);
          }

          .title-text {
            font-size: 28px;
          }
        }

        @media (max-width: 768px) {
          .competitive-edge-wrapper {
            padding: 30px 15px;
          }

          .content-column {
            padding: 30px 20px;
            gap: 30px;
          }

          .title-banner-shape {
            padding: 20px 60px 20px 40px;
          }

          .title-text {
            font-size: 24px;
            letter-spacing: 0.5px;
          }

          .feature-title {
            font-size: 18px;
          }

          .feature-description {
            font-size: 14px;
            margin-left: 42px;
          }

          .check-icon {
            width: 28px;
            height: 28px;
          }
        }

        @media (max-width: 480px) {
          .content-grid {
            transform: skew(-2deg);
          }

          .content-column {
            transform: skew(2deg);
            padding: 25px 15px;
            gap: 25px;
          }

          .title-text {
            font-size: 20px;
          }

          .feature-title {
            font-size: 16px;
          }

          .feature-description {
            font-size: 13px;
            margin-left: 38px;
          }
        }
      `}</style>

      <section id="competitive-edge" className="competitive-edge-wrapper">
        <div className="competitive-edge-container">
          
          {/* Title Banner */}
          <div className="title-banner">
            <div className="title-banner-shape">
              <h2 className="title-text">OUR COMPETITIVE EDGE.</h2>
            </div>
          </div>

          {/* Content Grid */}
          <div className="content-grid">
            <div className="corner-accent"></div>
            
            {/* Left Column (Light) */}
            <div className="content-column">
              
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-header">
                    <div 
                      className={`check-icon ${checkedItems.has(index) ? 'checked' : ''}`}
                      onClick={() => handleCheckClick(index)}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                  </div>
                  <p className="feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}

            </div>

            {/* Right Column (Dark) */}
            <div className="content-column dark">
              
              {features.slice(3, 6).map((feature, index) => {
                const actualIndex = index + 3
                return (
                  <div key={actualIndex} className="feature-item">
                    <div className="feature-header">
                      <div 
                        className={`check-icon ${checkedItems.has(actualIndex) ? 'checked' : ''}`}
                        onClick={() => handleCheckClick(actualIndex)}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <h3 className="feature-title">{feature.title}</h3>
                    </div>
                    <p className="feature-description">
                      {feature.description}
                    </p>
                  </div>
                )
              })}

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default CompetitiveEdgeSection