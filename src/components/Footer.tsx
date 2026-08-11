"use client";

import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const linkClass =
  "font-display font-semibold text-[12px] tracking-[0.12em] uppercase text-ep-dim hover:text-ep-blue no-underline transition-colors duration-200";

export default function Footer() {
  return (
    <footer className="border-t border-ep-blue/12 py-4 px-8 bg-ep-card max-w-300 mx-auto rounded-t-md">
      <div className="max-w-300 mx-auto flex justify-between items-center flex-wrap gap-4">
        <Link href="/" className="no-underline">
          <Logo className="h-20 w-auto" />
        </Link>
        <span className="text-[13px] text-ep-dim">
          Tauranga Electroplaters · 9/61 Maleme Street, Greerton, Tauranga, New
          Zealand
        </span>
        <div className="flex gap-6">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
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
  );
}
