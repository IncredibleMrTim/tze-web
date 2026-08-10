import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router'
import { LOGO_IMG, TEXT, MUTED, BLUE, BLUE_MID, BLUE_LIGHT, BORDER, BORDER_SUBTLE, DIM, CARD } from '../lib/theme'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/contact' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isContact = location.pathname === '/contact'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    // On contact page always show solid nav
    if (isContact) setScrolled(true)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isContact])

  const navTextColor = (scrolled || isContact) ? MUTED : 'rgba(255,255,255,0.82)'
  const navHoverColor = (scrolled || isContact) ? BLUE : '#fff'

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#f4f6f9', color: TEXT, minHeight: '100vh' }}>
      {/* NAV */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        borderBottom: (scrolled || isContact) ? `1px solid ${BORDER}` : '1px solid rgba(255,255,255,0.15)',
        backgroundColor: (scrolled || isContact) ? 'rgba(255,255,255,0.96)' : 'rgba(0,0,0,0.25)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.35s ease',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src={LOGO_IMG}
              alt="Tauranga Electroplaters"
              style={{ height: 42, width: 'auto', objectFit: 'contain', filter: (scrolled || isContact) ? 'none' : 'brightness(0) invert(1)' }}
            />
          </Link>

          <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              link.href.startsWith('/#') ? (
                <a key={link.label} href={link.href}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: navTextColor, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = navHoverColor)}
                  onMouseLeave={e => (e.currentTarget.style.color = navTextColor)}
                >{link.label}</a>
              ) : (
                <Link key={link.label} to={link.href}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: navTextColor, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = navHoverColor)}
                  onMouseLeave={e => (e.currentTarget.style.color = navTextColor)}
                >{link.label}</Link>
              )
            ))}
            <Link to="/contact"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', backgroundColor: BLUE, padding: '9px 20px', textDecoration: 'none', transition: 'background-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = BLUE_MID)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = BLUE)}
            >Contact Us</Link>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
            className="mobile-menu-btn" aria-label="Toggle menu">
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: 22, height: 2,
                backgroundColor: (scrolled || isContact) ? TEXT : '#fff',
                marginBottom: i < 2 ? 5 : 0, transition: 'all 0.2s',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translateY(7px)' : menuOpen && i === 2 ? 'rotate(-45deg) translateY(-7px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div style={{ backgroundColor: CARD, borderTop: `1px solid ${BORDER}`, padding: '16px 32px 24px' }}>
            {navLinks.map(link => (
              link.href.startsWith('/#') ? (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                  style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, textDecoration: 'none', padding: '10px 0', borderBottom: `1px solid ${BORDER_SUBTLE}` }}
                >{link.label}</a>
              ) : (
                <Link key={link.label} to={link.href} onClick={() => setMenuOpen(false)}
                  style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, textDecoration: 'none', padding: '10px 0', borderBottom: `1px solid ${BORDER_SUBTLE}` }}
                >{link.label}</Link>
              )
            ))}
          </div>
        )}
      </header>

      <Outlet />

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: '36px 32px', backgroundColor: CARD }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={LOGO_IMG} alt="Tauranga Electroplaters" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          </Link>
          <span style={{ fontSize: 13, color: DIM }}>Tauranga Electroplaters · 9/61 Maleme Street, Greerton, Tauranga, New Zealand</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {navLinks.map(link => (
              link.href.startsWith('/#') ? (
                <a key={link.label} href={link.href}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: DIM, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                  onMouseLeave={e => (e.currentTarget.style.color = DIM)}
                >{link.label}</a>
              ) : (
                <Link key={link.label} to={link.href}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: DIM, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                  onMouseLeave={e => (e.currentTarget.style.color = DIM)}
                >{link.label}</Link>
              )
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  )
}
