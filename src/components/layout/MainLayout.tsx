'use client'

import Header from './Header'
// import Footer from './Footer' // ⛔️ Commented out until ready

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main style={{ minHeight: '100vh', paddingTop: '64px' }}>
        {children}
      </main>

      {/* <Footer /> */}
    </>
  )
}
