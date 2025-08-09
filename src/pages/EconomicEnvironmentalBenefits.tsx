import { Helmet } from "react-helmet-async";

export default function EconomicEnvironmentalBenefits() {
  return (
    <main>
      <Helmet>
        <title>Economic & Environmental Benefits | TGP</title>
        <meta name="description" content="Jobs, local procurement, and eco-sensitive practices with real-time monitoring; shorter routes projected to reduce CO₂ by ~52M tons in a decade." />
        <link rel="canonical" href="/economic-environmental-benefits" />
      </Helmet>

      <section className="container mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Economic & Environmental Benefits</h1>
        <div className="mt-8 grid gap-10 max-w-4xl">
          <article>
            <h2 className="text-xl font-semibold">Economic Development</h2>
            <ul className="mt-3 list-disc list-inside text-muted-foreground space-y-1">
              <li>Thousands of direct and indirect jobs during construction and operations.</li>
              <li>Local procurement and skills transfer programs.</li>
              <li>Attraction of complementary logistics, storage, and services investments.</li>
            </ul>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Environmental Stewardship</h2>
            <ul className="mt-3 list-disc list-inside text-muted-foreground space-y-1">
              <li>Real-time leak detection and continuous monitoring through SCADA.</li>
              <li>Eco-sensitive construction practices, erosion control, and habitat restoration.</li>
              <li>Shorter shipping routes projected to reduce CO₂ emissions by ~<strong>52 million tons</strong> over 10 years (routing assumption dependent).</li>
            </ul>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Community & Governance</h2>
            <ul className="mt-3 list-disc list-inside text-muted-foreground space-y-1">
              <li>Stakeholder engagement, grievance mechanisms, and transparent reporting.</li>
              <li>Compliance with national law and applicable international standards.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
