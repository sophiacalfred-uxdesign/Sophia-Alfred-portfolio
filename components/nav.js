function EWNav({ activePage = 'work', basePath = '' }) {
  return (
    <nav style={{
      width: '100%', height: 56, background: '#F4EFE4',
      borderBottom: '1px solid rgba(28,28,34,0.07)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 24px',
      position: 'sticky', top: 0, zIndex: 100,
      boxSizing: 'border-box'
    }}>
      <a href={basePath + 'index.html'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={basePath + 'assets/sophia-logo.png'} alt="sophia alfred" style={{ height: 28, display: 'block' }} />
      </a>
      <div style={{ display: 'flex', gap: 24 }}>
        {[
          ['work',   'Case Studies', basePath + 'index.html'],
          ['about',  'About',        basePath + 'about.html'],
          ['resume', 'Resume',       basePath + 'assets/sophia-resume.pdf'],
        ].map(([id, label, href]) =>
          <a key={id} href={href}
            target={id === 'resume' ? '_blank' : undefined}
            rel={id === 'resume' ? 'noopener noreferrer' : undefined}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 500, fontSize: 14,
              letterSpacing: '0.01em', textDecoration: 'none',
              color: activePage === id ? '#1C1C22' : '#7A7A85',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#1C1C22'}
            onMouseLeave={e => e.target.style.color = activePage === id ? '#1C1C22' : '#7A7A85'}>
            {label}
          </a>
        )}
      </div>
    </nav>
  );
}
