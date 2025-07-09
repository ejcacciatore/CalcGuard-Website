import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SectionProps } from '@/types'  // Add this import

export const Section = ({
  id,
  children,
  fullHeight = true,
  background,
  className,
}: SectionProps) => {
  const backgroundStyle = background?.startsWith('linear-gradient')
    ? { background }
    : background?.startsWith('#')
    ? { backgroundColor: background }
    : background?.startsWith('/')
    ? { backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {}

  return (
    <section
      id={id}
      className={cn(
        'relative w-full',
        fullHeight && 'min-h-screen',
        className
      )}
      style={backgroundStyle}
    >
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}