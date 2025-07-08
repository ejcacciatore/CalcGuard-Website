'use client'

import { useState } from 'react'

const AnalyticsSection = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [unifiedActive, setUnifiedActive] = useState(false)

  const analyticsItems = [
    {
      num: '01',
      title: 'CONVENTIONAL ANALYTICS',
      description: 'Structured data analysis identifies trends, patterns, outliers for execution, oversight and strategy decisions.',
      color: '#3b82f6'
    },
    {
      num: '02', 
      title: 'GRAPH ANALYTICS',
      description: 'Graph databases reveal hidden patterns, dependencies and anomalies in complex order data.',
      color: '#f59e0b'
    },
    {
      num: '03',
      title: 'AI DRIVEN ANALYTICS', 
      description: 'The platform provides secure, private access to generative AI without data exposure risk.*',
      color: '#10b981'
    }
  ]

  return (
    <>
      <style jsx>{`
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

        .analytics-wrapper {
          width: 100vw;
          min-height: 100vh;
          background-color: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .analytics-container {
          width: 100%;
          max-width: 1600px;
          background: linear-gradient(135deg, #ffffff 0%, #ffffff 40%, #2c3e50 40%, #2c3e50 100%);
          min-height: 700px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          display: flex;
        }

        /* Left White Section */
        .left-section {
          width: 40%;
          padding: 60px 60px 40px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #ffffff;
          position: relative;
          z-index: 10;
        }

        .section-subtitle {
          color: #64748b;
          font-size: 16px;
          margin-bottom: 16px;
          font-weight: 500;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .main-title {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 30px;
          color: #1e293b;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .title-highlight {
          color: #e11d48;
          font-weight: 400;
          font-style: italic;
        }

        .accent-line {
          height: 4px;
          width: 60px;
          background: linear-gradient(90deg, #3b82f6, #e11d48);
          margin-bottom: 24px;
          border-radius: 2px;
        }

        .description-text {
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Right Dark Section */
        .right-section {
          width: 60%;
          background: rgba(44, 62, 80, 0.3);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 40px;
          backdrop-filter: blur(10px);
        }

        .visualization-area {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Analytics Cards */
        .analytics-cards {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 15;
        }

        .analytics-card {
          background: rgba(52, 73, 94, 0.15);
          color: rgba(255, 255, 255, 0.4);
          padding: 16px 20px;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: 240px;
          position: relative;
          backdrop-filter: blur(2px);
        }

        .analytics-card.active {
          transform: scale(1.03);
          background: rgba(26, 37, 47, 0.95);
          color: rgba(255, 255, 255, 1);
          border-color: #e11d48;
          box-shadow: 0 10px 30px rgba(225, 29, 72, 0.3);
          backdrop-filter: blur(15px);
        }

        .analytics-card.unified-glow {
          border-color: #e11d48;
          box-shadow: 0 10px 30px rgba(225, 29, 72, 0.4);
          background: rgba(26, 37, 47, 0.95);
          color: rgba(255, 255, 255, 1);
          backdrop-filter: blur(15px);
        }

        .analytics-card:not(.active):not(.unified-glow) {
          opacity: 0.15;
        }

        .card-number {
          font-size: 24px;
          font-weight: 800;
          color: rgba(225, 29, 72, 0.3);
          margin-bottom: 8px;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          transition: all 0.4s ease;
        }

        .analytics-card.active .card-number,
        .analytics-card.unified-glow .card-number {
          color: #e11d48;
          text-shadow: 0 0 8px rgba(225, 29, 72, 0.4);
        }

        .card-title {
          font-size: 14px;
          font-weight: 700;
          color: inherit;
          margin-bottom: 8px;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.4s ease;
        }

        .card-description {
          font-size: 12px;
          color: inherit;
          line-height: 1.5;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          transition: all 0.4s ease;
        }

        /* Custom CSS Sphere */
        .sphere-container {
          position: absolute;
          right: 180px;
          top: 50%;
          transform: translateY(-50%);
          width: 250px;
          height: 250px;
          z-index: 10;
        }

        .sphere {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: relative;
          background: radial-gradient(circle at 30% 30%, 
            #ef4444 0%, 
            #dc2626 25%, 
            #b91c1c 50%, 
            #991b1b 75%, 
            #7f1d1d 100%);
          box-shadow: 
            0 0 0 10px rgba(239, 68, 68, 0.15),
            0 0 0 20px rgba(239, 68, 68, 0.08),
            0 15px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .sphere.animate {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 
            0 0 0 20px rgba(239, 68, 68, 0.3),
            0 0 0 40px rgba(239, 68, 68, 0.2),
            0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .sphere.unified-active {
          transform: scale(1.15) rotate(10deg);
          box-shadow: 
            0 0 0 25px rgba(239, 68, 68, 0.4),
            0 0 0 50px rgba(239, 68, 68, 0.3),
            0 0 0 75px rgba(239, 68, 68, 0.2),
            0 30px 60px rgba(0, 0, 0, 0.5);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        /* Core Sections */
        .core-section {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          transition: all 0.4s ease;
          opacity: 0;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .core-section.active {
          opacity: 1;
          transform: scale(1.1);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
          animation: spinCore 3s linear infinite;
        }

        .core-section.unified-glow {
          opacity: 1;
          transform: scale(1.2);
          border-color: rgba(255, 255, 255, 1);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          animation: spinCoreUnified 2s linear infinite;
        }

        @keyframes spinCore {
          0% { transform: rotate(0deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1.1); }
        }

        @keyframes spinCoreUnified {
          0% { transform: rotate(0deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1.2); }
        }

        .core-01 {
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, #3b82f6, #1e40af);
        }

        .core-02 {
          bottom: 50px;
          left: 25px;
          background: radial-gradient(circle, #f59e0b, #d97706);
        }

        .core-03 {
          bottom: 50px;
          right: 25px;
          background: radial-gradient(circle, #10b981, #059669);
        }

        /* Core Center */
        .core-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff, #e5e7eb);
          transition: all 0.4s ease;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
          opacity: 0.7;
        }

        .core-center.unified-active {
          transform: translate(-50%, -50%) scale(1.8);
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
          opacity: 1;
        }

        /* Connection Lines */
        .connections-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }

        .connection-path {
          stroke: #94a3b8;
          stroke-width: 2;
          fill: none;
          transition: all 0.4s ease;
          opacity: 0.3;
        }

        .connection-path.active {
          stroke: #e11d48;
          stroke-width: 3;
          opacity: 0.9;
          filter: drop-shadow(0 0 6px rgba(225, 29, 72, 0.4));
        }

        .connection-path.unified-glow {
          stroke: #e11d48;
          stroke-width: 4;
          opacity: 0.9;
          filter: drop-shadow(0 0 10px rgba(225, 29, 72, 0.6));
          animation: lineGlow 2s infinite;
        }

        @keyframes lineGlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .arrow-marker {
          fill: #94a3b8;
          transition: all 0.4s ease;
          opacity: 0.3;
        }

        .arrow-marker.active {
          fill: #e11d48;
          opacity: 0.9;
        }

        .arrow-marker.unified-glow {
          fill: #e11d48;
          opacity: 0.9;
          filter: drop-shadow(0 0 4px rgba(225, 29, 72, 0.6));
        }

        /* Unified Intelligence Label */
        .unified-label {
          position: absolute;
          bottom: 60px;
          right: 20px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9));
          color: #1e293b;
          padding: 16px 20px;
          border-radius: 10px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(0, 0, 0, 0.1);
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          text-align: center;
          min-width: 200px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 20;
          backdrop-filter: blur(10px);
        }

        .unified-label:hover {
          transform: scale(1.08) translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95));
          border-color: rgba(225, 29, 72, 0.3);
        }

        .unified-label.active {
          transform: scale(1.12) translateY(-8px);
          border-color: #e11d48;
          box-shadow: 0 25px 50px rgba(225, 29, 72, 0.4);
          background: linear-gradient(135deg, #fef2f2, #ffffff);
          animation: pulseUnified 2s infinite;
        }

        @keyframes pulseUnified {
          0%, 100% { 
            box-shadow: 0 25px 50px rgba(225, 29, 72, 0.4);
          }
          50% { 
            box-shadow: 0 30px 60px rgba(225, 29, 72, 0.6);
            transform: scale(1.15) translateY(-10px);
          }
        }

        .unified-title {
          font-size: 14px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .unified-label.active .unified-title {
          color: #e11d48;
          text-shadow: 0 0 10px rgba(225, 29, 72, 0.3);
        }

        .unified-subtitle {
          font-size: 12px;
          color: #64748b;
          line-height: 1.4;
          transition: all 0.3s ease;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .unified-label.active .unified-subtitle {
          color: #475569;
          font-weight: 500;
        }

        /* Disclaimer */
        .disclaimer {
          position: absolute;
          bottom: 15px;
          right: 20px;
          font-size: 9px;
          color: #94a3b8;
          max-width: 300px;
          line-height: 1.3;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          font-style: italic;
          z-index: 5;
        }

        /* MOBILE OPTIMIZATIONS */
        @media (max-width: 1024px) {
          .analytics-container {
            flex-direction: column;
            background: #ffffff;
            max-width: 900px;
            min-height: auto;
          }

          .left-section,
          .right-section {
            width: 100%;
          }

          .left-section {
            padding: 40px 30px;
            text-align: center;
          }

          .main-title {
            font-size: 36px;
          }

          .right-section {
            background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
            min-height: 600px;
            padding: 30px 20px;
          }

          .analytics-cards {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            margin-bottom: 30px;
          }

          .analytics-card {
            width: 100%;
            max-width: 350px;
            padding: 20px;
          }

          .sphere-container {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            margin: 30px auto;
            width: 200px;
            height: 200px;
          }

          .sphere {
            width: 200px;
            height: 200px;
          }

          .core-section {
            width: 40px;
            height: 40px;
          }

          .core-01 {
            top: 15px;
          }

          .core-02 {
            bottom: 35px;
            left: 20px;
          }

          .core-03 {
            bottom: 35px;
            right: 20px;
          }

          .unified-label {
            position: relative;
            bottom: auto;
            right: auto;
            margin: 20px auto 0;
            max-width: 300px;
          }

          .connections-svg {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .analytics-wrapper {
            padding: 20px 10px;
          }

          .analytics-container {
            border-radius: 8px;
            max-width: 100%;
          }

          .left-section {
            padding: 30px 20px;
          }

          .main-title {
            font-size: 28px;
            line-height: 1.2;
          }

          .section-subtitle {
            font-size: 14px;
          }

          .description-text {
            font-size: 14px;
          }

          .right-section {
            padding: 25px 15px;
            min-height: 500px;
          }

          .analytics-card {
            max-width: 100%;
            padding: 16px;
          }

          .card-title {
            font-size: 12px;
          }

          .card-description {
            font-size: 11px;
          }

          .sphere-container {
            width: 150px;
            height: 150px;
            margin: 20px auto;
          }

          .sphere {
            width: 150px;
            height: 150px;
          }

          .core-section {
            width: 30px;
            height: 30px;
          }

          .core-01 {
            top: 10px;
          }

          .core-02 {
            bottom: 25px;
            left: 15px;
          }

          .core-03 {
            bottom: 25px;
            right: 15px;
          }

          .core-center {
            width: 20px;
            height: 20px;
          }

          .unified-label {
            padding: 12px 16px;
            min-width: auto;
            width: 100%;
            max-width: 280px;
          }

          .unified-title {
            font-size: 12px;
          }

          .unified-subtitle {
            font-size: 10px;
          }

          .disclaimer {
            position: relative;
            bottom: auto;
            right: auto;
            margin: 15px auto 0;
            text-align: center;
            max-width: 100%;
            font-size: 8px;
          }
        }

        @media (max-width: 480px) {
          .analytics-wrapper {
            padding: 15px 8px;
          }

          .left-section {
            padding: 25px 15px;
          }

          .main-title {
            font-size: 24px;
          }

          .section-subtitle {
            font-size: 13px;
          }

          .description-text {
            font-size: 13px;
          }

          .right-section {
            padding: 20px 10px;
            min-height: 450px;
          }

          .analytics-card {
            padding: 14px;
          }

          .card-number {
            font-size: 20px;
          }

          .card-title {
            font-size: 11px;
          }

          .card-description {
            font-size: 10px;
          }

          .sphere-container {
            width: 120px;
            height: 120px;
          }

          .sphere {
            width: 120px;
            height: 120px;
          }

          .core-section {
            width: 25px;
            height: 25px;
          }

          .core-center {
            width: 15px;
            height: 15px;
          }

          .unified-label {
            padding: 10px 12px;
          }

          .unified-title {
            font-size: 11px;
          }

          .unified-subtitle {
            font-size: 9px;
          }
        }
      `}</style>

      <section id="analytics" className="analytics-wrapper">
        <div className="analytics-container">
          
          {/* Left White Section */}
          <div className="left-section">
            <p className="section-subtitle">Power Smarter, Faster Decisions.</p>
            
            <h2 className="main-title">
              UNIFYING THE ANALYTICS <span className="title-highlight">'TRINITY'</span>
            </h2>
            
            <div className="accent-line"></div>
            
            <p className="description-text">
              Combining these techniques unifies structured data, relationships and adaptive 
              learning to deliver deeper insights and sharper predictions.
            </p>
          </div>

          {/* Right Dark Section */}
          <div className="right-section">
            <div className="visualization-area">
              
              {/* Connection Lines SVG - Hidden on Mobile */}
              <svg className="connections-svg" viewBox="0 0 600 500">
                <defs>
                  <marker id="arrow1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" className={`arrow-marker ${activeItem === 0 || unifiedActive ? 'active' : ''} ${unifiedActive ? 'unified-glow' : ''}`} />
                  </marker>
                  <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" className={`arrow-marker ${activeItem === 1 || unifiedActive ? 'active' : ''} ${unifiedActive ? 'unified-glow' : ''}`} />
                  </marker>
                  <marker id="arrow3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" className={`arrow-marker ${activeItem === 2 || unifiedActive ? 'active' : ''} ${unifiedActive ? 'unified-glow' : ''}`} />
                  </marker>
                </defs>
                
                <path d="M 240 120 Q 300 140 360 180" className={`connection-path ${activeItem === 0 || unifiedActive ? 'active' : ''} ${unifiedActive ? 'unified-glow' : ''}`} markerEnd="url(#arrow1)" />
                <path d="M 240 240 L 360 240" className={`connection-path ${activeItem === 1 || unifiedActive ? 'active' : ''} ${unifiedActive ? 'unified-glow' : ''}`} markerEnd="url(#arrow2)" />
                <path d="M 240 360 Q 300 340 360 300" className={`connection-path ${activeItem === 2 || unifiedActive ? 'active' : ''} ${unifiedActive ? 'unified-glow' : ''}`} markerEnd="url(#arrow3)" />
              </svg>
              
              {/* Analytics Cards */}
              <div className="analytics-cards">
                {analyticsItems.map((item, index) => (
                  <div
                    key={item.num}
                    className={`analytics-card ${activeItem === index ? 'active' : ''} ${unifiedActive ? 'unified-glow' : ''}`}
                    onMouseEnter={() => setActiveItem(index)}
                    onMouseLeave={() => setActiveItem(null)}
                    onClick={() => setActiveItem(activeItem === index ? null : index)}
                  >
                    <div className="card-number">{item.num}</div>
                    <div className="card-title">{item.title}</div>
                    <div className="card-description">{item.description}</div>
                  </div>
                ))}
              </div>

              {/* Custom CSS Sphere */}
              <div className="sphere-container">
                <div className={`sphere ${activeItem !== null ? 'animate' : ''} ${unifiedActive ? 'unified-active' : ''}`}>
                  <div className={`core-section core-01 ${activeItem === 0 || unifiedActive ? 'active' : ''} ${unifiedActive ? 'unified-glow' : ''}`}></div>
                  <div className={`core-section core-02 ${activeItem === 1 || unifiedActive ? 'active' : ''} ${unifiedActive ? 'unified-glow' : ''}`}></div>
                  <div className={`core-section core-03 ${activeItem === 2 || unifiedActive ? 'active' : ''} ${unifiedActive ? 'unified-glow' : ''}`}></div>
                  <div className={`core-center ${unifiedActive ? 'unified-active' : ''}`}></div>
                </div>
              </div>

              {/* Unified Intelligence Label */}
              <div 
                className={`unified-label ${unifiedActive ? 'active' : ''}`}
                onClick={() => setUnifiedActive(!unifiedActive)}
              >
                <div className="unified-title">UNIFIED INTELLIGENCE</div>
                <div className="unified-subtitle">Holistic insight & faster root causes</div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="disclaimer">
              * Even with anonymization through public solutions, there remains a risk that generated content may 
              enable reconstruction of sensitive information or inference of details from the underlying training data.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AnalyticsSection