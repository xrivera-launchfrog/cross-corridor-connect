import { Helmet } from "react-helmet-async";
import jacobs from "@/assets/logos/jacobs.png";
import acs from "@/assets/logos/acs.png";
import apc from "@/assets/logos/apc.png";
import chimera from "@/assets/logos/chimera.png";
import dfc from "@/assets/logos/dfc.png";

export default function Partners() {
  return (
    <main>
      <Helmet>
        <title>Delivery Partners & Institutions | TGP</title>
        <meta name="description" content="Global leaders in engineering, EPC, construction, and finance support delivery and risk management across the project lifecycle." />
        <link rel="canonical" href="/partners" />
      </Helmet>

      <section className="container mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Delivery Partners & Institutions</h1>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
          <img src={jacobs} width="160" height="64" loading="lazy" decoding="async" alt="Jacobs Engineering monochrome wordmark logo" className="max-h-10 w-auto" />
          <img src={acs} width="160" height="64" loading="lazy" decoding="async" alt="ACS Group monochrome wordmark logo" className="max-h-10 w-auto" />
          <img src={apc} width="160" height="64" loading="lazy" decoding="async" alt="APC monochrome wordmark logo" className="max-h-10 w-auto" />
          <img src={chimera} width="160" height="64" loading="lazy" decoding="async" alt="Chimera Capital Partners monochrome wordmark logo" className="max-h-10 w-auto" />
          <img src={dfc} width="160" height="64" loading="lazy" decoding="async" alt="DFC monochrome wordmark logo" className="max-h-10 w-auto" />
        </div>
        <div className="mt-12 grid gap-8 max-w-4xl">
          <article>
            <h2 className="text-xl font-semibold">Engineering — Jacobs Engineering</h2>
            <p className="mt-2 text-muted-foreground">Fortune 500 engineering firm with deep pipeline design expertise across concept, FEED, EPC support, and O&M advisory.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">EPC — ACS Group</h2>
            <p className="mt-2 text-muted-foreground">Global EPC leader with established presence in Central America; delivery at scale for industrial and civil infrastructure.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Pipeline Construction & Consulting — Associated Pipeline Contractors (APC)</h2>
            <p className="mt-2 text-muted-foreground">Over 25,000 miles constructed across 27 countries with track record in challenging terrains and climates.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Financial Advisor & Senior Lender — Chimera Capital Partners</h2>
            <p className="mt-2 text-muted-foreground">Independent private lender for energy and infrastructure with global project finance experience.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Institutional Support — U.S. International Development Finance Corporation (DFC)</h2>
            <p className="mt-2 text-muted-foreground">Minority participation and political risk insurance interest (subject to final diligence and approvals).</p>
          </article>
          <p className="text-sm text-muted-foreground">Logos and detailed roles available upon request.</p>
        </div>
      </section>
    </main>
  );
}
