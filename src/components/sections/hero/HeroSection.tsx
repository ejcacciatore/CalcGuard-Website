'use client'

import { useEffect, useRef, useState } from 'react'

const HeroSection = () => {
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHomePage, setIsHomePage] = useState(false) // Start with false
  const [isClient, setIsClient] = useState(false) // Track if client-side
  const progressRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Mark as client-side and check if we're on home page
    setIsClient(true)
    const currentPath = window.location.pathname
    setIsHomePage(currentPath === '/')
  }, [])

  useEffect(() => {
    // Only run progress bar and auto-scroll on home page
    if (!isClient || !isHomePage) return

    let animationFrame: number
    let start: number | null = null
    const duration = 6000
    const step = (timestamp: number) => {
      if (isPaused) return
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const newProgress = Math.min(elapsed / duration, 1)
      setProgress(newProgress)
      if (newProgress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        scrollToNext()
      }
    }
    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused, isHomePage, isClient])

  const scrollToNext = () => {
    // Only scroll to next if we're on the home page
    if (isClient && isHomePage) {
      const next = document.getElementById('what-we-do')
      if (next) {
        next.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  useEffect(() => {
    // Only run auto-scroll on home page
    if (!isClient || !isHomePage) return
    
    const pause = () => setIsPaused(true)
    window.addEventListener('wheel', pause)
    window.addEventListener('touchstart', pause)
    window.addEventListener('keydown', pause)
    return () => {
      window.removeEventListener('wheel', pause)
      window.removeEventListener('touchstart', pause)
      window.removeEventListener('keydown', pause)
    }
  }, [isHomePage, isClient])

  return (
    <>
      <style jsx>{`
        .hero {
          width: 100vw;
          height: 100vh;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background-color: #000;
        }

        .background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.2);
          z-index: 1;
        }

        .title {
          z-index: 2;
          font-size: clamp(2.8rem, 4.5vw, 5.2rem);
          font-weight: 400;
          color: #ffffff;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          display: inline-block;
          text-align: center;
          transform: translateY(-8vh);
          letter-spacing: -0.05em;
          backdrop-filter: blur(1px);
          padding: 0.1em 0.1em;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.25);
          text-shadow: 
            0 3px 6px rgba(0, 0, 0, 0.9),
            0 6px 20px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.12);
          max-width: 90vw;
          line-height: 1.05;
          word-break: keep-all;
          overflow-wrap: break-word;
          hyphens: none;
          animation: titleEntrance 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          opacity: 0;
          transform: translateY(-8vh) scale(0.8);
        }

        @keyframes titleEntrance {
          0% {
            opacity: 0;
            transform: translateY(-8vh) scale(0.8) rotateX(15deg);
            filter: blur(8px);
          }
          60% {
            opacity: 0.8;
            transform: translateY(-8vh) scale(1.05) rotateX(0deg);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(-8vh) scale(1) rotateX(0deg);
            filter: blur(0px);
          }
        }



        .title span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: brightenLetter 0.6s ease-out forwards;
          font-weight: inherit;
          letter-spacing: inherit;
        }

        .title span:nth-child(n) {
          animation-delay: calc(0.03s * var(--i));
        }

        @keyframes brightenLetter {
          to {
            opacity: 1;
            transform: translateY(0);
            color: #ffffff;
          }
        }

        .brand {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 2;
          font-size: 0.9rem;
          font-weight: 600;
          color: white;
          font-family: 'Montserrat', sans-serif;
          background: rgba(0,0,0,0.4);
          padding: 6px 12px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.1);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .scroll-indicator {
          position: fixed;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          opacity: 0;
          animation: fadeInUp 1s ease-out 2.5s forwards;
        }

        .scroll-text {
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
          text-transform: uppercase;
          opacity: 0.8;
          text-align: center;
          white-space: nowrap;
        }

        .scroll-icon {
          width: 24px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.6);
          border-radius: 20px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 8px;
        }

        .scroll-dot {
          width: 4px;
          height: 8px;
          background: white;
          border-radius: 2px;
          animation: scrollDown 2s infinite;
        }

        .scroll-arrow {
          margin-top: 8px;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid rgba(255, 255, 255, 0.6);
          animation: bounce 2s infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(12px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-4px);
          }
          60% {
            transform: translateY(-2px);
          }
        }

        .scroll-indicator:hover .scroll-text {
          opacity: 1;
        }

        .scroll-indicator:hover .scroll-icon {
          border-color: rgba(255, 255, 255, 0.8);
        }

        .scroll-indicator:hover .scroll-arrow {
          border-top-color: rgba(255, 255, 255, 0.8);
        }

        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          background: #ef4444;
          transition: width 0.1s linear;
          z-index: 3;
        }

        /* Tablet responsive */
        @media (max-width: 1024px) {
          .title {
            font-size: clamp(1.8rem, 4vw, 4rem);
            transform: translateY(-6vh);
            max-width: 85vw;
            letter-spacing: -0.03em;
          }

          .scroll-indicator {
            bottom: 35px;
          }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .title {
            font-size: clamp(1.4rem, 3.5vw, 3rem);
            transform: translateY(-5vh);
            padding: 0.15em 0.35em;
            max-width: 90vw;
            letter-spacing: -0.02em;
          }

          .progress-bar {
            display: none;
          }

          .scroll-indicator {
            bottom: 30px;
          }

          .scroll-text {
            font-size: 0.7rem;
          }

          .scroll-icon {
            width: 20px;
            height: 32px;
          }

          .scroll-arrow {
            margin: 6px auto 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 6px solid rgba(255, 255, 255, 0.6);
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .title {
            font-size: clamp(1.2rem, 3.2vw, 2.5rem);
            transform: translateY(-4vh);
            max-width: 95vw;
            padding: 0.1em 0.25em;
          }

          .scroll-indicator {
            bottom: 25px;
          }

          .scroll-text {
            font-size: 0.65rem;
            margin-bottom: 8px;
          }

          .scroll-icon {
            width: 18px;
            height: 28px;
          }
        }

        /* Extra small mobile */
        @media (max-width: 360px) {
          .title {
            font-size: clamp(1rem, 3vw, 2.2rem);
            transform: translateY(-3vh);
            max-width: 98vw;
          }

          .scroll-indicator {
            bottom: 20px;
          }

          .scroll-text {
            font-size: 0.6rem;
            margin-bottom: 6px;
          }

          .scroll-icon {
            width: 16px;
            height: 24px;
          }
        }
      `}</style>

      <section id="hero" className="hero">
        <video className="background-video" autoPlay muted loop playsInline>
          <source
            src="/images/20250410_2043_Futuristic Data Symphony_remix_01jrh4v3ecewybpzdbsy98hzht_1.mp4"
            type="video/mp4"
          />
        </video>

        <h1 className="title">
          Seamless B2B Architecture
        </h1>

        {/* Only render scroll elements on client-side and home page */}
        {isClient && isHomePage && (
          <>
            <div className="scroll-indicator" onClick={scrollToNext}>
              <div className="scroll-text">Scroll</div>
              <div className="scroll-icon">
                <div className="scroll-dot"></div>
              </div>
              <div className="scroll-arrow"></div>
            </div>

            <div
              className="progress-bar"
              ref={progressRef}
              style={{ width: `${progress * 100}%` }}
            />
          </>
        )}
      </section>
    </>
  )
}

export default HeroSection;