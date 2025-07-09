'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function GetStartedPage() {
  const router = useRouter()

  const handleBackToHome = () => {
    router.push('/')
  }

  return (
    <>
      <style jsx>{`
        .get-started-container {
          background: #fff;
          min-height: 100vh;
          padding-top: 120px;
          padding-bottom: 80px;
          padding-left: 24px;
          padding-right: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .content-wrapper {
          max-width: 700px;
          margin: 0 auto;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .logo-container {
          text-align: center;
          margin-bottom: 40px;
        }

        .logo {
          height: 50px;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .logo:hover {
          opacity: 0.8;
        }

        .main-heading {
          font-family: 'Montserrat', sans-serif;
          font-size: 2.5rem;
          font-weight: 600;
          color: #111;
          text-align: center;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .intro-text {
          font-size: 1.2rem;
          color: #333;
          text-align: center;
          margin-bottom: 25px;
          font-weight: 400;
          line-height: 1.5;
        }

        .description-text {
          font-size: 1.1rem;
          color: #555;
          text-align: center;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .email-link {
          color: #ef4444;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .email-link:hover {
          color: #dc2626;
          text-decoration: underline;
        }

        .participant-types {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 30px;
          margin: 30px 0;
          border: 1px solid #e5e7eb;
        }

        .participant-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #111;
          text-align: center;
          margin-bottom: 20px;
        }

        .participant-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 15px;
          justify-items: center;
        }

        .participant-tag {
          background: white;
          color: #374151;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid #d1d5db;
          text-align: center;
          transition: all 0.2s ease;
        }

        .participant-tag:hover {
          background: #ef4444;
          color: white;
          border-color: #ef4444;
        }

        .back-button-container {
          text-align: center;
          margin-top: 40px;
        }

        .back-button {
          background: #111;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 6px;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .back-button:hover {
          background: #374151;
          transform: translateY(-1px);
        }

        .back-icon {
          font-size: 1.1rem;
        }

        /* Tablet styles */
        @media (max-width: 1024px) and (min-width: 769px) {
          .get-started-container {
            padding-top: 100px;
            padding-left: 40px;
            padding-right: 40px;
          }

          .main-heading {
            font-size: 2.2rem;
          }

          .participant-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 12px;
          }
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .get-started-container {
            padding-top: 90px;
            padding-bottom: 60px;
            padding-left: 20px;
            padding-right: 20px;
          }

          .content-wrapper {
            max-width: 100%;
          }

          .logo {
            height: 40px;
          }

          .main-heading {
            font-size: 2rem;
            margin-bottom: 25px;
          }

          .intro-text {
            font-size: 1.1rem;
            margin-bottom: 20px;
          }

          .description-text {
            font-size: 1rem;
            margin-bottom: 30px;
          }

          .participant-types {
            padding: 25px 20px;
            margin: 25px 0;
          }

          .participant-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .participant-tag {
            font-size: 0.85rem;
            padding: 6px 12px;
          }

          .back-button {
            padding: 10px 25px;
            font-size: 0.95rem;
          }
        }

        /* Small mobile styles */
        @media (max-width: 480px) {
          .get-started-container {
            padding-top: 80px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .main-heading {
            font-size: 1.8rem;
          }

          .participant-types {
            padding: 20px 15px;
          }

          .participant-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .participant-tag {
            max-width: 200px;
            width: 100%;
          }
        }
      `}</style>

      <div className="get-started-container">
        <div className="content-wrapper">
          <div className="logo-container">
            <Link href="/">
              <img
                src="/images/CG_1.png"
                alt="CalcGuard Logo"
                className="logo"
              />
            </Link>
          </div>

          <h1 className="main-heading">Get Started with CalcGuard</h1>
          
          <p className="intro-text">
            Thank you for your interest in CalcGuard Technologies.
          </p>
          
          <p className="description-text">
            This page is under construction. In the meantime, feel free to reach out directly to{' '}
            <a href="mailto:info@calcguard.com" className="email-link">
              info@calcguard.com
            </a>
            {' '}and let us know your role in the financial ecosystem.
          </p>

          <div className="participant-types">
            <h3 className="participant-title">We work with various market participants:</h3>
            <div className="participant-grid">
              <div className="participant-tag">Brokers</div>
              <div className="participant-tag">Asset Managers</div>
              <div className="participant-tag">OMS Providers</div>
              <div className="participant-tag">EMS Providers</div>
              <div className="participant-tag">Venues</div>
              <div className="participant-tag">ATS</div>
              <div className="participant-tag">Market Data Vendors</div>
              <div className="participant-tag">Fintech Partners</div>
            </div>
          </div>
        </div>

        <div className="back-button-container">
          <button className="back-button" onClick={handleBackToHome}>
            <span className="back-icon">←</span>
            Back to Home
          </button>
        </div>
      </div>
    </>
  )
}