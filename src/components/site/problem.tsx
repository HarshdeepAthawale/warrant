import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureList } from "@/components/ui/feature-list";
import { Reveal } from "@/components/ui/reveal";
import { problems } from "@/lib/content";

export function Problem() {
  return (
    <section id="problem" className="section-line bg-bg-subtle py-24 sm:py-28">
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

        <FeatureList items={problems} />

        <Reveal delay={0.1}>
          <div className="mt-8 flex items-baseline gap-4">
            <span className="dot dot-risk translate-y-1.5" />
            <p className="text-[0.98rem] leading-relaxed text-ink-2">
              <span className="font-medium text-ink">The stakes.</span> Penalties can run
              into the crores per violation, and every one of them is preventable with
              earlier notice.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
