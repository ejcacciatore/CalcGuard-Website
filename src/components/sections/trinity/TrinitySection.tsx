'use client'

const TrinitySection = () => {
  return (
    <>
      <style jsx>{`
        .trinity-section {
          width: 100vw;
          min-height: 100vh;
          background-color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .trinity-image {
          width: 100%;
          max-width: 1400px;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .trinity-section {
            padding: 20px 10px;
            min-height: 80vh;
          }

          .trinity-image {
            max-width: 100%;
            border-radius: 4px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .trinity-section {
            padding: 15px 8px;
          }
        }
      `}</style>

      <section id="trinity" className="trinity-section">
        <img 
          src="/images/Page_Design6.png" 
          alt="Data Lake vs Data-Driven Decision Making" 
          className="trinity-image"
        />
      </section>
    </>
  )
}

export default TrinitySection