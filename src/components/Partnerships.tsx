"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Partner = { name: string; logo: string; url: string };

const PARTNERS_DATA: Partner[] = [
  { name: "BASF", logo: "https://www.vectorlogo.zone/logos/basf/basf-ar21.svg", url: "https://www.basf.com/global/en.html" },
  { name: "Dow Chemical", logo: "https://www.vectorlogo.zone/logos/dow/dow-ar21.svg", url: "https://www.dow.com/" },
  { name: "DuPont", logo: "https://www.vectorlogo.zone/logos/dupont/dupont-ar21.svg", url: "https://www.dupont.com/" },
  { name: "3M", logo: "https://www.vectorlogo.zone/logos/3m/3m-ar21.svg", url: "https://www.3m.com/" },
  { name: "Bayer", logo: "https://www.vectorlogo.zone/logos/bayer/bayer-ar21.svg", url: "https://www.bayer.com/" },
  { name: "Merck", logo: "https://www.vectorlogo.zone/logos/merckgroup/merckgroup-ar21.svg", url: "https://www.merckgroup.com/en" },
  { name: "Solvay", logo: "https://www.vectorlogo.zone/logos/solvay/solvay-ar21.svg", url: "https://www.solvay.com/en" },
  { name: "AkzoNobel", logo: "https://www.vectorlogo.zone/logos/akzonobel/akzonobel-ar21.svg", url: "https://www.akzonobel.com/" },
  { name: "SABIC", logo: "https://www.vectorlogo.zone/logos/sabic/sabic-ar21.svg", url: "https://www.sabic.com/en" },
  { name: "ExxonMobil", logo: "https://www.vectorlogo.zone/logos/exxonmobil/exxonmobil-ar21.svg", url: "https://www.exxonmobil.com/" },
  { name: "Shell", logo: "https://www.vectorlogo.zone/logos/shell/shell-ar21.svg", url: "https://www.shell.com/" },
  { name: "Huntsman", logo: "https://www.vectorlogo.zone/logos/huntsman/huntsman-ar21.svg", url: "https://www.huntsman.com/" },
];

export default function PartnershipsMarquee() {
  const [paused, setPaused] = React.useState(false);
  const reduceMotion = useReducedMotion();

  // duplicate for seamless loop
  const items = React.useMemo(() => [...PARTNERS_DATA, ...PARTNERS_DATA], []);

  // compute duration from content width and desired speed
  const seqRef = React.useRef<HTMLDivElement>(null);
  const [duration, setDuration] = React.useState(40); // fallback
  const PX_PER_SEC = 40; // slow; lower = slower

  React.useEffect(() => {
    const calc = () => {
      if (!seqRef.current) return;
      setDuration(seqRef.current.getBoundingClientRect().width / PX_PER_SEC);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-10 pb-16" // extra bottom padding
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header (keep the design + “Partner with us”) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-6">
        <p className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1 text-xs font-medium tracking-wide text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Partner with us
        </p>
        <h3 className="mt-3 text-3xl md:text-4xl font-bold">
          Our <span className="text-primary">Global Partners</span>
        </h3>
        <p className="mt-2 text-sm md:text-base text-muted-foreground">
          Collaborating with industry leaders to deliver exceptional chemical solutions
        </p>
      </div>

      {/* Full-bleed marquee (edge-to-edge) */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <motion.div
          className="flex items-center gap-14 md:gap-20 px-4 sm:px-6 will-change-transform"
          animate={paused || reduceMotion ? { x: "0%" } : { x: ["0%", "-50%"] }}
          transition={
            paused || reduceMotion
              ? { duration: 0 }
              : { duration, ease: "linear", repeat: Infinity }
          }
          style={{ width: "max-content" }}
        >
          {/* Sequence A */}
          <div ref={seqRef} className="flex items-center gap-14 md:gap-20">
            {PARTNERS_DATA.map((p) => (
              <a
                key={`A-${p.name}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                title={p.name}
                className="block shrink-0 opacity-90 hover:opacity-100 transition"
                aria-label={`Visit ${p.name} website`}
              >
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105" // bigger logos
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          {/* Sequence B (clone) */}
          <div className="flex items-center gap-14 md:gap-20" aria-hidden="true">
            {PARTNERS_DATA.map((p) => (
              <a
                key={`B-${p.name}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                title={p.name}
                className="block shrink-0 opacity-90 hover:opacity-100 transition"
              >
                <img
                  src={p.logo}
                  alt=""
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
