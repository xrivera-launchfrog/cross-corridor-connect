import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main>
      <Helmet>
        <title>About & Governance | TGP</title>
        <meta name="description" content="Corporate profile, governance, mission, and leadership of the Trans Guatemala Pipeline (TGP)." />
        <link rel="canonical" href="/about" />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/798ab50b-fce8-4593-a0b0-0366424aeeb8.png"
            alt="Guatemala regional landscape context"
            className="w-full h-full object-cover"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-primary/80" aria-hidden="true"></div>
        <div className="container mx-auto relative z-20 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-semibold font-display text-primary-foreground">About & Governance</h1>
          <p className="mt-4 text-primary-foreground/90 max-w-2xl">Integrity, excellence, sustainability, and partnership guide the TGP program.</p>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-20">
        <div className="grid gap-12 lg:gap-16">
          {/* Corporate Profile - Full width */}
          <article className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Corporate Profile</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Registered in Panama with offices in Guatemala, Panama, and the United States, TGP is developing a premiere inter‑oceanic energy corridor connecting the Atlantic and Pacific Oceans.</p>
          </article>

          {/* Mission & Values and Community Engagement - Two columns */}
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <article>
              <h2 className="text-2xl font-semibold mb-4">Mission & Values</h2>
              <p className="text-muted-foreground leading-relaxed">Our mission is to deliver a safer, faster, and more sustainable route for crude oil and refined products — underpinned by Integrity, Excellence, Sustainability, and Partnership.</p>
            </article>
            
            <article>
              <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TGP prioritizes meaningful partnerships with indigenous communities throughout Guatemala. Our commitment extends beyond regulatory compliance to genuine collaboration, cultural respect, and shared prosperity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through transparent communication and inclusive decision-making processes, we work to create lasting positive impacts that honor indigenous heritage while supporting sustainable development goals.
              </p>
            </article>
          </div>

          {/* Community Image - Centered below text */}
          <figure className="rounded-md overflow-hidden ring-1 ring-border max-w-3xl mx-auto">
            <img
              src="/lovable-uploads/ecd31ca5-aece-49f7-a409-fb976b8af086.png"
              alt="TGP leadership meeting with indigenous community representatives in Guatemala"
              loading="lazy"
              decoding="async"
              width={768}
              height={576}
              className="w-full h-auto"
            />
            <figcaption className="sr-only">TGP team collaborating with indigenous community leaders</figcaption>
          </figure>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-16">
        <h2 className="text-2xl font-semibold">Leadership & Team</h2>
        <div className="mt-6">
          <p className="text-muted-foreground max-w-prose">
            TGP is led by a multidisciplinary leadership team with deep experience in large-scale energy infrastructure, governance, and stakeholder engagement across the Americas.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-foreground">Board of Directors</h3>
            <ul className="mt-3 grid gap-2 text-muted-foreground max-w-prose list-disc pl-6">
              <li><strong className="text-foreground">George E. Mesa</strong> — Chairman</li>
              <li><strong className="text-foreground">Xavier Rivera</strong> — Chief Executive Officer</li>
              <li><strong className="text-foreground">Thomas J. Dimitroff</strong> — EVP Legal</li>
              <li><strong className="text-foreground">Dr. Peter S. Watson</strong> — EVP Policy</li>
              <li><strong className="text-foreground">Timothy J. Bluish</strong></li>
              <li><strong className="text-foreground">Louis Jimenez</strong></li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-foreground">Advisory Board</h3>
            <ul className="mt-3 grid gap-2 text-muted-foreground max-w-prose list-disc pl-6">
              <li><strong className="text-foreground">Amb. Hans H. Hertell</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-8 md:py-14 grid gap-8 md:grid-cols-2 items-start">
        <article>
          <h2 className="text-2xl font-semibold">Governance Framework</h2>
          <p className="mt-3 text-muted-foreground max-w-prose">TGP maintains board, audit, ESG committees, and procurement oversight to uphold transparency and accountability across the project lifecycle.</p>
        </article>
        <article>
          <h2 className="text-2xl font-semibold">Corporate Ethics</h2>
          <p className="mt-3 text-muted-foreground max-w-prose">We adhere to strict anti‑bribery and anti‑corruption policies and a comprehensive code of conduct aligned with international standards.</p>
        </article>
      </section>

      <section className="container mx-auto py-8 md:py-16">
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="underline decoration-accent decoration-2 underline-offset-8 text-lg font-medium">Contact</Link>
          <Link to="/project-overview" className="underline decoration-accent/80 decoration-2 underline-offset-8 text-lg font-medium">Project Overview</Link>
        </div>
      </section>
    </main>
  );
}
