'use client'

import { useState } from 'react'

const ChallengeSection = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleImageClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsExpanded(false)
    }
  }

  return (
    <>
      <style jsx>{`
        .challenge-section {
          width: 100vw;
          min-height: 100vh;
          /* Removed background-image and set a solid color for the overlay effect */
          background-color: #000;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden; /* To contain the video */
        }

        .background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0.3; /* Sets video to 50% transparency */
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          min-height: 100vh;
          align-items: center;
          position: relative; /* To appear above the video */
          z-index: 1;
        }

        .left-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px;
          /* Removed background styles to allow video to show through */
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
          color: #ffffff; /* Changed to white for better contrast */
          line-height: 1.1;
          margin-bottom: 24px;
          font-family: 'Montserrat', sans-serif;
        }

        .description {
          font-size: 18px;
          color: #e5e7eb; /* Changed to light gray for better contrast */
          line-height: 1.6;
          max-width: 450px;
          font-family: 'Raleway', sans-serif;
        }

        .right-column {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          height: 100vh;
          transform: translateX(-10%);
        }

        .dashboard-image {
          width: 130%;
          max-width: 780px;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dashboard-image:hover {
          transform: scale(1.05);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        /* Expanded Image Overlay */
        .image-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .image-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .expanded-image {
          max-width: 90vw;
          max-height: 90vh;
          width: auto;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
          transform: scale(0.8);
          transition: all 0.3s ease;
          cursor: default;
        }

        .image-overlay.active .expanded-image {
          transform: scale(1.6);
        }

        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          font-size: 24px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .left-column, .right-column {
            padding: 48px;
          }
          .main-title {
            font-size: 40px;
          }

          .right-column {
            transform: translateX(-5%);
          }

          .dashboard-image {
            width: 120%;
            max-width: 650px;
          }
          
          .image-overlay.active .expanded-image {
            transform: scale(1.4);
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .left-column, .right-column {
            padding: 40px 24px;
            min-height: 50vh;
            height: auto;
          }
          
          .left-column {
            text-align: center;
          }

          .right-column {
            transform: none;
          }

          .main-title {
            font-size: 32px;
            margin-bottom: 20px;
          }

          .description {
            font-size: 16px;
            max-width: none;
          }

          .dashboard-image {
            width: 100%;
            max-width: 100%;
          }

          .image-overlay.active .expanded-image {
            transform: scale(1.2);
            max-width: 95vw;
            max-height: 80vh;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .left-column, .right-column {
            padding: 32px 16px;
          }
          .main-title {
            font-size: 28px;
          }
          .description {
            font-size: 14px;
          }

          .image-overlay.active .expanded-image {
            transform: scale(1.6);
          }
        }
      `}</style>

      <section id="challenge" className="challenge-section">
        <video autoPlay loop muted playsInline className="background-video">
            <source 
              src="/images/ejcacciatore_take_this_image_and_make_it_a_dynamic_image_of_t_f60cf58b-0f57-4308-bc55-35c18375cb92_3.mp4" 
              type="video/mp4" 
            />
        </video>
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
              src="/images/dashboard_v1.png" 
              alt="CalcGuard Platform Dashboard" 
              className="dashboard-image"
              onClick={handleImageClick}
            />
          </div>
        </div>

        {/* Expanded Image Overlay */}
        <div 
          className={`image-overlay ${isExpanded ? 'active' : ''}`}
          onClick={handleOverlayClick}
        >
          <button 
            className="close-button"
            onClick={() => setIsExpanded(false)}
            aria-label="Close expanded image"
          >
            ×
          </button>
          <img 
            src="/images/dashboard_v1.png" 
            alt="CalcGuard Platform Dashboard - Expanded View" 
            className="expanded-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </section>
    </>
  )
}

export default ChallengeSection