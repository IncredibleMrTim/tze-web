'use client'

import Link from 'next/link'
import { LOGO_IMG } from '../lib/theme'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/contact' },
]

const linkClass =
  'font-display font-semibold text-[12px] tracking-[0.12em] uppercase text-ep-dim hover:text-ep-blue no-underline transition-colors duration-200'

export default function Footer() {
  return (
    <footer className="border-t border-ep-blue/12 py-[36px] px-[32px] bg-ep-card">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-[16px]">
        <Link href="/" className="no-underline">
          <img src={LOGO_IMG} alt="Tauranga Electroplaters" className="h-[36px] w-auto object-contain" />
        </Link>
        <span className="text-[13px] text-ep-dim">
          Tauranga Electroplaters · 9/61 Maleme Street, Greerton, Tauranga, New Zealand
        </span>
        <div className="flex gap-[24px]">
          {navLinks.map(link =>
            link.href.startsWith('/#') ? (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </footer>
  )
}
