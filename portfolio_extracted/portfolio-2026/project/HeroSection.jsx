// HeroSection.jsx — Sophia Alfred Portfolio Hero
Object.assign(window, { HeroSection });

function HeroSection() {
  const roles = [
    'Product Designer',
    'Visual Storyteller',
    'Information Architect',
    'Portrait Painter',
    'Cat Lover',
  ];

  const [roleIndex, setRoleIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: '100%',
      minHeight: 340,
      background: '#F4EFE4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '72px 36px 60px',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontFamily: "'Self Modern', serif", fontWeight: 400,
        fontSize: 'clamp(36px, 5vw, 64px)',
        lineHeight: 1.2,
        letterSpacing: '0.01em',
        color: '#1C1C22',
        margin: 0,
        maxWidth: 900,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'baseline',
        gap: '0 12px',
      }}>
        <span style={{ whiteSpace: 'nowrap' }}>Hi! I'm Sophia a</span>
        <span style={{
          color: '#046EEB',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
        }}>
          {roles[roleIndex]}
        </span>
      </h1>

      <p style={{
        fontFamily: "'Figtree', sans-serif",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '24px',
        letterSpacing: '0.01em',
        color: '#7A7A85',
        maxWidth: 520,
      }}>
        Product Design Intern @Cloudflare
      </p>
    </div>
  );
}
