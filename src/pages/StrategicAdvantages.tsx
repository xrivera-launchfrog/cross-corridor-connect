import { Helmet } from "react-helmet-async";

export default function StrategicAdvantages() {
  return (
    <main>
      <Helmet>
        <title>Strategic Advantages | TGP</title>
        <meta name="description" content="A direct Atlantic–Pacific energy corridor creating schedule certainty, reducing risk, and cutting time and costs." />
        <link rel="canonical" href="/strategic-advantages" />
      </Helmet>

      <section className="container mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Strategic Advantages</h1>
        <div className="mt-8 grid gap-8 max-w-4xl">
          <article>
            <h2 className="text-xl font-semibold">Alternate Maritime Route</h2>
            <p className="mt-2 text-muted-foreground">Provides a direct Atlantic–Pacific energy corridor, creating schedule certainty and reducing exposure to constrained canals and high-risk sea lanes.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Time & Cost Efficiency</h2>
            <p className="mt-2 text-muted-foreground">Cuts up to 7,000 nautical miles on selected routes and lowers per-barrel transport costs by 25–35%, improving competitiveness of Atlantic basin exporters.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Energy Security</h2>
            <p className="mt-2 text-muted-foreground">Diversifies global routes, mitigating piracy and geopolitical chokepoint risks for more reliable supply chains.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Operational Flexibility</h2>
            <p className="mt-2 text-muted-foreground">Bidirectional flow and terminal blending support dynamic market conditions, seasonal swings, and product mix changes.</p>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Commercial Impact</h2>
            <p className="mt-2 text-muted-foreground">Helps level the playing field with Middle East suppliers by compressing transit times and improving arrival windows into Asia-Pacific.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
