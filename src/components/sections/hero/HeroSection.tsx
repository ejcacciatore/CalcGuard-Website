'use client'

import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroElement = document.getElementById('hero-container')
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const heroElement = document.getElementById('hero-container')
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
      heroElement.addEventListener('mouseenter', () => setIsHovering(true))
      heroElement.addEventListener('mouseleave', () => setIsHovering(false))
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove)
        heroElement.removeEventListener('mouseenter', () => setIsHovering(true))
        heroElement.removeEventListener('mouseleave', () => setIsHovering(false))
      }
    }
  }, [])
  return (
    <>
      <style jsx>{`
        .hero-container {
          width: 100vw;
          height: 100vh;
          background-image: url('/images/main_background.png');
          background-size: cover;
          background-position: center;
          position: relative;
          padding-top: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 16px 16px 16px;
          overflow: hidden;
          cursor: none;
        }

        .background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
          z-index: 1;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .mouse-spotlight {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 5;
          transition: opacity 0.3s ease;
          transform: translate(-50%, -50%);
        }

        .video-spotlight {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          z-index: 4;
          pointer-events: none;
          mask: radial-gradient(
            300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.5) 40%,
            transparent 70%
          );
          -webkit-mask: radial-gradient(
            300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.5) 40%,
            transparent 70%
          );
          transition: opacity 0.3s ease;
        }

        .hero-container:hover .video-spotlight {
          opacity: 0.9;
        }

        .hero-container:hover .background-video {
          opacity: 0.05;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg, 
            rgba(0, 0, 0, 0.2) 0%, 
            rgba(0, 0, 0, 0.1) 50%, 
            rgba(0, 0, 0, 0.3) 100%
          );
          z-index: 2;
        }

        .hero-logo-container {
          background-color: rgba(255, 255, 255, 0.1);
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          padding: 20px;
          max-width: 90vw;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .hero-logo {
          width: 100%;
          height: auto;
          max-width: 600px;
          display: block;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .hero-container {
            padding: 80px 12px 12px 12px;
          }
          
          .hero-logo-container {
            padding: 12px;
            border-radius: 8px;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }
          
          .hero-logo {
            max-width: 280px;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .hero-container {
            padding: 70px 8px 8px 8px;
          }
          
          .hero-logo-container {
            padding: 8px;
          }
          
          .hero-logo {
            max-width: 250px;
          }

          .scroll-indicator {
            bottom: 20px !important;
          }
        }

        /* Scroll Down Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .scroll-indicator:hover {
          transform: translateX(-50%) translateY(-5px);
        }

        .scroll-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }

        .scroll-arrow {
          width: 24px;
          height: 24px;
          border: 2px solid rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: bounce 2s infinite;
        }

        .scroll-arrow::after {
          content: '';
          width: 6px;
          height: 6px;
          border-right: 2px solid rgba(255, 255, 255, 0.8);
          border-bottom: 2px solid rgba(255, 255, 255, 0.8);
          transform: rotate(45deg);
          margin-top: -2px;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .scroll-line {
          width: 1px;
          height: 30px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), transparent);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      <div 
        id="hero-container"
        className="hero-container"
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`
        } as React.CSSProperties}
      >
        {/* Background Video - Low Opacity */}
        <video 
          className="background-video"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/images/20250410_2043_Futuristic Data Symphony_remix_01jrh4v3ecewybpzdbsy98hzht_1.mp4" type="video/mp4" />
        </video>

        {/* Mouse Spotlight Video - High Opacity */}
        <video 
          className="video-spotlight"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/images/20250410_2043_Futuristic Data Symphony_remix_01jrh4v3ecewybpzdbsy98hzht_1.mp4" type="video/mp4" />
        </video>

        {/* Mouse Position Spotlight Effect */}
        {isHovering && (
          <div 
            className="mouse-spotlight"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          />
        )}
        
        {/* Video Overlay for better contrast */}
        <div className="video-overlay"></div>

        <div className="hero-logo-container">
          <img 
            src="/images/landing page logo.png" 
            alt="CalcGuard Technologies"
            className="hero-logo"
          />
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="scroll-indicator"
          onClick={() => {
            document.getElementById('what-we-do')?.scrollIntoView({ 
              behavior: 'smooth' 
            })
          }}
        >
          <span className="scroll-text">Scroll</span>
          <div className="scroll-arrow"></div>
          <div className="scroll-line"></div>
        </div>
      </div>
    </>
  )
}

export default HeroSection