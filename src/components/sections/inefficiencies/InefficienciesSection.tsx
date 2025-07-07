'use client'

const InefficienciesSection = () => {
  return (
    <>
      <style jsx>{`
        /* --- NEW BACKGROUND STYLES START --- */
        .inefficiencies-section {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background-color: #0A192F; /* Deep navy base color */
          background-image:
            radial-gradient(at 15% 85%, hsla(320, 70%, 35%, 0.25) 0px, transparent 50%),
            radial-gradient(at 80% 20%, hsla(200, 75%, 40%, 0.3) 0px, transparent 50%),
            radial-gradient(at 50% 50%, hsla(250, 75%, 25%, 0.2) 0px, transparent 50%);
          animation: subtle-glow 25s ease-in-out infinite;
        }

        @keyframes subtle-glow {
          0% { background-size: 100% 100%; }
          50% { background-size: 150% 150%; }
          100% { background-size: 100% 100%; }
        }
        /* --- NEW BACKGROUND STYLES END --- */

        .content-wrapper {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 60px;
          display: grid;
          grid-template-columns: 25% 75%;
          gap: 10px;
          align-items: start;
          position: relative; /* Ensure content is on top */
          z-index: 2;
        }

        /* --- TEXT & ELEMENT COLOR UPDATES FOR DARK MODE --- */
        .left-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 10px;
          margin-left: 80px;
        }

        .section-subtitle {
          font-family: 'Raleway', sans-serif;
          font-size: 18px;
          color: #8892b0; /* Updated for dark mode */
          margin-bottom: 24px;
          font-weight: 400;
        }

        .main-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #e2e8f0; /* Updated for dark mode */
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .red-accent {
          display: inline-block;
          width: 50px;
          height: 4px;
          background-color: #64ffda; /* Changed to a modern teal */
          margin-bottom: 24px;
        }

        .description {
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          color: #a8b2d1; /* Updated for dark mode */
          line-height: 1.6;
          font-weight: 400;
          margin-bottom: 24px;
        }

        .conclusion {
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          color: #ccd6f6; /* Updated for dark mode */
          line-height: 1.6;
          font-weight: 500;
        }

        /* --- FEATURE ITEM UPDATES FOR DARK MODE --- */
        .right-column {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 12px;
          padding: 20px;
          margin-left: 20px;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          cursor: pointer;
          padding: 12px;
          max-width: 190px;
          background: rgba(30, 41, 59, 0.5); /* Dark, glassy background */
          border-radius: 12px;
          border: 1px solid rgba(100, 255, 218, 0.1);
          backdrop-filter: blur(4px);
        }

        .feature-item:hover {
          transform: translateY(-10px) scale(1.08);
          z-index: 10;
          background: rgba(255, 255, 255, 1); /* Becomes white on hover */
          border-color: #e2e8f0;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .feature-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 600;
          margin-bottom: 2px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          line-height: 1.1;
          color: #ccd6f6; /* Light text for default state */
          transition: color 0.3s ease;
        }

        .feature-item:hover .feature-title,
        .feature-item:hover .feature-description,
        .feature-item:hover .feature-extended {
          color: #1a1a1a; /* Dark text for hover state */
        }

        .feature-description, .feature-extended {
          font-family: 'Raleway', sans-serif;
          font-size: 9px;
          line-height: 1.2;
          color: #8892b0; /* Light text for default state */
          transition: color 0.3s ease;
        }

        .feature-extended {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out, opacity 0.3s 0.1s ease-in-out, margin-top 0.3s ease-in-out;
        }

        .feature-item:hover .feature-extended {
          opacity: 1;
          max-height: 200px;
          margin-top: 8px;
        }

        /* --- POSITIONING STYLES --- */
        .feature-1 { grid-column: 1; grid-row: 1; margin-left: 120px; }
        .feature-2 { grid-column: 1; grid-row: 2; margin-left: 120px; }
        .feature-3 { grid-column: 1; grid-row: 3; margin-left: 120px; }
        .feature-4 { grid-column: 2; grid-row: 1; margin-left: -10px; }
        .feature-5 { grid-column: 2; grid-row: 2; margin-left: -10px; }
        .feature-6 { grid-column: 2; grid-row: 3; margin-left: -10px; }

        .feature-icon-container {
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .feature-item:hover .feature-icon-container {
          transform: scale(1.1);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          object-fit: contain;
        }

        .feature-4 .feature-icon,
        .feature-5 .feature-icon,
        .feature-6 .feature-icon {
          width: 200px;
          height: 200px;
        }
        
        /* --- RESPONSIVE STYLES --- */
        @media (max-width: 1024px) {
          .content-wrapper { 
            grid-template-columns: 1fr; 
            gap: 60px; 
            padding: 60px 40px; 
          }
          .left-column {
            margin-left: 0;
            text-align: center;
          }
          .main-title { font-size: 32px; }
          .right-column { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 20px;
            margin-left: 0;
            justify-items: center;
          }
          .feature-item { 
            padding: 16px; 
            margin-left: 0 !important;
            max-width: 220px;
          }
          .feature-icon { width: 100px; height: 100px; }
          .feature-4 .feature-icon,
          .feature-5 .feature-icon,
          .feature-6 .feature-icon {
            width: 100px;
            height: 100px;
          }
          .feature-title { font-size: 12px; }
          .feature-description { font-size: 11px; }
        }

        @media (max-width: 768px) {
          .content-wrapper { 
            padding: 40px 20px; 
            gap: 40px; 
          }
          .left-column { 
            text-align: center; 
            margin-left: 0;
            padding-right: 0;
          }
          .main-title { font-size: 28px; }
          .section-subtitle { font-size: 16px; }
          .description, .conclusion { font-size: 14px; }
          .right-column { 
            grid-template-columns: 1fr; 
            gap: 20px;
            margin-left: 0;
            padding: 0;
            justify-items: center;
          }
          .feature-item { 
            max-width: 280px; 
            margin: 0 auto !important;
            padding: 20px;
          }
          .feature-title { font-size: 14px; margin-bottom: 8px; }
          .feature-description { font-size: 12px; }
          .feature-icon-container {
            width: 80px;
            height: 80px;
            margin-bottom: 12px;
          }
          .feature-icon { 
            width: 60px; 
            height: 60px; 
          }
          .feature-4 .feature-icon,
          .feature-5 .feature-icon,
          .feature-6 .feature-icon {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .content-wrapper { 
            padding: 30px 15px; 
          }
          .main-title { 
            font-size: 24px;
            line-height: 1.3;
          }
          .section-subtitle { font-size: 14px; }
          .description, .conclusion { font-size: 13px; }
          .right-column {
            gap: 15px;
            padding: 0;
          }
          .feature-item { 
            max-width: 100%;
            width: 100%;
            margin: 0 !important;
            padding: 15px;
          }
          .feature-title { 
            font-size: 13px; 
            margin-bottom: 6px;
          }
          .feature-description { 
            font-size: 11px;
            line-height: 1.4;
          }
          .feature-icon-container {
            width: 70px;
            height: 70px;
            margin-bottom: 10px;
          }
          .feature-icon { 
            width: 50px; 
            height: 50px; 
          }
          .feature-4 .feature-icon,
          .feature-5 .feature-icon,
          .feature-6 .feature-icon {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 360px) {
          .content-wrapper { 
            padding: 20px 10px; 
          }
          .main-title { 
            font-size: 22px;
          }
          .feature-item { 
            padding: 12px;
          }
          .feature-title { 
            font-size: 12px; 
          }
          .feature-description { 
            font-size: 10px;
          }
        }
      `}</style>

      <section id="inefficiencies" className="inefficiencies-section">
        <div className="content-wrapper">
          {/* Left Column - Main Content */}
          <div className="left-column">
            <p className="section-subtitle">The Problem For Trading.</p>
            <h2 className="main-title">
              INEFFICIENCIES<br />
              ERODE<br />
              RETURNS
            </h2>
            <div className="red-accent"></div>
            <p className="description">
              Suboptimal execution reduces performance via worse prices, 
              missed liquidity and hidden costs.
            </p>
            <p className="conclusion">
              Optimal routing data and analytics generate outsized 
              returns for market makers and HFTs.
            </p>
          </div>

          {/* Right Column - Features Grid */}
          <div className="right-column">
            {/* Feature 1 - Top Left */}
            <div className="feature-item feature-1">
              <div className="feature-icon-container">
                <img src="/images/page5_1.png" alt="Routing Defragmentation" className="feature-icon" />
              </div>
              <h3 className="feature-title">Routing Defragmentation</h3>
              <p className="feature-description">
                Order routing optimization requires clean, complete data - our platform 
                resolves fragmentation, latency, normalization and transparency gaps.
              </p>
              <p className="feature-extended">
                Leverage our advanced data cleansing algorithms to eliminate discrepancies 
                and ensure consistent, reliable routing decisions across all trading venues.
              </p>
            </div>

            {/* Feature 2 - Middle Left */}
            <div className="feature-item feature-2">
              <div className="feature-icon-container">
                <img src="/images/page5_2.png" alt="Scalable Integration" className="feature-icon" />
              </div>
              <h3 className="feature-title">Scalable Integration</h3>
              <p className="feature-description">
                Data-driven routing requires timely integration of diverse data - our platform 
                overcomes broker, OMS/EMS and internal system constraints.
              </p>
              <p className="feature-extended">
                Seamlessly connect with multiple data sources through our unified API, 
                enabling real-time synchronization and eliminating integration bottlenecks.
              </p>
            </div>

            {/* Feature 3 - Bottom Left */}
            <div className="feature-item feature-3">
              <div className="feature-icon-container">
                <img src="/images/page5_3.png" alt="Unified Analytics" className="feature-icon" />
              </div>
              <h3 className="feature-title">Unified Analytics</h3>
              <p className="feature-description">
                Routing analytics face shifting market conditions - our metadata-driven 
                domain model unifies and stabilizes all analytical methods.
              </p>
              <p className="feature-extended">
                Access comprehensive analytics dashboards that adapt to market volatility 
                while maintaining consistent performance metrics and insights.
              </p>
            </div>

            {/* Feature 4 - Top Right */}
            <div className="feature-item feature-4">
              <div className="feature-icon-container">
                <img src="/images/page5_4.png" alt="Traceable Oversight" className="feature-icon" />
              </div>
              <h3 className="feature-title">Traceable Oversight</h3>
              <p className="feature-description">
                Audit, evidence, and surveillance are complex - our platform ensures full 
                traceability with transparent data, reporting and case management.
              </p>
              <p className="feature-extended">
                Complete audit trails with immutable logging ensure regulatory compliance 
                and provide comprehensive oversight for all trading activities.
              </p>
            </div>

            {/* Feature 5 - Middle Right */}
            <div className="feature-item feature-5">
              <div className="feature-icon-container">
                <img src="/images/page5_5.png" alt="Turnkey Efficiency" className="feature-icon" />
              </div>
              <h3 className="feature-title">Turnkey Efficiency</h3>
              <p className="feature-description">
                Data-driven routing demands rare and costly expertise - our platform 
                delivers a turnkey solution at a fraction of internal costs.
              </p>
              <p className="feature-extended">
                Deploy enterprise-grade routing capabilities without the overhead of 
                building internal teams or infrastructure - operational in days, not months.
              </p>
            </div>

            {/* Feature 6 - Bottom Right */}
            <div className="feature-item feature-6">
              <div className="feature-icon-container">
                <img src="/images/page5_6.png" alt="Adaptive Business Logic" className="feature-icon" />
              </div>
              <h3 className="feature-title">Adaptive Business Logic</h3>
              <p className="feature-description">
                Modern market fragmentation complicates routing - our order event 
                business logic and data provenance enable resilient, adaptive workflows.
              </p>
              <p className="feature-extended">
                Dynamic routing rules that evolve with market conditions, ensuring optimal 
                execution strategies across fragmented liquidity pools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InefficienciesSection