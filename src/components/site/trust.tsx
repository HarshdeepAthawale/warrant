import { Info } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureList } from "@/components/ui/feature-list";
import { Reveal } from "@/components/ui/reveal";
import { trust } from "@/lib/content";

export function Trust() {
  return (
    <section className="section-line bg-bg-subtle py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow={trust.eyebrow}>{trust.headline}</SectionHeading>

        <FeatureList items={trust.points} />

        <Reveal delay={0.1}>
          <div className="mt-8 flex items-start gap-3">
            <Info size={16} className="mt-0.5 shrink-0 text-faint" />
            <p className="max-w-2xl text-[0.9rem] leading-relaxed text-muted">
              {trust.placeholder}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
