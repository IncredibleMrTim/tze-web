export const TaglineBanner = ({
  title,
  tagline,
}: {
  title: string;
  tagline: string;
}) => {
  return (
    <section className="bg-ep-blue py-8 px-8">
      <div className="max-w-300 px-8 mx-auto flex items-center gap-6 flex-wrap">
        <span className="font-display font-bold text-[13px] tracking-[0.2em] uppercase text-ep-accent shrink-0">
          {title}
        </span>
        <div className="hidden nav:block w-px h-8 bg-white/20 shrink-0" />
        <p className="text-[17px] leading-[1.6] text-white/85 italic">
          {tagline}
        </p>
      </div>
    </section>
  );
};
