import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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

      <section className="container mx-auto py-16 grid gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">Partners</h2>
        <p className="text-muted-foreground max-w-3xl">Global leaders in engineering, EPC, construction, and finance support delivery and risk management across the project lifecycle.</p>
        <Button asChild variant="link">
          <Link to="/partners">Learn more: Partners</Link>
        </Button>
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
