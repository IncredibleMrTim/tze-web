export const HeroContactTemplate = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-start justify-between">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-0.5 bg-ep-accent" />
            <span className="font-display font-bold text-[11px] tracking-[0.2em] uppercase text-ep-accent">
              Tauranga Electroplaters
            </span>
          </div>
          <h1 className="font-display font-extrabold text-[clamp(60px,80px,80px)] leading-[0.7] uppercase text-white m-0">
            Contact Us
          </h1>
        </div>
        <div className="flex flex-col justify-start items-start flex-wrap gap-1">
          <a
            href="tel:0755433176"
            className="flex gap-2 font-display font-bold text-[clamp(20px,3vw,32px)] tracking-[0.02em] text-ep-accent text-shadow-sm text-shadow-black/40 no-underline transition-opacity duration-200 hover:opacity-70"
          >
            Tel: <span className="text-white">07 543 3176</span>
          </a>

          <a
            href="mailto:sales@tgaelectroplaters.co.nz"
            className="flex gap-2 font-display font-bold text-[clamp(20px,3vw,32px)] tracking-[0.02em] text-ep-accent text-shadow-sm text-shadow-black/40 no-underline transition-opacity duration-200 hover:opacity-70"
          >
            Email:{" "}
            <span className="text-white">sales@tgaelectroplaters.co.nz</span>
          </a>
        </div>
      </div>
    </>
  );
};
