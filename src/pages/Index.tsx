import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-route-map.jpg";

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
        <div className="absolute inset-0 -z-20">
          <img src={heroImg} alt="Aerial route map linking Atlantic and Pacific" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 -z-10 bg-primary/80" aria-hidden="true"></div>
        <div className="container mx-auto py-24 md:py-36">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            ["Length", "320 km"],
            ["Pipelines", "Three × 42-inch lines (bidirectional)"],
            ["Throughput", "Up to 4.2 million barrels per day"],
            ["Terminals", "VLCC-compatible monobuoys, Atlantic & Pacific"],
            ["Finance", "Senior loan commitment of $7.52B"],
            ["Impact", "Up to 40 days average voyage time reduction"],
          ].map(([title, value]) => (
            <div key={title} className="p-6">
              <div className="text-2xl md:text-3xl font-bold font-mono text-foreground">{value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-16 grid gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">What TGP Solves</h2>
        <p className="text-muted-foreground max-w-3xl">
          TGP provides a secure, efficient alternative to congested or high-risk maritime chokepoints, linking Atlantic basin producers directly to Asia-Pacific demand. The system improves fleet utilization, lowers logistics costs, and enhances energy security.
        </p>
      </section>

      <section className="container mx-auto py-16 grid gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold font-display">Economic & Environmental Commitments</h2>
        <p className="text-muted-foreground max-w-3xl">
          TGP advances national and regional development through job creation and targeted local procurement, while integrating leak detection, eco-sensitive construction, and operational practices projected to reduce CO₂ emissions by an estimated 52 million tons over the first decade through shorter shipping distances.
        </p>
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
        <Button asChild variant="link">
          <Link to="/media">See all: Media</Link>
        </Button>
      </section>

      <section className="container mx-auto py-16 md:py-24">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/project-brief" className="underline decoration-accent decoration-2 underline-offset-8 text-lg font-medium">
            Download the Project Brief
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
