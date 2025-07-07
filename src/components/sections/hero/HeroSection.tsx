'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, X, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

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

    window.addEventListener('scroll', handleScroll)

    const heroElement = document.getElementById('hero-container')
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
      heroElement.addEventListener('mouseenter', () => setIsHovering(true))
      heroElement.addEventListener('mouseleave', () => setIsHovering(false))
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove)
        heroElement.removeEventListener('mouseenter', () => setIsHovering(true))
        heroElement.removeEventListener('mouseleave', () => setIsHovering(false))
      }
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setShowModal(false)
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      title: '',
      message: ''
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <style jsx>{`
        .hero-container {
          width: 100vw;
          height: 100vh;
          background-color: #000000;
          position: relative;
          padding-top: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 16px 16px 16px;
          overflow: hidden;
          cursor: none;
        }

        .primary-background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
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
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0.08) 50%,
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
          transition: opacity 0.3s ease;
        }

        .hero-container:hover .video-spotlight {
          opacity: 1;
        }

        .hero-container:hover .primary-background-video {
          opacity: 0.3;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg, 
            rgba(0, 0, 0, 0.3) 0%, 
            rgba(0, 0, 0, 0.2) 50%, 
            rgba(0, 0, 0, 0.4) 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
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
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-logo-container:hover {
          background-color: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .hero-logo {
          width: 100%;
          height: auto;
          max-width: 600px;
          display: block;
        }

        /* Get Started Button */
        .get-started-btn {
          background: linear-gradient(135deg, #ff4757, #ff6b7a);
          color: white;
          border: none;
          padding: 16px 36px;
          border-radius: 30px;
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(255, 71, 87, 0.25);
          position: relative;
          overflow: hidden;
        }

        .get-started-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .get-started-btn:hover::before {
          left: 100%;
        }

        .get-started-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(255, 71, 87, 0.35);
        }

        .arrow-icon {
          transition: transform 0.3s;
        }

        .get-started-btn:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* Enhanced Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .scroll-indicator:hover {
          transform: translateX(-50%) translateY(-5px);
        }

        .scroll-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 6px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .scroll-wheel {
          width: 26px;
          height: 42px;
          border: 2.5px solid rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .wheel-dot {
          width: 4px;
          height: 8px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: wheel-scroll 2s ease-in-out infinite;
        }

        @keyframes wheel-scroll {
          0% {
            top: 6px;
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            top: 26px;
            opacity: 0;
          }
        }

        .scroll-arrow {
          width: 24px;
          height: 24px;
          border: 2px solid rgba(255, 255, 255, 0.7);
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
          border-right: 2px solid rgba(255, 255, 255, 0.9);
          border-bottom: 2px solid rgba(255, 255, 255, 0.9);
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
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), transparent);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          position: relative;
          animation: slideUp 0.3s ease;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .modal-title {
          color: white;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
          text-align: center;
        }

        .modal-subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          text-align: center;
          margin-bottom: 40px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          width: 100%;
        }

        .form-input {
          width: 100%;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          color: white;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .form-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.08);
          border-color: #ff4757;
          box-shadow: 0 0 0 3px rgba(255, 71, 87, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #ff4757, #ff6b7a);
          color: white;
          border: none;
          padding: 18px 40px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 71, 87, 0.3);
        }

        .submit-arrow {
          transition: transform 0.3s ease;
        }

        .submit-btn:hover .submit-arrow {
          transform: translateX(5px);
        }

        .form-disclaimer {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          text-align: center;
          margin-top: 20px;
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

          .get-started-btn {
            font-size: 15px;
            padding: 14px 28px;
          }

          .modal-content {
            padding: 30px 20px;
          }

          .modal-title {
            font-size: 24px;
          }

          .modal-subtitle {
            font-size: 16px;
          }

          .form-row {
            grid-template-columns: 1fr;
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
      `}</style>

      <div 
        id="hero-container"
        className="hero-container"
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`
        } as React.CSSProperties}
      >
        {/* Primary Background Video - Main Background */}
        <video 
          className="primary-background-video"
          autoPlay 
          muted 
          loop 
          playsInline
          style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          <source src="/images/20250410_2043_Futuristic Data Symphony_remix_01jrh4v3ecewybpzdbsy98hzht_1.mp4" type="video/mp4" />
        </video>

        {/* Mouse Spotlight Video - Enhanced Version */}
        <video 
          className="video-spotlight"
          autoPlay 
          muted 
          loop 
          playsInline
          style={{
            mask: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 40%, transparent 70%)`,
            WebkitMask: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 40%, transparent 70%)`
          }}
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

        <div className="hero-content">
          <div 
            className="hero-logo-container"
            onClick={scrollToTop}
            style={{
              transform: `translateY(${scrollY * -0.15}px)`,
              opacity: 1 - (scrollY / 600)
            }}
          >
            <img 
              src="/images/landing page logo.png" 
              alt="CalcGuard Technologies"
              className="hero-logo"
            />
          </div>

          {/* Get Started Button */}
          <button 
            className="get-started-btn"
            onClick={() => setShowModal(true)}
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
              opacity: 1 - (scrollY / 600)
            }}
          >
            <span>Get Started</span>
            <ArrowRight className="arrow-icon" size={20} />
          </button>
        </div>

        {/* Enhanced Scroll Down Indicator */}
        <div 
          className="scroll-indicator"
          onClick={() => {
            document.getElementById('what-we-do')?.scrollIntoView({ 
              behavior: 'smooth' 
            })
          }}
          style={{
            opacity: 1 - (scrollY / 200)
          }}
        >
          <span className="scroll-text">Discover More</span>
          <div className="scroll-wheel">
            <div className="wheel-dot"></div>
          </div>
          <div className="scroll-arrow"></div>
          <div className="scroll-line"></div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>
            
            <h2 className="modal-title">Transform Your Trading Analytics</h2>
            <p className="modal-subtitle">
              Join leading financial institutions using CalcGuard to unlock data-driven insights
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Business Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Job Title"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your analytics challenges"
                  rows={4}
                  className="form-input form-textarea"
                />
              </div>

              <button type="submit" className="submit-btn">
                Request Demo
                <ArrowRight className="submit-arrow" size={18} />
              </button>
            </form>

            <p className="form-disclaimer">
              By submitting this form, you agree to CalcGuard's Privacy Policy and Terms of Service
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroSection