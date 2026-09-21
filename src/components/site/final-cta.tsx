"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { finalCta } from "@/lib/content";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  company: string;
  role: string;
  projects: string;
};

const empty: Fields = { name: "", company: "", role: "developer", projects: "" };

export function FinalCta() {
  const [fields, setFields] = useState<Fields>(empty);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Backend not wired yet. This is where the pilot request will POST.
    setSubmitted(true);
  }

  const canSubmit =
    fields.name.trim() && fields.company.trim() && fields.projects.trim();

  return (
    <section id="request-a-pilot" className="section-line py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-lg)]">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="border-b border-border bg-surface-2 p-8 md:border-b-0 md:border-r">
              <span className="eyebrow">{finalCta.eyebrow}</span>
              <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-[-0.01em] text-ink sm:text-[2rem] sm:leading-[1.1]">
                {finalCta.headline}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {finalCta.body}
              </p>
              <ul className="mt-6 flex flex-col gap-2.5 text-[0.88rem] text-ink-2">
                {["Set up in minutes", "No spreadsheets to migrate", "Alerts on day one"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--ok-bg)] text-ok">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="p-8">
              {submitted ? (
                <Reveal>
                  <div className="flex h-full flex-col items-start justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--ok-bg)] text-ok">
                      <Check size={22} strokeWidth={2.5} />
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                      Request received.
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                      Thanks, {fields.name.split(" ")[0] || "there"}. We’ll be in touch
                      shortly to set up your pilot for {fields.company}.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFields(empty);
                        setSubmitted(false);
                      }}
                      className="mt-6 text-[0.85rem] font-medium text-accent hover:underline"
                    >
                      Submit another request
                    </button>
                  </div>
                </Reveal>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <Field label="Full name" htmlFor="name">
                    <input
                      id="name"
                      required
                      value={fields.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Aarav Mehta"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Company" htmlFor="company">
                    <input
                      id="company"
                      required
                      value={fields.company}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Mehta Developers"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Role" htmlFor="role">
                    <div className="grid grid-cols-2 gap-2">
                      {finalCta.roles.map((r) => (
                        <button
                          type="button"
                          key={r.value}
                          onClick={() => update("role", r.value)}
                          className={cn(
                            "rounded-lg border px-3 py-2.5 text-[0.88rem] font-medium transition-colors",
                            fields.role === r.value
                              ? "border-accent bg-[color:var(--accent-soft)] text-ink"
                              : "border-border bg-surface text-muted hover:border-border-strong"
                          )}
                          aria-pressed={fields.role === r.value}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Active projects" htmlFor="projects">
                    <div className="flex flex-wrap gap-2">
                      {finalCta.projectRanges.map((range) => (
                        <button
                          type="button"
                          key={range}
                          onClick={() => update("projects", range)}
                          className={cn(
                            "mono rounded-lg border px-3 py-2 text-[0.82rem] transition-colors",
                            fields.projects === range
                              ? "border-accent bg-[color:var(--accent-soft)] text-ink"
                              : "border-border bg-surface text-muted hover:border-border-strong"
                          )}
                          aria-pressed={fields.projects === range}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Button
                    as="button"
                    type="submit"
                    size="lg"
                    disabled={!canSubmit}
                    className="mt-2 w-full"
                  >
                    Request a pilot
                    <ArrowRight size={17} />
                  </Button>
                  <p className="text-center text-[0.75rem] text-faint">
                    We’ll only use your details to set up the pilot.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-[0.92rem] text-ink placeholder:text-faint transition-colors focus:border-accent focus-visible:outline-none";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[0.78rem] font-medium text-ink-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
