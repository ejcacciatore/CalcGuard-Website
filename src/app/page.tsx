export default function Home() {
  return (
    <>
      {/* Enhanced Header */}
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
          <nav style={{display: 'flex', gap: '1.5rem', flexWrap: 'wrap'}}>
            <a href="#home" style={{color: '#666', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase'}}>Home</a>
            <a href="#what-we-do" style={{color: '#666', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase'}}>What We Do</a>
            <a href="#challenge" style={{color: '#666', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase'}}>Challenge</a>
            <a href="#platform" style={{color: '#666', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase'}}>Platform</a>
            <a href="#leadership" style={{color: '#666', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase'}}>Leadership</a>
          </nav>
          
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
              <div style={{fontSize: '0.75rem', color: '#666', textTransform: 'uppercase'}}>Technologies</div>
            </div>
          </div>
        </div>
      </header>

      <main style={{marginTop: '80px'}}>
        {/* Section 1: Hero */}
        <section id="home" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url("/images/main_background.png"), linear-gradient(135deg, #1e293b 0%, #475569 50%, #64748b 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '3rem 4rem',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center',
            maxWidth: '800px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#ef4444',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '2rem'
              }}>
                <span style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '2.5rem'
                }}>
                  CG
                </span>
              </div>
              <div>
                <h1 style={{
                  fontSize: '4rem',
                  fontWeight: '300',
                  color: '#1e293b',
                  margin: 0
                }}>
                  CalcGuard
                </h1>
                <p style={{
                  fontSize: '1.5rem',
                  color: '#64748b',
                  margin: 0,
                  textTransform: 'uppercase'
                }}>
                  Technologies
                </p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: '#1e293b',
              color: 'white',
              padding: '1.5rem 2rem',
              borderRadius: '8px',
              marginBottom: '1rem'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '300',
                margin: 0
              }}>
                Seamless B2B Data & Analytics Connectivity
              </h2>
            </div>
          </div>
        </section>

        {/* Section 2: What We Do */}
        <section id="what-we-do" style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          backgroundColor: 'white'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '4rem',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '2rem',
              left: '2rem',
              width: '4rem',
              height: '4rem',
              borderLeft: '4px solid #ef4444',
              borderTop: '4px solid #ef4444'
            }}></div>
            
            <div style={{marginTop: '5rem'}}>
              <p style={{
                fontSize: '0.875rem',
                color: '#475569',
                textTransform: 'uppercase',
                fontWeight: '600'
              }}>
                CalcGuard® Technologies
              </p>
              <h2 style={{
                fontSize: '4rem',
                fontWeight: '400',
                color: '#1e293b',
                margin: '1rem 0',
                lineHeight: '1.1'
              }}>
                WHAT<br />WE DO
              </h2>
              <div style={{
                width: '5rem',
                height: '4px',
                backgroundColor: '#ef4444',
                margin: '1.5rem 0'
              }}></div>
              <p style={{
                fontSize: '1.125rem',
                color: '#1e293b',
                lineHeight: '1.6'
              }}>
                We deliver a scalable B2B platform for secure aggregation, 
                normalization and analysis of sensitive data, empowering 
                organizations with actionable insights.
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem 6rem 2rem 2rem',
            gap: '3rem'
          }}>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
              <div style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: '#ef4444',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '3px'
                }}></div>
              </div>
              <div>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  textTransform: 'uppercase',
                  margin: '0 0 0.5rem 0'
                }}>
                  UNIFIED, SECURED & CONTROLLED
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#1e293b',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Our modern architecture unifies fragmented data, empowering 
                  organizations to securely harness AI for secure, efficient, 
                  low-cost collaboration.
                </p>
              </div>
            </div>

            <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
              <div style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: '#ef4444',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '50%'
                }}></div>
              </div>
              <div>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  textTransform: 'uppercase',
                  margin: '0 0 0.5rem 0'
                }}>
                  GLOBAL EQUITY TRADING
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#1e293b',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Our current focus is global equity markets, providing advanced 
                  analytics and data interoperability for institutional investors, 
                  brokers and financial service providers.
                </p>
              </div>
            </div>

            <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
              <div style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: '#ef4444',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '2px',
                  transform: 'rotate(45deg)'
                }}></div>
              </div>
              <div>
                <h3 style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  textTransform: 'uppercase',
                  margin: '0 0 0.5rem 0'
                }}>
                  ADAPTABLE & EXTENSIBLE
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#1e293b',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  CalcGuard's platform is architected for rapid expansion into 
                  adjacent verticals where similar data complexity, privacy and 
                  collaboration challenges exist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Challenge */}
        <section id="challenge" style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '6rem',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            color: '#1e293b',
            height: '100%'
          }}>
            <p style={{
              fontSize: '0.875rem',
              color: '#dc2626',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              margin: '0 0 1rem 0'
            }}>
              Accelerate Your AI Journey
            </p>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: '#1e293b',
              lineHeight: '1.1',
              margin: '0 0 1.5rem 0'
            }}>
              Solving The<br />First Mile, Last Mile<br />Challenge
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#475569',
              lineHeight: '1.6'
            }}>
              The first mile and last mile are the hardest-to-solve parts of 
              delivering a complete, usable solution - typically at the points 
              of data ingestion (first mile) and analytics delivery (last mile).
            </p>
          </div>
          <div style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}>
            <div style={{
              width: '90%',
              height: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              <p>CalcGuard Platform Visualization</p>
            </div>
          </div>
        </section>

        {/* Section 4: Contact */}
        <section id="contact" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1e293b',
          color: 'white',
          textAlign: 'center',
          padding: '4rem 2rem'
        }}>
          <div style={{maxWidth: '800px'}}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              margin: '0 0 1rem 0'
            }}>
              Ready to Transform Your Data?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              opacity: 0.8,
              margin: '0 0 2rem 0',
              lineHeight: '1.6'
            }}>
              Get started with CalcGuard's seamless B2B data and analytics connectivity platform.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button style={{
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Schedule Demo
              </button>
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}