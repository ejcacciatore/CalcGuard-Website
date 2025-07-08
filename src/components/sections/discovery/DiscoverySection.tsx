'use client'

const DiscoverySection = () => {
  return (
    <>
      <style jsx>{`
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

        .discovery-section {
          width: 100vw;
          min-height: 100vh;
          background-color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
        }

        .discovery-container {
          width: 100%;
          max-width: 1400px;
          position: relative;
          background-color: #ffffff;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          overflow: hidden;
        }

        /* Left White Section */
        .left-section {
          background-color: #ffffff;
          padding: 80px 60px 60px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 10;
          overflow: hidden;
        }

        /* Video Background for Left Section Only */
        .left-video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.55; /* Increased opacity to make video more visible */
          z-index: 1;
        }

        /* Reduced white overlay to let video show through */
        .left-video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.6); /* Reduced opacity to show video */
          z-index: 2;
        }

        .section-subtitle {
          color: #6b7280;
          font-size: 16px;
          margin-bottom: 16px;
          font-weight: 500;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          z-index: 10;
        }

        .main-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 40px;
          color: #111827;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
          max-width: 500px;
          position: relative;
          z-index: 10;
        }

        .accent-line {
          height: 4px;
          width: 60px;
          background-color: #e95b5b;
          margin-bottom: 40px;
          border-radius: 2px;
          position: relative;
          z-index: 10;
        }

        .description-paragraph {
          font-size: 18px;
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 480px;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          z-index: 10;
        }

        .benefits-text {
          font-size: 16px;
          color: #374151;
          line-height: 1.6;
          max-width: 460px;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 500;
          position: relative;
          z-index: 10;
        }

        /* Right Dark Section with Charts */
        .right-section {
          background-color: #1f2937;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background-image: linear-gradient(135deg, #1f2937 0%, #111827 100%);
        }

        .chart-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          justify-content: center;
          z-index: 5;
        }

        .chart-image {
          width: 100%;
          height: auto;
          border-radius: 6px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          transform: scale(1.05);
        }

        .chart-image:hover {
          transform: scale(1.08);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .top-chart {
          margin-bottom: 0;
        }

        .bottom-chart {
          margin-top: 0;
        }

        /* Diagonal Separator Effect */
        .right-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: -50px;
          width: 100px;
          height: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #1f2937 50%);
          z-index: 1;
        }

        /* Background Pattern Overlay */
        .right-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
          z-index: 2;
          pointer-events: none;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .discovery-container {
            grid-template-columns: 1fr;
            min-height: 900px;
          }

          .left-section {
            padding: 60px 40px;
          }

          .main-title {
            font-size: 36px;
          }

          .right-section::before {
            display: none;
          }

          /* Video adjustments for tablet */
          .left-video-background {
            opacity: 0.3;
          }

          .left-video-overlay {
            background: rgba(255, 255, 255, 0.65);
          }
        }

        @media (max-width: 768px) {
          .discovery-section {
            padding: 20px 10px;
          }

          .left-section {
            padding: 40px 24px;
          }

          .main-title {
            font-size: 28px;
          }

          .description-paragraph {
            font-size: 16px;
          }

          .benefits-text {
            font-size: 14px;
          }

          .right-section {
            padding: 12px;
          }

          .chart-container {
            gap: 6px;
          }

          /* Video adjustments for mobile */
          .left-video-background {
            opacity: 0.15;
            transform: scale(1.1);
          }

          .left-video-overlay {
            background: rgba(255, 255, 255, 0.7);
          }
        }

        @media (max-width: 680px) {
          .discovery-section {
            padding: 13px 7px;
          }

          .left-section {
            padding: 30px 20px;
          }

          .main-title {
            font-size: 24px;
          }

          .section-subtitle {
            font-size: 14px;
          }

          /* Video adjustments for small mobile */
          .left-video-background {
            opacity: 0.12;
          }

          .left-video-overlay {
            background: rgba(255, 255, 255, 0.75);
          }
        }

        @media (max-width: 480px) {
          .left-section {
            padding: 25px 15px;
          }

          .main-title {
            font-size: 22px;
          }

          .description-paragraph {
            font-size: 15px;
          }

          .benefits-text {
            font-size: 13px;
          }

          /* Video adjustments for very small mobile */
          .left-video-background {
            opacity: 0.4;
          }

          .left-video-overlay {
            background: rgba(255, 255, 255, 0.8);
          }
        }

        /* Performance optimization for mobile video */
        @media (max-width: 768px) {
          .left-video-background {
            filter: blur(0.5px);
          }
        }
      `}</style>

      <section id="discovery" className="discovery-section">
        <div className="discovery-container">
          
          {/* Left White Section with Video Background */}
          <div className="left-section">
            {/* Video Background for Left Section Only */}
            <video
              className="left-video-background"
              src="images\page6_video.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
            
            {/* White overlay for text readability */}
            <div className="left-video-overlay"></div>
            
            <p className="section-subtitle">Simplify Complexity.</p>
            
            <h2 className="main-title">
              ACCELERATE DISCOVERY & SPEED TO INSIGHT
            </h2>
            
            <div className="accent-line"></div>
            
            <p className="description-paragraph">
              Our advanced visualizations transform complex data into intuitive patterns, 
              accelerating discovery and revealing trends, anomalies and actionable insights.
            </p>
            
            <p className="benefits-text">
              This speeds pattern recognition and compresses analysis cycles, enabling faster, 
              more confident decision-making.
            </p>
          </div>

          {/* Right Dark Section with Charts */}
          <div className="right-section">
            <div className="chart-container">
              <div className="top-chart">
                <img 
                  src="/images/Picture8_top_chart.png" 
                  alt="Advanced Data Visualization - Top Chart" 
                  className="chart-image"
                />
              </div>
              <div className="bottom-chart">
                <img 
                  src="/images/Picture8_bottom_chart.png" 
                  alt="Advanced Data Visualization - Bottom Chart" 
                  className="chart-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DiscoverySection