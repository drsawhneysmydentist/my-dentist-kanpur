import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative pt-32 pb-12 md:pt-48 md:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pill border border-foreground/10 bg-white/60 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
              {eyebrow}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-6 font-display text-4xl leading-[1.05] tracking-tight break-words sm:text-5xl sm:leading-[1.02] md:text-7xl lg:text-[5.5rem]"
          >
            {title}
          </motion.h1>
          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              {intro}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
