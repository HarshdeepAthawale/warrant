import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroDashboard } from "@/components/site/hero-dashboard";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle grid backdrop */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] grid-backdrop" aria-hidden="true" />

      <Container className="relative pt-16 pb-16 sm:pt-20 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.15fr)] lg:gap-10">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="eyebrow">{hero.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 text-balance font-display text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.015em] text-ink sm:text-5xl lg:text-[3.4rem]">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
                {hero.subhead}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button as="a" href={hero.primary.href} variant="primary" size="lg">
                  {hero.primary.label}
                  <ArrowRight size={17} />
                </Button>
                <Button as="a" href={hero.secondary.href} variant="secondary" size="lg">
                  {hero.secondary.label}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.8rem] text-faint">
                <span className="inline-flex items-center gap-2">
                  <span className="dot dot-ok" /> Daily automated monitoring
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="dot dot-warn" /> Alerts before a breach
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="dot" style={{ background: "var(--accent)" }} /> Audit trail on demand
                </span>
              </div>
            </Reveal>
          </div>

          {/* Product mock */}
          <Reveal delay={0.15}>
            <div className="relative">
              <div
                className="mock-glow pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] blur-3xl"
                style={{ background: "var(--accent-soft)" }}
                aria-hidden="true"
              />
              <HeroDashboard />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
