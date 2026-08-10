"use client";

import { useState } from "react";
import { Hero } from "@/components/hero/Hero";
import { PageContainer } from "@/components/PageContainer";
import { TaglineBanner } from "@/components/hero/TaglineBanner";

const processSteps = [
  {
    title: "What Is Electroplating?",
    desc: "Depositing material onto steel alloys, copper or brass using electricity, improving wear resistance, corrosion protection or aesthetic appeal.",
  },
  {
    title: "How Does It Work?",
    desc: "Electrical current passes through an electrolytic solution between an anode and cathode. The zinc anode dissolves and deposits onto the part (cathode). Surface preparation is critical — electrical current, time, chemical balance all play a role.",
  },
  {
    title: "The Reaction",
    desc: "Zinc ions in solution are driven onto the substrate by the applied current. Controlling current density and bath chemistry ensures a uniform, adherent deposit every run.",
  },
  {
    title: "Here Comes The Colour",
    desc: "After plating, parts are passivated to lock in corrosion resistance. Options include Blue, Clear, Natural, Silver and Trivalent Passivate — achieving up to 120 hours salt spray resistance.",
  },
  {
    title: "Passivates",
    desc: "Gold or Yellow Passivate and Trivalent (cr3) or Hexavalent Chromium (cr6) variants available. The finish is selected to suit the application and customer requirements.",
  },
];

export default function Process() {
  return (
    <>
      <Hero variant="process" />
      <TaglineBanner
        title="What we believe in"
        tagline={`"Excellence is not a destination; Its a continuous journey that never ends"`}
      />
      <PageContainer>
        <section className="py-20 px-8 rounded-md bg-ep-card">
          <div className="max-w-300 mx-auto">
            <SectionLabel>Process</SectionLabel>
            <div className="flex justify-between items-end mb-14 flex-wrap gap-6">
              <h2 className="font-display font-extrabold text-[clamp(36px,5vw,56px)] leading-[0.95] uppercase text-ep-text">
                What Process Can We Do
                <br />
                <span className="text-ep-blue">At Tauranga Electroplaters</span>
              </h2>
              <p className="text-[15px] leading-[1.75] text-ep-muted max-w-80">
                All you need to know about zinc electroplating — where it came
                from and how it works.
              </p>
            </div>

            <div className="mb-12 py-7 px-8 bg-ep-section-alt border-l-4 border-ep-blue">
              <h3 className="font-display font-bold text-[15px] uppercase tracking-[0.08em] text-ep-blue mb-2.5">
                Where Did It Come From
              </h3>
              <p className="text-[15px] leading-[1.85] text-ep-muted">
                Luigi Valentino Brugnatelli first electroplated gold in 1805
                using Alessandro Volta&apos;s voltaic pile. The patent was
                issued in 1840, and the process evolved across Europe into what
                Tauranga Electroplaters uses today.
              </p>
            </div>

            <div className="flex flex-col">
              {processSteps.map((step, i) => (
                <ProcessStep key={step.title} step={step} num={i + 1} />
              ))}
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

type ProcessStepData = { title: string; desc: string };

function ProcessStep({ step, num }: { step: ProcessStepData; num: number }) {
  const [open, setOpen] = useState(num === 1);
  return (
    <div className="border-b border-ep-blue/12">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 bg-transparent border-none cursor-pointer text-left"
      >
        <div className="flex items-center gap-5">
          <span
            className={`font-display font-bold text-[12px] tracking-widest w-6 shrink-0 ${open ? "text-ep-blue" : "text-ep-dim"}`}
          >
            0{num}
          </span>
          <span
            className={`font-display font-bold text-[20px] uppercase tracking-[0.03em] ${open ? "text-ep-blue" : "text-ep-text"}`}
          >
            {step.title}
          </span>
        </div>
        <span
          className={`text-[20px] leading-none shrink-0 ml-4 ${open ? "text-ep-blue" : "text-ep-dim"}`}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="text-[15px] leading-[1.85] text-ep-muted pb-6 pl-11">
          {step.desc}
        </p>
      )}
    </div>
  );
}
