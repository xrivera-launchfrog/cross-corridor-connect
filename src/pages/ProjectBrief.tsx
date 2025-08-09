import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

export default function ProjectBrief() {
  return (
    <main>
      <Helmet>
        <title>Project Brief | TGP</title>
        <meta name="description" content="Downloadable overview: scope, throughput, investment, strategic rationale, system highlights, and contacts." />
        <link rel="canonical" href="/project-brief" />
      </Helmet>

      <section className="container mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Project Brief (Downloadable Overview)</h1>
        <div className="mt-6 grid gap-6 max-w-3xl text-muted-foreground">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Overview</h2>
            <ul className="mt-2 space-y-1">
              <li><strong>Project:</strong> Trans-Guatemala Inter-Oceanic Pipeline (TGP)</li>
              <li><strong>Scope:</strong> 320 km; 3 × 42″ bidirectional pipelines; VLCC-compatible monobuoy terminals; advanced pumping/storage.</li>
              <li><strong>Throughput:</strong> Up to 4.2M bpd</li>
              <li><strong>Investment:</strong> $7.52B senior loan commitment</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Strategic Rationale</h2>
            <ul className="mt-2 space-y-1">
              <li>Reduces selected routes by up to 7,000 nautical miles and average voyage times by up to 40 days.</li>
              <li>Lowers per-barrel shipping costs by 25–35%, improving competitiveness of Atlantic basin producers.</li>
              <li>Bypasses chokepoints and piracy corridors, strengthening energy security.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">System Highlights</h2>
            <ul className="mt-2 space-y-1">
              <li>SCADA-enabled monitoring, real-time leak detection, geohazard surveillance.</li>
              <li>Terminal blending, custody transfer metering, and FSPU integration for efficient VLCC turnaround.</li>
              <li>Phased delivery with global partners in engineering, EPC, construction, and finance.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Economic & Environmental</h2>
            <ul className="mt-2 space-y-1">
              <li>Job creation, local procurement, skills transfer, and regional investment stimulus.</li>
              <li>Eco-sensitive construction. Shorter shipping routes projected to reduce CO₂ emissions by ~52M tons over 10 years (assumptions apply).</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Contacts</h2>
            <ul className="mt-2 space-y-1">
              <li>Investor Relations: investorrelations@tgppipeline.com</li>
              <li>Media: media@tgppipeline.com</li>
              <li>General: info@tgppipeline.com</li>
            </ul>
          </div>
          <div className="pt-2">
            <Button variant="hero" onClick={() => alert("PDF download coming soon. If you have a PDF, share it and I’ll wire it up.")}>Download PDF</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
