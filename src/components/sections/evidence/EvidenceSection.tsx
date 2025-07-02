'use client'

const EvidenceSection = () => {
  return (
    <>
      <style jsx>{`
        .evidence-section {
          width: 100vw;
          min-height: 100vh;
          background-color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .evidence-image {
          width: 100%;
          max-width: 1400px;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .evidence-section {
            padding: 20px 10px;
            min-height: 80vh;
          }

          .evidence-image {
            max-width: 100%;
            border-radius: 4px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .evidence-section {
            padding: 15px 8px;
          }
        }
      `}</style>

      <section id="evidence" className="evidence-section">
        <img 
          src="/images/Page_Design7.png" 
          alt="Evidence-Based Decisions for Equities Trading" 
          className="evidence-image"
        />
      </section>
    </>
  )
}

export default EvidenceSection