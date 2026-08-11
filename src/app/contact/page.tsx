"use client";

import { useState } from "react";
import { Hero } from "@/components/hero/Hero";
import { PLACEHOLDER_IMG, PROFILE_JONO } from "@/lib/theme";
import { TaglineBanner } from "@/components/hero/TaglineBanner";

function SectionLabel({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <div
        className={`w-6 h-0.5 ${dark ? "bg-ep-accent" : "bg-ep-blue-mid"}`}
      />
      <span
        className={`font-display font-bold text-[11px] tracking-[0.2em] uppercase ${dark ? "text-ep-accent" : "text-ep-blue-mid"}`}
      >
        {children}
      </span>
    </div>
  );
}

function InfoRow({
  label,
  value,
  href,
  dark,
}: {
  label: string;
  value: string;
  href?: string;
  dark?: boolean;
}) {
  const textColorClass = dark ? "text-white/90" : "text-ep-text";
  const dimColorClass = dark ? "text-white/45" : "text-ep-dim";
  const borderColorClass = dark ? "border-white/10" : "border-ep-blue/7";
  return (
    <div className={`flex gap-4 pb-3.5 mb-3.5 border-b ${borderColorClass}`}>
      <span
        className={`font-display font-semibold text-[11px] tracking-[0.15em] uppercase w-18 flex-shrink-0 pt-0.5 ${dimColorClass}`}
      >
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className={`text-[14px] no-underline transition-opacity duration-200 hover:opacity-60 ${textColorClass}`}
        >
          {value}
        </a>
      ) : (
        <span className={`text-[14px] ${textColorClass}`}>{value}</span>
      )}
    </div>
  );
}

