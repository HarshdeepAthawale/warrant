import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="section-line py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <SectionHeading eyebrow="FAQ">Plain answers to fair questions.</SectionHeading>

          <div className="flex flex-col">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={(i % 3) * 0.05}>
                <details className="group border-b border-border py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[1.02rem] font-medium text-ink marker:hidden">
                    {item.q}
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-faint transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="max-w-2xl pb-4 pr-8 text-[0.95rem] leading-relaxed text-muted">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
