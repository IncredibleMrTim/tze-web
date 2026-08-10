'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LOGO_IMG } from '../lib/theme'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isContact = pathname === '/contact'
  const solid = scrolled || isContact

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    if (isContact) setScrolled(true)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isContact])

  const navLinkClass = `font-display font-semibold text-[13px] tracking-[0.12em] uppercase no-underline transition-colors duration-200 ${
    solid ? 'text-ep-muted hover:text-ep-blue' : 'text-white/82 hover:text-white'
  }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] transition-all duration-[350ms] ease-in-out ${
        solid ? 'border-b border-ep-blue/12 bg-white/96' : 'border-b border-white/15 bg-black/25'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-[32px] h-[68px] flex items-center justify-between">
        <Link href="/" className="no-underline flex items-center">
          <img
            src={LOGO_IMG}
            alt="Tauranga Electroplaters"
            className={`h-[42px] w-auto object-contain ${solid ? '' : 'brightness-0 invert'}`}
          />
        </Link>

        <nav className="hidden nav:flex gap-[32px] items-center">
          {navLinks.map(link =>
            link.href.startsWith('/#') ? (
              <a key={link.label} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ),
          )}
          <Link
            href="/contact"
            className="font-display font-bold text-[13px] tracking-[0.1em] uppercase text-white bg-ep-blue hover:bg-ep-blue-mid px-[20px] py-[9px] no-underline transition-colors duration-200"
          >
            Contact Us
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-transparent border-none cursor-pointer p-[8px] flex nav:hidden"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className={`w-[22px] h-[2px] transition-all duration-200 ${solid ? 'bg-ep-text' : 'bg-white'} ${
                i < 2 ? 'mb-[5px]' : 'mb-0'
              } ${
                menuOpen && i === 0
                  ? 'rotate-45 translate-y-[7px]'
                  : menuOpen && i === 2
                    ? '-rotate-45 -translate-y-[7px]'
                    : ''
              } ${menuOpen && i === 1 ? 'opacity-0' : 'opacity-100'}`}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div className="bg-ep-card border-t border-ep-blue/12 pt-[16px] px-[32px] pb-[24px]">
          {navLinks.map(link =>
            link.href.startsWith('/#') ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-display font-semibold text-[15px] tracking-[0.12em] uppercase text-ep-muted no-underline py-[10px] border-b border-ep-blue/7"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-display font-semibold text-[15px] tracking-[0.12em] uppercase text-ep-muted no-underline py-[10px] border-b border-ep-blue/7"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      )}
    </header>
  )
}
