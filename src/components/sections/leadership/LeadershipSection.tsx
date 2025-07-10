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
          justify-content: flex-start;
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

        .column-title {
          font-size: 14px;
          color: #ef4444;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          margin-bottom: 40px;
          font-family: 'Montserrat', sans-serif;
        }

        .team-members {
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .team-member {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 24px;
          border-radius: 16px;
          position: relative;
          z-index: 1;
          border: 2px solid transparent;
          min-height: 140px;
        }

        .left-column .team-member {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
          flex-direction: row-reverse;
          justify-content: flex-end;
        }

        .right-column .team-member {
          border-color: #1e293b;
          background: rgba(30, 41, 59, 0.05);
        }

        .team-member:hover {
          transform: scale(1.05);
          z-index: 10;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          min-height: 160px;
        }

        .left-column .team-member:hover {
          background: linear-gradient(135deg, #fef7f7 0%, #fff5f5 100%);
          border-color: #dc2626;
          box-shadow: 0 20px 40px rgba(239, 68, 68, 0.2);
        }

        .right-column .team-member:hover {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-color: #0f172a;
          box-shadow: 0 20px 40px rgba(30, 41, 59, 0.2);
        }

        .member-photo {
          width: 90px;
          height: 90px;
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
          border-radius: 16px;
          border-color: #ef4444;
          box-shadow: 0 15px 35px rgba(239, 68, 68, 0.3);
        }

        .member-info {
          flex-grow: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 100px;
        }

        .team-member:hover .member-info {
          transform: translateY(-2px);
        }

        .member-name {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
          font-family: 'Montserrat', sans-serif;
          transition: all 0.3s ease;
        }

        .team-member:hover .member-name {
          color: #ef4444;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .member-bio {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 10px;
          font-family: 'Raleway', sans-serif;
          transition: all 0.3s ease;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }

        .team-member:hover .member-bio {
          -webkit-line-clamp: unset;
          max-height: none;
          overflow: visible;
          color: #374151;
          font-size: 14px;
          line-height: 1.6;
        }

        .linkedin-link {
          font-size: 14px;
          color: #0366d6;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          opacity: 0.8;
          margin-top: auto;
        }

        .linkedin-link:hover {
          color: #0256cc;
          text-decoration: underline;
        }

        .team-member:hover .linkedin-link {
          font-size: 16px;
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
            align-items: center;
          }

          .left-column .team-member {
            flex-direction: column;
          }

          .team-members {
            gap: 30px;
          }
        }
      `}</style>

      <section id="leadership" className="leadership-section">
        <div className="leadership-container">
          <div className="leadership-grid">
            {/* LEFT */}
            <div className="column left-column">
              <h3 className="column-title">CalcGuard Leaders</h3>
              <div className="team-members">
                {[
                  {
                    name: 'TIM SARGENT, CEO',
                    image: '/images/tim.png',
                    bio: 'Founded QSG, sold to IHS Markit; led wall street quant, index and trading groups. Expert in quantitative finance and market structure with 20+ years experience building scalable financial technology solutions.',
                    link: 'https://www.linkedin.com/in/timothy-sargent-a300705/',
                  },
                  {
                    name: 'JIM NORTHEY, CTO',
                    image: '/images/jim.png',
                    bio: 'FIX co-chair, 3 ISO committees; ex-Itiviti SVP; LaSalle co-founder. Leading expert in financial protocols and trading infrastructure with deep expertise in market connectivity standards.',
                    link: 'https://www.linkedin.com/in/jimnorthey/',
                  },
                  {
                    name: 'ENRICO CACCIATORE, CPSO',
                    image: '/images/enrico.png',
                    bio: 'Ex-Voya quant trading and market structure analytics. Specialist in algorithmic trading strategies and execution optimization with extensive experience in institutional trading platforms.',
                    link: 'https://www.linkedin.com/in/enricojcacciatore/',
                  },
                ].map((member, i) => (
                  <div className="team-member" key={i}>
                    <img src={member.image} alt={member.name} className="member-photo" />
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-bio">{member.bio}</p>
                      <a href={member.link} target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER */}
            <div className="column center-column">
              <p className="subtitle">Focus, Expertise & Accountability</p>
              <h2 className="main-title">A LEADERSHIP<br />TRIPLE THREAT</h2>
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

            {/* RIGHT */}
            <div className="column right-column">
              <h3 className="column-title">Industry Advisors</h3>
              <div className="team-members">
                {[
                  {
                    name: 'JEFF ESTELLA',
                    image: '/images/jeff.png',
                    bio: 'Senior trading roles at MFS; now advises finance industry. Deep expertise in institutional trading and portfolio management with focus on execution quality and market structure optimization.',
                    link: 'https://www.linkedin.com/in/jeffreyestella/',
                  },
                  {
                    name: 'BILL HARTNETT',
                    image: '/images/bill.png',
                    bio: 'Ex-Citi fintech investor with deep expertise in capital markets digitization. Leading voice in financial technology innovation and transformation with extensive experience in venture capital and strategic investments.',
                    link: 'https://www.linkedin.com/in/bill-hartnett-937a813/',
                  },
                  {
                    name: 'MARK SCHAEDEL',
                    image: '/images/mark.png',
                    bio: 'Leads DataBP; 13 years at NYSE, IHS Markit, COBA co-founder. Expert in market data, analytics and financial infrastructure development with proven track record in building enterprise data solutions.',
                    link: 'https://www.linkedin.com/in/mschaedel/',
                  },
                ].map((member, i) => (
                  <div className="team-member" key={i}>
                    <img src={member.image} alt={member.name} className="member-photo" />
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-bio">{member.bio}</p>
                      <a href={member.link} target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeadershipSection
