'use client'

import { useState } from 'react'

const LeadershipSection = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)

  return (
    <>
      <style jsx>{`
        .leadership-section {
          width: 100vw;
          min-height: 100vh;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
        }

        .leadership-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 60px;
          align-items: start;
          min-height: 600px;
        }

        .column {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .left-column {
          text-align: right;
        }

        .center-column {
          text-align: center;
          border-left: 2px solid #e2e8f0;
          border-right: 2px solid #e2e8f0;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .right-column {
          text-align: left;
        }

        .team-members {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .team-member {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 12px;
          border-radius: 16px;
          position: relative;
          z-index: 1;
        }

        .team-member:hover {
          transform: scale(1.08);
          z-index: 10;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          background: linear-gradient(135deg, #fef7f7 0%, #fff5f5 100%);
        }

        .left-column .team-member {
          flex-direction: row-reverse;
          justify-content: flex-end;
        }

        .member-photo {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          object-fit: cover;
          flex-shrink: 0;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 3px solid transparent;
        }

        .team-member:hover .member-photo {
          width: 110px;
          height: 110px;
          border-radius: 20px;
          border-color: #ef4444;
          box-shadow: 0 15px 35px rgba(239, 68, 68, 0.3);
          transform: rotate(-2deg);
        }

        .member-info {
          flex-grow: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-member:hover .member-info {
          transform: translateY(-2px);
        }

        .member-name {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 6px;
          font-family: 'Montserrat', sans-serif;
          transition: all 0.3s ease;
        }

        .team-member:hover .member-name {
          color: #ef4444;
          font-size: 18px;
          margin-bottom: 8px;
        }

        .member-bio {
          font-size: 13px;
          color: #64748b;
          line-height: 1.4;
          margin-bottom: 8px;
          font-family: 'Raleway', sans-serif;
          transition: all 0.3s ease;
          max-height: 60px;
          overflow: hidden;
        }

        .team-member:hover .member-bio {
          color: #374151;
          font-size: 14px;
          max-height: 100px;
          line-height: 1.5;
        }

        .linkedin-link {
          font-size: 12px;
          color: #0366d6;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          opacity: 0.7;
        }

        .linkedin-link:hover {
          color: #0256cc;
          text-decoration: underline;
        }

        .team-member:hover .linkedin-link {
          font-size: 13px;
          opacity: 1;
          font-weight: 600;
        }

        .subtitle {
          font-size: 12px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .main-title {
          font-size: 32px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.2;
          margin-bottom: 20px;
          font-family: 'Montserrat', sans-serif;
        }

        .red-line {
          width: 60px;
          height: 4px;
          background-color: #ef4444;
          margin: 0 auto 24px auto;
          transition: all 0.3s ease;
        }

        .leadership-section:hover .red-line {
          width: 80px;
          background: linear-gradient(90deg, #ef4444, #dc2626);
        }

        .description {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
          font-family: 'Raleway', sans-serif;
        }

        .section-labels {
          margin-top: 40px;
          transition: all 0.3s ease;
        }

        .section-label {
          font-size: 11px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .column:hover .section-label {
          color: #ef4444;
          font-size: 12px;
        }

        .leadership-logo {
          max-width: 150px;
          height: auto;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .column:hover .leadership-logo {
          opacity: 1;
          transform: scale(1.05);
        }

        /* Expansion indicator */
        .expansion-indicator {
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #ef4444, #dc2626);
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-member:hover .expansion-indicator {
          width: 80%;
        }

        /* Hover background effect */
        .team-member::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(220, 38, 38, 0.05) 100%);
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .team-member:hover::before {
          opacity: 1;
        }

        /* Mobile Styles */
        @media (max-width: 1024px) {
          .leadership-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .center-column {
            border: none;
            padding: 0;
            order: -1;
          }

          .left-column,
          .right-column {
            text-align: center;
          }

          .team-member {
            flex-direction: column;
            text-align: center;
          }

          .left-column .team-member {
            flex-direction: column;
          }

          .team-members {
            gap: 30px;
          }

          .team-member:hover {
            transform: scale(1.05);
          }

          .team-member:hover .member-photo {
            width: 100px;
            height: 100px;
            transform: rotate(0deg);
          }
        }

        @media (max-width: 768px) {
          .leadership-section {
            padding: 60px 16px;
          }

          .main-title {
            font-size: 28px;
          }

          .member-photo {
            width: 70px;
            height: 70px;
          }

          .team-member:hover .member-photo {
            width: 90px;
            height: 90px;
          }

          .member-name {
            font-size: 14px;
          }

          .member-bio {
            font-size: 12px;
          }

          .team-member:hover {
            transform: scale(1.03);
          }
        }
      `}</style>

      <section id="leadership" className="leadership-section">
        <div className="leadership-container">
          <div className="leadership-grid">
            
            {/* Left Column: CalcGuard Leaders */}
            <div className="column left-column">
              <div className="team-members">
                
                <div 
                  className="team-member"
                  onMouseEnter={() => setHoveredMember('tim')}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <img 
                    src="/images/tim.png" 
                    alt="Tim Sargent" 
                    className="member-photo"
                  />
                  <div className="member-info">
                    <h3 className="member-name">TIM SARGENT, CEO</h3>
                    <p className="member-bio">
                      Founded QSG, sold to IHS Markit; led wall street quant, 
                      index and trading groups. Expert in quantitative finance 
                      and market structure with 20+ years experience.
                    </p>
                    <a href="#" className="linkedin-link">LinkedIn Profile</a>
                  </div>
                  <div className="expansion-indicator"></div>
                </div>

                <div 
                  className="team-member"
                  onMouseEnter={() => setHoveredMember('jim')}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <img 
                    src="/images/jim.png" 
                    alt="Jim Northey" 
                    className="member-photo"
                  />
                  <div className="member-info">
                    <h3 className="member-name">JIM NORTHEY, CTO</h3>
                    <p className="member-bio">
                      FIX co-chair, 3 ISO committees; ex-Itiviti 
                      SVP; LaSalle co-founder. Leading expert in 
                      financial protocols and trading infrastructure.
                    </p>
                    <a href="#" className="linkedin-link">LinkedIn Profile</a>
                  </div>
                  <div className="expansion-indicator"></div>
                </div>

                <div 
                  className="team-member"
                  onMouseEnter={() => setHoveredMember('enrico')}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <img 
                    src="/images/enrico.png" 
                    alt="Enrico Cacciatore" 
                    className="member-photo"
                  />
                  <div className="member-info">
                    <h3 className="member-name">ENRICO CACCIATORE, CPO</h3>
                    <p className="member-bio">
                      Ex-Voya quant trading and market 
                      structure analytics. Specialist in algorithmic 
                      trading strategies and execution optimization.
                    </p>
                    <a href="#" className="https://www.linkedin.com/in/enricojcacciatore/">LinkedIn Profile</a>
                  </div>
                  <div className="expansion-indicator"></div>
                </div>
              </div>

              <div className="section-labels">
                <div className="section-label">CalcGuard Leaders</div>
                <img 
                  src="/images/CG_Leadership.png" 
                  alt="CalcGuard Leadership" 
                  className="leadership-logo"
                />
              </div>
            </div>

            {/* Center Column: Main Text */}
            <div className="column center-column">
              <div>
                <p className="subtitle">
                  Focus, Expertise & Accountability
                </p>
                
                <h2 className="main-title">
                  A LEADERSHIP<br />
                  TRIPLE THREAT
                </h2>
                
                <div className="red-line"></div>
                
                <p className="description">
                  We've engineered a leadership triumvirate - combining CalcGuard 
                  management, industry advisors and an investment management advisory 
                  council (IMAC) - to ensure broad perspectives and proactively 
                  eliminate blind spots.
                </p>
                
                <p className="description">
                  The IMAC unifies industry voices to advance transparency, standardize 
                  platform definitions, align integration priorities and drive innovation.
                </p>
              </div>
            </div>

            {/* Right Column: Industry Advisors */}
            <div className="column right-column">
              <div className="team-members">
                
                <div 
                  className="team-member"
                  onMouseEnter={() => setHoveredMember('jeff')}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <img 
                    src="/images/jeff.png" 
                    alt="Jeff Estella" 
                    className="member-photo"
                  />
                  <div className="member-info">
                    <h3 className="member-name">JEFF ESTELLA</h3>
                    <p className="member-bio">
                      Senior trading roles at MFS; now 
                      advises finance industry. Deep expertise in 
                      institutional trading and portfolio management.
                    </p>
                    <a href="#" className="linkedin-link">LinkedIn Profile</a>
                  </div>
                  <div className="expansion-indicator"></div>
                </div>

                <div 
                  className="team-member"
                  onMouseEnter={() => setHoveredMember('bill')}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <img 
                    src="/images/bill.png" 
                    alt="Bill Hartnett" 
                    className="member-photo"
                  />
                  <div className="member-info">
                    <h3 className="member-name">BILL HARTNETT</h3>
                    <p className="member-bio">
                      Ex-Citi fintech investor with deep expertise in 
                      capital markets digitization. Leading voice in 
                      financial technology innovation and transformation.
                    </p>
                    <a href="#" className="linkedin-link">LinkedIn Profile</a>
                  </div>
                  <div className="expansion-indicator"></div>
                </div>

                <div 
                  className="team-member"
                  onMouseEnter={() => setHoveredMember('mark')}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <img 
                    src="/images/mark.png" 
                    alt="Mark Schaedel" 
                    className="member-photo"
                  />
                  <div className="member-info">
                    <h3 className="member-name">MARK SCHAEDEL</h3>
                    <p className="member-bio">
                      Leads DataBP; 13 years at NYSE, IHS Markit, 
                      COBA co-founder. Expert in market data, analytics 
                      and financial infrastructure development.
                    </p>
                    <a href="#" className="linkedin-link">LinkedIn Profile</a>
                  </div>
                  <div className="expansion-indicator"></div>
                </div>
              </div>

              <div className="section-labels">
                <div className="section-label">Industry Advisors</div>
                <img 
                  src="/images/Industry_Leadership.png" 
                  alt="Industry Leadership" 
                  className="leadership-logo"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default LeadershipSection