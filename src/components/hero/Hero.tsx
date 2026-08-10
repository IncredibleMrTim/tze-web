import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { HERO_CONTACT, HERO_IMG } from "@/lib/theme";

const HomeTemplate = dynamic(() =>
  import("./HeroHomeTemplate").then((mod) => mod.HeroHomeTemplate),
);

const ContactTemplate = dynamic(() =>
  import("./HeroContactTemplate").then((mod) => mod.HeroContactTemplate),
);

const ProcessTemplate = dynamic(() =>
  import("./HeroProcessTemplate").then((mod) => mod.HeroProcessTemplate),
);

export type HeroVariant = "home" | "contact" | "process";

interface HeroProps {
  variant: HeroVariant;
}

export function Hero({ variant }: HeroProps) {
  let bg: string = "";
  let content: ReactNode = null;
  let minHeightClass = "min-h-150 md:min-h-200";

  switch (variant) {
    case "contact":
      bg = HERO_CONTACT;
      content = <ContactTemplate />;
      minHeightClass = "min-h-100";
      break;

    case "process":
      bg = HERO_IMG;
      content = <ProcessTemplate />;
      minHeightClass = "min-h-100";
      break;

    default:
      bg = HERO_IMG;
      content = <HomeTemplate />;
      break;
  }

  return (
    <section
      className={`relative ${minHeightClass} overflow-hidden flex w-full items-center pt-17`}
    >
      <img
        src={bg}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,28,58,0.82)_0%,rgba(27,63,114,0.52)_50%,rgba(0,0,0,0.08)_100%)]" />

      <div className="relative max-w-300 w-full mx-auto px-8 flex flex-col justify-end">
        {content}
      </div>
    </section>
  );
}
