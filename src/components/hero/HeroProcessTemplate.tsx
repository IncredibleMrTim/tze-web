export const HeroProcessTemplate = () => {
  return (
    <>
      <div className="inline-flex items-center gap-2.5 mb-5">
        <div className="w-6 h-0.5 bg-ep-accent" />
        <span className="font-display font-bold text-[11px] tracking-[0.2em] uppercase text-ep-accent">
          Tauranga Electroplaters
        </span>
      </div>
      <h1 className="font-display font-extrabold text-[clamp(40px,7vw,80px)] leading-[0.93] uppercase text-white m-0">
        Process
      </h1>
    </>
  );
};
