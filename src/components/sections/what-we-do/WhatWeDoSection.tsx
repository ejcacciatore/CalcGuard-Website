'use client'

const WhatWeDoSection = () => {
  return (
    <>
      <style jsx>{`
        .what-we-do-section {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          opacity: 0.5;
          z-index: 0;
          object-fit: cover;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          min-height: 100vh;
          position: relative;
          z-index: 1;
        }

        .left-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px;
          position: relative;
        }

        .corner-design {
          position: absolute;
          top: 32px;
          left: 32px;
          width: 96px;
          height: auto;
        }

        .left-content {
          max-width: 400px;
          margin-top: 80px;
        }

        .subtitle {
          font-size: 14px;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .main-title {
          font-size: 48px;
          font-weight: 400;
          color: #1e293b;
          line-height: 1.1;
          margin-bottom: 24px;
          font-family: 'Montserrat', sans-serif;
        }

        .red-line {
          width: 80px;
          height: 4px;
          background-color: #ef4444;
          margin-bottom: 24px;
        }

        .description {
          font-size: 16px;
          color: #334155;
          line-height: 1.6;
          margin-bottom: 32px;
          font-family: 'Raleway', sans-serif;
        }

        .control-icon-container {
          text-align: center;
        }

        .control-icon {
          height: 48px;
          width: auto;
        }

        .right-column {
          background-color: #f8fafc;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px 96px 64px 64px;
        }

        .features-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .feature {
          display: flex;
          flex-direction: column;
        }

        .feature-icon {
          height: 48px;
          width: auto;
          margin-bottom: 12px;
        }

        .feature-title {
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }

        .feature-description {
          font-size: 14px;
          color: #475569;
          line-height: 1.5;
          font-family: 'Raleway', sans-serif;
        }
      `}</style>

      <section id="what-we-do" className="what-we-do-section">
        <video
          className="video-background"
          src="/images/ejcacciatore_Futuristic_fintech_data_platform_secure_data_agg_bcfdfb54-ac83-4f0b-b201-707abcb97ed2_3.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="content-grid">
          <div className="left-column">
            <img 
              src="/images/left_cornder.png" 
              alt="Corner Design" 
              className="corner-design"
            />
            <div className="left-content">
              <p className="subtitle">CalcGuard® Technologies</p>
              <h2 className="main-title">WHAT<br />WE DO</h2>
              <div className="red-line"></div>
              <p className="description">
                We deliver a scalable B2B platform for secure aggregation, normalization 
                and analysis of sensitive data, empowering organizations with actionable insights.
              </p>
              <div className="control-icon-container">
                <img 
                  src="/images/Full_Control_icon.png" 
                  alt="Full Control Icon" 
                  className="control-icon"
                />
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="features-container">
              <div className="feature">
                <div className="feature-header">
                  <img 
                    src="/images/Unify_icon.png" 
                    alt="Unified Icon" 
                    className="feature-icon"
                  />
                  <h3 className="feature-title">UNIFIED, SECURED & CONTROLLED</h3>
                </div>
                <p className="feature-description">
                  Our modern architecture unifies fragmented data, empowering organizations 
                  to securely harness AI for secure, efficient, low-cost collaboration.
                </p>
              </div>

              <div className="feature">
                <div className="feature-header">
                  <img 
                    src="/images/global_equity_icon.svg" 
                    alt="Global Equity Icon" 
                    className="feature-icon"
                  />
                  <h3 className="feature-title">GLOBAL EQUITY TRADING</h3>
                </div>
                <p className="feature-description">
                  Our current focus is global equity markets, providing advanced analytics 
                  and data interoperability for institutional investors, brokers and financial service providers.
                </p>
              </div>

              <div className="feature">
                <div className="feature-header">
                  <img 
                    src="/images/adaptable_icon.png" 
                    alt="Adaptable Icon" 
                    className="feature-icon"
                  />
                  <h3 className="feature-title">ADAPTABLE & EXTENSIBLE</h3>
                </div>
                <p className="feature-description">
                  CalcGuard's platform is architected for rapid expansion into adjacent 
                  verticals where similar data complexity, privacy and collaboration challenges exist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDoSection;
