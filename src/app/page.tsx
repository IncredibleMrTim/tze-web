"use client";

import Link from "next/link";
import { HERO_IMG, GOLD_HUB_IMG } from "../lib/theme";
import { PageContainer } from "@/components/PageContainer";
import { Hero } from "@/components/hero/Hero";
import { TaglineBanner } from "@/components/hero/TaglineBanner";

export default function Home() {
  return (
    <>
      <Hero variant="home" />
      <TaglineBanner
        title="What we believe in"
        tagline={`"Excellence is not a destination; Its a continuous journey that never ends"`}
      />
      <PageContainer>
        <section
          id="about"
          className="pt-10 md:py-20 px-8 bg-ep-card rounded-b-md"
        >
          <div className="max-w-300 mx-auto">
            <div className="grid grid-cols-1 nav:grid-cols-2 gap-10 nav:gap-20 items-center">
              <div>
                <SectionLabel>About Us</SectionLabel>
                <h2 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] leading-[0.95] uppercase mb-4 text-ep-text">
                  About Tauranga
                  <br />
                  <span className="text-ep-blue">Electroplaters</span>
                </h2>

                <blockquote className="mb-7 py-4 px-5 border-l-[3px] border-ep-blue bg-ep-blue-light">
                  <p className="text-[17px] leading-[1.6] text-ep-text italic mb-1.5">
                    "Quality isn&apos;t an act it&apos;s a habbit"
                  </p>
                  <cite className="font-display text-[12px] tracking-[0.12em] uppercase text-ep-blue-mid not-italic">
                    Aristotle 384 B.C.
                  </cite>
                </blockquote>

                <h3 className="font-display font-bold text-[15px] uppercase tracking-[0.06em] text-ep-blue mb-2.5">
                  The History
                </h3>
                <p className="text-[15px] leading-[1.85] text-ep-muted mb-6">
                  Realised in 1999 by Rob Jennings Developments as a solution to
                  guarantee quality and delivery — establishing a Bay of Plenty
                  alternative to Auckland services.
                </p>

                <h3 className="font-display font-bold text-[15px] uppercase tracking-[0.06em] text-ep-blue mb-2.5">
                  What we can do to improve it
                </h3>
                <p className="text-[15px] leading-[1.85] text-ep-muted mb-5">
                  Co-owners Matt Smart and Jonathan Moynan took over in May
                  2018, bringing 50 years of combined mechanical engineering,
                  management, practical and operational experience.
                </p>
                <p className="text-[15px] leading-[1.85] text-ep-muted mb-9">
                  Getting things right initially — electrical current, time,
                  chemical balance, surface preparation — paired with timely
                  turnaround.
                </p>

                <Link
                  href="/contact"
                  className="font-display font-bold text-[13px] tracking-[0.12em] uppercase text-ep-blue no-underline border-b-2 border-ep-blue-light hover:border-ep-blue pb-0.75 transition-colors duration-200"
                >
                  Contact Us →
                </Link>
              </div>

              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full border-2 border-ep-blue-light pointer-events-none" />
                <img
                  src={GOLD_HUB_IMG}
                  alt="Gold plated hub components"
                  className="w-full h-115 object-cover block relative"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ep-card py-0 md:py-30 px-8 rounded-md">
          <div className="max-w-300 mx-auto">
            <div className="grid grid-cols-1 nav:grid-cols-2 gap-10 nav:gap-20 items-center">
              <div>
                <SectionLabel>What We Do</SectionLabel>
                <h2 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] leading-[0.95] uppercase mb-7 text-ep-text">
                  Electroplating
                </h2>
                <p className="text-[16px] leading-[1.85] text-ep-muted mb-9">
                  Depositing material onto steel alloys, copper or brass using
                  electricity — improving wear resistance, corrosion protection
                  or aesthetic appeal.
                </p>
                <Link
                  href="/process"
                  className="font-display font-bold text-[13px] tracking-[0.12em] uppercase text-white bg-ep-blue hover:bg-ep-blue-mid px-7 py-3 no-underline inline-block transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
              <div className="relative">
                <img
                  src={HERO_IMG}
                  alt="Zinc-plated components"
                  className="w-full h-90 object-cover block"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top_right,rgba(27,63,114,0.2),transparent)]" />
              </div>
            </div>
          </div>
        </section>
      </PageContainer>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <div className="w-6 h-0.5 bg-ep-blue-mid" />
      <span className="font-display font-bold text-[11px] tracking-[0.2em] uppercase text-ep-blue-mid">
        {children}
      </span>
    </div>
  );
}
