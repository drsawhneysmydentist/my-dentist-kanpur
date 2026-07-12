import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

type Variant = "primary" | "ghost" | "outline" | "dark";

const styles: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
  dark: "gradient-aqua text-white shadow-luxe",
  ghost: "bg-white/70 text-foreground backdrop-blur-md border border-white/60",
  outline: "border border-foreground/15 text-foreground hover:bg-foreground/5",
};

export function MagneticButton({
  children,
  to,
  hash,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  to?: string;
  hash?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: Variant;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const tx = useTransform(sx, (v: number) => v * 0.35);
  const ty = useTransform(sy, (v: number) => v * 0.35);

  const handleMove = (e: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span
      style={{ x: tx, y: ty }}
      className={`relative z-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium tracking-wide transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );

  const wrapperCls = `relative inline-block ${className}`;

  if (to) {
    return (
      <span
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={wrapperCls}
      >
        <Link to={to} hash={hash}>{inner}</Link>
      </span>
    );
  }
  if (href) {
    // External links always get noopener noreferrer
    const isExternal = href.startsWith("http");
    return (
      <span
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={wrapperCls}
      >
        <a
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {inner}
        </a>
      </span>
    );
  }
  // Native button for form submission / click actions
  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={wrapperCls}
    >
      <button type={type} onClick={onClick} className="cursor-pointer">
        {inner}
      </button>
    </span>
  );
}