function PersonCard({
  person,
}: {
  person: {
    name: string;
    title: string;
    phone: string;
    phoneHref: string;
    email: string;
    areas: string[];
    bio: string;
    photo?: string;
  };
}) {
  return (
    <div className="bg-ep-card border border-ep-blue/12 shadow-md rounded-md overflow-hidden">
      {person.photo && (
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-70 object-cover block"
        />
      )}
      <div className="pt-8 px-9 pb-9">
        <div className="mb-4.5">
          <h3 className="font-display font-extrabold text-[24px] uppercase tracking-[0.02em] text-ep-text mb-1">
            {person.name}
          </h3>
          <p className="font-display font-semibold text-[12px] tracking-[0.12em] uppercase text-ep-blue-mid">
            {person.title}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {person.areas.map((area) => (
            <span
              key={area}
              className="font-display text-[11px] tracking-widest uppercase text-ep-blue bg-ep-blue-light px-2.5 py-1 border border-ep-blue/15"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mb-6">
          {person.bio.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-[14px] leading-[1.85] text-ep-muted mb-3.5 last:mb-0"
            >
              {para}
            </p>
          ))}
        </div>

        <div>
          <InfoRow label="Phone" value={person.phone} href={person.phoneHref} />
          <InfoRow
            label="Email"
            value={person.email}
            href={`mailto:${person.email}`}
          />
        </div>
      </div>
    </div>
  );
}

const fieldClass =
  "w-full px-4 py-3 bg-ep-card border border-ep-blue/12 text-ep-text text-[14px] outline-none font-body transition-colors duration-200 focus:border-ep-blue";
const labelClass =
  "font-display text-[11px] tracking-[0.15em] uppercase text-ep-dim block mb-1.5";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center min-h-70 gap-4 bg-ep-blue-light p-12 border border-ep-blue/12 max-w-300 rounded-md">
        <div className="w-13 h-13 border-2 border-ep-blue flex items-center justify-center text-[22px] text-ep-blue">
          ✓
        </div>
        <p className="font-display font-bold text-[17px] uppercase tracking-[0.04em] text-ep-text text-center">
          Thank you! Your submission has been received!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex flex-col gap-4 max-w-300"
    >
      <div>
        <label className={labelClass}>Name</label>
        <input
          required
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={fieldClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label className={labelClass}>Email Address</label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={fieldClass}
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${fieldClass} resize-y`}
          placeholder="Your message…"
        />
      </div>
      <button
        type="submit"
        className="font-display font-bold text-[14px] tracking-[0.12em] uppercase text-white bg-ep-blue hover:bg-ep-blue-mid px-8 py-3.5 border-none cursor-pointer transition-colors duration-200 self-start"
      >
        Contact Us
      </button>
    </form>
  );
}

export default function Contact() {
  const jon = {
    name: "Jonathan Moynan (Jon)",
    title: "Managing Director",
    phone: "021 431 977",
    phoneHref: "tel:021431977",
    email: "jon@tgaelectroplaters.co.nz",
    areas: ["Quotes", "New Business Development", "Engineering", "Technical"],
    bio: "At the end of the day, most people want to go home satisfied with the feeling of achievement. For me, this is hitting productivity goals and delivering quality product to the customer.\n\nMy eye for detail largely fueled by my 20 year career in precision Engineering, specifically CNC machining, programming and project management, gave me insight into various areas of the industry. During these years my extensive experience working with differing companies has given me a unique perspective in understanding and delivering 'As per customer requirements' whilst gathering the relevant detailed specifics, often overlooked, but required by the key person passing on the product or service.\n\nI look forward to working with you on your next project and delivering quality Zinc plating solutions.",
    photo: PROFILE_JONO,
  };

  const matt = {
    name: "Matthew Smart (Matt)",
    title: "Managing Director",
    phone: "021 181 6293",
    phoneHref: "tel:0211816293",
    email: "matt@tgaelectroplaters.co.nz",
    areas: ["Accounts", "Production Scheduling", "Chemistry", "Technical"],
    bio: "What can i help you with? My key responsibilities in the everyday running of Tauranga Electroplaters include, scheduling and system development, accounting, plant chemistry and testing, and of course Zinc electroplating parts.\n\nMy 25 years experience in Mechanical Engineering ranges from CNC machine operation and maintenance to shop-floor and work force management. This has contributed to a good appreciation for workload scheduling including system development, quality control implementation and assessment, health and safety requirements and environment impact obligation monitoring.\n\nIf you need a problem solved, a delivery on time, or a product you can pass onto your customer with confidence, Then you've found the right place, I am here to help lets chat.",
    photo: PLACEHOLDER_IMG,
  };

  return (
    <>
      <Hero variant="contact" />
      <TaglineBanner
        title="What we believe in"
        tagline={`"Excellence is not a destination; Its a continuous journey that never ends"`}
      />
      <div className="flex flex-col gap-4 md:gap-10 pb-0 md:pb-10">
        <section className="bg-ep-card pt-20 px-8 max-w-300 mx-auto rounded-b-md">
          <div className="max-w-300 mx-auto">
            <SectionLabel>Who Should I Contact</SectionLabel>
            <h2 className="font-display font-extrabold text-[clamp(28px,4vw,44px)] leading-[0.95] uppercase text-ep-text mb-12">
              What We Are Best At
            </h2>

            <div className="grid grid-cols-1 nav:grid-cols-2 gap-8 nav:gap-6">
              <PersonCard person={jon} />
              <PersonCard person={matt} />
            </div>
          </div>
        </section>

        <section className="px-0 md:px-8 bg-ep-card md:bg-ep-section-alt">
          <div className="max-w-300 mx-auto bg-ep-card p-8 rounded-md">
            <div className="grid grid-cols-1 nav:grid-cols-2 gap-12 md:gap-8 nav:gap-6 items-start">
              <div className="shadow-md p-8 rounded-md border border-ep-blue/12">
                <SectionLabel>Get in Touch</SectionLabel>
                <h2 className="font-display font-extrabold text-[clamp(28px,4vw,44px)] leading-[0.95] uppercase text-ep-text mb-9">
                  Contact Us
                </h2>
                <ContactForm />
              </div>

              <div className="shadow-md p-8 rounded-md border border-ep-blue/12 h-full">
                <SectionLabel>Our Details</SectionLabel>
                <h2 className="font-display font-extrabold text-[clamp(28px,4vw,44px)] leading-[0.95] uppercase text-ep-text mb-9">
                  Find Us
                </h2>

                <div className="mb-8">
                  <InfoRow
                    label="Address"
                    value="9/61 Maleme Street, Greerton, Tauranga, New Zealand"
                  />
                  <InfoRow
                    label="Phone"
                    value="0064 7 543 3176"
                    href="tel:006475433176"
                  />
                  <InfoRow
                    label="Email"
                    value="sales@tgaelectroplaters.co.nz"
                    href="mailto:sales@tgaelectroplaters.co.nz"
                  />
                </div>

                <div className="bg-ep-card md:bg-ep-section-alt py-6 px-7 border-l-[3px] border-ep-blue">
                  <p className="font-display font-bold text-[13px] tracking-[0.12em] uppercase text-ep-blue mb-4">
                    Hours
                  </p>
                  <div className="flex justify-between border-b border-ep-blue/7 pb-2.5 mb-2.5">
                    <span className="text-[14px] text-ep-text">
                      Monday – Friday
                    </span>
                    <span className="text-[14px] text-ep-blue font-semibold">
                      7:00 AM – 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-ep-blue/7 pb-2.5 mb-2.5">
                    <span className="text-[14px] text-ep-text">Saturday</span>
                    <span className="text-[14px] text-ep-muted">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[14px] text-ep-text">Sunday</span>
                    <span className="text-[14px] text-ep-muted">Closed</span>
                  </div>
                </div>
              </div>

              <div className="nav:col-span-2 shadow-md rounded-md border border-ep-blue/12 overflow-hidden">
                <iframe
                  title="Tauranga Electroplaters location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent("Tauranga Electorplaters, Greerton, Tauranga, New Zealand")}&output=embed`}
                  className="w-full h-96 border-0 block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
