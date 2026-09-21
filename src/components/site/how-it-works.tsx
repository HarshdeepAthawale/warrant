import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-line py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="How Warrant works">
          From one-time setup to a watchman that never sleeps.
        </SectionHeading>

        <ol className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 2) * 0.06}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="mono flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-[0.9rem] font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="mt-2 hidden w-px flex-1 bg-border sm:block" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
