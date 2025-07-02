'use client'

const CompetitiveEdgeSection = () => {
  return (
    <>
      <style jsx>{`
        .competitive-edge-section {
          width: 100vw;
          min-height: 100vh;
          background-color: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .competitive-edge-image {
          width: 100%;
          max-width: 1400px;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .competitive-edge-section {
            padding: 20px 10px;
            min-height: 80vh;
          }

          .competitive-edge-image {
            max-width: 100%;
            border-radius: 4px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .competitive-edge-section {
            padding: 15px 8px;
          }
        }
      `}</style>

      <section id="competitive-edge" className="competitive-edge-section">
        <img 
          src="/images/Page_Design11.png" 
          alt="Our Competitive Edge" 
          className="competitive-edge-image"
        />
      </section>
    </>
  )
}

export default CompetitiveEdgeSection