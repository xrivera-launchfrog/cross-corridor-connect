import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Globe, Map, CheckCircle2, TrendingUp } from "lucide-react";

const heroImg = "/lovable-uploads/43f1a202-1b9b-4360-94a1-1cccbfc36361.png";

const Index = () => {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Trans-Guatemala Inter-Oceanic Pipeline (TGP)",
    url: "/",
    contactPoint: [{
      "@type": "ContactPoint",
      contactType: "Investor Relations",
      email: "info@tgpipe.com"
    }]
  };

  return (
    <>
      <Helmet>
        <title>Transforming Global Energy Logistics | TGP</title>
        <meta name="description" content="The $8.1B Trans Guatemala Pipeline connects the Atlantic and Pacific Oceans, providing a faster, safer, more sustainable route for crude and refined products." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Transforming Global Energy Logistics | TGP" />
        <meta property="og:description" content="$8.1B inter‑oceanic corridor delivering a faster, safer, more sustainable route for crude and refined products." />
        <meta property="og:image" content={heroImg} />
        <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Pipeline construction welding on large-diameter pipes" className="w-full h-full object-cover" decoding="async" />
        </div>
        <div className="absolute inset-0 z-10 bg-primary/80" aria-hidden="true"></div>
        <div className="container mx-auto relative z-20 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight font-display text-primary-foreground">
              Transforming Global Energy Logistics
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90">
              The $8.1B Trans Guatemala Pipeline (TGP) connects the Atlantic and Pacific Oceans, providing a faster, safer, and more sustainable route for crude oil and refined products.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/project-overview" className="text-primary-foreground underline decoration-accent decoration-2 underline-offset-8 text-lg font-medium">
                View Project Overview
              </Link>
              <Link to="/contact#investor-access" className="text-primary-foreground underline decoration-accent/80 decoration-2 underline-offset-8 text-lg font-medium">
                Request NDA for Investor Access
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto py-16 md:py-24">
        <h2 className="sr-only">At-a-Glance Stats</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            ["$8.1B", "CAPEX", "Total project capital expenditure"],
            ["4.2M", "bpd throughput", "High-capacity, bidirectional flow"],
            ["320", "km route length", "Atlantic–Pacific corridor across Guatemala"],
            ["52M", "tons CO₂ avoided (10 yrs)", "Reduced emissions from shorter voyages"],
          ].map(([value, unit, description]) => (
            <div key={unit} className="p-6">
              <div className="text-4xl md:text-5xl font-bold font-mono text-foreground">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{unit}</div>
              <div className="mt-2 text-sm text-muted-foreground">{description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">Why It Matters</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {(
            [
              ["Speed & Efficiency", "Shorter routes accelerate deliveries and optimize fleet utilization."],
              ["Safety & Reliability", "Modern engineering, monitoring, and redundancy enhance resilience."],
              ["ESG Leadership", "Lower emissions, strong environmental standards, and community investment."],
              ["Economic Impact", "Jobs, local procurement, and broader regional development."],
            ] as const
          ).map(([title, body], idx) => (
            <article key={title as string} className="rounded-md border bg-card p-6 transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-mono font-bold text-primary leading-none">{String(idx + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-16 grid gap-6 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold font-display">About the Project</h2>
          <p className="text-muted-foreground max-w-3xl">
            Spanning approximately 320 kilometers, the TGP integrates three large-diameter pipelines with advanced pumping, storage, and export systems. Its coastal terminals are compatible with Very Large Crude Carriers (VLCCs) and supported by modern offshore loading systems. This configuration enables large-scale, bidirectional cargo movement and enhances trade flexibility.
          </p>
          <p className="text-muted-foreground max-w-3xl mt-4">
            By providing an alternative to traditional maritime routes through congested or politically sensitive chokepoints, the TGP improves supply chain resilience and facilitates reliable, on-time delivery to high-demand markets.
          </p>
        </div>
        <figure className="relative rounded-md overflow-hidden ring-1 ring-border">
          <img
            src="/lovable-uploads/f63a9d71-a950-40e8-9030-6ee4003d130c.png"
            alt="Offshore VLCC monobuoy loading system visualization"
            loading="lazy"
            decoding="async"
            width={1024}
            height={640}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" aria-hidden="true"></div>
        </figure>
      </section>


      <section className="container mx-auto py-16 grid gap-6 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold font-display">Impact & Opportunity</h2>
          <p className="text-muted-foreground max-w-3xl">TGP delivers durable advantages for markets and communities:</p>
          <ul className="mt-4 grid gap-2 list-disc pl-6 text-muted-foreground max-w-3xl">
            <li><strong className="text-foreground">Trade Growth</strong> – Strengthens competitiveness by improving access to key markets.</li>
            <li><strong className="text-foreground">Job Creation</strong> – Significant employment during construction and operations.</li>
            <li><strong className="text-foreground">Regional Development</strong> – Supports local economies and related infrastructure.</li>
            <li><strong className="text-foreground">Lower Emissions</strong> – Shorter voyages reduce carbon emissions over the project lifetime.</li>
            <li><strong className="text-foreground">Environmental Safeguards</strong> – Advanced monitoring and eco‑sensitive methods protect local environments.</li>
          </ul>
        </div>
        <figure className="relative rounded-md overflow-hidden ring-1 ring-border">
          <img
            src="/lovable-uploads/fd069c99-65c4-4e78-ac83-95c52faf000c.png"
            alt="Underwater pipeline perspective highlighting durability"
            loading="lazy"
            decoding="async"
            width={1280}
            height={720}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" aria-hidden="true"></div>
        </figure>
      </section>



      <section className="container mx-auto py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">Project Roadmap & Status</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <article className="group rounded-md border bg-card p-6 transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
            <div className="flex items-start gap-5">
              <div className="flex-none h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Globe className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
              </div>
              <div className="pt-0.5">
                <h3 className="text-lg font-semibold text-foreground">Global Market Relevance</h3>
                <p className="mt-3 text-sm text-muted-foreground">Links Atlantic producers to Asia-Pacific demand, improving arrival windows and route flexibility. By bypassing congested chokepoints and shortening voyage distances, TGP provides a competitive, secure supply route that complements existing infrastructure and supports balanced market access.</p>
              </div>
            </div>
          </article>

          <article className="group rounded-md border bg-card p-6 transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
            <div className="flex items-start gap-5">
              <div className="flex-none h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Map className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
              </div>
              <div className="pt-0.5">
                <h3 className="text-lg font-semibold text-foreground">Map & Timeline</h3>
                <p className="mt-3 text-sm text-muted-foreground">A 320 km corridor from Puerto Santo Tomás de Castilla (Atlantic) to Puerto San José (Pacific), delivered in phased milestones covering detailed engineering, permitting, EPC mobilization, terminal readiness, and commissioning—enabling bidirectional flows and VLCC-compatible offshore loading.</p>
              </div>
            </div>
          </article>

          <article className="group rounded-md border bg-card p-6 transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
            <div className="flex items-start gap-5">
              <div className="flex-none h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
              </div>
              <div className="pt-0.5">
                <h3 className="text-lg font-semibold text-foreground">Project Status</h3>
                <p className="mt-3 text-sm text-muted-foreground">Due diligence is complete; phased EPC mobilization and permitting are advancing, alongside stakeholder engagement and environmental baselines—positioning the project for on-time execution and risk-managed delivery.</p>
              </div>
            </div>
          </article>

          <article className="group rounded-md border bg-card p-6 transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
            <div className="flex items-start gap-5">
              <div className="flex-none h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <TrendingUp className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
              </div>
              <div className="pt-0.5">
                <h3 className="text-lg font-semibold text-foreground">Why It Matters</h3>
                <p className="mt-3 text-sm text-muted-foreground">Cuts transit times by bypassing bottlenecks, enhances energy security through route diversification, and supports lower-carbon logistics via shorter voyages and modern environmental safeguards.</p>
              </div>
            </div>
          </article>
        </div>
      </section>


      <section className="container mx-auto py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">Investor Access / Contact</h2>
        <div className="mt-6 grid gap-3">
          <a href="mailto:info@tgpipe.com" className="underline decoration-accent decoration-2 underline-offset-8 text-lg font-medium">General Inquiries: info@tgpipe.com</a>
          <a href="mailto:media@tgpipe.com" className="underline decoration-accent/80 decoration-2 underline-offset-8 text-lg font-medium">Media Requests: media@tgpipe.com</a>
        </div>
      </section>
    </>
  );
};

export default Index;
