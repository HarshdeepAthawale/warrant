import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[1.35rem] font-semibold tracking-[-0.01em] text-ink",
        className
      )}
    >
      Warrant
    </span>
  );
}
