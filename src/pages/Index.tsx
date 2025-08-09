import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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
      email: "investorrelations@tgppipeline.com"
    }]
  };

  return (
    <>
      <Helmet>
        <title>Strategic Energy Corridor | TGP</title>
        <meta name="description" content="The Trans-Guatemala Inter-Oceanic Pipeline links the Atlantic and Pacific, cutting up to 7,000 nautical miles and reducing costs 25–35%." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Strategic Energy Corridor | TGP" />
        <meta property="og:description" content="A 320 km bidirectional pipeline enabling up to 4.2M bpd throughput and faster, lower-cost routes." />
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
              A Strategic Energy Corridor for the 21st Century
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90">
              The Trans-Guatemala Inter-Oceanic Pipeline (TGP) is a transformative infrastructure project linking the Atlantic and Pacific coasts of Guatemala. Purpose-built to modernize global oil and refined product transport, TGP provides a shorter, more secure, and more efficient route between the Americas and Asia-Pacific markets.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/project-overview" className="text-primary-foreground underline decoration-accent decoration-2 underline-offset-8 text-lg font-medium">
                View Project Overview
              </Link>
              <Link to="/contact" className="text-primary-foreground underline decoration-accent/80 decoration-2 underline-offset-8 text-lg font-medium">
                Investor Relations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 md:py-24">
        <h2 className="sr-only">Key Stats</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            ["320", "kilometers", "Length of the pipeline linking the Atlantic and Pacific coasts of Guatemala"],
            ["4.2", "million barrels per day", "Maximum transport capacity — enough to supply major global markets"],
            ["7,000", "nautical miles saved", "Shorter shipping routes compared to existing pathways"],
            ["52", "million tons CO₂", "Estimated emissions reduction over the first decade from shorter voyages"],
          ].map(([value, unit, description]) => (
            <div key={unit} className="p-6">
              <div className="text-4xl md:text-5xl font-bold font-mono text-foreground">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{unit}</div>
              <div className="mt-2 text-sm text-muted-foreground">{description}</div>
            </div>
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
        <figure className="grid grid-cols-2 gap-4">
          <div className="relative rounded-md overflow-hidden ring-1 ring-border">
            <img
              src="/lovable-uploads/ecc86140-db0c-403f-afd8-39e0d335afae.png"
              alt="Subsea pipelines across seabed with blue water"
              loading="lazy"
              decoding="async"
              width={1024}
              height={640}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" aria-hidden="true"></div>
          </div>
          <div className="relative rounded-md overflow-hidden ring-1 ring-border">
            <img
              src="/lovable-uploads/32bfb600-a4bc-4b4e-8558-2e7161c10c3a.png"
              alt="Diver welding a subsea pipeline section"
              loading="lazy"
              decoding="async"
              width={1024}
              height={640}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" aria-hidden="true"></div>
          </div>
        </figure>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">Strategic Importance</h2>
        <ul className="mt-4 grid gap-3 list-disc pl-6 text-muted-foreground max-w-4xl">
          <li><strong className="text-foreground">Enhanced Connectivity</strong> – Links Atlantic basin exporters with Asia-Pacific importers, bypassing traditional bottlenecks and shortening voyage distances.</li>
          <li><strong className="text-foreground">Time & Cost Efficiency</strong> – Reduces transit times and transportation costs, improving fleet utilization and market responsiveness.</li>
          <li><strong className="text-foreground">Energy Security</strong> – Diversifies global shipping lanes, reducing reliance on routes vulnerable to geopolitical tension or piracy.</li>
          <li><strong className="text-foreground">Sustainable Operations</strong> – Shorter routes, fuel‑efficient logistics, and modern environmental safeguards lower emissions.</li>
        </ul>
      </section>

      <section className="container mx-auto py-16 grid gap-6 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold font-display">Economic & Environmental Benefits</h2>
          <p className="text-muted-foreground max-w-3xl">TGP delivers durable advantages for markets and communities:</p>
          <ul className="mt-4 grid gap-2 list-disc pl-6 text-muted-foreground max-w-3xl">
            <li><strong className="text-foreground">Trade Growth</strong> – Strengthens competitiveness by improving access to key markets.</li>
            <li><strong className="text-foreground">Job Creation</strong> – Significant employment during construction and operations.</li>
            <li><strong className="text-foreground">Regional Development</strong> – Supports local economies and related infrastructure.</li>
            <li><strong className="text-foreground">Lower Emissions</strong> – Shorter voyages reduce carbon emissions over the project lifetime.</li>
            <li><strong className="text-foreground">Environmental Safeguards</strong> – Advanced monitoring and eco‑sensitive methods protect local environments.</li>
          </ul>
        </div>
        <figure className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 rounded-md overflow-hidden ring-1 ring-border">
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
          </div>
          <div className="relative rounded-md overflow-hidden ring-1 ring-border">
            <img
              src="/lovable-uploads/1717a91a-067b-437a-b5fe-685eba6a96ef.png"
              alt="Seabed pipeline installation near offshore structure"
              loading="lazy"
              decoding="async"
              width={1024}
              height={640}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" aria-hidden="true"></div>
          </div>
          <div className="relative rounded-md overflow-hidden ring-1 ring-border">
            <img
              src="/lovable-uploads/98b879f3-c004-4bb4-af5b-8f7e4ec0a5bc.png"
              alt="Field engineer inspecting onshore pipeline trench"
              loading="lazy"
              decoding="async"
              width={768}
              height={1024}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" aria-hidden="true"></div>
          </div>
        </figure>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">Global Market Relevance</h2>
        <p className="text-muted-foreground max-w-4xl mt-2">Asia-Pacific economies are among the largest consumers of energy in the world, with demand projected to continue growing. TGP’s strategic location and large-scale capacity position it as a competitive and secure supply route, complementing global energy infrastructure and supporting balanced market access.</p>
      </section>

      <section className="w-full bg-white">
        <div className="container mx-auto py-16 grid gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold font-display">Partners & Expertise</h2>
          <p className="text-muted-foreground max-w-3xl">The TGP is being delivered with experienced global leaders in engineering, construction, and infrastructure. Their track record in large‑scale energy transport systems ensures delivery to the highest international standards.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            <img src="/lovable-uploads/49c6311d-bb0e-4915-9176-adfda8bbfd78.png" loading="lazy" decoding="async" alt="Jacobs Engineering logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/c1d1c730-a6cf-477a-bb12-b4db3033d2db.png" loading="lazy" decoding="async" alt="ACS Group logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/5857b88d-1dde-4a29-84a5-5b0d503fb194.png" loading="lazy" decoding="async" alt="APC Construction Company logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/bdc2be86-a110-4459-8752-2fff7d46c00b.png" loading="lazy" decoding="async" alt="U.S. International Development Finance Corporation logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/4873978b-1b59-42df-81fe-1abd8e74a32e.png" loading="lazy" decoding="async" alt="Partner logo (navy and gray wordmark)" className="max-h-8 w-auto" />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">Project Status</h2>
        <p className="text-muted-foreground max-w-4xl mt-2">The project has undergone comprehensive technical, environmental, and social due diligence. Regulatory engagement and permitting are well advanced, and engineering designs have been completed for all major systems. Construction is scheduled in phased stages, with operational readiness targeted within the decade.</p>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">Why It Matters</h2>
        <p className="text-muted-foreground max-w-4xl mt-2">The Trans-Guatemala Inter-Oceanic Pipeline is a strategic asset for global trade. By reducing transport times, improving supply chain security, and aligning with sustainability goals, TGP will play a critical role in the future of energy logistics between the Americas and Asia-Pacific.</p>
      </section>


      <section className="container mx-auto py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">Public Contact Information</h2>
        <div className="mt-6 grid gap-3">
          <a href="mailto:info@tgppipeline.com" className="underline decoration-accent decoration-2 underline-offset-8 text-lg font-medium">General Inquiries: info@tgppipeline.com</a>
          <a href="mailto:media@tgppipeline.com" className="underline decoration-accent/80 decoration-2 underline-offset-8 text-lg font-medium">Media Requests: media@tgppipeline.com</a>
        </div>
      </section>
    </>
  );
};

export default Index;
