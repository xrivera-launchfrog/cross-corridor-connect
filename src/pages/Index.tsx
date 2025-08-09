import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const heroImg = "/lovable-uploads/1ce8b9ad-746f-4d09-b817-2d124d0dd188.png";

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
          <img src={heroImg} alt="Aerial route map linking Atlantic and Pacific" className="w-full h-full object-cover" decoding="async" />
        </div>
        <div className="absolute inset-0 z-10 bg-primary/80" aria-hidden="true"></div>
        <div className="container mx-auto relative z-20 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight font-display text-primary-foreground">
              A Strategic Energy Corridor Linking the Atlantic and Pacific
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90">
              The Trans-Guatemala Inter-Oceanic Pipeline (TGP) is a $7.52B, 320-kilometer, bidirectional pipeline system designed to shorten voyages by up to 7,000 nautical miles and reduce per-barrel shipping costs by 25–35%.
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
        <h2 className="sr-only">Project at a Glance</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            ["Pipeline Length", "320 km"],
            ["Max Throughput", "4.2M bpd"],
            ["Investment", "$7.52B"],
            ["Voyage Reduction", "40 days"],
            ["Cost Savings", "25–35%"],
          ].map(([title, value]) => (
            <div key={title} className="p-6">
              <div className="text-2xl md:text-3xl font-bold font-mono text-foreground">{value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-16 grid gap-6 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold font-display">What TGP Solves</h2>
          <p className="text-muted-foreground max-w-3xl">
            TGP provides a secure, efficient alternative to congested or high-risk maritime chokepoints, linking Atlantic basin producers directly to Asia-Pacific demand. The system improves fleet utilization, lowers logistics costs, and enhances energy security.
          </p>
        </div>
        <figure className="rounded-md overflow-hidden ring-1 ring-border">
          <img
            src="/lovable-uploads/c0ea67d6-72d8-49f1-8a5d-1bd7f92fc433.png"
            alt="Aerial view of interconnected corridors across mountainous terrain"
            loading="lazy"
            decoding="async"
            width={1024}
            height={640}
            className="w-full h-auto"
          />
        </figure>
      </section>

      <section className="container mx-auto py-16 grid gap-6 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold font-display">Economic & Environmental Commitments</h2>
          <p className="text-muted-foreground max-w-3xl">
            TGP advances national and regional development through job creation and targeted local procurement, while integrating leak detection, eco-sensitive construction, and operational practices projected to reduce CO₂ emissions by an estimated 52 million tons over the first decade through shorter shipping distances.
          </p>
        </div>
        <figure className="rounded-md overflow-hidden ring-1 ring-border">
          <img
            src="/lovable-uploads/910fd229-a608-4fc8-bbec-83827c1477c7.png"
            alt="Aerial mosaic of agricultural plots near proposed corridor"
            loading="lazy"
            decoding="async"
            width={1024}
            height={640}
            className="w-full h-auto"
          />
        </figure>
      </section>

      <section className="w-full bg-white">
        <div className="container mx-auto py-16 grid gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold font-display">Partners</h2>
          <p className="text-muted-foreground max-w-3xl">Global leaders in engineering, EPC, construction, and finance support delivery and risk management across the project lifecycle.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            <img src="/lovable-uploads/49c6311d-bb0e-4915-9176-adfda8bbfd78.png" loading="lazy" decoding="async" alt="Jacobs Engineering logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/c1d1c730-a6cf-477a-bb12-b4db3033d2db.png" loading="lazy" decoding="async" alt="ACS Group logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/5857b88d-1dde-4a29-84a5-5b0d503fb194.png" loading="lazy" decoding="async" alt="APC Construction Company logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/bdc2be86-a110-4459-8752-2fff7d46c00b.png" loading="lazy" decoding="async" alt="U.S. International Development Finance Corporation logo" className="max-h-8 w-auto" />
            <img src="/lovable-uploads/4873978b-1b59-42df-81fe-1abd8e74a32e.png" loading="lazy" decoding="async" alt="Partner logo (navy and gray wordmark)" className="max-h-8 w-auto" />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 grid gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">Latest Updates</h2>
        <ul className="grid gap-4">
          <li className="text-muted-foreground">Program milestones, institutional support notices, and technical briefings.</li>
        </ul>
        <p className="text-sm text-muted-foreground">Press inquiries: media@tgppipeline.com</p>
      </section>

      <section className="container mx-auto py-16 md:py-24">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/project-overview" className="underline decoration-accent decoration-2 underline-offset-8 text-lg font-medium">
            Explore the Project Overview
          </Link>
          <Link to="/contact" className="underline decoration-accent/80 decoration-2 underline-offset-8 text-lg font-medium">
            Contact Investor Relations
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
