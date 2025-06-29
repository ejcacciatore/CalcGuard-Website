export default function Home() {
  return (
    <>
      {/* Enhanced Header with More Navigation */}
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
          {/* Enhanced Navigation */}
          <nav style={{display: 'flex', gap: '1.5rem', flexWrap: 'wrap'}}>
            <a href="#home" style={{color: '#666', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Home</a>
            <a href="#what-we-do" style={{color: '#666', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em'}}>What We Do</a>
            <a href="#challenge" style={{color: '#666', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Challenge</a>
            <a href="#platform" style={{color: '#666', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Platform</a>
            <a href="#leadership" style={{color: '#666', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Leadership</a>
            <a href="#contact" style={{color: '#666', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Contact</a>
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

      {/* Side Dot Navigation */}
      <nav style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <a href="#home" style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'block'}}></a>
        <a href="#what-we-do" style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#cbd5e1', display: 'block'}}></a>
        <a href="#challenge" style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#cbd5e1', display: 'block'}}></a>
        <a href="#platform" style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#cbd5e1', display: 'block'}}></a>
        <a href="#leadership" style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#cbd5e1', display: 'block'}}></a>
      </nav>

      <main>
        {/* Section 1: Hero */}
        <section id="home" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc',
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem'}}>
              <div style={{
                width: '80px', 
                height: '80px', 
                backgroundColor: '#ef4444', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginRight: '1.5rem'
              }}>
                <span style={{color: 'white', fontWeight: 'bold', fontSize: '2rem'}}>CG</span>
              </div>
              <div>
                <h1 style={{fontSize: '4rem', fontWeight: 'bold', margin: 0, fontFamily: 'Montserrat, sans-serif'}}>CalcGuard</h1>
                <p style={{fontSize: '1.5rem', margin: 0, opacity: 0.9}}>Technologies</p>
              </div>
            </div>
            <div style={{
              backgroundColor: 'rgba(30, 41, 59, 0.9)',
              padding: '2rem',
              borderRadius: '12px',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <h2 style={{fontSize: '2.5rem', fontWeight: '300', margin: '0 0 1rem 0', fontFamily: 'Montserrat, sans-serif'}}>
                Seamless B2B Data & Analytics Connectivity
              </h2>
            </div>
          </div>
        </section>

        {/* Section 2: What We Do */}
        <section id="what-we-do" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            height: '100vh',
            width: '100%'
          }}>
            {/* Left Column */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '4rem',
              position: 'relative'
            }}>
              {/* Corner Design */}
              <div style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                width: '4rem',
                height: '4rem',
                borderLeft: '4px solid #ef4444',
                borderTop: '4px solid #ef4444'
              }}></div>
              
              <div style={{marginTop: '5rem', maxWidth: '28rem'}}>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#475569',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  fontFamily: 'Raleway, sans-serif'
                }}>
                  CalcGuard® Technologies
                </p>
                <h2 style={{
                  fontSize: '4rem',
                  fontWeight: '400',
                  color: '#1e293b',
                  margin: '1rem 0',
                  lineHeight: '1.1',
                  fontFamily: 'Montserrat, sans-serif'
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
                  lineHeight: '1.6',
                  fontFamily: 'Raleway, sans-serif'
                }}>
                  We deliver a scalable B2B platform for secure aggregation, 
                  normalization and analysis of sensitive data, empowering 
                  organizations with actionable insights.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div style={{
              backgroundColor: '#f8fafc',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem 6rem 2rem 2rem',
              gap: '3rem'
            }}>
              {/* Feature 1 */}
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: '#ef4444',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
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
                    letterSpacing: '0.05em',
                    margin: '0 0 0.5rem 0',
                    fontFamily: 'Montserrat, sans-serif'
                  }}>
                    UNIFIED, SECURED & CONTROLLED
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#1e293b',
                    lineHeight: '1.5',
                    margin: 0,
                    fontFamily: 'Raleway, sans-serif'
                  }}>
                    Our modern architecture unifies fragmented data, empowering 
                    organizations to securely harness AI for secure, efficient, 
                    low-cost collaboration.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: '#ef4444',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
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
                    letterSpacing: '0.05em',
                    margin: '0 0 0.5rem 0',
                    fontFamily: 'Montserrat, sans-serif'
                  }}>
                    GLOBAL EQUITY TRADING
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#1e293b',
                    lineHeight: '1.5',
                    margin: 0,
                    fontFamily: 'Raleway, sans-serif'
                  }}>
                    Our current focus is global equity markets, providing advanced 
                    analytics and data interoperability for institutional investors, 
                    brokers and financial service providers.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: '#ef4444',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
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
                    letterSpacing: '0.05em',
                    margin: '0 0 0.5rem 0',
                    fontFamily: 'Montserrat, sans-serif'
                  }}>
                    ADAPTABLE & EXTENSIBLE
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#1e293b',
                    lineHeight: '1.5',
                    margin: 0,
                    fontFamily: 'Raleway, sans-serif'
                  }}>
                    CalcGuard's platform is architected for rapid expansion into 
                    adjacent verticals where similar data complexity, privacy and 
                    collaboration challenges exist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Challenge */}
        <section id="challenge" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
          color: 'white'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            height: '100vh',
            width: '100%',
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
                letterSpacing: '0.1em',
                margin: '0 0 1rem 0',
                fontFamily: 'Montserrat, sans-serif'
              }}>
                Accelerate Your AI Journey
              </p>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: '#1e293b',
                lineHeight: '1.1',
                margin: '0 0 1.5rem 0',
                fontFamily: 'Montserrat, sans-serif'
              }}>
                Solving The<br />First Mile, Last Mile<br />Challenge
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#475569',
                lineHeight: '1.6',
                maxWidth: '28rem',
                fontFamily: 'Raleway, sans-serif'
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
                border: '2px solid rgba(255, 255, 255, 0.2)'
              }}>
                <p style={{color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem'}}>
                  CalcGuard Platform Visualization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Platform */}
        <section id="platform" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f1f5f9',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{maxWidth: '1200px', width: '100%'}}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#1e293b',
              margin: '0 0 2rem 0',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              A Private Hub for Secure, Scalable Collaboration
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#64748b',
              margin: '0 0 3rem 0',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}>
              Our capabilities create a highly secure, scalable and interoperable 
              data collaboration platform - enabling faster insights, safer AI adoption 
              and more agile partner ecosystems.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {/* Feature 1 */}
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  margin: '0 0 1rem 0'
                }}>
                  Complex Data Collaboration
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#64748b',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Securely connect, aggregate, and stream data from unlimited 
                  sources to centralized analysis and visualization endpoints.
                </p>
              </div>

              {/* Feature 2 */}
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  margin: '0 0 1rem 0'
                }}>
                  Modern Analytics Collaboration
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#64748b',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Leverage AI and advanced analytics within zero-trust, 
                  single-tenant environments providing private spheres 
                  for analytical workflows.
                </p>
              </div>

              {/* Feature 3 */}
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  margin: '0 0 1rem 0'
                }}>
                  3rd Party App Collaboration
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#64748b',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Streamline 3rd party integrations with built-in tools 
                  that simplify risk assessments and enable secure deployment.
                </p>
              </div>
            </div>

            {/* Platform Visualization Placeholder */}
            <div style={{
              backgroundColor: 'white',
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              padding: '4rem 2rem',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '1.125rem',
                color: '#64748b',
                margin: 0
              }}>
                CalcGuard Platform Architecture Visualization
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Leadership */}
        <section id="leadership" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '4rem 2rem'
        }}>
          <div style={{maxWidth: '1200px', margin: '0 auto', width: '100%'}}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '2rem',
              alignItems: 'start'
            }}>
              {/* Left Column: CalcGuard Leaders */}
              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                {/* Tim Sargent */}
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'right'}}>
                  <div style={{flex: 1}}>
                    <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', margin: '0 0 0.5rem 0'}}>TIM SARGENT, CEO</h3>
                    <p style={{fontSize: '0.875rem', color: '#64748b', margin: '0 0 0.5rem 0'}}>
                      Founded OSG, sold to IHS Markit, led wall street quant, index and trading groups.
                    </p>
                    <a href="#" style={{fontSize: '0.875rem', color: '#2563eb', textDecoration: 'none'}}>LinkedIn</a>
                  </div>
                  <div style={{
                    width: '6rem',
                    height: '6rem',
                    backgroundColor: '#ef4444',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}>
                    TS
                  </div>
                </div>

                {/* Jim Northey */}
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'right'}}>
                  <div style={{flex: 1}}>
                    <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', margin: '0 0 0.5rem 0'}}>JIM NORTHEY, CTO</h3>
                    <p style={{fontSize: '0.875rem', color: '#64748b', margin: '0 0 0.5rem 0'}}>
                      FIX co-chair, 3 ISO committees, ex-Itiviti SVP: LaSalle co-founder.
                    </p>
                    <a href="#" style={{fontSize: '0.875rem', color: '#2563eb', textDecoration: 'none'}}>LinkedIn</a>
                  </div>
                  <div style={{
                    width: '6rem',
                    height: '6rem',
                    backgroundColor: '#ef4444',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}>
                    JN
                  </div>
                </div>

                {/* Enrico */}
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'right'}}>
                  <div style={{flex: 1}}>
                    <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', margin: '0 0 0.5rem 0'}}>ENRICO CACCIATORE, CPO</h3>
                    <p style={{fontSize: '0.875rem', color: '#64748b', margin: '0 0 0.5rem 0'}}>
                      Ex-Voya quant trading and market structure analytics.
                    </p>
                    <a href="#" style={{fontSize: '0.875rem', color: '#2563eb', textDecoration: 'none'}}>LinkedIn</a>
                  </div>
                  <div style={{
                    width: '6rem',
                    height: '6rem',
                    backgroundColor: '#ef4444',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}>
                    EC
                  </div>
                </div>
              </div>

              {/* Center Column: Main Text */}
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                borderLeft: '1px solid #e2e8f0',
                borderRight: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%'
              }}>
                <p style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  margin: '0 0 1rem 0'
                }}>
                  Focus, Expertise & Accountability
                </p>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  margin: '0 0 1rem 0',
                  lineHeight: '1.2',
                  fontFamily: 'Montserrat, sans-serif'
                }}>
                  A LEADERSHIP<br />TRIPLE THREAT
                </h2>
                <div style={{
                  width: '4rem',
                  height: '4px',
                  backgroundColor: '#ef4444',
                  margin: '0 auto 1.5rem'
                }}></div>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  lineHeight: '1.6',
                  margin: '0 0 1.5rem 0'
                }}>
                  We've engineered a leadership triumvirate combining CalcGuard 
                  management, industry advisors and an investment management 
                  advisory council (IMAC) to ensure broad perspectives and 
                  proactively eliminate blind spots.
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  The IMAC unifies industry voices to advance transparency, 
                  standardize platform definitions, align integration priorities 
                  and drive innovation.
                </p>
              </div>

              {/* Right Column: Industry Advisors */}
              <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
                {/* Jeff Estella */}
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{
                    width: '6rem',
                    height: '6rem',
                    backgroundColor: '#64748b',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}>
                    JE
                  </div>
                  <div style={{flex: 1}}>
                    <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', margin: '0 0 0.5rem 0'}}>JEFF ESTELLA</h3>
                    <p style={{fontSize: '0.875rem', color: '#64748b', margin: '0 0 0.5rem 0'}}>
                      Senior trading roles at MFS, now advises finance industry.
                    </p>
                    <a href="#" style={{fontSize: '0.875rem', color: '#2563eb', textDecoration: 'none'}}>LinkedIn</a>
                  </div>
                </div>

                {/* Bill Hartnett */}
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{
                    width: '6rem',
                    height: '6rem',
                    backgroundColor: '#64748b',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}>
                    BH
                  </div>
                  <div style={{flex: 1}}>
                    <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', margin: '0 0 0.5rem 0'}}>BILL HARTNETT</h3>
                    <p style={{fontSize: '0.875rem', color: '#64748b', margin: '0 0 0.5rem 0'}}>
                      Ex-Citi fintech investor with deep expertise in capital markets digitization.
                    </p>
                    <a href="#" style={{fontSize: '0.875rem', color: '#2563eb', textDecoration: 'none'}}>LinkedIn</a>
                  </div>
                </div>

                {/* Mark Schaedel */}
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{
                    width: '6rem',
                    height: '6rem',
                    backgroundColor: '#64748b',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}>
                    MS
                  </div>
                  <div style={{flex: 1}}>
                    <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', margin: '0 0 0.5rem 0'}}>MARK SCHAEDEL</h3>
                    <p style={{fontSize: '0.875rem', color: '#64748b', margin: '0 0 0.5rem 0'}}>
                      Leads DataBP: 13 years at NYSE IHS Markit, COBA co-founder.
                    </p>
                    <a href="#" style={{fontSize: '0.875rem', color: '#2563eb', textDecoration: 'none'}}>LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Contact/CTA */}
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
              margin: '0 0 1rem 0',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Ready to Transform Your Data?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
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

      {/* Simple JavaScript for smooth scrolling */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                  targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              });
            });
          });
        `
      }} />
    </>
  )
}