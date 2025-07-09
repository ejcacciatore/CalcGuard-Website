import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export const Container = ({ 
  children, 
  className,
  size = 'xl'
}: ContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto px-6',
        size === 'sm' && 'max-w-2xl',
        size === 'md' && 'max-w-4xl',
        size === 'lg' && 'max-w-6xl',
        size === 'xl' && 'max-w-7xl',
        size === 'full' && 'max-w-full',
        className
      )}
    >
      {children}
    </div>
  )
}