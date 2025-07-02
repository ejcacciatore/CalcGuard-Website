'use client'

const InefficienciesSection = () => {
  return (
    <>
      <style jsx>{`
        .inefficiencies-section {
          width: 100vw;
          min-height: 100vh;
          background-color: #fef3c7;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .inefficiencies-image {
          width: 100%;
          max-width: 1400px;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .inefficiencies-section {
            padding: 20px 10px;
            min-height: 80vh;
          }

          .inefficiencies-image {
            max-width: 100%;
            border-radius: 4px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .inefficiencies-section {
            padding: 15px 8px;
          }
        }
      `}</style>

      <section id="inefficiencies" className="inefficiencies-section">
        <img 
          src="/images/Page_Design5.png" 
          alt="Trading Inefficiencies" 
          className="inefficiencies-image"
        />
      </section>
    </>
  )
}

export default InefficienciesSection