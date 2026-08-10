import Link from "next/link";

export const HeroHomeTemplate = () => {
  return (
    <>
      <div className="inline-flex items-center gap-2.5 mb-6">
        <div className="w-8 h-0.5 bg-ep-accent" />
        <span className="font-display font-semibold text-[12px] tracking-[0.22em] uppercase text-ep-accent">
          Tauranga Electroplaters
        </span>
      </div>

      <h1 className="font-display font-extrabold text-[clamp(48px,9vw,108px)] leading-[0.93] tracking-[-0.01em] uppercase max-w-205 mb-7 text-white">
        Zinc
        <br />
        <span className="text-ep-accent">Electro</span>plating
        <br />
        Specialist
      </h1>

      <p className="text-[18px] leading-[1.7] text-white/90 max-w-130 mb-11 italic">
        "Excellence is not a destination; Its a continuous journey that never
        ends"
      </p>

      <div className="flex gap-3.5 flex-wrap">
        <Link
          href="/contact"
          className="font-display font-bold text-[14px] tracking-[0.12em] uppercase text-white bg-ep-blue hover:bg-ep-blue-mid px-8 py-3.5 no-underline transition-colors duration-200"
        >
          Contact Us
        </Link>
        <a
          href="#about"
          className="font-display font-bold text-[14px] tracking-[0.12em] uppercase text-white border border-white/40 hover:border-white hover:bg-white/10 px-8 py-3.5 no-underline transition-colors duration-200"
        >
          About Us
        </a>
      </div>
    </>
  );
};
