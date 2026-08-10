'use client'

import { useState } from 'react'
import { BLUE, BLUE_MID, BLUE_LIGHT, TEXT, MUTED, DIM, CARD, BORDER, BORDER_SUBTLE, SECTION_ALT } from '../../lib/theme'

const JON_IMG = 'https://uploads-ssl.webflow.com/5e7ede0fdad44d463c245380/5e82d0ef40b6b8ff553146ff_jono.jpg'

function SectionLabel({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
      <div style={{ width: 24, height: 2, backgroundColor: dark ? '#7eb3f0' : BLUE_MID }} />
      <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: dark ? '#7eb3f0' : BLUE_MID }}>
        {children}
      </span>
    </div>
  )
}

function InfoRow({ label, value, href, dark }: { label: string; value: string; href?: string; dark?: boolean }) {
  const textColor = dark ? 'rgba(255,255,255,0.9)' : TEXT
  const dimColor = dark ? 'rgba(255,255,255,0.45)' : DIM
  const borderColor = dark ? 'rgba(255,255,255,0.1)' : BORDER_SUBTLE
  return (
    <div style={{ display: 'flex', gap: 16, paddingBottom: 14, marginBottom: 14, borderBottom: `1px solid ${borderColor}` }}>
      <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: dimColor, width: 72, flexShrink: 0, paddingTop: 2 }}>{label}</span>
      {href ? (
        <a href={href} style={{ fontSize: 14, color: textColor, textDecoration: 'none', transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >{value}</a>
      ) : (
        <span style={{ fontSize: 14, color: textColor }}>{value}</span>
      )}
    </div>
  )
}

