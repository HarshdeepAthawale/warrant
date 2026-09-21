import { AlarmClock, FileWarning, FolderSearch, ScanLine } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { problems } from "@/lib/content";

const icons = [AlarmClock, ScanLine, FolderSearch, FileWarning];

export function Problem() {
  return (
    <section id="problem" className="section-line bg-bg-subtle py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="The problem">
          Today, the first sign of a problem is the penalty notice.
        </SectionHeading>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            Deadlines and escrow ratios are tracked by hand, across spreadsheets,
            WhatsApp, and a lawyer’s memory. It works until it doesn’t, and when it
            doesn’t, the cost is real.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {problems.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="card card-hover h-full p-6">
                  <div className="icon-tile flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-ink-2">
                    <Icon size={19} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div
            className="mt-6 flex items-start gap-3 rounded-xl border bg-[color:var(--risk-bg)] p-5"
            style={{ borderColor: "color-mix(in oklab, var(--risk) 25%, transparent)" }}
          >
            <span className="dot dot-risk mt-2" />
            <p className="text-[0.95rem] leading-relaxed text-ink-2">
              <span className="font-semibold text-ink">The stakes:</span> penalties can
              run into the crores per violation, and every one of them is preventable
              with earlier notice.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
