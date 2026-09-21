import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  children,
  align = "left",
  className,
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-[-0.01em] text-ink sm:text-[2.6rem] sm:leading-[1.08]">
          {children}
        </h2>
      </Reveal>
    </div>
  );
}
