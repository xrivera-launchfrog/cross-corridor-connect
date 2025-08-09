import { Helmet } from "react-helmet-async";

const articles = [
  {
    title: "Trans-Guatemala Pipeline: Program Phasing and Early Works",
    date: "2025-07-30",
    summary: "Outline of phased EPC mobilization, early works, and supply chain readiness.",
  },
  {
    title: "Institutional Support: Risk Insurance & Minority Participation",
    date: "2025-06-26",
    summary: "Update on political risk insurance pathways and minority financial participation (subject to approvals).",
  },
  {
    title: "Technical Note: Monobuoy & FSPU Integration for VLCC Turnaround",
    date: "2025-06-18",
    summary: "Overview of metering, custody transfer, and blending strategy at offshore terminals.",
  },
];

export default function Media() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "NewsArticle",
        headline: a.title,
        datePublished: a.date,
        description: a.summary,
      },
    })),
  };

  return (
    <main>
      <Helmet>
        <title>Media & Updates | TGP</title>
        <meta name="description" content="Stay informed about program milestones, institutional engagements, and technical progress." />
        <link rel="canonical" href="/media" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="container mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Media & Updates</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">Stay informed about program milestones, institutional engagements, and technical progress.</p>
        <div className="mt-8 grid gap-6">
          {articles.map((a) => (
            <article key={a.title} className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold">{a.title}</h2>
              <div className="text-sm text-muted-foreground">{new Date(a.date).toLocaleDateString()}</div>
              <p className="mt-2 text-muted-foreground">{a.summary}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm">Press/Interview Requests: <a href="mailto:media@tgppipeline.com" className="underline">media@tgppipeline.com</a></p>
      </section>
    </main>
  );
}
