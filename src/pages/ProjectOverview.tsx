import { Helmet } from "react-helmet-async";
import figPumping from "@/assets/fig-pumping-station.jpg";

export default function ProjectOverview() {
  return (
    <main>
      <Helmet>
        <title>Project Overview | TGP</title>
        <meta name="description" content="TGP is a 320 km bidirectional pipeline system with VLCC-compatible terminals and up to 4.2M bpd throughput." />
        <link rel="canonical" href="/project-overview" />
      </Helmet>

      <section className="container mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Project Overview</h1>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          The Trans-Guatemala Inter-Oceanic Pipeline (TGP) is a cross-continental energy corridor spanning 320 kilometers, designed for bidirectional transport of crude oil and refined products between Guatemala’s Atlantic and Pacific coasts. Three parallel 42-inch pipelines, advanced pumping stations, and VLCC-compatible monobuoy terminals enable rapid, secure, and scalable throughput of up to 4.2 million barrels per day.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 items-start">
          <div className="max-w-prose text-muted-foreground">
            <p>
              Designed for institutional-grade reliability, the corridor integrates sectional block valves, surge control, and custody transfer metering to ensure safe, efficient throughput under variable market conditions.
            </p>
            <p className="mt-4">
              Centralized SCADA provides real-time leak detection and geohazard monitoring with redundant power and communications.
            </p>
          </div>
          <figure className="border p-2 bg-card">
            <img
              src={figPumping}
              alt="Subdued engineering view of a pipeline pumping station with industrial piping and valves"
              loading="lazy"
              decoding="async"
              width={1024}
              height={640}
              className="w-full h-auto"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">Representative pumping station equipment (illustrative).</figcaption>
          </figure>
        </div>

        <h2 className="mt-10 text-2xl font-semibold">Objectives</h2>
        <ol className="mt-4 list-decimal list-inside space-y-2 text-muted-foreground max-w-3xl">
          <li>Shorten voyage distances and times for Atlantic basin exports to Asia-Pacific.</li>
          <li>Reduce per-barrel logistics costs while improving fleet utilization.</li>
          <li>Enhance energy security by bypassing congestion and piracy-prone routes.</li>
        </ol>

        <h2 className="mt-10 text-2xl font-semibold">System Components</h2>
        <ul className="mt-4 space-y-4 text-muted-foreground max-w-3xl">
          <li><strong>Pipelines:</strong> Three × 42″ bidirectional lines with sectional block valves for isolation and maintenance.</li>
          <li><strong>Terminals:</strong> Offshore monobuoy systems on both coasts with metering, custody transfer, and blending capability.</li>
          <li><strong>Pumping & Storage:</strong> Multi-stage pumping with surge control, power redundancy, and floating storage & processing unit (FSPU) integration.</li>
          <li><strong>Control & Safety:</strong> Central SCADA with real-time leak detection, pressure/temperature profiling, and geohazard monitoring.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">Program Status</h2>
        <ul className="mt-4 space-y-2 text-muted-foreground max-w-3xl">
          <li>Financial: Senior loan commitment of <strong>$7.52B</strong>.</li>
          <li>Delivery: Developed in approved phases with leading global partners.</li>
          <li>Land & Permitting: Corridor due diligence completed; phased approvals sequencing in place.</li>
          <li>Next Milestones: EPC mobilization, procurement, and early works.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">Key Outcomes</h2>
        <ul className="mt-4 space-y-2 text-muted-foreground max-w-3xl">
          <li>Up to <strong>40 days</strong> average voyage time reduction.</li>
          <li><strong>25–35%</strong> per-barrel transport cost savings (route-dependent).</li>
          <li>Increased market resilience and supply security.</li>
        </ul>
      </section>
    </main>
  );
}
