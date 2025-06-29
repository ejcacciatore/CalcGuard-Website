export default function Home() {
  return (
    <main className="min-h-screen bg-white" style={{minHeight: '100vh', backgroundColor: 'white', padding: '4rem 1rem'}}>
      <div className="container mx-auto px-6 py-16" style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
        <div className="text-center">
          {/* Red CalcGuard Logo */}
          <div className="flex items-center justify-center mb-8" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem'}}>
            <div 
              className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mr-4"
              style={{
                width: '64px', 
                height: '64px', 
                backgroundColor: '#ef4444', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginRight: '1rem'
              }}
            >
              <span className="text-white font-bold text-2xl" style={{color: 'white', fontWeight: 'bold', fontSize: '1.5rem'}}>
                CG
              </span>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-gray-900" style={{fontSize: '3rem', fontWeight: 'bold', color: '#111'}}>
                CalcGuard
              </h1>
              <p className="text-lg text-gray-600" style={{fontSize: '1.125rem', color: '#666'}}>
                Technologies
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold text-gray-700 mb-6" style={{fontSize: '2rem', fontWeight: '600', color: '#444', marginBottom: '1.5rem'}}>
            Seamless B2B Data & Analytics Connectivity
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8" style={{fontSize: '1.25rem', color: '#666', maxWidth: '64rem', margin: '0 auto 2rem'}}>
            We deliver a scalable B2B platform for secure aggregation, 
            normalization and analysis of sensitive data, empowering 
            organizations with actionable insights.
          </p>

          {/* Styled Buttons */}
          <div className="flex gap-4 justify-center" style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
            <button 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg"
              style={{
                backgroundColor: '#ef4444', 
                color: 'white', 
                fontWeight: 'bold', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '8px', 
                border: 'none', 
                cursor: 'pointer'
              }}
            >
              Get Started
            </button>
            <button 
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold py-3 px-6 rounded-lg"
              style={{
                border: '2px solid #d1d5db', 
                backgroundColor: 'transparent', 
                color: '#374151', 
                fontWeight: 'bold', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '8px', 
                cursor: 'pointer'
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}