export default function Home() {
  return (
    <>
      {/* Simple Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e5e7eb',
        zIndex: 50,
        padding: '1rem 2rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Navigation */}
          <nav style={{display: 'flex', gap: '2rem'}}>
            <a href="#home" style={{color: '#666', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase'}}>Home</a>
            <a href="#platform" style={{color: '#666', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase'}}>Platform</a>
            <a href="#about" style={{color: '#666', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase'}}>About</a>
            <a href="#contact" style={{color: '#666', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase'}}>Contact</a>
          </nav>
          
          {/* Logo */}
          <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#ef4444',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{color: 'white', fontWeight: 'bold', fontSize: '1.125rem'}}>CG</span>
            </div>
            <div>
              <div style={{fontSize: '1.25rem', fontWeight: '300', color: '#111'}}>CalcGuard</div>
              <div style={{fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Technologies</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{marginTop: '80px', minHeight: '100vh', padding: '4rem 1rem', textAlign: 'center'}}>
        <div className="container">
          {/* CalcGuard Logo */}
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem'}}>
            <div style={{
              width: '64px', 
              height: '64px', 
              backgroundColor: '#ef4444', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginRight: '1rem'
            }}>
              <span style={{color: 'white', fontWeight: 'bold', fontSize: '1.5rem'}}>CG</span>
            </div>
            <div>
              <h1 style={{fontSize: '3rem', fontWeight: 'bold', color: '#111', margin: 0}}>CalcGuard</h1>
              <p style={{fontSize: '1.125rem', color: '#666', margin: 0}}>Technologies</p>
            </div>
          </div>
          
          <h2 style={{fontSize: '2rem', fontWeight: '600', color: '#444', marginBottom: '1.5rem'}}>
            Seamless B2B Data & Analytics Connectivity
          </h2>
          
          <p style={{fontSize: '1.25rem', color: '#666', maxWidth: '64rem', margin: '0 auto 2rem', lineHeight: '1.6'}}>
            We deliver a scalable B2B platform for secure aggregation, 
            normalization and analysis of sensitive data, empowering 
            organizations with actionable insights.
          </p>

          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </main>
    </>
  )
}