function PersonCard({ person }: {
  person: {
    name: string
    title: string
    phone: string
    phoneHref: string
    email: string
    areas: string[]
    bio: string
    photo?: string
  }
}) {
  return (
    <div style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}>
      {person.photo && (
        <img src={person.photo} alt={person.name} style={{ width: '100%', height: 280, objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
      )}
      <div style={{ padding: '32px 36px 36px' }}>
        <div style={{ marginBottom: 18 }}>
          <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 24, textTransform: 'uppercase', letterSpacing: '0.02em', color: TEXT, marginBottom: 4 }}>{person.name}</h3>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: BLUE_MID, margin: 0 }}>{person.title}</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {person.areas.map(area => (
            <span key={area} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: BLUE, backgroundColor: BLUE_LIGHT, padding: '4px 10px', border: `1px solid rgba(27,63,114,0.15)` }}>{area}</span>
          ))}
        </div>

        <div style={{ marginBottom: 24 }}>
          {person.bio.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: 14, lineHeight: 1.85, color: MUTED, margin: i < person.bio.split('\n\n').length - 1 ? '0 0 14px' : '0' }}>{para}</p>
          ))}
        </div>

        <div>
          <InfoRow label="Phone" value={person.phone} href={person.phoneHref} />
          <InfoRow label="Email" value={person.email} href={`mailto:${person.email}`} />
        </div>
      </div>
    </div>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    backgroundColor: CARD,
    border: `1px solid ${BORDER}`,
    color: TEXT, fontSize: 14, outline: 'none',
    fontFamily: "'Inter', sans-serif",
    transition: 'border-color 0.2s',
  } as React.CSSProperties

  const labelStyle = {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 11, letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: DIM, display: 'block', marginBottom: 6,
  }

  if (sent) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 280, gap: 16, backgroundColor: BLUE_LIGHT, padding: 48, border: `1px solid ${BORDER}` }}>
        <div style={{ width: 52, height: 52, border: `2px solid ${BLUE}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: BLUE }}>✓</div>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 17, textTransform: 'uppercase', letterSpacing: '0.04em', color: TEXT, textAlign: 'center' }}>
          Thank you! Your submission has been received!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <label style={labelStyle}>Name</label>
        <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
          style={inputStyle} placeholder="Your name"
          onFocus={e => (e.target.style.borderColor = BLUE)}
          onBlur={e => (e.target.style.borderColor = BORDER)}
        />
      </div>
      <div>
        <label style={labelStyle}>Email Address</label>
        <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
          style={inputStyle} placeholder="your@email.com"
          onFocus={e => (e.target.style.borderColor = BLUE)}
          onBlur={e => (e.target.style.borderColor = BORDER)}
        />
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: 'vertical' }} placeholder="Your message…"
          onFocus={e => (e.target.style.borderColor = BLUE)}
          onBlur={e => (e.target.style.borderColor = BORDER)}
        />
      </div>
      <button type="submit"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', backgroundColor: BLUE, padding: '14px 32px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s', alignSelf: 'flex-start' }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = BLUE_MID)}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = BLUE)}
      >Contact Us</button>
    </form>
  )
}

export default function Contact() {
  const jon = {
    name: 'Jonathan Moynan (Jon)',
    title: 'Managing Director',
    phone: '021 431 977',
    phoneHref: 'tel:021431977',
    email: 'jon@tgaelectroplaters.co.nz',
    areas: ['Quotes', 'New Business Development', 'Engineering', 'Technical'],
    bio: "At the end of the day, most people want to go home satisfied with the feeling of achievement. For me, this is hitting productivity goals and delivering quality product to the customer.\n\nMy eye for detail largely fueled by my 20 year career in precision Engineering, specifically CNC machining, programming and project management, gave me insight into various areas of the industry. During these years my extensive experience working with differing companies has given me a unique perspective in understanding and delivering 'As per customer requirements' whilst gathering the relevant detailed specifics, often overlooked, but required by the key person passing on the product or service.\n\nI look forward to working with you on your next project and delivering quality Zinc plating solutions.",
    photo: JON_IMG,
  }

  const matt = {
    name: 'Matthew Smart (Matt)',
    title: 'Managing Director',
    phone: '021 181 6293',
    phoneHref: 'tel:0211816293',
    email: 'matt@tgaelectroplaters.co.nz',
    areas: ['Accounts', 'Production Scheduling', 'Chemistry', 'Technical'],
    bio: "What can i help you with? My key responsibilities in the everyday running of Tauranga Electroplaters include, scheduling and system development, accounting, plant chemistry and testing, and of course Zinc electroplating parts.\n\nMy 25 years experience in Mechanical Engineering ranges from CNC machine operation and maintenance to shop-floor and work force management. This has contributed to a good appreciation for workload scheduling including system development, quality control implementation and assessment, health and safety requirements and environment impact obligation monitoring.\n\nIf you need a problem solved, a delivery on time, or a product you can pass onto your customer with confidence, Then you've found the right place, I am here to help lets chat.",
  }

  return (
    <>
      <section style={{ backgroundColor: BLUE, paddingTop: 68 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px 72px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{ width: 24, height: 2, backgroundColor: '#7eb3f0' }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7eb3f0' }}>Tauranga Electroplaters</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(40px, 7vw, 80px)', lineHeight: 0.93, textTransform: 'uppercase', color: '#fff', margin: 0 }}>
              Contact Us
            </h1>
            <a href="tel:0755433176"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 32px)', letterSpacing: '0.02em', color: '#fff', textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >07 543 3176</a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: SECTION_ALT, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>Who Should I Contact</SectionLabel>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 0.95, textTransform: 'uppercase', color: TEXT, marginBottom: 48 }}>
            What We Are Best At
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="two-col">
            <PersonCard person={jon} />
            <PersonCard person={matt} />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: CARD, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col">
            <div>
              <SectionLabel>Get in Touch</SectionLabel>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 0.95, textTransform: 'uppercase', color: TEXT, marginBottom: 36 }}>
                Contact Us
              </h2>
              <ContactForm />
            </div>

            <div>
              <SectionLabel>Our Details</SectionLabel>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 0.95, textTransform: 'uppercase', color: TEXT, marginBottom: 36 }}>
                Find Us
              </h2>

              <div style={{ marginBottom: 32 }}>
                <InfoRow label="Address" value="9/61 Maleme Street, Greerton, Tauranga, New Zealand" />
                <InfoRow label="Phone" value="0064 7 543 3176" href="tel:006475433176" />
                <InfoRow label="Email" value="sales@tgaelectroplaters.co.nz" href="mailto:sales@tgaelectroplaters.co.nz" />
              </div>

              <div style={{ backgroundColor: SECTION_ALT, padding: '24px 28px', borderLeft: `3px solid ${BLUE}` }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: BLUE, marginBottom: 16 }}>Hours</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${BORDER_SUBTLE}`, paddingBottom: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 14, color: TEXT }}>Monday – Friday</span>
                  <span style={{ fontSize: 14, color: BLUE, fontWeight: 600 }}>7:00 AM – 4:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${BORDER_SUBTLE}`, paddingBottom: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 14, color: TEXT }}>Saturday</span>
                  <span style={{ fontSize: 14, color: MUTED }}>Closed</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 14, color: TEXT }}>Sunday</span>
                  <span style={{ fontSize: 14, color: MUTED }}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  )
}
