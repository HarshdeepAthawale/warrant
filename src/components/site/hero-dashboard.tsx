import { ArrowUpRight } from "lucide-react";
import { StatusDot } from "@/components/ui/status";

/**
 * Compact product mock for the hero. Deliberately dense and data-forward.
 * One chip animates green -> amber to show the daily monitoring shift.
 */
export function HeroDashboard() {
  return (
    <div className="card overflow-hidden">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="dot" style={{ background: "var(--faint)" }} />
        <span className="dot" style={{ background: "var(--faint)" }} />
        <span className="dot" style={{ background: "var(--faint)" }} />
        <span className="ml-2 mono text-[0.7rem] text-faint">
          app.warrant.co / portfolio
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-5 sm:p-5">
        {/* Health score + portfolio summary */}
        <div className="sm:col-span-2 flex flex-col gap-4">
          <div className="rounded-xl border border-border bg-surface-2 p-4">
            <div className="text-[0.72rem] font-medium uppercase tracking-wider text-muted">
              Portfolio health
            </div>
            <div className="mt-1 flex items-end gap-2">
              <span
                className="tnum text-4xl font-semibold leading-none"
                style={{ color: "var(--warn)" }}
              >
                71
              </span>
              <span className="mono mb-0.5 text-xs text-faint">/ 100</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full"
                style={{ width: "71%", background: "var(--warn)" }}
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {[
                { n: "6", l: "Projects" },
                { n: "5", l: "At risk" },
                { n: "1", l: "In breach" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="tnum text-lg font-semibold text-ink">{s.n}</div>
                  <div className="text-[0.66rem] text-faint">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Fix this now (mini) */}
          <div className="rounded-xl border border-border bg-surface-2 p-4">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-[0.72rem] font-medium uppercase tracking-wider text-muted">
                Fix this now
              </span>
              <span className="mono text-[0.66rem] text-faint">5 items</span>
            </div>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-start gap-2.5">
                <StatusDot status="risk" className="dot-pulse mt-1.5" />
                <div className="min-w-0">
                  <div className="truncate text-[0.8rem] font-medium text-ink">
                    Marina Heights
                  </div>
                  <div className="truncate text-[0.72rem] text-muted">
                    Escrow ratio · in breach
                  </div>
                </div>
                <span className="mono ml-auto text-[0.7rem]" style={{ color: "var(--risk)" }}>
                  0d
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <StatusDot status="warn" className="mt-1.5" />
                <div className="min-w-0">
                  <div className="truncate text-[0.8rem] font-medium text-ink">
                    Skyline Residences
                  </div>
                  <div className="truncate text-[0.72rem] text-muted">
                    Q3 progress report
                  </div>
                </div>
                <span className="mono ml-auto text-[0.7rem]" style={{ color: "var(--warn)" }}>
                  6d
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-3 sm:col-span-3">
          {/* Card: Skyline (the live green -> amber one) */}
          <ProjectMini
            name="Skyline Residences"
            location="Pune, MH"
            score={62}
            scoreColor="var(--warn)"
            live
          />
          {/* Card: Orchard (healthy) */}
          <ProjectMini
            name="Orchard Gardens"
            location="Bengaluru, KA"
            score={88}
            scoreColor="var(--ok)"
          />
          {/* Card: Marina (breach) */}
          <ProjectMini
            name="Marina Heights"
            location="Mumbai, MH"
            score={41}
            scoreColor="var(--risk)"
            breach
          />
        </div>
      </div>
    </div>
  );
}

function ProjectMini({
  name,
  location,
  score,
  scoreColor,
  live = false,
  breach = false,
}: {
  name: string;
  location: string;
  score: number;
  scoreColor: string;
  live?: boolean;
  breach?: boolean;
}) {
  return (
    <div className="lift rounded-xl border border-border bg-surface p-3.5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-[0.9rem] font-semibold text-ink">
            <span className="truncate">{name}</span>
            <ArrowUpRight size={13} className="shrink-0 text-faint" />
          </div>
          <div className="mt-0.5 text-[0.72rem] text-muted">{location}</div>
        </div>
        <div className="text-right">
          <div className="tnum text-lg font-semibold leading-none" style={{ color: scoreColor }}>
            {score}
          </div>
          <div className="text-[0.62rem] text-faint">score</div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {live ? (
          <span className="chip chip-live">
            <span className="dot dot-live" />
            Progress report
          </span>
        ) : breach ? (
          <span className="chip chip-risk">
            <span className="dot dot-risk" />
            Escrow ratio
          </span>
        ) : (
          <span className="chip chip-ok">
            <span className="dot dot-ok" />
            Escrow ratio
          </span>
        )}
        <span className="chip chip-ok">
          <span className="dot dot-ok" />
          Renewal
        </span>
        {breach ? (
          <span className="chip chip-warn">
            <span className="dot dot-warn" />
            Disclosure
          </span>
        ) : (
          <span className="chip chip-ok">
            <span className="dot dot-ok" />
            Disclosure
          </span>
        )}
      </div>
    </div>
  );
}
