import { useEffect, useState } from 'react'

export const useScrollDirection = (): 'up' | 'down' => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateDirection = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'
      if (
        direction !== scrollDirection &&
        Math.abs(currentScrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', updateDirection)
    return () => window.removeEventListener('scroll', updateDirection)
  }, [scrollDirection])

  return scrollDirection
}
