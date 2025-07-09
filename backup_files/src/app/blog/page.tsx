'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const BlogPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Raleway:wght@300;400;500;600;700&display=swap');

        .blog-page {
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.03;
          background-image: radial-gradient(circle at 25% 25%, #1e293b 2px, transparent 2px),
                            radial-gradient(circle at 75% 75%, #64748b 1px, transparent 1px);
          background-size: 80px 80px, 40px 40px;
          background-position: 0 0, 40px 40px;
          z-index: 1;
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .floating-shape {
          position: absolute;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(220, 38, 38, 0.04));
          animation: float 8s ease-in-out infinite;
        }

        .shape-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          right: 10%;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 50%;
          left: 5%;
          border-radius: 50%;
          animation-delay: 3s;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          bottom: 15%;
          right: 20%;
          border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
          animation-delay: 5s;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          33% { 
            transform: translateY(-20px) rotate(120deg) scale(1.1); 
          }
          66% { 
            transform: translateY(10px) rotate(240deg) scale(0.95); 
          }
        }

        .main-container {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          padding: 60px 40px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .logo-container {
          margin-bottom: 40px;
          animation: fadeInUp 1s ease-out;
        }

        .cg-logo {
          width: 120px;
          height: auto;
          margin: 0 auto;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
          transition: all 0.3s ease;
        }

        .cg-logo:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 15px 40px rgba(0, 0, 0, 0.15));
        }

        .company-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #1e293b;
          margin: 20px 0 8px 0;
          letter-spacing: 2px;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .company-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 50px;
          letter-spacing: 1px;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .main-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: 56px;
          font-weight: 900;
          color: #1e293b;
          margin-bottom: 20px;
          line-height: 1.1;
          animation: fadeInUp 1s ease-out 0.4s both;
          position: relative;
        }

        .highlight-text {
          color: #ef4444;
          position: relative;
        }

        .highlight-text::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #ef4444, #dc2626);
          border-radius: 2px;
          animation: slideIn 0.8s ease-out 1.2s both;
        }

        @keyframes slideIn {
          from { width: 0; }
          to { width: 100%; }
        }

        .subheading {
          font-family: 'Raleway', sans-serif;
          font-size: 24px;
          font-weight: 400;
          color: #64748b;
          margin-bottom: 40px;
          line-height: 1.4;
          animation: fadeInUp 1s ease-out 0.5s both;
        }

        .description {
          font-family: 'Raleway', sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 50px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .content-preview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
          animation: fadeInUp 1s ease-out 0.7s both;
        }

        .content-item {
          padding: 35px 25px;
          background: rgba(248, 250, 252, 0.8);
          border-radius: 16px;
          border: 1px solid rgba(226, 232, 240, 0.5);
          transition: all 0.3s ease;
          text-align: left;
        }

        .content-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(239, 68, 68, 0.2);
        }

        .content-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .content-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 10px;
        }

        .content-desc {
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          color: #64748b;
          line-height: 1.5;
        }

        .coming-topics {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 40px 30px;
          margin-bottom: 40px;
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        .topics-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
        }

        .topics-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 30px;
        }

        .topic-tag {
          padding: 8px 16px;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #ef4444;
          transition: all 0.3s ease;
        }

        .topic-tag:hover {
          background: #ef4444;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(239, 68, 68, 0.3);
        }

        .notification-signup {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          border-radius: 16px;
          padding: 40px 30px;
          margin-bottom: 40px;
          animation: fadeInUp 1s ease-out 0.9s both;
          color: white;
        }

        .signup-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .signup-desc {
          font-family: 'Raleway', sans-serif;
          font-size: 16px;
          margin-bottom: 25px;
          opacity: 0.9;
        }

        .email-form {
          display: flex;
          gap: 15px;
          max-width: 450px;
          margin: 0 auto;
        }

        .email-input {
          flex: 1;
          padding: 14px 18px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          font-family: 'Raleway', sans-serif;
          font-size: 16px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }

        .email-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .email-input:focus {
          outline: none;
          border-color: #ef4444;
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
        }

        .subscribe-button {
          padding: 14px 32px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          border: none;
          border-radius: 12px;
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .subscribe-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(239, 68, 68, 0.4);
        }

        .coming-soon-badge {
          display: inline-block;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 30px;
          animation: fadeInUp 1s ease-out 0.9s both;
          position: relative;
        }

        .coming-soon-badge::before {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          top: 50%;
          left: 15px;
          transform: translateY(-50%);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: translateY(-50%) scale(1); }
          50% { opacity: 0.6; transform: translateY(-50%) scale(0.8); }
        }

        .footer-info {
          color: #94a3b8;
          font-family: 'Raleway', sans-serif;
          font-size: 14px;
          animation: fadeInUp 1s ease-out 1s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .main-container {
            margin: 20px;
            padding: 40px 30px;
            border-radius: 20px;
          }

          .main-heading {
            font-size: 42px;
          }

          .subheading {
            font-size: 20px;
          }

          .description {
            font-size: 16px;
          }

          .content-preview {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .email-form {
            flex-direction: column;
            gap: 12px;
          }

          .subscribe-button {
            width: 100%;
          }

          .shape-1, .shape-2, .shape-3 {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .main-container {
            margin: 15px;
            padding: 30px 20px;
          }

          .main-heading {
            font-size: 36px;
          }

          .company-name {
            font-size: 24px;
          }

          .cg-logo {
            width: 100px;
          }

          .topics-list {
            gap: 8px;
          }

          .topic-tag {
            font-size: 12px;
            padding: 6px 12px;
          }
        }
      `}</style>

      <div className="blog-page">
        <div className="background-pattern"></div>
        
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        <div className="main-container">
          <div className="logo-container">
            <Image
              src="/images/CG_1.png"
              alt="CalcGuard Logo"
              width={120}
              height={120}
              className="cg-logo"
            />
            <h1 className="company-name">CALCGUARD</h1>
            <p className="company-subtitle">TECHNOLOGIES</p>
          </div>

          <div className="coming-soon-badge">Launching Soon</div>
          
          <h2 className="main-heading">
            The <span className="highlight-text">BLOG</span>
          </h2>
          
          <p className="subheading">
            Deep insights into fintech, data analytics, and market innovation
          </p>
          
          <p className="description">
            Join us on a journey through the evolving landscape of financial technology. 
            Our blog will feature technical deep-dives, industry analysis, engineering insights, 
            and perspectives on building the future of data-driven finance.
          </p>

          <div className="content-preview">
            <div className="content-item">
              <div className="content-icon">⚡</div>
              <h3 className="content-title">Technical Deep Dives</h3>
              <p className="content-desc">
                Explore the architecture and engineering behind modern fintech platforms, 
                from real-time data processing to advanced analytics.
              </p>
            </div>
            
            <div className="content-item">
              <div className="content-icon">🎯</div>
              <h3 className="content-title">Industry Perspectives</h3>
              <p className="content-desc">
                Strategic insights on market trends, regulatory changes, and the future 
                of institutional trading and data analytics.
              </p>
            </div>
            
            <div className="content-item">
              <div className="content-icon">🚀</div>
              <h3 className="content-title">Product & Innovation</h3>
              <p className="content-desc">
                Behind-the-scenes looks at product development, user experience design, 
                and breakthrough innovations in financial technology.
              </p>
            </div>
          </div>

          <div className="coming-topics">
            <h3 className="topics-title">Topics We'll Cover</h3>
            <div className="topics-list">
              <span className="topic-tag">AI & Machine Learning</span>
              <span className="topic-tag">Market Microstructure</span>
              <span className="topic-tag">Data Engineering</span>
              <span className="topic-tag">Cloud Architecture</span>
              <span className="topic-tag">Trading Analytics</span>
              <span className="topic-tag">Regulatory Technology</span>
              <span className="topic-tag">API Design</span>
              <span className="topic-tag">Security & Privacy</span>
            </div>
          </div>

          <div className="notification-signup">
            <h3 className="signup-title">Subscribe to Our Blog</h3>
            <p className="signup-desc">
              Be the first to read our insights. Get notified when we publish new articles.
            </p>
            <div className="email-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="email-input"
              />
              <button 
                type="button" 
                className="subscribe-button"
                onClick={() => alert('Thank you for subscribing! We\'ll notify you when our blog launches.')}
              >
                Subscribe
              </button>
            </div>
          </div>

          <p className="footer-info">
            Expected launch: Q2 2025 • Engineering insights from the CalcGuard team
          </p>
        </div>
      </div>
    </>
  )
}

export default BlogPage