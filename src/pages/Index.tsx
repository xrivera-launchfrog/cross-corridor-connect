import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/og-route-hero.jpg";

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
        <div className="absolute inset-0 -z-10 opacity-60">
          <img src={heroImg} alt="Abstract corridor connecting Atlantic and Pacific" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              A Strategic Energy Corridor Linking the Atlantic and Pacific
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              The Trans-Guatemala Inter-Oceanic Pipeline (TGP) is a $7.52B, 320-kilometer, bidirectional pipeline system designed to shorten voyages by up to 7,000 nautical miles and reduce per-barrel shipping costs by 25–35%.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/project-overview">View Project Overview</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Investor Relations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 md:py-24">
        <h2 className="sr-only">Project at a Glance</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Length", "320 km"],
            ["Pipelines", "Three × 42-inch lines (bidirectional)"],
            ["Throughput", "Up to 4.2 million barrels per day"],
            ["Terminals", "VLCC-compatible monobuoys, Atlantic & Pacific"],
            ["Finance", "Senior loan commitment of $7.52B"],
            ["Impact", "Up to 40 days average voyage time reduction"],
          ].map(([title, value]) => (
            <article key={title} className="rounded-lg border p-6 shadow-sm">
              <div className="text-sm text-muted-foreground">{title}</div>
              <div className="mt-2 text-xl font-semibold">{value}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-16 grid gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">What TGP Solves</h2>
        <p className="text-muted-foreground max-w-3xl">
          TGP provides a secure, efficient alternative to congested or high-risk maritime chokepoints, linking Atlantic basin producers directly to Asia-Pacific demand. The system improves fleet utilization, lowers logistics costs, and enhances energy security.
        </p>
      </section>

      <section className="container mx-auto py-16 grid gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Economic & Environmental Commitments</h2>
        <p className="text-muted-foreground max-w-3xl">
          TGP advances national and regional development through job creation and targeted local procurement, while integrating leak detection, eco-sensitive construction, and operational practices projected to reduce CO₂ emissions by an estimated 52 million tons over the first decade through shorter shipping distances.
        </p>
      </section>

      <section className="container mx-auto py-16 grid gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Partners</h2>
        <p className="text-muted-foreground max-w-3xl">Global leaders in engineering, EPC, construction, and finance support delivery and risk management across the project lifecycle.</p>
        <Button asChild variant="link">
          <Link to="/partners">Learn more: Partners</Link>
        </Button>
      </section>

      <section className="container mx-auto py-16 grid gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Latest Updates</h2>
        <ul className="grid gap-4">
          <li className="text-muted-foreground">Program milestones, institutional support notices, and technical briefings.</li>
        </ul>
        <Button asChild variant="link">
          <Link to="/media">See all: Media</Link>
        </Button>
      </section>

      <section className="container mx-auto py-16 md:py-24">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" variant="hero">
            <Link to="/project-brief">Download the Project Brief</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Contact Investor Relations</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
