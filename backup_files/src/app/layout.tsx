import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CalcGuard Technologies',
  description: 'Seamless B2B Data & Analytics Connectivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}