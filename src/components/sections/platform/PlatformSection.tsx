'use client'

const PlatformSection = () => {
  return (
    <>
      <style jsx>{`
        .platform-section {
          width: 100vw;
          min-height: 100vh;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .content-wrapper {
          width: 100%;
          height: 100vh;
          display: flex;
          position: relative;
        }

        /* Left Column - White Background */
        .left-column {
          width: 50%;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px;
          position: relative;
          z-index: 2;
        }

        .left-content {
          max-width: 500px;
          position: relative;
          z-index: 10;
        }

        .subtitle {
          font-family: 'Raleway', sans-serif;
          font-size: 18px;
          color: #64748b;
          margin-bottom: 24px;
          font-weight: 400;
        }

        .main-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.1;
          margin-bottom: 32px;
          letter-spacing: -0.02em;
        }

        .red-accent {
          display: inline-block;
          width: 60px;
          height: 4px;
          background-color: #ff6b6b;
          margin-bottom: 32px;
        }

        .description {
          font-family: 'Raleway', sans-serif;
          font-size: 16px;
          color: #64748b;
          line-height: 1.7;
          font-weight: 400;
        }



        /* Right Column - Dark Background */
        .right-column {
          width: 50%;
          background: #1a1a1a;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 20px 60px 80px;
          z-index: 1;
        }

        /* Feature Image Containers */
        .feature-image-container {
          width: 120%;
          margin-left: -20%;
          margin-bottom: 0;
          position: relative;
          z-index: 2;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }

        .feature-image-container:hover {
          transform: scale(1.25) translateX(-30px) translateY(-10px);
          z-index: 10;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8);
        }

        .feature-image-container:last-child {
          margin-bottom: 0;
        }

        .feature-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 8px;
        }

        .feature-image-container:hover .feature-image {
          filter: brightness(1.2) contrast(1.1) saturate(1.1);
        }

        /* Decorative Elements */
        .corner-bracket {
          position: absolute;
          top: 40px;
          left: 40px;
          width: 60px;
          height: 60px;
          border-left: 4px solid #1a1a1a;
          border-top: 4px solid #1a1a1a;
          z-index: 11;
        }



        /* Tablet Styles */
        @media (max-width: 1024px) {
          .content-wrapper {
            flex-direction: column;
            height: auto;
          }

          .left-column,
          .right-column {
            width: 100%;
          }

          .left-column {
            padding: 60px 40px;
          }

          .right-column {
            padding: 60px 40px;
          }

          .feature-image-container {
            width: 100%;
            margin-left: 0;
            margin-bottom: 0;
          }

          .feature-image-container:hover {
            transform: scale(1.02) translateX(0);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }

          .main-title {
            font-size: 42px;
          }

          .left-column {
            clip-path: none;
          }

          .nav-dots {
            display: none;
          }

          .left-diagonal-image {
            display: none;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .left-column {
            padding: 40px 24px;
            text-align: center;
          }

          .right-column {
            padding: 40px 24px;
          }

          .main-title {
            font-size: 32px;
          }

          .subtitle {
            font-size: 16px;
          }

          .feature-image-container {
            margin-bottom: 0;
          }

          .corner-bracket {
            display: none;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .left-column,
          .right-column {
            padding: 30px 16px;
          }

          .main-title {
            font-size: 28px;
          }

          .feature-image-container {
            margin-bottom: 0;
          }
        }
      `}</style>

      <section id="platform" className="platform-section">
        <div className="content-wrapper">
          {/* Left Column - Main Content */}
          <div className="left-column">
            <div className="corner-bracket"></div>
            <div className="left-content">
              <p className="subtitle">Unified Intelligence.</p>
              
              <h2 className="main-title">
                A PRIVATE HUB FOR<br />
                SECURE, SCALABLE<br />
                COLLABORATION
              </h2>
              
              <div className="red-accent"></div>
              
              <p className="description">
                Our capabilities create a highly secure, scalable and interoperable 
                data collaboration platform - enabling faster insights, safer AI adoption 
                and more agile partner ecosystems, while reducing integration friction 
                and governance burdens.
              </p>
            </div>
          </div>

          {/* Right Column - Feature Images */}
          <div className="right-column">
            {/* Feature 1 - Complex Data Collaboration */}
            <div className="feature-image-container">
              <img 
                src="/images/Page4_number1.png" 
                alt="Complex Data Collaboration" 
                className="feature-image"
              />
            </div>

            {/* Feature 2 - Modern Analytics Collaboration */}
            <div className="feature-image-container">
              <img 
                src="/images/page4_Number2.png" 
                alt="Modern Analytics Collaboration" 
                className="feature-image"
              />
            </div>

            {/* Feature 3 - 3rd Party App Collaboration */}
            <div className="feature-image-container">
              <img 
                src="/images/page4_number3.png" 
                alt="3rd Party App Collaboration" 
                className="feature-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PlatformSection