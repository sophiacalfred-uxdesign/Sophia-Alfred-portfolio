// ProjectCard.jsx — Sophia Alfred Portfolio Project Card
Object.assign(window, { ProjectCard });

function ProjectCard({ title, meta, description, image, video, bgColor, onClick, children, stretchMedia }) {
  const [hovered, setHovered] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (!videoRef.current) return;
    if (hovered) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered]);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', flexDirection: 'column', gap: 10, cursor: onClick ? 'pointer' : 'default' }}>
      
      <div style={{
        width: '100%',
        ...(stretchMedia ? { minHeight: 560 } : { aspectRatio: '4/3' }),
        borderRadius: 2, overflow: 'hidden',
        background: bgColor || '#F0EEEA', position: 'relative'
      }}>
        {video &&
        <video ref={videoRef} src={video} muted loop playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
        }
        {image && !video &&
        <img src={image} alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        }
        {children}
      </div>
      {meta && <div style={{

        fontSize: 11, lineHeight: '18px', letterSpacing: '0.01em',
        color: '#7A7A85', fontFamily: "Manrope", fontWeight: "600"
      }}>{meta}</div>}
      <div style={{
        fontFamily: "'Self Modern', serif", fontWeight: 300,
        fontSize: 18, lineHeight: '22px', letterSpacing: '0.01em',
        color: hovered ? '#A8A8B3' : '#5A5A65',
        transition: 'color 0.2s'
      }}>{title}</div>
      {description && <div style={{
        fontWeight: 300,
        fontSize: 13, lineHeight: '17px', letterSpacing: '0.01em',
        color: '#7A7A85', fontFamily: "Manrope"
      }}>{description}</div>}
    </div>);

}