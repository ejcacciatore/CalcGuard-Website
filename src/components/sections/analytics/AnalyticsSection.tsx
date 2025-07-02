'use client'

const AnalyticsSection = () => {
  return (
    <>
      <style jsx>{`
        .analytics-section {
          width: 100vw;
          min-height: 100vh;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .analytics-image {
          width: 100%;
          max-width: 1400px;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .analytics-section {
            padding: 20px 10px;
            min-height: 80vh;
          }

          .analytics-image {
            max-width: 100%;
            border-radius: 4px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .analytics-section {
            padding: 15px 8px;
          }
        }
      `}</style>

      <section id="analytics" className="analytics-section">
        <img 
          src="/images/Page_Design9.png" 
          alt="Unifying the Analytics Trinity" 
          className="analytics-image"
        />
      </section>
    </>
  )
}

export default AnalyticsSection