'use client'

import { useEffect, useRef, useState } from 'react'

const HeroSection = () => {
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const progressRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
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
  }, [isPaused])

  const scrollToNext = () => {
    const next = document.getElementById('what-we-do')
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const pause = () => setIsPaused(true)
    window.addEventListener('wheel', pause)
    window.addEventListener('touchstart', pause)
    window.addEventListener('keydown', pause)
    return () => {
      window.removeEventListener('wheel', pause)
      window.removeEventListener('touchstart', pause)
      window.removeEventListener('keydown', pause)
    }
  }, [])

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
          font-size: 4.2rem;
          font-weight: 300;
          color: #ffffff;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          display: inline-block;
          text-align: center;
          transform: translateY(-14vh);
          letter-spacing: -1.2px;
          backdrop-filter: blur(4px);
          padding: 0.15em 0.4em;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.15);
          text-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.8),
            0 4px 12px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .title span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: brightenLetter 0.6s ease-out forwards;
        }

        .title span:nth-child(n) {
          animation-delay: calc(0.03s * var(--i));
        }

        .title .b2b {
          font-weight: 600;
          letter-spacing: -0.8px;
          color: #ffffff;
          text-shadow: 
            0 2px 6px rgba(0, 0, 0, 0.9),
            0 4px 16px rgba(0, 0, 0, 0.6),
            0 0 30px rgba(255, 255, 255, 0.2);
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
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          opacity: 0;
          animation: fadeInUp 1s ease-out 2s forwards;
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

        @media (max-width: 768px) {
          .title {
            font-size: 2.2rem;
            letter-spacing: -0.8px;
            padding: 0.1em 0.3em;
            max-width: 90vw;
            word-wrap: break-word;
            white-space: normal;
            line-height: 1.1;
          }

          .title .b2b {
            letter-spacing: -0.5px;
          }

          .progress-bar {
            display: none;
          }

          .scroll-indicator {
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            width: auto;
            text-align: center;
          }

          .scroll-text {
            font-size: 0.7rem;
            text-align: center;
            white-space: nowrap;
          }

          .scroll-icon {
            width: 20px;
            height: 32px;
            margin: 0 auto;
          }

          .scroll-arrow {
            margin: 8px auto 0;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.6rem;
            letter-spacing: -0.4px;
            max-width: 95vw;
            padding: 0.1em 0.2em;
            transform: translateY(-10vh);
          }

          .title .b2b {
            letter-spacing: -0.2px;
          }

          .scroll-indicator {
            bottom: 25px;
            left: 50%;
            transform: translateX(-50%);
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

        @media (max-width: 375px) {
          .title {
            font-size: 1.4rem;
            letter-spacing: -0.3px;
            max-width: 98vw;
            transform: translateY(-8vh);
          }

          .title .b2b {
            letter-spacing: -0.1px;
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
          {'Seamless '.split('').map((char, idx) => (
            <span key={idx} style={{ ['--i' as any]: idx }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
          {'B2B'.split('').map((char, idx) => (
            <span key={idx + 9} className="b2b" style={{ ['--i' as any]: idx + 9 }}>
              {char}
            </span>
          ))}
          {' Infrastructure'.split('').map((char, idx) => (
            <span key={idx + 12} style={{ ['--i' as any]: idx + 12 }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <div className="scroll-indicator" onClick={scrollToNext}>
          <div className="scroll-text">Scroll down to find out more</div>
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
      </section>
    </>
  )
}

export default HeroSection;