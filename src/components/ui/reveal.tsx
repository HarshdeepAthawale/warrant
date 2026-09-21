"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Tag = "div" | "li" | "section";

const transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
const hidden = { opacity: 0, y: 14 };
const shown = { opacity: 1, y: 0 };

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const props = {
    className,
    initial: hidden,
    whileInView: shown,
    viewport: { once: true, margin: "-60px" },
    transition: { ...transition, delay },
    children,
  };

  if (as === "li") return <motion.li {...props} />;
  if (as === "section") return <motion.section {...props} />;
  return <motion.div {...props} />;
}
