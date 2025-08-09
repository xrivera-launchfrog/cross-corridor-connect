import { Helmet } from "react-helmet-async";


export default function Partners() {
  return (
    <main>
      <Helmet>
        <title>Delivery Partners & Institutions | TGP</title>
        <meta name="description" content="Global leaders in engineering, EPC, construction, and finance support delivery and risk management across the project lifecycle." />
        <link rel="canonical" href="/partners" />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/798ab50b-fce8-4593-a0b0-0366424aeeb8.png"
            alt="Guatemalan highlands — regional context (illustrative)"
            className="w-full h-full object-cover"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-primary/80" aria-hidden="true"></div>
        <div className="container mx-auto relative z-20 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-semibold font-display text-primary-foreground">Delivery Partners & Institutions</h1>
          <p className="mt-4 text-primary-foreground/90 max-w-2xl">Global leaders in engineering, EPC, construction, and finance support delivery and risk management.</p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="container mx-auto py-12 md:py-20">
          <h2 className="sr-only">Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            <img src="/lovable-uploads/49c6311d-bb0e-4915-9176-adfda8bbfd78.png" loading="lazy" decoding="async" alt="Jacobs Engineering logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/c1d1c730-a6cf-477a-bb12-b4db3033d2db.png" loading="lazy" decoding="async" alt="ACS Group logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/5857b88d-1dde-4a29-84a5-5b0d503fb194.png" loading="lazy" decoding="async" alt="APC Construction Company logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/bdc2be86-a110-4459-8752-2fff7d46c00b.png" loading="lazy" decoding="async" alt="U.S. International Development Finance Corporation logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/4873978b-1b59-42df-81fe-1abd8e74a32e.png" loading="lazy" decoding="async" alt="Partner logo (navy and gray wordmark)" className="max-h-8 w-auto" />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-20">
        <div className="grid gap-8 max-w-4xl">
          <article>
            <h2 className="text-xl font-semibold">Engineering — Jacobs Engineering</h2>
            <p className="mt-2 text-muted-foreground">Fortune 500 engineering firm with deep pipeline design expertise across concept, FEED, EPC support, and O&amp;M advisory.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">EPC — ACS Group</h2>
            <p className="mt-2 text-muted-foreground">Global EPC leader with established presence in Central America; delivery at scale for industrial and civil infrastructure.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Pipeline Construction &amp; Consulting — Associated Pipeline Contractors (APC)</h2>
            <p className="mt-2 text-muted-foreground">Over 25,000 miles constructed across 27 countries with track record in challenging terrains and climates.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Financial Advisor &amp; Senior Lender — Chimera Capital Partners</h2>
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
