'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HERO_IMG, GOLD_HUB_IMG, CARD, SECTION_ALT, TEXT, MUTED, BLUE, BLUE_MID, BLUE_LIGHT, BORDER, DIM } from '../lib/theme'

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
      <section style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
        <img
          src={HERO_IMG}
          alt="Zinc-plated steel flanges and hubs"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(12,28,58,0.82) 0%, rgba(27,63,114,0.52) 50%, rgba(0,0,0,0.08) 100%)' }} />

        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 88 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{ width: 32, height: 2, backgroundColor: '#7eb3f0' }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7eb3f0' }}>
              Tauranga Electroplaters
            </span>
          </div>

          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(48px, 9vw, 108px)', lineHeight: 0.93, letterSpacing: '-0.01em', textTransform: 'uppercase', maxWidth: 820, marginBottom: 28, color: '#fff' }}>
            Zinc<br />
            <span style={{ color: '#7eb3f0' }}>Electro</span>plating<br />
            Specialist
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', maxWidth: 520, marginBottom: 44, fontStyle: 'italic' }}>
            "Excellence is not a destination; Its a continuous journey that never ends"
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', backgroundColor: BLUE, padding: '14px 32px', textDecoration: 'none', transition: 'background-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = BLUE_MID)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = BLUE)}
            >Contact Us</Link>
            <a href="#about"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', padding: '14px 32px', textDecoration: 'none', transition: 'border-color 0.2s, background-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.backgroundColor = 'transparent' }}
            >About Us</a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: BLUE, padding: '48px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7eb3f0', flexShrink: 0 }}>What we believe in</span>
          <div style={{ width: 1, height: 32, backgroundColor: 'rgba(255,255,255,0.2)', flexShrink: 0 }} className="divider-line" />
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', margin: 0 }}>
            "Excellence is not a destination; Its a continuous journey that never ends"
          </p>
        </div>
      </section>

      <section id="about" style={{ padding: '120px 32px', backgroundColor: CARD }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col">
            <div>
              <SectionLabel>About Us</SectionLabel>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 0.95, textTransform: 'uppercase', marginBottom: 16, color: TEXT }}>
                About Tauranga<br /><span style={{ color: BLUE }}>Electroplaters</span>
              </h2>

              <blockquote style={{ margin: '0 0 28px', padding: '16px 20px', borderLeft: `3px solid ${BLUE}`, backgroundColor: BLUE_LIGHT }}>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: TEXT, fontStyle: 'italic', margin: '0 0 6px' }}>"Quality isn&apos;t an act it&apos;s a habbit"</p>
                <cite style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: BLUE_MID, fontStyle: 'normal' }}>Aristotle 384 B.C.</cite>
              </blockquote>

              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.06em', color: BLUE, marginBottom: 10 }}>The History</h3>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: MUTED, marginBottom: 24 }}>
                Realised in 1999 by Rob Jennings Developments as a solution to guarantee quality and delivery — establishing a Bay of Plenty alternative to Auckland services.
              </p>

              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.06em', color: BLUE, marginBottom: 10 }}>What we can do to improve it</h3>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: MUTED, marginBottom: 20 }}>
                Co-owners Matt Smart and Jonathan Moynan took over in May 2018, bringing 50 years of combined mechanical engineering, management, practical and operational experience.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: MUTED, marginBottom: 36 }}>
                Getting things right initially — electrical current, time, chemical balance, surface preparation — paired with timely turnaround.
              </p>

              <Link href="/contact"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: BLUE, textDecoration: 'none', borderBottom: `2px solid ${BLUE_LIGHT}`, paddingBottom: 3, transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = BLUE)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = BLUE_LIGHT)}
              >Contact Us →</Link>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: -12, right: -12, width: '100%', height: '100%', border: `2px solid ${BLUE_LIGHT}`, pointerEvents: 'none' }} />
              <img src={GOLD_HUB_IMG} alt="Gold plated hub components" style={{ width: '100%', height: 460, objectFit: 'cover', display: 'block', position: 'relative' }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: SECTION_ALT, padding: '120px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 0.95, textTransform: 'uppercase', marginBottom: 28, color: TEXT }}>
                Electroplating
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: MUTED, marginBottom: 36 }}>
                Depositing material onto steel alloys, copper or brass using electricity — improving wear resistance, corrosion protection or aesthetic appeal.
              </p>
              <a href="#process"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', backgroundColor: BLUE, padding: '12px 28px', textDecoration: 'none', display: 'inline-block', transition: 'background-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = BLUE_MID)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = BLUE)}
              >Learn More</a>
            </div>
            <div style={{ position: 'relative' }}>
              <img src={HERO_IMG} alt="Zinc-plated components" style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top right, rgba(27,63,114,0.2), transparent)' }} />
            </div>
          </div>
        </div>
      </section>

      <section id="process" style={{ padding: '120px 32px', backgroundColor: CARD }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>Process</SectionLabel>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 0.95, textTransform: 'uppercase', color: TEXT }}>
              What Process Can We Do<br /><span style={{ color: BLUE }}>At Tauranga Electroplaters</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: MUTED, maxWidth: 320 }}>
              All you need to know about zinc electroplating — where it came from and how it works.
            </p>
          </div>

          <div style={{ marginBottom: 48, padding: '28px 32px', backgroundColor: SECTION_ALT, borderLeft: `4px solid ${BLUE}` }}>
            <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, textTransform: 'uppercase', letterSpacing: '0.08em', color: BLUE, marginBottom: 10 }}>Where Did It Come From</h3>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: MUTED, margin: 0 }}>
              Luigi Valentino Brugnatelli first electroplated gold in 1805 using Alessandro Volta&apos;s voltaic pile. The patent was issued in 1840, and the process evolved across Europe into what Tauranga Electroplaters uses today.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {processSteps.map((step, i) => <ProcessStep key={step.title} step={step} num={i + 1} />)}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .divider-line { display: none; }
        }
      `}</style>
    </>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
      <div style={{ width: 24, height: 2, backgroundColor: BLUE_MID }} />
      <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: BLUE_MID }}>
        {children}
      </span>
    </div>
  )
}

type ProcessStepData = { title: string; desc: string }

function ProcessStep({ step, num }: { step: ProcessStepData; num: number }) {
  const [open, setOpen] = useState(num === 1)
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, color: open ? BLUE : DIM, letterSpacing: '0.1em', width: 24, flexShrink: 0 }}>0{num}</span>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, textTransform: 'uppercase', letterSpacing: '0.03em', color: open ? BLUE : TEXT }}>{step.title}</span>
        </div>
        <span style={{ color: open ? BLUE : DIM, fontSize: 20, lineHeight: 1, flexShrink: 0, marginLeft: 16 }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, lineHeight: 1.85, color: MUTED, paddingBottom: 24, paddingLeft: 44, margin: 0 }}>
          {step.desc}
        </p>
      )}
    </div>
  )
}
