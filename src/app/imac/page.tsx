'use client'

import Image from 'next/image'

const IMACPage = () => {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Raleway:wght@400;500;600&display=swap');

        .imac-page {
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .container {
          text-align: center;
          max-width: 600px;
          padding: 50px 40px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .logo {
          width: 80px;
          height: auto;
          margin-bottom: 30px;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
        }

        .coming-soon {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 25px;
          display: inline-block;
        }

        .title {
          font-family: 'Montserrat', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 10px;
          line-height: 1.1;
        }

        .subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 30px;
          letter-spacing: 0.5px;
        }

        .divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ef4444, #dc2626);
          margin: 0 auto 30px auto;
          border-radius: 2px;
        }

        .description {
          font-family: 'Raleway', sans-serif;
          font-size: 16px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .purpose {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 30px;
        }

        .purpose-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #1e293b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .purpose-text {
          font-family: 'Raleway', sans-serif;
          font-size: 15px;
          color: #64748b;
          line-height: 1.5;
        }

        .footer {
          font-family: 'Raleway', sans-serif;
          font-size: 14px;
          color: #94a3b8;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .container {
            margin: 15px;
            padding: 40px 30px;
          }

          .title {
            font-size: 36px;
          }

          .subtitle {
            font-size: 16px;
          }

          .purpose {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 30px 25px;
          }

          .title {
            font-size: 32px;
          }

          .logo {
            width: 70px;
          }
        }
      `}</style>

      <div className="imac-page">
        <div className="container">
          <Image
            src="/images/CG_1.png"
            alt="CalcGuard Logo"
            width={80}
            height={80}
            className="logo"
          />
          
          <div className="coming-soon">Coming Soon</div>
          
          <h1 className="title">IMAC</h1>
          <p className="subtitle">Investment Management Advisory Council</p>
          
          <div className="divider"></div>
          
          <p className="description">
            The dedicated portal for our Investment Management Advisory Council members.
          </p>

          <div className="purpose">
            <h3 className="purpose-title">Purpose</h3>
            <p className="purpose-text">
              Guiding CalcGuard's strategy, governance, and priorities through 
              unified industry voices to advance transparency and drive innovation.
            </p>
          </div>

          <p className="footer">Q2 2025</p>
        </div>
      </div>
    </>
  )
}

export default IMACPage