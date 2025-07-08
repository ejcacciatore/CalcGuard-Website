'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ComingSoonPageProps {
  pageTitle: string
  pageDescription: string
  expectedDate?: string
  showBackButton?: boolean
  customBackground?: string
}

const ComingSoonPage = ({ 
  pageTitle, 
  pageDescription, 
  expectedDate = "Coming Soon",
  showBackButton = true,
  customBackground = "/images/main_background.png"
}: ComingSoonPageProps) => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubscribe = async () => {
    if (!email) return
    
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true)
      setLoading(false)
      setEmail('')
    }, 1000)
  }

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

        .coming-soon-container {
          min-height: 100vh;
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.9) 0%, rgba(52, 73, 94, 0.8) 100%),
                      url('${customBackground}');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px 20px;
          position: relative;
          overflow: hidden;
        }

        .coming-soon-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          z-index: 1;
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 800px;
          width: 100%;
          text-align: center;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 60px 40px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .logo-container {
          margin-bottom: 40px;
        }

        .logo {
          height: 60px;
          width: auto;
          opacity: 0.9;
        }

        .page-title {
          font-size: 48px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 16px;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.2;
        }

        .page-subtitle {
          font-size: 24px;
          color: #e11d48;
          margin-bottom: 30px;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .page-description {
          font-size: 18px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 40px;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .notification-section {
          margin-bottom: 40px;
        }

        .form-title {
          font-size: 20px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 20px;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .form-container {
          display: flex;
          gap: 12px;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .email-input {
          flex: 1;
          max-width: 300px;
          padding: 14px 20px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 16px;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }

        .email-input:focus {
          outline: none;
          border-color: #e11d48;
          box-shadow: 0 0 0 3px rgba(225, 29, 72, 0.1);
        }

        .subscribe-button {
          padding: 14px 28px;
          background: linear-gradient(135deg, #e11d48 0%, #dc2626 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          min-width: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .subscribe-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(225, 29, 72, 0.3);
        }

        .subscribe-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .success-message {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
          padding: 16px;
          border-radius: 12px;
          margin-top: 20px;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 500;
        }

        .actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .back-button {
          padding: 12px 24px;
          background: rgba(100, 116, 139, 0.1);
          color: #64748b;
          border: 1px solid rgba(100, 116, 139, 0.3);
          border-radius: 10px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .back-button:hover {
          background: rgba(100, 116, 139, 0.2);
          color: #475569;
          transform: translateY(-1px);
        }

        .home-button {
          padding: 12px 24px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          border: none;
          border-radius: 10px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .home-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-element {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
          top: 20%;
          right: 10%;
          animation-delay: 2s;
          background: rgba(59, 130, 246, 0.1);
        }

        .floating-element:nth-child(3) {
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
          background: rgba(16, 185, 129, 0.1);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .coming-soon-container {
            padding: 100px 15px 20px;
          }

          .content-wrapper {
            padding: 40px 25px;
          }

          .page-title {
            font-size: 32px;
          }

          .page-subtitle {
            font-size: 18px;
          }

          .page-description {
            font-size: 16px;
          }

          .form-container {
            flex-direction: column;
            align-items: stretch;
          }

          .email-input {
            max-width: none;
            margin-bottom: 12px;
          }

          .subscribe-button {
            width: 100%;
          }

          .actions {
            flex-direction: column;
            gap: 12px;
          }

          .back-button,
          .home-button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 28px;
          }

          .page-subtitle {
            font-size: 16px;
          }

          .content-wrapper {
            padding: 30px 20px;
          }

          .logo {
            height: 50px;
          }
        }
      `}</style>

      <div className="coming-soon-container">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>

        <div className="content-wrapper">
          <div className="logo-container">
            <img 
              src="/images/CG_1.png" 
              alt="CalcGuard Logo" 
              className="logo"
            />
          </div>

          <h1 className="page-title">{pageTitle}</h1>
          <p className="page-subtitle">{expectedDate}</p>
          <p className="page-description">{pageDescription}</p>

          <div className="notification-section">
            <h3 className="form-title">Get Notified When We Launch</h3>
            
            {!subscribed ? (
              <div>
                <div className="form-container">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    required
                  />
                  <button 
                    onClick={handleSubscribe}
                    className="subscribe-button"
                    disabled={loading || !email}
                  >
                    {loading ? (
                      <div className="loading-spinner" />
                    ) : (
                      'Notify Me'
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="success-message">
                ✓ Thanks! We'll notify you when {pageTitle} is ready.
              </div>
            )}
          </div>

          <div className="actions">
            {showBackButton && (
              <button onClick={handleGoBack} className="back-button">
                ← Go Back
              </button>
            )}
            <a href="/" className="home-button">
              🏠 Home
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComingSoonPage