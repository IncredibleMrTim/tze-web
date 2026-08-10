"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solid = scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = `font-display font-semibold text-[13px] tracking-[0.12em] uppercase no-underline transition-colors duration-200 ${
    solid
      ? "text-ep-muted hover:text-ep-blue"
      : "text-white/82 hover:text-white"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-350 ease-in-out ${
        solid
          ? "border-b border-ep-blue/12 bg-white/90 shadow-md"
          : "border-b border-white/15 bg-black/25"
      }`}
    >
      <div className="max-w-300 mx-auto px-8 h-17 flex items-center justify-between">
        <Link href="/" className="no-underline flex items-center">
          <Logo className="h-12 w-auto" white={!solid} />
        </Link>

        <nav className="hidden nav:flex gap-8 items-center">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
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
            className="font-display font-bold text-[13px] tracking-widest uppercase text-white bg-ep-blue hover:bg-ep-blue-mid px-5 py-2.25 no-underline transition-colors duration-200"
          >
            Contact Us
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-transparent border-none cursor-pointer p-2 flex nav:hidden"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-5.5 h-0.5 transition-all duration-200 ${solid ? "bg-ep-text" : "bg-white"} ${
                i < 2 ? "mb-1.25" : "mb-0"
              } ${
                menuOpen && i === 0
                  ? "rotate-45 translate-y-1.75"
                  : menuOpen && i === 2
                    ? "-rotate-45 -translate-y-1.75"
                    : ""
              } ${menuOpen && i === 1 ? "opacity-0" : "opacity-100"}`}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div className="bg-ep-card border-t border-ep-blue/12 pt-4 px-8 pb-6">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-display font-semibold text-[15px] tracking-[0.12em] uppercase text-ep-muted no-underline py-2.5 border-b border-ep-blue/7"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-display font-semibold text-[15px] tracking-[0.12em] uppercase text-ep-muted no-underline py-2.5 border-b border-ep-blue/7"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      )}
    </header>
  );
}
