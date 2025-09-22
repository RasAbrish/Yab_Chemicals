"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Partner = { name: string; logo: string; url: string };

const PARTNERS_DATA: Partner[] = [
  { name: "TAKASAGO", logo: "https://assets.takasago.com/prod/default/s3fs-public/2022-05/ogp_image.png?VersionId=4Okq.hyNy05oncu5M7CgjrErodnd5uxW", url: "https://www.dow.com/" },
  { name: "Unisynth chemicals  India", logo: "/src/assets/Unisynth chemicals  India.jpg", url: "https://www.unisynth.com/" },
  { name: "Etap", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32NJ1MuZjeLUhE56vX9pB1pWLPrXMtISshQ&s", url: "https://www.3m.com/" },
  { name: "TTK-PLC", logo: "https://addisjobs.net/wp-content/uploads/2021/03/TTK-PLC-logo-Addis-Jobs-200x91.jpg", url: "https://www.bayer.com/" },
  { name: "Bekas", logo: "https://bekaschemicals.com/images/bekas-logo.jpg", url: "https://www.merckgroup.com/en" },
  { name: "STAR SOAP & DETERGENT INDUSTRIES", logo: "/src/assets/Star soap and detergent.jpg", url: "https://www.2merkato.com/directory/3414-star-soap-detergent-industries" },
  { name: "Toria Soap and Detergent Industries", logo: "/src/assets/Toria Soap and Detergent Industries.jpg", url: "https://www.2merkato.com/directory/21792-toria-soap-and-detergent-industries" },
  { name: "ABEM INDUSTRY PLC", logo: "/src/assets/ABEM INDUSTRY PLC.jpg", url: "https://abemindustries.com/" },
  { name: "Ethio-Asian Industries S.C", logo: "https://imgs.search.brave.com/3KTu8UZlY0miXxl_g0g2qHzEDIfVkq0kF64Y_qrmvhc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Mm1lcmthdG8uY29t/L2ltYWdlcy9tdHJl/ZS9saXN0aW5ncy9t/LzM4NDQ1LmpwZw", url: "https://ethioasian.com/" },
  { name: "unity soap and detergent manfacturing P.L.C", logo: "/src/assets/Unity Soap.jpg", url: "" },
];

export default function PartnershipsMarquee() {
  const [paused, setPaused] = React.useState(false);
  const reduceMotion = useReducedMotion();

  // compute duration from content width and desired speed
  const seqRef = React.useRef<HTMLDivElement>(null);
  const [duration, setDuration] = React.useState(40);
  const PX_PER_SEC = 40;

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
      className="relative overflow-hidden pt-10 pb-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header */}
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

      {/* Full-bleed marquee */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <motion.div
          className="flex items-center gap-14 md:gap-20 px-4 sm:px-6 will-change-transform"
          animate={paused || reduceMotion ? {} : { x: "-50%" }}
          transition={
            paused || reduceMotion
              ? { duration: 0 }
              : { 
                  duration, 
                  ease: "linear", 
                  repeat: Infinity,
                  repeatType: "loop"
                }
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
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105"
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