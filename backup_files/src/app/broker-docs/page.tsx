'use client'

import Image from 'next/image'

const BrokerDocsPage = () => {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Raleway:wght@300;400;500;600;700&display=swap');

        .broker-docs-page {
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

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05));
          animation: float 6s ease-in-out infinite;
        }

        .circle-1 {
          width: 120px;
          height: 120px;
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 80px;
          height: 80px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .main-container {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 700px;
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
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .main-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: 56px;
          font-weight: 900;
          color: #1e293b;
          margin-bottom: 20px;
          line-height: 1.1;
          animation: fadeInUp 1s ease-out 0.5s both;
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
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .description {
          font-family: 'Raleway', sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 1s ease-out 0.7s both;
        }

        .contact-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 40px 30px;
          margin-bottom: 40px;
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        .contact-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 15px;
        }

        .contact-desc {
          font-family: 'Raleway', sans-serif;
          font-size: 16px;
          color: #64748b;
          margin-bottom: 30px;
          line-height: 1.5;
        }

        .email-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          border: none;
          border-radius: 12px;
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .email-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
          color: white;
        }

        .email-icon {
          font-size: 18px;
        }

        .contact-info {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }

        .contact-person {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 5px;
        }

        .contact-title-role {
          font-family: 'Raleway', sans-serif;
          font-size: 14px;
          color: #64748b;
          font-style: italic;
        }

        .footer-info {
          color: #94a3b8;
          font-family: 'Raleway', sans-serif;
          font-size: 14px;
          animation: fadeInUp 1s ease-out 0.9s both;
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

          .contact-section {
            padding: 30px 25px;
          }

          .circle-1, .circle-2, .circle-3 {
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

          .contact-section {
            padding: 25px 20px;
          }

          .email-button {
            padding: 14px 24px;
            font-size: 15px;
          }
        }
      `}</style>

      <div className="broker-docs-page">
        <div className="background-pattern"></div>
        
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
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

          <div className="coming-soon-badge">Coming Soon</div>
          
          <h2 className="main-heading">
            <span className="highlight-text">BROKER</span><br />DOCUMENTATION
          </h2>
          
          <p className="subheading">
            Comprehensive integration guides and API documentation
          </p>
          
          <p className="description">
            Our broker documentation portal is currently under development. 
            This will include detailed integration guides, API references, 
            SDK documentation, and technical specifications for seamless 
            platform connectivity.
          </p>

          <div className="contact-section">
            <h3 className="contact-title">Need Information Now?</h3>
            <p className="contact-desc">
              Contact our Chief Product Officer for immediate assistance with 
              broker integrations, API access, or technical documentation.
            </p>
            
            <a 
              href="mailto:enrico.cacciatore@calcguard.com?subject=Broker Documentation Request"
              className="email-button"
            >
              <span className="email-icon">📧</span>
              Send Email
            </a>

            <div className="contact-info">
              <div className="contact-person">Enrico Cacciatore</div>
              <div className="contact-title-role">Chief Product & Strategy Officer</div>
            </div>
          </div>

          <p className="footer-info">
            Expected launch: Q2 2025 • Documentation portal in development
          </p>
        </div>
      </div>
    </>
  )
}

export default BrokerDocsPage