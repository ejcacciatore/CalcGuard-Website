'use client'

import { useState } from 'react'

const EvidenceSection = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const handleMouseEnter = (sectionId: string) => {
    setHoveredSection(sectionId)
  }

  const handleMouseLeave = () => {
    setHoveredSection(null)
  }

  return (
    <section id="evidence" className="evidence-section-wrapper">
      <div className="page-container">
        
        {/* Dark Section */}
        <div className="dark-section">
          <div className="left-column">
            {/* Diagnostic Section */}
            <div
              className={`info-pane diagnostic-pane ${hoveredSection === '01' ? 'highlight' : ''}`}
              onMouseEnter={() => handleMouseEnter('01')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="numbered-heading">
                <span className="header-number">01</span>
                <div className="header-text">
                  <h2 className="title">DIAGNOSTIC</h2>
                  <p className="subtitle">HISTORICAL ANALYSIS</p>
                </div>
              </div>
              <ul className="feature-list">
                <li>
                  <span className="feature-text">Identify what occurred and the drivers behind it</span>
                  <span className="feature-expanded">
                    Isolate and visualize emerging trends, patterns and behaviors. 
                    Establish historical baselines for comparison and future evaluation.
                  </span>
                </li>
              </ul>
            </div>

            {/* Predictive Section */}
            <div
              className={`info-pane predictive-pane ${hoveredSection === '02' ? 'highlight' : ''}`}
              onMouseEnter={() => handleMouseEnter('02')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="numbered-heading">
                <span className="header-number">02</span>
                <div className="header-text">
                  <h2 className="title">PREDICTIVE</h2>
                  <p className="subtitle">FORECAST MODELS</p>
                </div>
              </div>
              <ul className="feature-list">
                <li>
                  <span className="feature-text">Anticipate outcomes & influence drivers of change</span>
                  <span className="feature-expanded">
                    Hyper-contextual models minimize error and optimize accuracy. 
                    Advanced forecasting delivers precise predictions for strategic decisions.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="right-column-dark">
            {/* Guidance Section */}
            <div
              className={`info-pane guidance-pane ${hoveredSection === '03' ? 'highlight' : ''}`}
              onMouseEnter={() => handleMouseEnter('03')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="numbered-heading">
                <div className="header-text">
                  <h2 className="title">GUIDANCE & SURVEILLANCE</h2>
                </div>
                <span className="header-number">03</span>
              </div>
              <ul className="feature-list">
                <li>
                  <span className="feature-text">Guidance grounded in root causes, behaviors and strategy impacts</span>
                  <span className="feature-expanded">
                    Strengthening surveillance through advanced anomaly detection, fewer false 
                    positives and preemptive alerts. Case management with full traceability.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="circle-image-container">
            <img 
              src="/images/page7_circle.png" 
              alt="Workflow cycle" 
              className={`circle-image ${hoveredSection ? 'animate' : ''}`}
            />
          </div>
        </div>
        
        {/* White Section */}
        <div className="right-pane">
          <p className="subtitle">An Indispensable Advantage</p>
          <h1 className="main-title">EVIDENCE-BASED DECISIONS FOR EQUITIES TRADING</h1>
          <div className="accent-line"></div>
          <p className="subtitle" style={{marginBottom: '30px'}}>Get answers that drive real-world results</p>

          <div className="question-list">
            <div 
              className={`question-item ${hoveredSection === '01' ? 'highlight' : ''}`} 
              onMouseEnter={() => handleMouseEnter('01')} 
              onMouseLeave={handleMouseLeave}
            >
              <span className="question-number">01</span>
              <p className="question-text">
                "What is my Algo Wheel, broker's venue routing patterns, execution success and priority biases?"
              </p>
            </div>
            
            <div 
              className={`question-item ${hoveredSection === '02' ? 'highlight' : ''}`} 
              onMouseEnter={() => handleMouseEnter('02')} 
              onMouseLeave={handleMouseLeave}
            >
              <span className="question-number">02</span>
              <p className="question-text">
                "What is the expected vs realized value of adding a direct access liquidity provider?"
              </p>
            </div>
            
            <div 
              className={`question-item ${hoveredSection === '03' ? 'highlight' : ''}`} 
              onMouseEnter={() => handleMouseEnter('03')} 
              onMouseLeave={handleMouseLeave}
            >
              <span className="question-number">03</span>
              <p className="question-text">
                "What is the signaling risk created by IOC 'sprays' of trading algorithms with low order conversion rates?"
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .evidence-section-wrapper {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 20px;
          background-color: #3D4752;
          overflow: hidden;
        }

        .page-container {
          width: 100%;
          max-width: 1400px;
          display: grid;
          grid-template-columns: 2fr 1fr;
          background-color: #ffffff;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          overflow: hidden;
        }
        
        /* Dark Section (Left side with circle) */
        .dark-section {
          position: relative;
          background-color: #3D4752;
          color: #ffffff;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          padding: 40px 40px;
          min-height: 500px;
        }

        .dark-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/images/page7_chart.png');
          background-size: cover;
          background-position: center;
          opacity: 0.05;
          z-index: 1;
        }

        .left-column, .right-column-dark {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        /* Circle Image */
        .circle-image-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          z-index: 2;
        }

        .circle-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.35;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .circle-image.animate {
          transform: rotate(15deg) scale(1.1);
          opacity: 0.5;
          filter: drop-shadow(0 15px 30px rgba(233, 91, 91, 0.3));
        }

        /* Positioned Quadrants */
        .info-pane {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          padding: 24px;
          border-radius: 12px;
          opacity: 0.65;
          transform: scale(0.95);
        }
        
        .info-pane.highlight {
          transform: scale(1.15);
          opacity: 1;
          background-color: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(15px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .info-pane:not(.highlight) {
          opacity: 0.55;
          transform: scale(0.92);
        }

        .guidance-pane { 
          text-align: right; 
        }

        .numbered-heading { 
          display: flex; 
          align-items: flex-start; 
          gap: 20px; 
          margin-bottom: 16px; 
        }

        .guidance-pane .numbered-heading { 
          flex-direction: row-reverse; 
        }

        .header-number { 
          font-size: 52px; 
          font-weight: 800; 
          color: rgba(229, 231, 235, 0.5); 
          line-height: 1; 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .header-text .title { 
          font-size: 26px; 
          font-weight: 800; 
          margin-bottom: 8px; 
          color: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .header-text .subtitle { 
          font-size: 13px; 
          color: #e5e7eb; 
          text-transform: uppercase; 
          letter-spacing: 0.8px;
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 600;
        }
        
        ul.feature-list { 
          list-style: none; 
          padding: 0; 
          margin: 0; 
        }

        ul.feature-list li { 
          position: relative; 
          margin-bottom: 12px; 
          color: #e5e7eb; 
          font-size: 16px; 
          line-height: 1.6; 
          padding-left: 24px; 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 500;
        }

        .feature-text {
          display: block;
          transition: all 0.3s ease;
        }

        .feature-expanded {
          display: block;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 8px;
          font-size: 14px;
          color: #d1d5db;
          font-weight: 400;
          line-height: 1.5;
        }

        .info-pane.highlight .feature-expanded {
          max-height: 100px;
          opacity: 1;
        }

        .guidance-pane ul.feature-list li { 
          padding-left: 0; 
          padding-right: 24px; 
        }

        ul.feature-list li::before { 
          content: '–'; 
          position: absolute; 
          left: 0; 
          color: #E95B5B; 
          font-weight: 600;
        }

        .guidance-pane ul.feature-list li::before { 
          left: auto; 
          right: 0; 
        }

        /* Right Pane (White Section) */
        .right-pane {
          padding: 40px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #ffffff;
        }
        
        .right-pane .subtitle { 
          color: #6b7280; 
          font-size: 14px; 
          margin-bottom: 12px; 
          font-weight: 500;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .right-pane .main-title { 
          font-size: 36px; 
          font-weight: 700; 
          line-height: 1.2; 
          margin-bottom: 24px; 
          color: #111827;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .accent-line { 
          height: 4px; 
          width: 50px; 
          background-color: #E95B5B; 
          margin-bottom: 32px; 
          border-radius: 2px;
        }
        
        .question-item {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          align-items: flex-start;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          padding: 20px;
          border-radius: 12px;
          opacity: 0.6;
          transform: scale(0.96);
        }

        .question-item.highlight {
          transform: scale(1.08);
          opacity: 1;
          background-color: rgba(233, 91, 91, 0.12);
          box-shadow: 0 12px 40px rgba(233, 91, 91, 0.25);
          border: 1px solid rgba(233, 91, 91, 0.3);
        }

        .question-item:not(.highlight) {
          opacity: 0.5;
          transform: scale(0.94);
        }

        .question-number { 
          font-size: 34px; 
          font-weight: 800; 
          color: #9ca3af; 
          line-height: 1; 
          min-width: 45px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .question-text { 
          color: #374151; 
          font-size: 17px; 
          line-height: 1.6; 
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .page-container { 
            grid-template-columns: 1fr; 
          }
          
          .right-pane .main-title {
            font-size: 28px;
          }
        }
        
        @media (max-width: 768px) {
          .evidence-section-wrapper {
            padding: 20px 16px;
          }
          
          .dark-section { 
            grid-template-columns: 1fr;
            padding: 30px 24px;
          }
          
          .circle-image-container { 
            display: none; 
          }
          
          .guidance-pane { 
            text-align: left; 
          }
          
          .guidance-pane .numbered-heading { 
            flex-direction: row; 
          }
          
          .guidance-pane ul.feature-list li { 
            padding-right: 0; 
            padding-left: 24px; 
          }
          
          .guidance-pane ul.feature-list li::before { 
            right: auto; 
            left: 0; 
          }
          
          .right-pane {
            padding: 30px 24px;
          }
          
          .right-pane .main-title {
            font-size: 24px;
          }
          
          .header-number {
            font-size: 36px;
          }
          
          .header-text .title {
            font-size: 20px;
          }
          
          .question-number {
            font-size: 24px;
          }
          
          .question-text {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .left-column, .right-column-dark {
            gap: 30px;
          }
          
          .numbered-heading {
            gap: 16px;
          }
          
          .question-item {
            gap: 16px;
            padding: 16px;
          }
          
          .right-pane .main-title {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  )
}

export default EvidenceSection