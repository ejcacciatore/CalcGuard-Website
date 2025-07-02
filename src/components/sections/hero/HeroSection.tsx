'use client'

const HeroSection = () => {
  return (
    <>
      <style jsx>{`
        .hero-container {
          width: 100vw;
          height: 100vh;
          background-image: url('/images/main_background.png');
          background-size: cover;
          background-position: center;
          position: relative;
          padding-top: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 16px 16px 16px;
        }

        .hero-logo-container {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          max-width: 90vw;
          text-align: center;
        }

        .hero-logo {
          width: 100%;
          height: auto;
          max-width: 600px;
          display: block;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .hero-container {
            padding: 80px 12px 12px 12px;
          }
          
          .hero-logo-container {
            padding: 12px;
            border-radius: 8px;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }
          
          .hero-logo {
            max-width: 280px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .hero-container {
            padding: 70px 8px 8px 8px;
          }
          
          .hero-logo-container {
            padding: 8px;
          }
          
          .hero-logo {
            max-width: 250px;
          }
        }
      `}</style>

      <div className="hero-container">
        <div className="hero-logo-container">
          <img 
            src="/images/landing page logo.png" 
            alt="CalcGuard Technologies"
            className="hero-logo"
          />
        </div>
      </div>
    </>
  )
}

export default HeroSection