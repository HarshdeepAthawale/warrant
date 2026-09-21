import { Download, FileCheck2, Paperclip } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { auditTrail, type AuditEvent } from "@/lib/content";

const timelineColor: Record<AuditEvent["status"], string> = {
  ok: "var(--ok)",
  warn: "var(--warn)",
  risk: "var(--risk)",
  info: "var(--accent)",
};

export function AuditTrail() {
  return (
    <section id="audit-trail" className="section-line bg-bg-subtle py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-24">
            <SectionHeading eyebrow="Audit trail">
              A paper trail you can hand to anyone.
            </SectionHeading>
            <Reveal delay={0.1}>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
                Export a PDF for any project showing every rule, its full status history
                with timestamps, who acted, and the evidence attached to it. It’s built
                to satisfy a lender, a buyer, or a regulator, without a scramble.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-6 flex flex-col gap-3 text-[0.95rem] text-ink-2">
                {[
                  "Complete status history, timestamped",
                  "Evidence documents attached inline",
                  "Generated on demand, per project",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <FileCheck2 size={16} className="text-accent" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="card overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 text-ink-2">
                    <FileCheck2 size={17} />
                  </span>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-ink">
                      Compliance audit: {auditTrail.project}
                    </div>
                    <div className="mono text-[0.7rem] text-faint">{auditTrail.ref}</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-2.5 py-1.5 text-[0.72rem] text-muted">
                  <Download size={13} /> PDF
                </span>
              </div>

              <div className="border-b border-border px-5 py-3">
                <div className="text-[0.72rem] uppercase tracking-wider text-faint">Rule</div>
                <div className="text-[0.92rem] font-medium text-ink">{auditTrail.rule}</div>
              </div>

              <ol className="px-5 py-5">
                {auditTrail.events.map((e, i) => (
                  <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
                    <div className="flex flex-col items-center">
                      <span
                        className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{
                          background: timelineColor[e.status],
                          boxShadow: "0 0 0 4px var(--surface)",
                        }}
                      />
                      {i < auditTrail.events.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 -mt-0.5">
                      <div className="mono text-[0.7rem] text-faint">{e.time}</div>
                      <div className="mt-0.5 text-[0.9rem] font-medium text-ink">{e.title}</div>
                      {e.detail && (
                        <p className="mt-0.5 text-[0.82rem] leading-relaxed text-muted">
                          {e.detail}
                        </p>
                      )}
                      {e.evidence && (
                        <span className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-2 px-2 py-1 text-[0.74rem] text-ink-2">
                          <Paperclip size={12} />
                          <span className="mono">{e.evidence}</span>
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
