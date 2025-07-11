'use client'

import { useEffect, useRef, useState } from 'react'

const HeroSection = () => {
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const progressRef = useRef<HTMLDivElement | null>(null)

  // Auto scroll after delay
  useEffect(() => {
    let animationFrame: number
    let start: number | null = null

    const duration = 6000 // 6 seconds
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

  // Pause on user interaction
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
          font-size: 6.5rem;
          font-weight: 1000;
          color: white;
          font-family: 'Montserrat', sans-serif;
          display: inline-block;
          text-align: center;
          transform: translateY(-14vh);
          letter-spacing: -1.9px;
          backdrop-filter: blur(2px);
          padding: 0.25em 0.5em;
          border-radius: 6px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
        }

        .title span {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: brightenLetter 0.5s ease-out forwards;
        }

        .title span:nth-child(n) {
          animation-delay: calc(0.04s * var(--i));
        }

        @keyframes brightenLetter {
          to {
            opacity: 1;
            transform: translateY(0);
            color: #ffffff;
          }
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
            font-size: 2.75rem;
            font-weight: 700;
          }

          .progress-bar {
            display: none;
          }
        }
      `}</style>

      <section id="hero" className="hero">
        <video className="background-video" autoPlay muted loop playsInline>
          <source
            src="/images/CG Datacenter Splash.mp4"
            type="video/mp4"
          />
        </video>

        <div className="overlay" />

        <h1 className="title">
          {'Moster Seamless B2B Infrastructure'.split('').map((char, idx) => (
            <span key={idx} style={{ ['--i' as any]: idx }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <div
          className="progress-bar"
          ref={progressRef}
          style={{ width: `${progress * 100}%` }}
        />
      </section>
    </>
  )
}

export default HeroSection