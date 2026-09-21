import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroDashboard } from "@/components/site/hero-dashboard";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-backdrop pointer-events-none absolute inset-x-0 top-0 h-[620px]" aria-hidden="true" />

      <Container className="relative pt-20 pb-20 sm:pt-24 lg:pt-28">
        <div className="max-w-4xl">
          <Reveal>
            <span className="eyebrow">{hero.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance font-display text-[2.7rem] font-medium leading-[1.03] tracking-[-0.02em] text-ink sm:text-6xl lg:text-[4rem]">
              {hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-muted">
              {hero.subhead}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="a" href={hero.primary.href} variant="primary" size="lg">
                {hero.primary.label}
                <ArrowRight size={17} />
              </Button>
              <Button as="a" href={hero.secondary.href} variant="secondary" size="lg">
                {hero.secondary.label}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex items-center gap-3 text-faint">
            <ArrowDown size={14} className="animate-bounce" />
            <span className="mono text-[0.7rem] uppercase tracking-[0.18em]">
              Scroll to explore
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mt-8">
            <div
              className="mock-glow pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] blur-3xl"
              style={{ background: "var(--accent-soft)" }}
              aria-hidden="true"
            />
            <HeroDashboard />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
