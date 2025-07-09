'use client';

import React from 'react';
import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <div className="news-page">
        <div className="background-pattern"></div>
        
        {/* Back Button */}
        <Link href="/" className="back-button">
          <svg className="back-icon" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Back</span>
        </Link>
        
        <div className="container">
          <div className="logo-wrapper">
            <Link href="/">
              <img src="/images/CG_1.png" alt="CalcGuard Technologies" className="logo" />
            </Link>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div className="status-badge">Coming Soon</div>
          </div>
          
          <h1 className="title">NEWS</h1>
          <p className="subtitle">Industry Insights & Updates</p>
          
          <div className="divider"></div>
          
          <p className="description">
            Stay informed with the latest fintech innovations, market analysis, and thought leadership from CalcGuard Technologies.
          </p>

          <div className="preview-grid">
            <div className="preview-item">
              <div className="icon-wrapper">
                <svg className="icon chart-icon" viewBox="0 0 24 24">
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
              </div>
              <h3 className="preview-title">Market Analysis</h3>
            </div>
            
            <div className="preview-item">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                  <path d="M16 12a4 4 0 1 1-8 0" strokeDasharray="2 2" />
                </svg>
              </div>
              <h3 className="preview-title">Tech Updates</h3>
            </div>
            
            <div className="preview-item">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v6" />
                  <path d="M12 16v6" />
                  <path d="M4.93 4.93l4.24 4.24" />
                  <path d="M14.83 14.83l4.24 4.24" />
                  <path d="M2 12h6" />
                  <path d="M16 12h6" />
                  <path d="M4.93 19.07l4.24-4.24" />
                  <path d="M14.83 9.17l4.24-4.24" />
                </svg>
              </div>
              <h3 className="preview-title">Thought Leadership</h3>
            </div>
          </div>

          <p className="footer">Q2 2025</p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Raleway:wght@400;500;600&display=swap');

        :global(*) {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :global(body) {
          overflow-x: hidden;
        }

        .news-page {
          font-family: 'Raleway', sans-serif;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
        }

        .background-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.05;
          pointer-events: none;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 0, 0, 0.02) 0%, transparent 50%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-20px, -20px) rotate(1deg); }
          66% { transform: translate(20px, -10px) rotate(-1deg); }
        }

        .container {
          position: relative;
          max-width: 700px;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          box-shadow: 
            0 0 0 1px rgba(239, 68, 68, 0.1),
            0 20px 60px rgba(0, 0, 0, 0.1),
            0 40px 120px rgba(239, 68, 68, 0.05);
          padding: 60px;
          border: 1px solid rgba(239, 68, 68, 0.1);
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
          animation: logoFloat 3s ease-in-out infinite;
        }

        .logo-wrapper a {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .logo-wrapper a:hover {
          transform: scale(1.05);
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .logo {
          width: 90px;
          height: 90px;
          filter: drop-shadow(0 10px 30px rgba(239, 68, 68, 0.3));
          cursor: pointer;
          transition: filter 0.3s ease;
        }

        .logo:hover {
          filter: drop-shadow(0 10px 40px rgba(239, 68, 68, 0.5));
        }

        .back-button {
          position: fixed;
          top: 40px;
          left: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          z-index: 10;
        }

        .back-button:hover {
          background: #f8fafc;
          border-color: #ef4444;
          color: #ef4444;
          box-shadow: 0 4px 20px rgba(239, 68, 68, 0.15);
          transform: translateX(-3px);
        }

        .back-icon {
          width: 20px;
          height: 20px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
          transition: transform 0.3s ease;
        }

        .back-button:hover .back-icon {
          transform: translateX(-3px);
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 8px 20px;
          border-radius: 24px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 30px;
          box-shadow: 0 4px 20px rgba(239, 68, 68, 0.3);
          animation: pulse 2s ease-in-out infinite;
          position: relative;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(239, 68, 68, 0.3); }
          50% { box-shadow: 0 4px 30px rgba(239, 68, 68, 0.5); }
        }

        .status-badge::before {
          content: '';
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          animation: blink 1.5s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .title {
          font-family: 'Montserrat', sans-serif;
          font-size: 56px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 12px;
          line-height: 1;
          letter-spacing: -1px;
          text-align: center;
        }

        .subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 35px;
          letter-spacing: 0.5px;
          text-align: center;
        }

        .divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #ef4444, #dc2626);
          margin: 0 auto 35px auto;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .divider::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .description {
          font-family: 'Raleway', sans-serif;
          font-size: 17px;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 40px;
          text-align: center;
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .preview-item {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 30px 20px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .preview-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent, rgba(239, 68, 68, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .preview-item:hover {
          transform: translateY(-5px);
          border-color: rgba(239, 68, 68, 0.3);
          box-shadow: 0 15px 40px rgba(239, 68, 68, 0.15);
        }

        .preview-item:hover::before {
          opacity: 1;
        }

        .preview-item:hover .icon-wrapper {
          transform: scale(1.1);
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(239, 68, 68, 0.1);
          border-radius: 12px;
          transition: transform 0.3s ease;
        }

        .icon {
          width: 30px;
          height: 30px;
          stroke: #ef4444;
          fill: none;
          stroke-width: 2;
        }

        .preview-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1e293b;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .footer {
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          color: #64748b;
          text-align: center;
          font-weight: 500;
        }

        .chart-icon {
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        @media (max-width: 768px) {
          .container {
            padding: 50px 40px;
          }

          .title {
            font-size: 42px;
          }

          .subtitle {
            font-size: 18px;
          }

          .preview-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .back-button {
            top: 20px;
            left: 20px;
            padding: 10px 20px;
            font-size: 13px;
          }

          .back-icon {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 40px 30px;
            margin-top: 60px;
          }

          .title {
            font-size: 36px;
          }

          .logo {
            width: 75px;
            height: 75px;
          }

          .back-button {
            padding: 8px 16px;
            font-size: 12px;
          }

          .back-icon {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default NewsPage;