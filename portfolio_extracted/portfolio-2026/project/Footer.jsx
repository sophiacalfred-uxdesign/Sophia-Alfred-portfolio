// Footer.jsx — Sophia Alfred Portfolio Footer
Object.assign(window, { EWFooter });

function EWFooter() {
  return (
    <footer style={{
      background: '#1A2E1A',
      boxShadow: '0px 4px 4px rgba(0,0,0,0.25)'
    }}>
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '40px 36px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 24
      }}>
        {/* Logo */}
        <img src="assets/sophia-logo-white.png" alt="sophia alfred" style={{ height: 32, display: 'block', opacity: 0.9 }} />

        {/* Link columns */}
        <div style={{ display: 'flex', gap: 48 }}>
          {[
          { heading: 'say hi', links: ['LinkedIn', 'Email', 'Resume'] },
          { heading: 'pages', links: ['Case Studies', 'About', 'Fun'] }].          map((col) =>
          <div key={col.heading} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{
              fontWeight: 500,
              fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em',
              textTransform: 'lowercase', marginBottom: 2, fontFamily: "Manrope"
            }}>{col.heading}</div>
              {col.links.map((l) =>
            <a key={l} href="#" style={{
              fontFamily: 'Manrope, sans-serif', fontSize: 13,
              color: 'rgba(255,255,255,0.35)', letterSpacing: '0.01em', textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.85)'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.35)'}>
              {l}</a>
            )}
            </div>
          )}
        </div>
      </div>
    </footer>);

}