'use client'

const PlatformSection = () => {
  return (
    <>
      <style jsx>{`
        .platform-section {
          width: 100vw;
          min-height: 100vh;
          background-color: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .platform-image {
          width: 100%;
          max-width: 1400px;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .platform-section {
            padding: 20px 10px;
            min-height: 80vh;
          }

          .platform-image {
            max-width: 100%;
            border-radius: 4px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .platform-section {
            padding: 15px 8px;
          }
        }
      `}</style>

      <section id="platform" className="platform-section">
        <img 
          src="/images/page4_design.png" 
          alt="CalcGuard Platform" 
          className="platform-image"
        />
      </section>
    </>
  )
}

export default PlatformSection