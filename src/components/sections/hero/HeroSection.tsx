'use client'

const HeroSection = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: "url('/images/main_background.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      paddingTop: '60px' // Account for fixed header
    }}>
      {/* Center Logo with White Border */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(8px)',
        border: '3px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
      }}>
        <img 
          src="/images/landing page logo.png" 
          alt="Landing Logo"
          style={{
            width: '600px',
            height: 'auto',
            maxWidth: '90vw',
            display: 'block'
          }}
        />
      </div>
    </div>
  )
}

export default HeroSection