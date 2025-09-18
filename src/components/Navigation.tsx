// Navigation.tsx
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import logo from "/favicon.png"
type NavItem = { name: string; path: string };

const NAV_ITEMS: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Products", path: "/products" },
];

type NavigationProps = {
  /** set to true if you ever want the bar to hide when scrolling down */
  hideOnScroll?: boolean;
};

const Navigation = ({ hideOnScroll = false }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBar, setShowBar] = useState(true); // fixed by default (always true)
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastY = useRef(0);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 12);

      if (hideOnScroll) {
        const delta = y - lastY.current;
        if (y < 80) setShowBar(true);
        else if (delta > 3) setShowBar(false);
        else if (delta < -3) setShowBar(true);
        lastY.current = y;
      } else {
        if (!showBar) setShowBar(true);
      }

      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(h > 0 ? Math.min(1, y / h) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideOnScroll, showBar]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const { style } = document.body;
    if (isOpen) {
      const prev = style.overflow;
      style.overflow = "hidden";
      return () => {
        style.overflow = prev;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const DURATION = prefersReducedMotion ? 0 : 0.6;
  const DELAY_STEP = prefersReducedMotion ? 0 : 0.06;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: hideOnScroll ? (showBar ? 0 : -88) : 0,
        opacity: 1,
      }}
      transition={{ duration: DURATION, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 w-full z-[120] transition-all duration-500",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          : "bg-transparent"
      )}
      aria-label="Primary Navigation"
    >
      {/* shimmering top accent */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.9),transparent)]"
        style={{ backgroundSize: "200% 100%" }}
        animate={
          prefersReducedMotion
            ? undefined
            : { backgroundPosition: ["0% 0%", "200% 0%"] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* scroll progress */}
      <motion.div
        className="absolute left-0 top-[2px] h-[2px] bg-primary origin-left"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={cn("flex justify-between items-center", scrolled ? "h-16" : "h-20")}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-20 h-20 rounded-lg flex items-center justify-center">
              <img src={logo} alt="log" />
            </div>
            <span className="text-xl font-bold text-white group-hover:opacity-90 transition-opacity">
              YAB Chemicals
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="relative hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item, i) => {
              const active = isActive(item.path);
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * DELAY_STEP, duration: DURATION / 1.5 }}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      // extra bottom padding so underline sits nicely
                      "relative px-3 pb-[10px] pt-2 rounded-lg text-sm font-medium transition-all",
                      "hover:text-primary/90 text-white/90 hover:bg-white/5",
                      active && "text-white"
                    )}
                  >
                    {/* soft active pill */}
                    {active && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-lg bg-white/10 ring-1 ring-white/10"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}

                    {/* label */}
                    <span className="relative z-10">{item.name}</span>

                    {/* light underline for ACTIVE item */}
                    {active && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="pointer-events-none absolute left-2 right-2 -bottom-[3px] h-[2px] rounded-full bg-gradient-to-r from-white/0 via-white/70 to-white/0"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}

                    {/* gentle hover underline (non-active) */}
                    {!active && (
                      <span className="pointer-events-none absolute left-3 right-3 -bottom-[4px] h-px rounded-full bg-white/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:group-hover:opacity-100" />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Contact */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-all
                         bg-primary hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/60"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="text-white p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer + overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="md:hidden fixed right-0 top-0 h-screen w-[82%] max-w-sm bg-neutral-950/95 backdrop-blur-xl border-l border-white/10 px-6 py-8 flex flex-col z-[121]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-blue-400 grid place-items-center">
                    <span className="text-white text-xs font-bold">YAB</span>
                  </div>
                  <span className="text-white font-semibold">YAB Chemicals</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 p-2 rounded-md hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="mt-2 space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block w-full rounded-lg px-3 py-3 text-lg transition",
                        "text-white/90 hover:text-white hover:bg-white/5",
                        isActive(item.path) && "bg-white/10 text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-6">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-white font-semibold hover:bg-primary/90 transition"
                >
                  Contact Us
                </Link>
                <p className="mt-3 text-xs text-white/60">
                  © {new Date().getFullYear()} YAB Chemicals. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
