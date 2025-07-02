'use client'

const AIBarriersSection = () => {
  return (
    <>
      <style jsx>{`
        .ai-barriers-section {
          width: 100vw;
          min-height: 100vh;
          background-color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .ai-barriers-image {
          width: 100%;
          max-width: 1400px;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .ai-barriers-section {
            padding: 20px 10px;
            min-height: 80vh;
          }

          .ai-barriers-image {
            max-width: 100%;
            border-radius: 4px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .ai-barriers-section {
            padding: 15px 8px;
          }
        }
      `}</style>

      <section id="ai-barriers" className="ai-barriers-section">
        <img 
          src="/images/Page_Design10.png" 
          alt="Overcome Every AI Barrier in One Move" 
          className="ai-barriers-image"
        />
      </section>
    </>
  )
}

export default AIBarriersSection