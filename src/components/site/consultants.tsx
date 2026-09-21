import { Layers, ListChecks, Send, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { consultants } from "@/lib/content";

const icons = [Layers, ListChecks, Send, FileCheck2];

export function Consultants() {
  return (
    <section id="consultants" className="section-line py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={consultants.eyebrow}>
          {consultants.headline}
        </SectionHeading>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {consultants.body}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {consultants.points.map((point, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={point.title} delay={(i % 2) * 0.06}>
                <div className="card card-hover flex h-full gap-4 p-6">
                  <div className="icon-tile flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent">
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="text-[1.02rem] font-semibold text-ink">{point.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">
                      {point.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
