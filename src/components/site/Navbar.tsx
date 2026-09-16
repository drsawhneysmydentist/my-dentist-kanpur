import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import sdLogo from "@/assets/sd-logo-official.jpg";
import { HOME_SECTION_IDS, scrollToSectionId, type HomeSectionId } from "@/lib/scroll-nav";

type NavLink =
  | { kind: "section"; id: HomeSectionId; label: string }
  | { kind: "page"; to: string; label: string };

const links: NavLink[] = [
  { kind: "section", id: "home", label: "Home" },
  { kind: "section", id: "services", label: "Services" },
  { kind: "page", to: "/weddings", label: "Weddings" },
  { kind: "page", to: "/events", label: "Events" },
  { kind: "section", id: "gallery", label: "Gallery" },
  { kind: "section", id: "packages", label: "Packages" },
  { kind: "section", id: "about", label: "About" },
  { kind: "section", id: "reviews", label: "Reviews" },
  { kind: "section", id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<HomeSectionId>("home");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which Home section is currently in view for active-link highlighting.
  useEffect(() => {
    if (!isHome) return;
    const sectionIds = HOME_SECTION_IDS.filter((id) => id !== "home");
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id as HomeSectionId);
        } else if (window.scrollY < 200) {
          setActiveSection("home");
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  function goToSection(id: HomeSectionId) {
    setOpen(false);
    if (isHome) {
      scrollToSectionId(id);
      const newUrl = id === "home" ? "/" : `/#${id}`;
      window.history.replaceState(null, "", newUrl);
      setActiveSection(id);
    } else {
      navigate({
        to: "/",
        hash: id === "home" ? undefined : id,
        hashScrollIntoView: false,
      });
    }
  }

  function isSectionActive(id: HomeSectionId) {
    return isHome && activeSection === id;
  }

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-ivory/70 border-b border-champagne/30"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <button
          type="button"
          onClick={() => goToSection("home")}
          className="group flex items-center gap-3"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-luxe shadow-soft">
            <img
              src={sdLogo}
              alt="SD Event & Photography"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className={cn("font-display text-lg tracking-wide", scrolled ? "text-warm-brown" : "text-ivory")}>
              SD Event &amp; Photography
            </span>
            <span className={cn("eyebrow text-[0.6rem]", scrolled ? "text-rose-gold" : "text-champagne")}>
              Event Planner &amp; Photography Studio
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) =>
            l.kind === "page" ? (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative text-[0.78rem] font-normal uppercase tracking-[0.22em] transition-colors",
                  scrolled ? "text-warm-brown hover:text-rose-gold" : "text-ivory/90 hover:text-champagne",
                  "after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-rose-gold after:transition-all hover:after:w-full",
                  location.pathname === l.to ? "after:w-full" : "after:w-0",
                )}
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.id}
                type="button"
                onClick={() => goToSection(l.id)}
                className={cn(
                  "relative text-[0.78rem] font-normal uppercase tracking-[0.22em] transition-colors",
                  scrolled ? "text-warm-brown hover:text-rose-gold" : "text-ivory/90 hover:text-champagne",
                  "after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-rose-gold after:transition-all hover:after:w-full",
                  isSectionActive(l.id) ? "after:w-full" : "after:w-0",
                )}
              >
                {l.label}
              </button>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goToSection("contact")}
            className={cn(
              "hidden rounded-full px-6 py-2.5 text-[0.72rem] uppercase tracking-[0.24em] transition-all md:inline-flex",
              "bg-gradient-luxe text-ivory shadow-soft hover:shadow-luxe hover:scale-[1.03]",
            )}
          >
            Book Now
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            className={cn(
              "grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors lg:hidden",
              scrolled
                ? "border-warm-brown/20 text-warm-brown"
                : "border-ivory/40 text-ivory",
            )}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="border-t border-champagne/30 bg-ivory/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {links.map((l) =>
                l.kind === "page" ? (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="py-3 font-display text-2xl text-warm-brown"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => goToSection(l.id)}
                    className="py-3 text-left font-display text-2xl text-warm-brown"
                  >
                    {l.label}
                  </button>
                ),
              )}
              <button
                type="button"
                onClick={() => goToSection("contact")}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-luxe px-6 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-ivory"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}