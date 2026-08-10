'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HERO_IMG, GOLD_HUB_IMG } from '../lib/theme'

const processSteps = [
  {
    title: 'What Is Electroplating?',
    desc: 'Depositing material onto steel alloys, copper or brass using electricity, improving wear resistance, corrosion protection or aesthetic appeal.',
  },
  {
    title: 'How Does It Work?',
    desc: 'Electrical current passes through an electrolytic solution between an anode and cathode. The zinc anode dissolves and deposits onto the part (cathode). Surface preparation is critical — electrical current, time, chemical balance all play a role.',
  },
  {
    title: 'The Reaction',
    desc: 'Zinc ions in solution are driven onto the substrate by the applied current. Controlling current density and bath chemistry ensures a uniform, adherent deposit every run.',
  },
  {
    title: 'Here Comes The Colour',
    desc: 'After plating, parts are passivated to lock in corrosion resistance. Options include Blue, Clear, Natural, Silver and Trivalent Passivate — achieving up to 120 hours salt spray resistance.',
  },
  {
    title: 'Passivates',
    desc: 'Gold or Yellow Passivate and Trivalent (cr3) or Hexavalent Chromium (cr6) variants available. The finish is selected to suit the application and customer requirements.',
  },
]

export default function Home() {
  return (
    <>
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Zinc-plated steel flanges and hubs"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,28,58,0.82)_0%,rgba(27,63,114,0.52)_50%,rgba(0,0,0,0.08)_100%)]" />

        <div className="relative max-w-[1200px] mx-auto px-[32px] h-full flex flex-col justify-end pb-[88px]">
          <div className="inline-flex items-center gap-[10px] mb-[24px]">
            <div className="w-[32px] h-[2px] bg-ep-accent" />
            <span className="font-display font-semibold text-[12px] tracking-[0.22em] uppercase text-ep-accent">
              Tauranga Electroplaters
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[clamp(48px,9vw,108px)] leading-[0.93] tracking-[-0.01em] uppercase max-w-[820px] mb-[28px] text-white">
            Zinc<br />
            <span className="text-ep-accent">Electro</span>plating<br />
            Specialist
          </h1>

          <p className="text-[18px] leading-[1.7] text-white/80 max-w-[520px] mb-[44px] italic">
            "Excellence is not a destination; Its a continuous journey that never ends"
          </p>

          <div className="flex gap-[14px] flex-wrap">
            <Link
              href="/contact"
              className="font-display font-bold text-[14px] tracking-[0.12em] uppercase text-white bg-ep-blue hover:bg-ep-blue-mid px-[32px] py-[14px] no-underline transition-colors duration-200"
            >
              Contact Us
            </Link>
            <a
              href="#about"
              className="font-display font-bold text-[14px] tracking-[0.12em] uppercase text-white border border-white/40 hover:border-white hover:bg-white/10 px-[32px] py-[14px] no-underline transition-colors duration-200"
            >
              About Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ep-blue py-[48px] px-[32px]">
        <div className="max-w-[1200px] mx-auto flex items-center gap-[24px] flex-wrap">
          <span className="font-display font-bold text-[13px] tracking-[0.2em] uppercase text-ep-accent flex-shrink-0">
            What we believe in
          </span>
          <div className="hidden nav:block w-px h-[32px] bg-white/20 flex-shrink-0" />
          <p className="text-[17px] leading-[1.6] text-white/85 italic">
            "Excellence is not a destination; Its a continuous journey that never ends"
          </p>
        </div>
      </section>

      <section id="about" className="py-[120px] px-[32px] bg-ep-card">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 nav:grid-cols-2 gap-[40px] nav:gap-[80px] items-center">
            <div>
              <SectionLabel>About Us</SectionLabel>
              <h2 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] leading-[0.95] uppercase mb-[16px] text-ep-text">
                About Tauranga<br /><span className="text-ep-blue">Electroplaters</span>
              </h2>

              <blockquote className="mb-[28px] py-[16px] px-[20px] border-l-[3px] border-ep-blue bg-ep-blue-light">
                <p className="text-[17px] leading-[1.6] text-ep-text italic mb-[6px]">"Quality isn&apos;t an act it&apos;s a habbit"</p>
                <cite className="font-display text-[12px] tracking-[0.12em] uppercase text-ep-blue-mid not-italic">Aristotle 384 B.C.</cite>
              </blockquote>

              <h3 className="font-display font-bold text-[15px] uppercase tracking-[0.06em] text-ep-blue mb-[10px]">The History</h3>
              <p className="text-[15px] leading-[1.85] text-ep-muted mb-[24px]">
                Realised in 1999 by Rob Jennings Developments as a solution to guarantee quality and delivery — establishing a Bay of Plenty alternative to Auckland services.
              </p>

              <h3 className="font-display font-bold text-[15px] uppercase tracking-[0.06em] text-ep-blue mb-[10px]">What we can do to improve it</h3>
              <p className="text-[15px] leading-[1.85] text-ep-muted mb-[20px]">
                Co-owners Matt Smart and Jonathan Moynan took over in May 2018, bringing 50 years of combined mechanical engineering, management, practical and operational experience.
              </p>
              <p className="text-[15px] leading-[1.85] text-ep-muted mb-[36px]">
                Getting things right initially — electrical current, time, chemical balance, surface preparation — paired with timely turnaround.
              </p>

              <Link
                href="/contact"
                className="font-display font-bold text-[13px] tracking-[0.12em] uppercase text-ep-blue no-underline border-b-2 border-ep-blue-light hover:border-ep-blue pb-[3px] transition-colors duration-200"
              >
                Contact Us →
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -top-[12px] -right-[12px] w-full h-full border-2 border-ep-blue-light pointer-events-none" />
              <img src={GOLD_HUB_IMG} alt="Gold plated hub components" className="w-full h-[460px] object-cover block relative" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ep-section-alt py-[120px] px-[32px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 nav:grid-cols-2 gap-[40px] nav:gap-[80px] items-center">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] leading-[0.95] uppercase mb-[28px] text-ep-text">
                Electroplating
              </h2>
              <p className="text-[16px] leading-[1.85] text-ep-muted mb-[36px]">
                Depositing material onto steel alloys, copper or brass using electricity — improving wear resistance, corrosion protection or aesthetic appeal.
              </p>
              <a
                href="#process"
                className="font-display font-bold text-[13px] tracking-[0.12em] uppercase text-white bg-ep-blue hover:bg-ep-blue-mid px-[28px] py-[12px] no-underline inline-block transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
            <div className="relative">
              <img src={HERO_IMG} alt="Zinc-plated components" className="w-full h-[360px] object-cover block" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top_right,rgba(27,63,114,0.2),transparent)]" />
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-[120px] px-[32px] bg-ep-card">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>Process</SectionLabel>
          <div className="flex justify-between items-end mb-[56px] flex-wrap gap-[24px]">
            <h2 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] leading-[0.95] uppercase text-ep-text">
              What Process Can We Do<br /><span className="text-ep-blue">At Tauranga Electroplaters</span>
            </h2>
            <p className="text-[15px] leading-[1.75] text-ep-muted max-w-[320px]">
              All you need to know about zinc electroplating — where it came from and how it works.
            </p>
          </div>

          <div className="mb-[48px] py-[28px] px-[32px] bg-ep-section-alt border-l-4 border-ep-blue">
            <h3 className="font-display font-bold text-[15px] uppercase tracking-[0.08em] text-ep-blue mb-[10px]">Where Did It Come From</h3>
            <p className="text-[15px] leading-[1.85] text-ep-muted">
              Luigi Valentino Brugnatelli first electroplated gold in 1805 using Alessandro Volta&apos;s voltaic pile. The patent was issued in 1840, and the process evolved across Europe into what Tauranga Electroplaters uses today.
            </p>
          </div>

          <div className="flex flex-col">
            {processSteps.map((step, i) => <ProcessStep key={step.title} step={step} num={i + 1} />)}
          </div>
        </div>
      </section>
    </>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[10px] mb-[20px]">
      <div className="w-[24px] h-[2px] bg-ep-blue-mid" />
      <span className="font-display font-bold text-[11px] tracking-[0.2em] uppercase text-ep-blue-mid">
        {children}
      </span>
    </div>
  )
}

type ProcessStepData = { title: string; desc: string }

function ProcessStep({ step, num }: { step: ProcessStepData; num: number }) {
  const [open, setOpen] = useState(num === 1)
  return (
    <div className="border-b border-ep-blue/12">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-[20px] bg-transparent border-none cursor-pointer text-left"
      >
        <div className="flex items-center gap-[20px]">
          <span className={`font-display font-bold text-[12px] tracking-[0.1em] w-[24px] flex-shrink-0 ${open ? 'text-ep-blue' : 'text-ep-dim'}`}>0{num}</span>
          <span className={`font-display font-bold text-[20px] uppercase tracking-[0.03em] ${open ? 'text-ep-blue' : 'text-ep-text'}`}>{step.title}</span>
        </div>
        <span className={`text-[20px] leading-none flex-shrink-0 ml-[16px] ${open ? 'text-ep-blue' : 'text-ep-dim'}`}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p className="text-[15px] leading-[1.85] text-ep-muted pb-[24px] pl-[44px]">
          {step.desc}
        </p>
      )}
    </div>
  )
}
