'use client'

import { useState } from 'react'

const JON_IMG = 'https://uploads-ssl.webflow.com/5e7ede0fdad44d463c245380/5e82d0ef40b6b8ff553146ff_jono.jpg'

function SectionLabel({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-[10px] mb-[20px]">
      <div className={`w-[24px] h-[2px] ${dark ? 'bg-ep-accent' : 'bg-ep-blue-mid'}`} />
      <span className={`font-display font-bold text-[11px] tracking-[0.2em] uppercase ${dark ? 'text-ep-accent' : 'text-ep-blue-mid'}`}>
        {children}
      </span>
    </div>
  )
}

function InfoRow({ label, value, href, dark }: { label: string; value: string; href?: string; dark?: boolean }) {
  const textColorClass = dark ? 'text-white/90' : 'text-ep-text'
  const dimColorClass = dark ? 'text-white/45' : 'text-ep-dim'
  const borderColorClass = dark ? 'border-white/10' : 'border-ep-blue/7'
  return (
    <div className={`flex gap-[16px] pb-[14px] mb-[14px] border-b ${borderColorClass}`}>
      <span className={`font-display font-semibold text-[11px] tracking-[0.15em] uppercase w-[72px] flex-shrink-0 pt-[2px] ${dimColorClass}`}>{label}</span>
      {href ? (
        <a href={href} className={`text-[14px] no-underline transition-opacity duration-200 hover:opacity-60 ${textColorClass}`}>{value}</a>
      ) : (
        <span className={`text-[14px] ${textColorClass}`}>{value}</span>
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
    <div className="bg-ep-card border border-ep-blue/12">
      {person.photo && (
        <img src={person.photo} alt={person.name} className="w-full h-[280px] object-cover object-top block" />
      )}
      <div className="pt-[32px] px-[36px] pb-[36px]">
        <div className="mb-[18px]">
          <h3 className="font-display font-extrabold text-[24px] uppercase tracking-[0.02em] text-ep-text mb-[4px]">{person.name}</h3>
          <p className="font-display font-semibold text-[12px] tracking-[0.12em] uppercase text-ep-blue-mid">{person.title}</p>
        </div>

        <div className="flex flex-wrap gap-[6px] mb-[20px]">
          {person.areas.map(area => (
            <span key={area} className="font-display text-[11px] tracking-[0.1em] uppercase text-ep-blue bg-ep-blue-light px-[10px] py-[4px] border border-ep-blue/15">{area}</span>
          ))}
        </div>

        <div className="mb-[24px]">
          {person.bio.split('\n\n').map((para, i) => (
            <p key={i} className="text-[14px] leading-[1.85] text-ep-muted mb-[14px] last:mb-0">{para}</p>
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

const fieldClass =
  'w-full px-[16px] py-[12px] bg-ep-card border border-ep-blue/12 text-ep-text text-[14px] outline-none font-body transition-colors duration-200 focus:border-ep-blue'
const labelClass = 'font-display text-[11px] tracking-[0.15em] uppercase text-ep-dim block mb-[6px]'

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[280px] gap-[16px] bg-ep-blue-light p-[48px] border border-ep-blue/12">
        <div className="w-[52px] h-[52px] border-2 border-ep-blue flex items-center justify-center text-[22px] text-ep-blue">✓</div>
        <p className="font-display font-bold text-[17px] uppercase tracking-[0.04em] text-ep-text text-center">
          Thank you! Your submission has been received!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="flex flex-col gap-[16px]">
      <div>
        <label className={labelClass}>Name</label>
        <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
          className={fieldClass} placeholder="Your name"
        />
      </div>
      <div>
        <label className={labelClass}>Email Address</label>
        <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
          className={fieldClass} placeholder="your@email.com"
        />
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
          className={`${fieldClass} resize-y`} placeholder="Your message…"
        />
      </div>
      <button
        type="submit"
        className="font-display font-bold text-[14px] tracking-[0.12em] uppercase text-white bg-ep-blue hover:bg-ep-blue-mid px-[32px] py-[14px] border-none cursor-pointer transition-colors duration-200 self-start"
      >
        Contact Us
      </button>
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
      <section className="bg-ep-blue pt-[68px]">
        <div className="max-w-[1200px] mx-auto pt-[80px] px-[32px] pb-[72px]">
          <div className="inline-flex items-center gap-[10px] mb-[20px]">
            <div className="w-[24px] h-[2px] bg-ep-accent" />
            <span className="font-display font-bold text-[11px] tracking-[0.2em] uppercase text-ep-accent">Tauranga Electroplaters</span>
          </div>
          <div className="flex justify-between items-end flex-wrap gap-[24px]">
            <h1 className="font-display font-extrabold text-[clamp(40px,7vw,80px)] leading-[0.93] uppercase text-white m-0">
              Contact Us
            </h1>
            <a
              href="tel:0755433176"
              className="font-display font-bold text-[clamp(20px,3vw,32px)] tracking-[0.02em] text-white no-underline transition-opacity duration-200 hover:opacity-70"
            >
              07 543 3176
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ep-section-alt py-[80px] px-[32px]">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>Who Should I Contact</SectionLabel>
          <h2 className="font-display font-extrabold text-[clamp(28px,4vw,44px)] leading-[0.95] uppercase text-ep-text mb-[48px]">
            What We Are Best At
          </h2>

          <div className="grid grid-cols-1 nav:grid-cols-2 gap-[32px] nav:gap-[24px]">
            <PersonCard person={jon} />
            <PersonCard person={matt} />
          </div>
        </div>
      </section>

      <section className="bg-ep-card py-[80px] px-[32px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 nav:grid-cols-2 gap-[32px] nav:gap-[80px] items-start">
            <div>
              <SectionLabel>Get in Touch</SectionLabel>
              <h2 className="font-display font-extrabold text-[clamp(28px,4vw,44px)] leading-[0.95] uppercase text-ep-text mb-[36px]">
                Contact Us
              </h2>
              <ContactForm />
            </div>

            <div>
              <SectionLabel>Our Details</SectionLabel>
              <h2 className="font-display font-extrabold text-[clamp(28px,4vw,44px)] leading-[0.95] uppercase text-ep-text mb-[36px]">
                Find Us
              </h2>

              <div className="mb-[32px]">
                <InfoRow label="Address" value="9/61 Maleme Street, Greerton, Tauranga, New Zealand" />
                <InfoRow label="Phone" value="0064 7 543 3176" href="tel:006475433176" />
                <InfoRow label="Email" value="sales@tgaelectroplaters.co.nz" href="mailto:sales@tgaelectroplaters.co.nz" />
              </div>

              <div className="bg-ep-section-alt py-[24px] px-[28px] border-l-[3px] border-ep-blue">
                <p className="font-display font-bold text-[13px] tracking-[0.12em] uppercase text-ep-blue mb-[16px]">Hours</p>
                <div className="flex justify-between border-b border-ep-blue/7 pb-[10px] mb-[10px]">
                  <span className="text-[14px] text-ep-text">Monday – Friday</span>
                  <span className="text-[14px] text-ep-blue font-semibold">7:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-ep-blue/7 pb-[10px] mb-[10px]">
                  <span className="text-[14px] text-ep-text">Saturday</span>
                  <span className="text-[14px] text-ep-muted">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[14px] text-ep-text">Sunday</span>
                  <span className="text-[14px] text-ep-muted">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
