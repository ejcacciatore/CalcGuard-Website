'use client'

const WhatWeDoSection = () => {
  return (
    <section 
      id="what-we-do"
      style={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      {/* Two Column Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        width: '100%',
        height: '100vh'
      }}>
        
        {/* Left Column - Text Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px',
          position: 'relative'
        }}>
          {/* Corner Design Element */}
          <img 
            src="/images/left_cornder.png" 
            alt="Corner Design" 
            style={{
              position: 'absolute',
              top: '32px',
              left: '32px',
              width: '96px',
              height: 'auto'
            }}
          />
          
          <div style={{ maxWidth: '400px', marginTop: '80px' }}>
            <p style={{
              fontSize: '14px',
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              CalcGuard® Technologies
            </p>
            
            <h2 style={{
              fontSize: '48px',
              fontWeight: '400',
              color: '#1e293b',
              lineHeight: '1.1',
              marginBottom: '24px',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              WHAT<br />WE DO
            </h2>
            
            {/* Red Accent Line */}
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#ef4444',
              marginBottom: '24px'
            }}></div>
            
            <p style={{
              fontSize: '16px',
              color: '#334155',
              lineHeight: '1.6',
              marginBottom: '32px',
              fontFamily: 'Raleway, sans-serif'
            }}>
              We deliver a scalable B2B platform for secure aggregation, normalization 
              and analysis of sensitive data, empowering organizations with actionable insights.
            </p>
            
            {/* Full Control Icon */}
            <div style={{ textAlign: 'center' }}>
              <img 
                src="/images/Full_Control_icon.png" 
                alt="Full Control Icon" 
                style={{
                  height: '48px',
                  width: 'auto'
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Feature Cards */}
        <div style={{
          backgroundColor: '#f8fafc',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px 96px 64px 64px'
        }}>
          {/* Background with low opacity */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/images/main_background.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.05
          }}></div>
          
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px'
          }}>
            {/* Feature 1 - Unified */}
            <div>
              <img 
                src="/images/Unify_icon.png" 
                alt="Unified Icon" 
                style={{
                  height: '48px',
                  width: 'auto',
                  marginBottom: '12px'
                }}
              />
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1e293b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '8px',
                fontFamily: 'Montserrat, sans-serif'
              }}>
                UNIFIED, SECURED & CONTROLLED
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#475569',
                lineHeight: '1.5',
                fontFamily: 'Raleway, sans-serif'
              }}>
                Our modern architecture unifies fragmented data, empowering organizations 
                to securely harness AI for secure, efficient, low-cost collaboration.
              </p>
            </div>

            {/* Feature 2 - Global Equity */}
            <div>
              <img 
                src="/images/global_equity_icon.png" 
                alt="Global Equity Icon" 
                style={{
                  height: '48px',
                  width: 'auto',
                  marginBottom: '12px'
                }}
              />
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1e293b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '8px',
                fontFamily: 'Montserrat, sans-serif'
              }}>
                GLOBAL EQUITY TRADING
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#475569',
                lineHeight: '1.5',
                fontFamily: 'Raleway, sans-serif'
              }}>
                Our current focus is global equity markets, providing advanced analytics 
                and data interoperability for institutional investors, brokers and financial service providers.
              </p>
            </div>

            {/* Feature 3 - Adaptable */}
            <div>
              <img 
                src="/images/adaptable_icon.png" 
                alt="Adaptable Icon" 
                style={{
                  height: '48px',
                  width: 'auto',
                  marginBottom: '12px'
                }}
              />
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1e293b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '8px',
                fontFamily: 'Montserrat, sans-serif'
              }}>
                ADAPTABLE & EXTENSIBLE
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#475569',
                lineHeight: '1.5',
                fontFamily: 'Raleway, sans-serif'
              }}>
                CalcGuard's platform is architected for rapid expansion into adjacent 
                verticals where similar data complexity, privacy and collaboration challenges exist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection