// Nav.jsx — Sophia Alfred Portfolio Navigation
Object.assign(window, { EWNav });

function EWNav({ activePage = 'work' }) {
  return (
    <nav style={{
      width: '100%', height: 56, background: '#F4EFE4',
      borderBottom: '1px solid rgba(28,28,34,0.07)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 24px',
      position: 'sticky', top: 0, zIndex: 100,
      boxSizing: 'border-box'
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src="assets/sophia-logo.png" alt="sophia alfred" style={{ height: 28, display: 'block' }} />
      </a>
      <div style={{ display: 'flex', gap: 24 }}>
        {[['work', 'Case Studies'], ['about', 'About'], ['resume', 'Resume']].map(([id, label]) =>
        <a key={id} href="#"
        style={{
          fontWeight: 500,
          letterSpacing: '0.01em', textDecoration: 'none',
          color: activePage === id ? '#1C1C22' : '#7A7A85',
          transition: 'color 0.2s', fontFamily: "Manrope", fontSize: "14px"
        }}
        onMouseEnter={(e) => e.target.style.color = '#1C1C22'}
        onMouseLeave={(e) => e.target.style.color = activePage === id ? '#1C1C22' : '#7A7A85'}>
          {label}</a>
        )}
      </div>
    </nav>);

}