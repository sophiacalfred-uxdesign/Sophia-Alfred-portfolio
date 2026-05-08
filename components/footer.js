function EWFooter({ basePath = '' }) {
  return (
    <footer style={{
      background: '#1A2E1A',
      boxShadow: '0px 4px 4px rgba(0,0,0,0.25)'
    }}>
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '40px 36px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 24
      }}>
        <img src={basePath + 'assets/sophia-logo-white.png'} alt="sophia alfred"
          style={{ height: 32, display: 'block', opacity: 0.9 }} />

        <div style={{ display: 'flex', gap: 48 }}>
          {[
            { heading: 'say hi', links: [
              { label: 'LinkedIn',    href: 'https://linkedin.com/in/sophiaalfred' },
              { label: 'Email',       href: 'mailto:sophiacalfred@gmail.com' },
              { label: 'Resume',      href: basePath + 'assets/sophia-resume.pdf', external: true },
            ]},
            { heading: 'pages', links: [
              { label: 'Case Studies', href: basePath + 'index.html' },
              { label: 'About',        href: basePath + 'about.html' },
            ]},
          ].map(col =>
            <div key={col.heading} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 500, fontSize: 11,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.08em',
                textTransform: 'lowercase', marginBottom: 2,
              }}>{col.heading}</div>
              {col.links.map(l =>
                <a key={l.label} href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  style={{
                    fontFamily: 'Manrope, sans-serif', fontSize: 13,
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.01em', textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}>
                  {l.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div style={{
        padding: '0 36px 24px',
        fontFamily: 'Manrope, sans-serif',
        fontSize: 11,
        color: 'rgba(255,255,255,0.2)',
        letterSpacing: '0.02em',
      }}>
        © 2026 Sophia Alfred
      </div>
    </footer>
  );
}
