'use client'

import Link from 'next/link'
import { LOGO_IMG, DIM, BLUE, BORDER, CARD } from '../lib/theme'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${BORDER}`, padding: '36px 32px', backgroundColor: CARD }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
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
              <Link key={link.label} href={link.href}
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: DIM, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                onMouseLeave={e => (e.currentTarget.style.color = DIM)}
              >{link.label}</Link>
            )
          ))}
        </div>
      </div>
    </footer>
  )
}
