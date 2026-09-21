import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { footer } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-line bg-bg-subtle py-14">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-4 md:col-span-1">
            <Logo />
            <p className="mt-3 max-w-xs text-[0.9rem] leading-relaxed text-muted">
              {footer.tagline}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <div className="text-[0.78rem] font-semibold uppercase tracking-wider text-faint">
                {col.title}
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.9rem] text-ink-2 transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[0.82rem] text-faint sm:flex-row sm:items-center">
          <span>© {year} Warrant, Inc. All rights reserved.</span>
          <span>Warrant organizes and flags. It doesn’t give legal advice.</span>
        </div>
      </Container>
    </footer>
  );
}
