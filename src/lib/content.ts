/**
 * Central content + mock data for the Warrant marketing site.
 *
 * Everything the UI renders is defined here as typed structures so that,
 * when the backend arrives, these can be swapped for API responses without
 * touching component markup.
 */

export type Status = "ok" | "warn" | "risk";

export const statusLabel: Record<Status, string> = {
  ok: "On track",
  warn: "Approaching breach",
  risk: "In breach",
};

export const nav = {
  links: [
    { label: "Product", href: "#dashboard" },
    { label: "How it works", href: "#how-it-works" },
    { label: "For consultants", href: "#consultants" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Request a pilot", href: "#request-a-pilot" },
};

/* ---------- Hero ---------- */
export const hero = {
  eyebrow: "Compliance-risk monitoring for real estate developers",
  headline: "Never get blindsided by a compliance penalty again.",
  subhead:
    "Warrant watches every regulatory deadline, filing, and fund-handling rule on your projects, and warns you before a breach turns into a penalty.",
  primary: { label: "Request a pilot", href: "#request-a-pilot" },
  secondary: { label: "See how it works", href: "#how-it-works" },
};

/* ---------- Problem ---------- */
export const problems: { title: string; body: string }[] = [
  {
    title: "Filings get missed or filed late",
    body: "Quarterly progress reports, project registration renewals, and disclosure updates recur on their own schedule. Miss one and penalties start stacking, often before anyone notices it was due.",
  },
  {
    title: "Escrow ratios quietly drift",
    body: "Fund-allocation rules like “70% of collections must stay in the escrow account” slip out of line as money moves. Today, nobody catches the drift until an audit does.",
  },
  {
    title: "Documents are scattered",
    body: "Approvals, buyer consents, and layout changes live across email, WhatsApp, and a lawyer’s memory. When a lender or regulator asks, producing them quickly is a scramble.",
  },
  {
    title: "Detection is entirely manual",
    body: "Penalties can run into the crores per violation, yet the only thing standing between you and one is a spreadsheet someone remembered to update.",
  },
];

/* ---------- How it works ---------- */
export const steps: { title: string; body: string }[] = [
  {
    title: "Set up a project once",
    body: "Add the project name, location, total cost, jurisdiction, key dates, escrow account details (for example, “70% of collections must stay in this account”), and the contacts who should receive alerts.",
  },
  {
    title: "Rules are applied automatically",
    body: "Warrant instantly applies the right rule set for that jurisdiction: filing deadlines and fund thresholds, each with a clear explanation of what a breach would cost.",
  },
  {
    title: "Monitoring runs every day",
    body: "A background engine re-checks every rule on every project daily, whether or not anyone logs in. It isn’t a chatbot. It’s a watchman that never sleeps.",
  },
  {
    title: "Alerts arrive before problems do",
    body: "When a rule moves from green to amber (approaching breach) or amber to red (in breach), every contact gets an email or WhatsApp message they can act on without opening the app.",
  },
  {
    title: "One dashboard for everything",
    body: "Every project appears as a color-coded card. Each project and the whole portfolio gets a compliance health score, and a “Fix this now” queue ranks every at-risk rule by days remaining.",
  },
  {
    title: "An audit trail on demand",
    body: "Export a PDF showing every rule, its full status history with timestamps, and the evidence documents attached to it. It is a credible paper trail for lenders, buyers, and regulators.",
  },
];

/* ---------- Alert showcase (exact copy from brief) ---------- */
export const alert = {
  project: "Skyline Residences",
  status: "AMBER" as const,
  rule: "Quarterly progress report",
  headline: "Quarterly progress report is now AMBER.",
  detail:
    "Missed filings can trigger escalating penalties and, on repeated defaults, risk to project registration status.",
  daysRemaining: 6,
  action: "File the Q3 progress report.",
};

/* ---------- Dashboard mock data ---------- */
export type Rule = {
  name: string;
  status: Status;
  days: number | null; // null = no active deadline / resolved
};

export type Project = {
  name: string;
  location: string;
  score: number;
  status: Status;
  rules: Rule[];
};

export const portfolio = {
  score: 71,
  projects: 6,
  atRisk: 5,
  inBreach: 1,
};

export const projects: Project[] = [
  {
    name: "Skyline Residences",
    location: "Pune, MH",
    score: 62,
    status: "warn",
    rules: [
      { name: "Quarterly progress report", status: "warn", days: 6 },
      { name: "Escrow ratio (70%)", status: "ok", days: null },
      { name: "Registration renewal", status: "ok", days: 118 },
    ],
  },
  {
    name: "Marina Heights",
    location: "Mumbai, MH",
    score: 41,
    status: "risk",
    rules: [
      { name: "Escrow ratio (70%)", status: "risk", days: 0 },
      { name: "Disclosure update", status: "warn", days: 9 },
      { name: "Quarterly progress report", status: "ok", days: 74 },
    ],
  },
  {
    name: "Orchard Gardens",
    location: "Bengaluru, KA",
    score: 88,
    status: "ok",
    rules: [
      { name: "Escrow ratio (70%)", status: "ok", days: null },
      { name: "Quarterly progress report", status: "ok", days: 61 },
      { name: "Disclosure update", status: "ok", days: 140 },
    ],
  },
  {
    name: "Riverfront Commons",
    location: "Pune, MH",
    score: 74,
    status: "warn",
    rules: [
      { name: "Layout change consent", status: "warn", days: 12 },
      { name: "Escrow ratio (70%)", status: "ok", days: null },
      { name: "Registration renewal", status: "ok", days: 205 },
    ],
  },
  {
    name: "Crestview Towers",
    location: "Thane, MH",
    score: 91,
    status: "ok",
    rules: [
      { name: "Escrow ratio (70%)", status: "ok", days: null },
      { name: "Quarterly progress report", status: "ok", days: 52 },
      { name: "Registration renewal", status: "ok", days: 312 },
    ],
  },
  {
    name: "Parkline Enclave",
    location: "Nashik, MH",
    score: 55,
    status: "warn",
    rules: [
      { name: "Registration renewal", status: "warn", days: 21 },
      { name: "Escrow ratio (70%)", status: "ok", days: null },
      { name: "Disclosure update", status: "warn", days: 27 },
    ],
  },
];

export type FixItem = {
  project: string;
  rule: string;
  status: Status;
  days: number;
  note: string;
  action: string;
};

/** "Fix this now", ranked by urgency (breaches first, then days remaining). */
export const fixQueue: FixItem[] = [
  {
    project: "Marina Heights",
    rule: "Escrow ratio (70%)",
    status: "risk",
    days: 0,
    note: "Balance fell to 63% of collections.",
    action: "Top up the escrow account to the 70% threshold.",
  },
  {
    project: "Skyline Residences",
    rule: "Quarterly progress report",
    status: "warn",
    days: 6,
    note: "Q3 filing window closes soon.",
    action: "File the Q3 progress report.",
  },
  {
    project: "Marina Heights",
    rule: "Disclosure update",
    status: "warn",
    days: 9,
    note: "Buyer-facing disclosure is out of date.",
    action: "Publish the updated disclosure statement.",
  },
  {
    project: "Riverfront Commons",
    rule: "Layout change consent",
    status: "warn",
    days: 12,
    note: "2 of 34 buyer consents still pending.",
    action: "Collect remaining buyer consents.",
  },
  {
    project: "Parkline Enclave",
    rule: "Registration renewal",
    status: "warn",
    days: 21,
    note: "Project registration expires next month.",
    action: "Begin the registration renewal.",
  },
];

/* ---------- Document vault ---------- */
export type VaultDoc = {
  name: string;
  meta: string;
  linkedRule: string;
};

export const vault: VaultDoc[] = [
  {
    name: "Q3 filing acknowledgement.pdf",
    meta: "Added 21 Sep 2026 · 240 KB",
    linkedRule: "Quarterly progress report",
  },
  {
    name: "August escrow statement.pdf",
    meta: "Added 04 Sep 2026 · 1.1 MB",
    linkedRule: "Escrow ratio (70%)",
  },
  {
    name: "Buyer consents, Tower B.zip",
    meta: "Added 28 Aug 2026 · 6.4 MB",
    linkedRule: "Layout change consent",
  },
  {
    name: "Registration certificate.pdf",
    meta: "Added 12 Jul 2026 · 380 KB",
    linkedRule: "Registration renewal",
  },
];

/* ---------- Audit trail (PDF export mock) ---------- */
export type AuditEvent = {
  time: string;
  status: Status | "info";
  title: string;
  detail?: string;
  evidence?: string;
};

export const auditTrail = {
  project: "Skyline Residences",
  rule: "Quarterly progress report, Q3 FY26",
  ref: "WR-2026-SKY-Q3-PR",
  events: [
    {
      time: "01 Apr 2026, 09:12",
      status: "info" as const,
      title: "Rule applied to project",
      detail: "Quarterly progress report, due within 21 days of quarter end.",
    },
    {
      time: "01 Jul to 14 Sep 2026",
      status: "ok" as const,
      title: "Daily checks passed",
      detail: "76 automated re-checks, all on track.",
    },
    {
      time: "15 Sep 2026, 06:00",
      status: "warn" as const,
      title: "Moved to amber",
      detail: "Crossed the 30-day-to-deadline threshold. 6 days remaining.",
    },
    {
      time: "15 Sep 2026, 06:01",
      status: "info" as const,
      title: "Alert sent to 3 contacts",
      detail: "Email + WhatsApp to project owner, accountant, legal consultant.",
    },
    {
      time: "20 Sep 2026, 14:22",
      status: "info" as const,
      title: "Evidence attached",
      detail: "Uploaded by A. Mehta (Accountant).",
      evidence: "Q3-progress-report-draft.pdf",
    },
    {
      time: "21 Sep 2026, 11:05",
      status: "ok" as const,
      title: "Filed & marked resolved",
      detail: "Resolution required proof of filing before it could be closed.",
      evidence: "Filing-acknowledgement-Q3.pdf",
    },
  ] as AuditEvent[],
};

/* ---------- Consultants ---------- */
export const consultants = {
  eyebrow: "Built for consultants",
  headline: "One prioritized list, not fifteen screens.",
  body: "A single consultant often manages compliance for 10 to 20 projects across different owners and jurisdictions. Warrant collapses all of them into one queue, ranked by what will breach first, so you spend your day on the two things that matter, not chasing status across spreadsheets.",
  points: [
    {
      title: "Every client, one portfolio view",
      body: "Switch between owners without switching tools. The whole book of projects rolls up into one health score.",
    },
    {
      title: "Work the queue, top to bottom",
      body: "The “Fix this now” list spans all projects at once and re-ranks itself every day as deadlines move.",
    },
    {
      title: "Alerts reach the right people",
      body: "Route each rule’s alerts to the owner, their accountant, or you, so nothing depends on one person remembering.",
    },
    {
      title: "Hand over a clean paper trail",
      body: "Export a per-project audit PDF for any client, lender, or regulator in a couple of clicks.",
    },
  ],
};

/* ---------- Trust ---------- */
export const trust = {
  eyebrow: "What Warrant is, and isn’t",
  headline: "A watchman, not a lawyer.",
  points: [
    {
      title: "Warrant organizes and flags. It doesn’t give legal advice.",
      body: "We surface deadlines, thresholds, and status changes with plain explanations of the stakes. Interpreting your specific obligations stays with your legal and financial advisors.",
    },
    {
      title: "A clear, timestamped audit history",
      body: "Every rule keeps a complete status history and the evidence attached to it. Nothing is marked resolved without proof, so the record you export is one you can stand behind.",
    },
    {
      title: "A security-minded approach",
      body: "Compliance data is sensitive. Warrant is being built with least-privilege access, encryption in transit and at rest, and per-project permissions from day one.",
    },
  ],
  placeholder:
    "Placeholder: customer references, security certifications, and independent audits will appear here once available. We don’t list logos, testimonials, or certifications we haven’t earned.",
};

/* ---------- FAQ ---------- */
export const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need to log in every day?",
    a: "No. Monitoring runs on its own every day, whether or not anyone opens the app. If everything is on track, you won’t hear from us. You only get pulled in when a rule needs attention, and the alert tells you exactly what to do.",
  },
  {
    q: "What happens when a rule turns red?",
    a: "Red means a rule is in breach. Every contact on that rule gets an immediate email or WhatsApp message describing what breached, why it matters, and the action needed. The item also jumps to the top of your “Fix this now” queue, and the breach is recorded in the audit trail with a timestamp.",
  },
  {
    q: "Does Warrant give legal advice?",
    a: "No. Warrant organizes and flags. It tracks deadlines and thresholds and explains what a breach would cost in plain terms. It does not interpret your specific legal obligations. Keep your legal and financial advisors in the loop for that.",
  },
  {
    q: "Can my consultant get alerts too?",
    a: "Yes. Each rule can route alerts to any set of contacts: the project owner, an in-house accountant, an external legal consultant, or all of them. A consultant managing many projects can receive and act on alerts without the owner logging in at all.",
  },
  {
    q: "What does the audit export include?",
    a: "A PDF, per project, listing every rule, its full status history with timestamps, who acted and when, and the evidence documents attached to each rule. It’s built to hand directly to a lender, buyer, or regulator.",
  },
  {
    q: "How does Warrant know the rules for my jurisdiction?",
    a: "When you set up a project, you tell Warrant its jurisdiction. It then applies the matching rule set: the filing deadlines and fund thresholds that apply there, each with an explanation of the consequence of a breach. As rules change, the set is kept current.",
  },
];

/* ---------- Final CTA form ---------- */
export const finalCta = {
  eyebrow: "Request a pilot",
  headline: "Put a watchman on your projects.",
  body: "Tell us a little about your projects and we’ll set up a pilot. No spreadsheets to migrate. You can add a project in minutes.",
  roles: [
    { value: "developer", label: "Developer" },
    { value: "consultant", label: "Consultant" },
  ],
  projectRanges: ["1-3", "4-10", "11-20", "20+"],
};

/* ---------- Footer ---------- */
export const footer = {
  tagline: "Compliance you can warrant.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "How it works", href: "#how-it-works" },
        { label: "Dashboard", href: "#dashboard" },
        { label: "Audit trail", href: "#audit-trail" },
        { label: "For consultants", href: "#consultants" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Security", href: "#" },
      ],
    },
  ],
};
