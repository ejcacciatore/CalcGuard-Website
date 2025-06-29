export default function Home() {
  return (
    <main style={{minHeight: '100vh', padding: '4rem 1rem', textAlign: 'center'}}>
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
  )
}