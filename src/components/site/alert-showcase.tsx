import { Mail, MessageCircle, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { alert } from "@/lib/content";

export function AlertShowcase() {
  return (
    <section className="section-line bg-bg-subtle py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Alerts">
              The alert does the work, before you open the app.
            </SectionHeading>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted">
                When a rule turns amber or red, everyone who should know gets an email
                or WhatsApp message. It names the project, the rule, the stakes, the
                days remaining, and the exact next step. Enough to act on without
                logging in.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  "No login required to understand what to do",
                  "Sent to every contact on the rule",
                  "Same message by email or WhatsApp",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[0.95rem] text-ink-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--ok-bg)] text-ok">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.1}>
              <EmailAlert />
            </Reveal>
            <Reveal delay={0.18}>
              <WhatsAppAlert />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AlertBody() {
  return (
    <>
      <p className="text-[0.95rem] font-semibold text-ink">
        {alert.project}: {alert.headline}
      </p>
      <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{alert.detail}</p>
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.85rem]">
        <span className="text-ink-2">
          Days remaining:{" "}
          <span className="mono font-semibold" style={{ color: "var(--warn)" }}>
            {alert.daysRemaining}
          </span>
        </span>
        <span className="text-ink-2">
          Action needed:{" "}
          <span className="font-medium text-ink">{alert.action}</span>
        </span>
      </div>
    </>
  );
}

function EmailAlert() {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-2 text-ink-2">
          <Mail size={16} />
        </span>
        <div className="min-w-0">
          <div className="text-[0.8rem] font-medium text-ink">Warrant Alerts</div>
          <div className="truncate text-[0.72rem] text-faint">
            alerts@warrant.co · to you, +2 contacts
          </div>
        </div>
        <span className="chip chip-warn ml-auto">
          <span className="dot dot-warn" />
          {alert.status}
        </span>
      </div>
      <div className="px-4 py-4">
        <AlertBody />
      </div>
    </div>
  );
}

function WhatsAppAlert() {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--ok-bg)] text-ok">
          <MessageCircle size={16} />
        </span>
        <div className="min-w-0">
          <div className="text-[0.8rem] font-medium text-ink">WhatsApp</div>
          <div className="truncate text-[0.72rem] text-faint">Warrant · Business account</div>
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="max-w-[90%] rounded-2xl rounded-tl-md border border-border bg-surface-2 px-4 py-3">
          <AlertBody />
          <div className="mono mt-2 text-right text-[0.66rem] text-faint">06:00</div>
        </div>
      </div>
    </div>
  );
}
