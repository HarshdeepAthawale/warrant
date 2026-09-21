import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureList } from "@/components/ui/feature-list";
import { Reveal } from "@/components/ui/reveal";
import { consultants } from "@/lib/content";

export function Consultants() {
  return (
    <section id="consultants" className="section-line py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow={consultants.eyebrow}>
          {consultants.headline}
        </SectionHeading>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {consultants.body}
          </p>
        </Reveal>

        <FeatureList items={consultants.points} />
      </Container>
    </section>
  );
}
