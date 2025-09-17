/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
};

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    company: "Ethiopian Textile Industries",
    role: "Production Manager",
    content:
      "YAB Chemicals has been our trusted partner for over 5 years. Their quality assurance and timely delivery have never disappointed us. The team's expertise in chemical solutions has helped us optimize our production processes significantly.",
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Sarah Alemayehu",
    company: "Addis Manufacturing Co.",
    role: "Quality Control Lead",
    content:
      "The safety standards and international certifications from YAB Chemicals give us complete confidence in our production processes. Their technical support team is always available to address any concerns we might have.",
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b55c?w=160&h=160&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Michael Tadesse",
    company: "Horizon Pharmaceuticals",
    role: "Chief Operations Officer",
    content:
      "Their global sourcing network and local expertise make them the perfect chemical supplier for our pharmaceutical operations. We've seen a 15% improvement in efficiency since switching to YAB Chemicals as our primary supplier.",
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Tigist Bekele",
    company: "East African Breweries",
    role: "Supply Chain Director",
    content:
      "YAB Chemicals' technical support and responsive customer service have significantly improved our operational efficiency. Their just-in-time delivery system has reduced our inventory costs by over 20% while maintaining production continuity.",
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setIndex((i) => (i + 1) % TESTIMONIALS_DATA.length);
    } else {
      setIndex(
        (i) => (i - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
      );
    }
  };

  const prev = () => paginate(-1);
  const next = () => paginate(1);

  // touch swipe
  const startX = React.useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) =>
    (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) dx > 0 ? prev() : next();
    startX.current = null;
  };

  // Animations
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Red/Blue ambient blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-24 h-[32rem] w-[32rem] rounded-full -z-10 blur-3xl bg-[radial-gradient(closest-side,theme(colors.blue.400/30),transparent)]"
        animate={{ x: [0, 24, -16, 0], y: [0, -18, 8, 0], opacity: [0.5, 0.65, 0.55, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-24 h-[36rem] w-[36rem] rounded-full -z-10 blur-3xl bg-[radial-gradient(closest-side,theme(colors.red.500/25),transparent)]"
        animate={{ x: [0, -18, 12, 0], y: [0, 16, -10, 0], opacity: [0.45, 0.6, 0.5, 0.45] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-3 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-sm text-foreground/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Partner with us
            </span>
          </div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            What Our <span className="text-blue-600">Clients</span> Say
          </motion.h2>

          <motion.p
            className="mt-1 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            Trusted by leading industries for quality, reliability, and innovation
          </motion.p>
        </div>

        {/* Carousel */}
        <div
          className="relative mx-auto max-w-6xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          {/* Smaller, tighter card without cutting text */}
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 280, damping: 28 },
                  opacity: { duration: 0.25 },
                  scale: { duration: 0.25 },
                }}
                className="w-full px-2 sm:px-4"
              >
                <Card className="relative rounded-3xl border-0 bg-card shadow-2xl max-w-3xl mx-auto">
                  {/* red→blue top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-500 to-red-500 opacity-70" />

                  {/* corner washes in blue/red */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 rounded-bl-[3rem]" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-red-500/10 rounded-tr-[2.5rem]" />

                  <CardContent className="p-6 md:p-7">
                    <div className="grid grid-cols-12 gap-4 items-start">
                      {/* Top: stars + quote (no clamp; compact sizes) */}
                      <div className="col-span-12">
                        <div className="flex items-center justify-center gap-1.5 mb-3">
                          {Array.from({ length: TESTIMONIALS_DATA[index].rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-red-500 fill-current" />
                          ))}
                        </div>

                        <div className="relative max-w-3xl mx-auto">
                          <Quote className="absolute -top-5 -left-3 h-10 w-10 text-blue-500/25" />
                          <p className="pl-8 text-center md:text-left text-[15px] md:text-base text-foreground/90 leading-relaxed">
                            "{TESTIMONIALS_DATA[index].content}"
                          </p>
                        </div>
                      </div>

                      {/* Bottom: avatar + meta (centered) */}
                      <div className="col-span-12">
                        <div className="flex flex-col items-center gap-3 text-center">
                          <div className="relative">
                            <div className="absolute -inset-3 rounded-full -z-10 bg-blue-500/10" />
                            <img
                              src={TESTIMONIALS_DATA[index].image}
                              alt={TESTIMONIALS_DATA[index].name}
                              className="h-20 w-20 rounded-full object-cover ring-4 ring-blue-400/30"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground text-lg">
                              {TESTIMONIALS_DATA[index].name}
                            </div>
                            <div className="text-sm text-muted-foreground mt-0.5">
                              {TESTIMONIALS_DATA[index].role}
                            </div>
                            <div className="text-sm font-medium text-blue-600 mt-1">
                              {TESTIMONIALS_DATA[index].company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2.5 h-11 w-11 shadow-xl backdrop-blur-sm hover:bg-red-500/10 hover:text-red-600 transition-all border"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2.5 h-11 w-11 shadow-xl backdrop-blur-sm hover:bg-blue-500/10 hover:text-blue-700 transition-all border"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-9 bg-blue-600"
                    : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
