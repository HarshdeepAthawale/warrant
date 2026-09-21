import type { Status } from "@/lib/content";
import { cn } from "@/lib/utils";

const chipClass: Record<Status, string> = {
  ok: "chip-ok",
  warn: "chip-warn",
  risk: "chip-risk",
};

const dotClass: Record<Status, string> = {
  ok: "dot-ok",
  warn: "dot-warn",
  risk: "dot-risk",
};

export function StatusDot({
  status,
  className,
}: {
  status: Status;
  className?: string;
}) {
  return <span className={cn("dot", dotClass[status], className)} aria-hidden="true" />;
}

export function StatusChip({
  status,
  children,
  withDot = true,
  className,
}: {
  status: Status;
  children: React.ReactNode;
  withDot?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("chip", chipClass[status], className)}>
      {withDot && <StatusDot status={status} />}
      {children}
    </span>
  );
}

/** Health score → status band (green / amber / red). */
export function scoreStatus(score: number): Status {
  if (score >= 80) return "ok";
  if (score >= 55) return "warn";
  return "risk";
}

export function scoreColor(score: number): string {
  const s = scoreStatus(score);
  return s === "ok"
    ? "var(--ok)"
    : s === "warn"
      ? "var(--warn)"
      : "var(--risk)";
}
