'use client'

import { useState } from 'react'

const WhatWeDoSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const features = [
    {
      icon: "/images/Unify_icon.png",
      title: "UNIFIED, SECURED & CONTROLLED",
      description: "Our modern architecture unifies fragmented data, empowering organizations to securely harness AI for secure, efficient, low-cost collaboration.",
      extendedDescription: "Built on zero-trust principles, our platform creates secure micro-environments where sensitive data can be processed and analyzed without exposure. Advanced encryption and access controls ensure that your most valuable information remains protected while enabling powerful analytics capabilities."
    },
    {
      icon: "/images/global_equity_icon.svg",
      title: "GLOBAL EQUITY TRADING",
      description: "Our current focus is global equity markets, providing advanced analytics and data interoperability for institutional investors, brokers and financial service providers.",
      extendedDescription: "We specialize in real-time order flow analysis, execution quality metrics, and market microstructure insights. Our platform processes millions of trade events daily, providing institutional-grade analytics that help optimize trading strategies and improve execution outcomes across all major global exchanges."
    },
    {
      icon: "/images/adaptable_icon.png",
      title: "ADAPTABLE & EXTENSIBLE",
      description: "CalcGuard's platform is architected for rapid expansion into adjacent verticals where similar data complexity, privacy and collaboration challenges exist.",
      extendedDescription: "Our modular architecture and API-first design enable seamless integration with existing systems. Whether you're in banking, insurance, healthcare, or other data-intensive industries, our platform can be customized to meet your specific regulatory requirements and business objectives."
    }
  ]

  return (
    <>
      <style jsx>{`
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

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
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
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
          gap: 20px;
        }

        .feature {
          display: flex;
          flex-direction: column;
          padding: 24px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(226, 232, 240, 0.5);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .feature:hover {
          background: rgba(255, 255, 255, 0.95);
          border-color: #ef4444;
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.15);
          transform: translateY(-4px);
        }

        .feature.expanded {
          background: rgba(255, 255, 255, 1);
          border-color: #ef4444;
          box-shadow: 0 20px 40px rgba(239, 68, 68, 0.2);
          transform: translateY(-8px) scale(1.02);
        }

        .feature-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .feature-icon {
          height: 48px;
          width: auto;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .feature:hover .feature-icon {
          transform: scale(1.1);
          filter: drop-shadow(0 4px 8px rgba(239, 68, 68, 0.3));
        }

        .feature.expanded .feature-icon {
          transform: scale(1.2);
          filter: drop-shadow(0 6px 12px rgba(239, 68, 68, 0.4));
        }

        .feature-title {
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          transition: all 0.3s ease;
        }

        .feature:hover .feature-title {
          color: #ef4444;
        }

        .feature.expanded .feature-title {
          color: #ef4444;
          text-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
        }

        .feature-description {
          font-size: 14px;
          color: #475569;
          line-height: 1.5;
          font-family: 'Raleway', sans-serif;
          transition: all 0.3s ease;
          margin-bottom: 0;
        }

        .feature:hover .feature-description {
          color: #334155;
        }

        .feature.expanded .feature-description {
          color: #1e293b;
          font-weight: 500;
        }

        .extended-description {
          font-size: 13px;
          color: #64748b;
          line-height: 1.6;
          font-family: 'Raleway', sans-serif;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(239, 68, 68, 0.2);
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature.expanded .extended-description {
          max-height: 200px;
          opacity: 1;
        }

        .feature::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #ef4444, #dc2626);
          transform: scaleY(0);
          transition: transform 0.3s ease;
          transform-origin: bottom;
        }

        .feature:hover::before {
          transform: scaleY(1);
        }

        .feature.expanded::before {
          transform: scaleY(1);
          background: linear-gradient(180deg, #ef4444, #dc2626, #ef4444);
        }

        .expand-indicator {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0;
        }

        .feature:hover .expand-indicator {
          opacity: 1;
          background: rgba(239, 68, 68, 0.2);
        }

        .feature.expanded .expand-indicator {
          opacity: 1;
          background: #ef4444;
          transform: rotate(180deg);
        }

        .expand-indicator::after {
          content: '▼';
          font-size: 10px;
          color: #ef4444;
          transition: color 0.3s ease;
        }

        .feature.expanded .expand-indicator::after {
          color: white;
        }

        /* Mobile Styles */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .left-column, .right-column {
            padding: 48px 32px;
          }

          .video-background {
            width: 100%;
            opacity: 0.3;
          }

          .left-content {
            margin-top: 40px;
          }

          .main-title {
            font-size: 40px;
          }

          /* Hide corner design on tablet to prevent overlap */
          .corner-design {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .left-column, .right-column {
            padding: 40px 20px;
          }

          .main-title {
            font-size: 32px;
          }

          .feature {
            padding: 20px;
          }

          .feature-header {
            gap: 12px;
          }

          .feature-icon {
            height: 40px;
          }

          .feature-title {
            font-size: 14px;
          }

          .feature-description {
            font-size: 13px;
          }

          .extended-description {
            font-size: 12px;
          }

          /* Mobile specific adjustments */
          .left-content {
            margin-top: 20px;
            max-width: 100%;
          }

          .corner-design {
            display: none;
          }

          .right-column {
            padding: 40px 15px;
          }

          .features-container {
            gap: 15px;
          }

          .feature {
            margin: 0;
            padding: 16px;
          }
        }

        @media (max-width: 480px) {
          .left-column, .right-column {
            padding: 32px 15px;
          }

          .main-title {
            font-size: 28px;
            line-height: 1.2;
          }

          .subtitle {
            font-size: 12px;
          }

          .description {
            font-size: 14px;
          }

          .feature {
            padding: 16px 12px;
            margin: 0;
          }

          .feature-title {
            font-size: 13px;
          }

          .feature-description, .extended-description {
            font-size: 12px;
          }

          .feature-header {
            gap: 10px;
          }

          .feature-icon {
            height: 36px;
          }

          /* Ensure no content goes off screen */
          .left-content {
            margin-top: 10px;
            width: 100%;
            max-width: 100%;
          }

          .right-column {
            padding: 30px 10px;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
          }

          .features-container {
            width: 100%;
            max-width: 100%;
          }

          .feature {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .corner-design {
            display: none;
          }
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
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature ${hoveredFeature === index ? 'expanded' : ''}`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="feature-header">
                    <img 
                      src={feature.icon}
                      alt={`${feature.title} Icon`}
                      className="feature-icon"
                    />
                    <h3 className="feature-title">{feature.title}</h3>
                  </div>
                  <p className="feature-description">
                    {feature.description}
                  </p>
                  <div className="extended-description">
                    {feature.extendedDescription}
                  </div>
                  <div className="expand-indicator"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDoSection;