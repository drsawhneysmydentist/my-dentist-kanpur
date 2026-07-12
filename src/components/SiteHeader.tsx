import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import logoBadge from "@/assets/logo-dark.webp";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Treatments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blogs" },
  { to: "/contact", label: "Contact" },
] as const;

// Reads the actual pixel color sitting under the navbar's vertical center
// and decides if it's dark enough that the navbar should flip to its
// light-on-dark ("glass-dark") treatment. This way the header adapts to
// ANY dark section (hero, CTA, footer, etc.) without those sections needing
// to know the header exists — no per-page wiring required.
function useUnderlayIsDark(sampleY: number) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let raf = 0;
    let scheduled = false;

    const sample = () => {
      scheduled = false;
      const x = window.innerWidth / 2;
      // Walk up from the point just under the navbar to find the nearest
      // element with a resolved (non-transparent) background color.
      const stack = document.elementsFromPoint(x, sampleY);
      let bg: string | null = null;
      for (const el of stack) {
        if (el.tagName === "HEADER" || el.closest("header")) continue;
        const style = window.getComputedStyle(el);
        const color = style.backgroundColor;
        if (color && color !== "rgba(0, 0, 0, 0)" && color !== "transparent") {
          bg = color;
          break;
        }
      }
      if (!bg) {
        setIsDark(false);
        return;
      }
      const match = bg.match(/[\d.]+/g);
      if (!match || match.length < 3) {
        setIsDark(false);
        return;
      }
      const [r, g, b] = match.map(Number);
      // Relative luminance (perceptual weighting).
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      setIsDark(luminance < 0.5);
    };

    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      raf = requestAnimationFrame(sample);
    };

    sample();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sampleY]);

  return isDark;
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // ~52px ≈ navbar's vertical center (pt-5 offset + half the bar height).
  const dark = useUnderlayIsDark(52);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5"
      >
        <div
          className={`flex w-full max-w-7xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ${
            dark ? "glass-dark" : "glass"
          } ${scrolled ? "shadow-luxe" : ""}`}
        >
          <Link
            to="/"
            className="flex items-center gap-2.5 pl-3"
            aria-label="Dr Sawhney's My Dentist — Home"
          >
            <img
              src={logoBadge}
              alt="Dr Sawhney's My Dentist logo"
              className="h-9 w-9 rounded-full object-cover shadow-soft"
              width={36}
              height={36}
            />
            <div className="leading-tight">
              <div
                className={`font-display text-base font-semibold transition-colors duration-500 ${dark ? "text-white" : "text-foreground"}`}
              >
                My Dentist
              </div>
              <div
                className={`text-[10px] uppercase tracking-[0.18em] transition-colors duration-500 ${dark ? "text-white/55" : "text-muted-foreground"}`}
              >
                Super Specialty · Kanpur
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => {
              const active =
                n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-500 ${
                    active
                      ? dark
                        ? "text-background"
                        : "text-foreground"
                      : dark
                        ? "text-white/60 hover:text-white"
                        : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className={`absolute inset-0 rounded-full transition-colors duration-500 ${dark ? "bg-white" : "bg-foreground"}`}
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 32,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${active ? (dark ? "text-foreground" : "text-background") : ""}`}
                  >
                    {n.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phone}`}
              className={`hidden items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors duration-500 md:inline-flex ${dark ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-foreground"}`}
            >
              <Phone className="h-3.5 w-3.5" /> {SITE.phone}
            </a>
            <Link
              to="/contact"
                hash="consultation-form"
              className={`hidden rounded-full px-5 py-2.5 text-sm transition-all duration-500 hover:scale-[1.02] md:inline-block ${dark ? "bg-white text-foreground" : "bg-foreground text-background"}`}
            >
              Book Appointment
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`grid h-11 w-11 place-items-center rounded-full transition-colors duration-500 lg:hidden ${dark ? "bg-white/10 text-white" : "bg-foreground/5 text-foreground"}`}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 px-6">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  <Link
                    to={n.to}
                    className="block py-2 font-display text-4xl text-foreground"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={`tel:${SITE.phone}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
