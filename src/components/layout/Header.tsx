'use client'

const Header = () => {
  const navItems = [
    { name: 'HOME', href: '#home', active: true },
    { name: 'WHAT WE DO', href: '#what-we-do' },
    { name: 'CHALLENGE', href: '#challenge' },
    { name: 'PLATFORM', href: '#platform' },
    { name: 'INEFFICIENCIES', href: '#inefficiencies' },
    { name: 'TRINITY', href: '#trinity' },
    { name: 'EVIDENCE', href: '#evidence' },
    { name: 'DISCOVERY', href: '#discovery' },
    { name: 'ANALYTICS', href: '#analytics' },
    { name: 'AI', href: '#ai' },
    { name: 'EDGE', href: '#edge' },
    { name: 'LEADERSHIP', href: '#leadership' },
    { name: 'DISCLAIMER', href: '#disclaimer' }
  ]

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '3px solid white',
      zIndex: 1000,
      padding: '12px 24px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Left Side Navigation Links */}
        <nav style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              style={{
                color: item.active ? '#ef4444' : '#64748b',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#ef4444'}
              onMouseOut={(e) => e.currentTarget.style.color = item.active ? '#ef4444' : '#64748b'}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side Logo */}
        <a 
          href="#home"
          style={{
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img 
            src="/images/CG_1.png" 
            alt="CalcGuard Logo" 
            style={{
              height: '32px',
              width: 'auto'
            }}
          />
        </a>
      </div>
    </header>
  )
}

export default Header