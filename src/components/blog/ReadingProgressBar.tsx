import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Fixed progress bar at the very top of the viewport that fills as the
 * reader scrolls through the article. Purely presentational — no layout
 * shift, no impact on existing pages (mounted only on the blog page).
 */
export function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="reading-progress-bar w-full"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
