import { FileText, Lock, Search, SlidersHorizontal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { StatusChip, StatusDot, scoreColor } from "@/components/ui/status";
import { projects, portfolio, fixQueue, vault, type Project } from "@/lib/content";

export function DashboardDeepDive() {
  return (
    <section id="dashboard" className="section-line py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="The dashboard">
          Every project, every rule, ranked by what breaks first.
        </SectionHeading>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            Color-coded cards, a health score for each project and the whole portfolio,
            a queue that tells you where to start, and a vault that keeps every proof in
            one place.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 card overflow-hidden">
            <div className="flex flex-wrap items-center gap-4 border-b border-border bg-surface-2 px-5 py-4">
              <div>
                <div className="text-[0.72rem] font-medium uppercase tracking-wider text-muted">
                  Portfolio health
                </div>
                <div className="mt-0.5 flex items-baseline gap-2">
                  <span
                    className="tnum text-2xl font-semibold leading-none"
                    style={{ color: "var(--warn)" }}
                  >
                    {portfolio.score}
                  </span>
                  <span className="mono text-xs text-faint">/ 100</span>
                </div>
              </div>
              <div className="hidden h-9 w-px bg-border sm:block" />
              <div className="flex gap-6">
                <Summary n={portfolio.projects} label="Projects" />
                <Summary n={portfolio.atRisk} label="At risk" tone="warn" />
                <Summary n={portfolio.inBreach} label="In breach" tone="risk" />
              </div>
              <div className="ml-auto hidden items-center gap-2 sm:flex">
                <FakeControl icon={<Search size={14} />} label="Search" />
                <FakeControl icon={<SlidersHorizontal size={14} />} label="Filter" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {projects.slice(0, 4).map((p) => (
                  <ProjectCard key={p.name} project={p} />
                ))}
              </div>

              <div className="flex flex-col gap-5">
                <FixQueue />
                <DocumentVault />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <FeatureNote
            icon={<SlidersHorizontal size={18} />}
            title="A health score you can trust"
            body="Each project and the portfolio roll up to a single number, weighted by how close each rule is to breaching."
          />
          <FeatureNote
            icon={<FileText size={18} />}
            title="A queue, not a to-do list"
            body="“Fix this now” spans every project and re-ranks daily, so the most urgent risk is always on top."
          />
          <FeatureNote
            icon={<Lock size={18} />}
            title="No resolution without proof"
            body="A rule can’t be marked resolved until the evidence is attached, so a green status always means something."
          />
        </div>
      </Container>
    </section>
  );
}

function Summary({
  n,
  label,
  tone,
}: {
  n: number;
  label: string;
  tone?: "warn" | "risk";
}) {
  const color = tone === "warn" ? "var(--warn)" : tone === "risk" ? "var(--risk)" : "var(--ink)";
  return (
    <div>
      <div className="tnum text-lg font-semibold leading-none" style={{ color }}>
        {n}
      </div>
      <div className="text-[0.66rem] text-faint">{label}</div>
    </div>
  );
}

function FakeControl({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1.5 text-[0.75rem] text-muted">
      {icon}
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="lift rounded-xl border border-border bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-[0.95rem] font-semibold text-ink">{project.name}</div>
          <div className="mt-0.5 text-[0.72rem] text-muted">{project.location}</div>
        </div>
        <div className="text-right">
          <div
            className="tnum text-xl font-semibold leading-none"
            style={{ color: scoreColor(project.score) }}
          >
            {project.score}
          </div>
          <div className="text-[0.6rem] text-faint">score</div>
        </div>
      </div>

      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full"
          style={{ width: `${project.score}%`, background: scoreColor(project.score) }}
        />
      </div>

      <ul className="mt-3 flex flex-col gap-2">
        {project.rules.map((rule) => (
          <li key={rule.name} className="flex items-center gap-2 text-[0.8rem]">
            <StatusDot status={rule.status} />
            <span className="min-w-0 truncate text-ink-2">{rule.name}</span>
            {rule.days !== null && rule.status !== "ok" && (
              <span
                className="mono ml-auto shrink-0 text-[0.72rem]"
                style={{ color: rule.status === "risk" ? "var(--risk)" : "var(--warn)" }}
              >
                {rule.days}d
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FixQueue() {
  return (
    <div className="rounded-xl border border-border bg-surface-2 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[0.8rem] font-semibold text-ink">Fix this now</span>
        <span className="mono text-[0.7rem] text-faint">{fixQueue.length} items</span>
      </div>
      <ul className="flex flex-col divide-y divide-border">
        {fixQueue.map((item) => (
          <li key={`${item.project}-${item.rule}`} className="flex items-start gap-3 py-2.5 first:pt-0 last:pb-0">
            <StatusDot
              status={item.status}
              className={item.status === "risk" ? "dot-pulse mt-1.5" : "mt-1.5"}
            />
            <div className="min-w-0 flex-1">
              <div className="truncate text-[0.82rem] font-medium text-ink">{item.project}</div>
              <div className="truncate text-[0.74rem] text-muted">{item.rule}</div>
            </div>
            <span
              className="mono shrink-0 text-[0.74rem]"
              style={{ color: item.status === "risk" ? "var(--risk)" : "var(--warn)" }}
            >
              {item.status === "risk" ? "breach" : `${item.days}d`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DocumentVault() {
  return (
    <div className="rounded-xl border border-border bg-surface-2 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[0.8rem] font-semibold text-ink">Document vault</span>
        <span className="inline-flex items-center gap-1 text-[0.7rem] text-faint">
          <Lock size={11} /> proof-linked
        </span>
      </div>
      <ul className="flex flex-col gap-2.5">
        {vault.map((doc) => (
          <li key={doc.name} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-ink-2">
              <FileText size={14} />
            </span>
            <div className="min-w-0">
              <div className="truncate text-[0.8rem] font-medium text-ink">{doc.name}</div>
              <div className="truncate text-[0.7rem] text-faint">
                {doc.meta} · {doc.linkedRule}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureNote({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Reveal>
      <div className="card card-hover h-full p-5">
        <div className="icon-tile flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent">
          {icon}
        </div>
        <h3 className="mt-3 text-[0.98rem] font-semibold text-ink">{title}</h3>
        <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">{body}</p>
      </div>
    </Reveal>
  );
}
