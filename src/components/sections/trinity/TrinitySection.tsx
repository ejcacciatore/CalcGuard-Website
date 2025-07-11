'use client'

import { useState } from 'react'

const TrinitySection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const handleMouseEnter = (featureId: string) => {
    setHoveredFeature(featureId)
  }

  const handleMouseLeave = () => {
    setHoveredFeature(null)
  }

  return (
    <>
      <style jsx>{`
        .page-wrapper {
          width: 100vw;
          min-height: 100vh;
          background-color: #f0f2f5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page-container {
          width: 100%;
          max-width: 1400px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }

        /* --- Top White Section --- */
        .top-section {
          background-color: #ffffff;
          display: flex;
          align-items: stretch;
          padding: 0;
          position: relative;
          z-index: 10;
          overflow: visible;
          min-height: 400px;
        }

        .top-image-container {
          width: 40%;
          padding: 0;
          display: flex;
          align-items: stretch;
        }

        .top-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .top-content {
          width: 60%;
          display: flex;
          justify-content: space-around;
          gap: 20px;
          padding: 60px 40px;
          position: relative;
          overflow: visible;
          background-color: #ffffff;
        }

        .feature-column {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.8;
          transform: scale(0.95);
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 280px;
        }

        .feature-column.highlight {
          transform: scale(1.2) translateX(0);
          opacity: 1;
          background-color: rgba(233, 91, 91, 0.12);
          box-shadow: 0 20px 60px rgba(233, 91, 91, 0.3);
          border: 2px solid rgba(233, 91, 91, 0.4);
          z-index: 20;
          width: 130%;
          max-width: 380px;
          padding: 28px 32px 20px 32px;
        }

        .feature-column:first-child.highlight {
          transform: scale(1.2) translateX(15%);
        }

        .feature-column:last-child.highlight {
          transform: scale(1.2) translateX(-15%);
        }

        .feature-column:not(.highlight) {
          opacity: 0.6;
          transform: scale(0.92);
        }

        .feature-icon {
          height: 48px;
          width: 48px;
          margin-bottom: 20px;
          color: #334155;
          transition: all 0.3s ease;
        }

        .feature-column.highlight .feature-icon {
          color: #e95b5b;
          transform: scale(1.2);
        }

        .feature-title {
          font-weight: 700;
          font-size: 16px;
          color: #1e293b;
          margin-bottom: 12px;
          transition: all 0.3s ease;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .feature-column.highlight .feature-title {
          color: #e95b5b;
          font-size: 18px;
          font-weight: 800;
        }

        .feature-description {
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
          transition: all 0.3s ease;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .feature-column.highlight .feature-description {
          color: #1e293b;
          font-size: 16px;
          font-weight: 500;
        }

        .feature-expanded {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 12px;
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          text-align: center;
          padding: 0 8px;
        }

        .feature-column.highlight .feature-expanded {
          max-height: 65px;
          opacity: 1;
          color: #475569;
          font-size: 13px;
          padding: 10px 16px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          margin-top: 12px;
        }

        /* --- Bottom Teal Section --- */
        .bottom-section {
          background-color: #2E4B4C;
          color: #ffffff;
          padding: 0;
          display: flex;
          align-items: stretch;
          position: relative;
          z-index: 5;
          min-height: 400px;
        }

        .bottom-text-container {
          width: 65%;
          position: relative;
          z-index: 10;
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .sub-heading {
          font-size: 16px;
          color: #cbd5e1;
          margin-bottom: 12px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .main-heading {
          font-size: 42px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 20px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .main-heading span {
          font-family: 'Arial', sans-serif;
          font-weight: 400;
        }

        .description-text {
          font-size: 18px;
          color: #e2e8f0;
          line-height: 1.6;
          max-width: 600px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .bottom-image-container {
          width: 35%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bottom-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        /* --- Responsive Styles --- */
        @media (max-width: 1024px) {
          .top-section, .bottom-section {
            flex-direction: column;
            min-height: auto;
          }
          
          .top-section {
            padding: 0;
          }
          
          .bottom-section {
            padding: 0;
          }
          
          .top-image-container, .top-content, .bottom-text-container, .bottom-image-container {
            width: 100%;
            position: relative;
          }
          
          .top-image-container {
            min-height: 250px;
            max-height: 300px;
          }
          
          .top-content {
            flex-direction: column;
            padding: 40px 30px;
            gap: 30px;
          }
          
          .bottom-text-container {
            padding: 40px 30px;
          }
          
          .bottom-image-container {
            min-height: 250px;
            max-height: 300px;
            order: -1;
          }
          
          .feature-column {
            max-width: 100%;
            width: 100%;
          }
          
          .feature-column.highlight {
            width: 100%;
            max-width: 100%;
            transform: scale(1.05);
          }
          
          .feature-column:first-child.highlight,
          .feature-column:last-child.highlight {
            transform: scale(1.05);
          }
        }
        
        @media (max-width: 768px) {
          .page-container {
            margin: 0;
            box-shadow: none;
          }
          
          .main-heading {
            font-size: 28px;
            line-height: 1.2;
          }
          
          .feature-column {
            padding: 20px 15px;
            margin-bottom: 20px;
          }
          
          .feature-title {
            font-size: 15px;
            margin-bottom: 10px;
          }
          
          .feature-description {
            font-size: 14px;
            line-height: 1.5;
          }
          
          .top-content {
            padding: 30px 20px;
            gap: 20px;
          }
          
          .bottom-text-container {
            padding: 30px 20px;
          }
          
          .description-text {
            font-size: 16px;
            line-height: 1.5;
          }
          
          .sub-heading {
            font-size: 14px;
          }
          
          .top-image-container {
            min-height: 200px;
            max-height: 250px;
          }
          
          .bottom-image-container {
            min-height: 200px;
            max-height: 250px;
          }
          
          .feature-column.highlight {
            transform: scale(1.02);
            padding: 25px 20px;
          }
          
          .feature-expanded {
            font-size: 12px;
          }
          
          .feature-column.highlight .feature-expanded {
            max-height: 80px;
            font-size: 12px;
            padding: 8px 12px;
          }
        }

        @media (max-width: 480px) {
          .main-heading {
            font-size: 24px;
            line-height: 1.3;
          }
          
          .top-content {
            padding: 25px 15px;
            gap: 15px;
          }
          
          .bottom-text-container {
            padding: 25px 15px;
          }
          
          .feature-column {
            padding: 15px 10px;
            margin-bottom: 15px;
          }
          
          .feature-title {
            font-size: 14px;
            margin-bottom: 8px;
          }
          
          .feature-description {
            font-size: 13px;
          }
          
          .description-text {
            font-size: 15px;
          }
          
          .sub-heading {
            font-size: 13px;
            margin-bottom: 10px;
          }
          
          .top-image-container {
            min-height: 180px;
            max-height: 220px;
          }
          
          .bottom-image-container {
            min-height: 180px;
            max-height: 220px;
          }
          
          .feature-icon {
            height: 40px;
            width: 40px;
            margin-bottom: 15px;
          }
          
          .feature-column.highlight {
            transform: scale(1.01);
            padding: 20px 15px;
          }
          
          .feature-column.highlight .feature-title {
            font-size: 15px;
          }
          
          .feature-column.highlight .feature-description {
            font-size: 14px;
          }
        }

        @media (max-width: 360px) {
          .page-wrapper {
            padding: 0;
          }
          
          .main-heading {
            font-size: 22px;
          }
          
          .top-content {
            padding: 20px 12px;
          }
          
          .bottom-text-container {
            padding: 20px 12px;
          }
          
          .feature-column {
            padding: 12px 8px;
          }
          
          .feature-title {
            font-size: 13px;
          }
          
          .feature-description {
            font-size: 12px;
          }
          
          .description-text {
            font-size: 14px;
          }
          
          .top-image-container {
            min-height: 160px;
            max-height: 200px;
          }
          
          .bottom-image-container {
            min-height: 160px;
            max-height: 200px;
          }
        }
      `}</style>
      <section id="trinity" className="page-wrapper">
        <div className="page-container">
          <div className="top-section">
            <div className="top-image-container">
              <img src="/images/Picture6_top_left.png" alt="Aerial view of boats in water" className="top-image" />
            </div>
            <div className="top-content">
              <div 
                className={`feature-column ${hoveredFeature === 'enriched' ? 'highlight' : ''}`}
                onMouseEnter={() => handleMouseEnter('enriched')}
                onMouseLeave={handleMouseLeave}
              >
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                </svg>
                <h3 className="feature-title">ENRICHED FOUNDATION</h3>
                <p className="feature-description">High-quality routing data enriched with metadata enables advanced, precise decision-making.</p>
                <div className="feature-expanded">
                  Enhanced data models with contextual metadata provide deeper insights into market behavior and execution patterns.
                </div>
              </div>
              
              <div 
                className={`feature-column ${hoveredFeature === 'secure' ? 'highlight' : ''}`}
                onMouseEnter={() => handleMouseEnter('secure')}
                onMouseLeave={handleMouseLeave}
              >
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
                </svg>
                <h3 className="feature-title">SECURE & TIMELY</h3>
                <p className="feature-description">Zero-Trust, unlimited-node B2B integration eliminating surveillance delays.</p>
                <div className="feature-expanded">
                  Enterprise-grade security with real-time data streaming ensures compliance while maintaining operational efficiency.
                </div>
              </div>
              
              <div 
                className={`feature-column ${hoveredFeature === 'refine' ? 'highlight' : ''}`}
                onMouseEnter={() => handleMouseEnter('refine')}
                onMouseLeave={handleMouseLeave}
              >
                <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <h3 className="feature-title">REFINE DECISIONS</h3>
                <p className="feature-description">Iterative tools refine decisions, integrate insights, and adapt business logic.</p>
                <div className="feature-expanded">
                  Adaptive algorithms continuously optimize strategies based on market conditions and performance feedback.
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-section">
            <div className="bottom-text-container">
              <p className="sub-heading">Why existing solutions fall short</p>
              <h2 className="main-heading">DATA LAKE <span aria-hidden="true">≠</span> DATA-DRIVEN DECISION MAKING</h2>
              <p className="description-text">Turning raw data into trusted, timely insights requires advanced workflow applications and business-context integration.</p>
            </div>
            <div className="bottom-image-container">
              <img src="/images/page6_bottom_right.png" alt="Boats docked in a marina" className="bottom-image"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrinitySection