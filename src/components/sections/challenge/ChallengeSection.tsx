'use client'

const ChallengeSection = () => {
  return (
    <>
      <style jsx>{`
        .challenge-section {
          width: 100vw;
          min-height: 100vh;
          background-image: url('/images/main_background.png');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          position: relative;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          min-height: 100vh;
          align-items: center;
        }

        .left-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          height: 100vh;
        }

        .subtitle {
          font-size: 14px;
          color: #ef4444;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
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

        .description {
          font-size: 18px;
          color: #475569;
          line-height: 1.6;
          max-width: 450px;
          font-family: 'Raleway', sans-serif;
        }

        .right-column {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 64px;
          height: 100vh;
        }

        .dashboard-image {
          width: 100%;
          max-width: 600px;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .left-column {
            padding: 48px;
          }
          
          .right-column {
            padding: 48px;
          }
          
          .main-title {
            font-size: 40px;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .left-column {
            padding: 40px 24px;
            min-height: 50vh;
            text-align: center;
            height: auto;
          }

          .main-title {
            font-size: 32px;
            margin-bottom: 20px;
          }

          .description {
            font-size: 16px;
            max-width: none;
          }

          .right-column {
            padding: 40px 24px;
            min-height: 50vh;
            height: auto;
          }

          .dashboard-image {
            max-width: 100%;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .left-column {
            padding: 32px 16px;
          }

          .right-column {
            padding: 32px 16px;
          }

          .main-title {
            font-size: 28px;
          }

          .description {
            font-size: 14px;
          }
        }
      `}</style>

      <section id="challenge" className="challenge-section">
        <div className="content-grid">
          
          {/* Left Column - Text Content */}
          <div className="left-column">
            <p className="subtitle">
              Accelerate Your AI Journey
            </p>
            
            <h2 className="main-title">
              SOLVING THE<br />
              FIRST MILE,<br />
              LAST MILE<br />
              CHALLENGE
            </h2>
            
            <p className="description">
              The first mile and last mile are the hardest-to-solve parts of 
              delivering a complete, usable solution - typically at the points 
              of data ingestion (first mile) and analytics delivery (last mile).
            </p>
          </div>

          {/* Right Column - Dashboard Screenshot */}
          <div className="right-column">
            <img 
              src="/images/main_dashboard.png" 
              alt="CalcGuard Platform Dashboard" 
              className="dashboard-image"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ChallengeSection