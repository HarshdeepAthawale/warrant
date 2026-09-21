import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Problem } from "@/components/site/problem";
import { HowItWorks } from "@/components/site/how-it-works";
import { AlertShowcase } from "@/components/site/alert-showcase";
import { DashboardDeepDive } from "@/components/site/dashboard-deep-dive";
import { AuditTrail } from "@/components/site/audit-trail";
import { Consultants } from "@/components/site/consultants";
import { Trust } from "@/components/site/trust";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <AlertShowcase />
        <DashboardDeepDive />
        <AuditTrail />
        <Consultants />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
