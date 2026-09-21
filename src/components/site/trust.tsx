import { Info, ScrollText, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { trust } from "@/lib/content";

const icons = [ScrollText, ShieldCheck, ShieldCheck];

export function Trust() {
  return (
    <section className="section-line bg-bg-subtle py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={trust.eyebrow}>{trust.headline}</SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {trust.points.map((point, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={point.title} delay={i * 0.06}>
                <div className="card card-hover h-full p-6">
                  <div className="icon-tile flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-ink-2">
                    <Icon size={19} />
                  </div>
                  <h3 className="mt-4 text-[1.02rem] font-semibold leading-snug text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{point.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-dashed border-border-strong bg-surface px-5 py-4">
            <Info size={16} className="mt-0.5 shrink-0 text-faint" />
            <p className="text-[0.88rem] leading-relaxed text-muted">{trust.placeholder}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
