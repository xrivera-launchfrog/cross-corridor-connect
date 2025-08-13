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

      <div className="space-y-0">
        {/* Corporate Profile */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <article className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-start">
              <div className="md:col-span-1">
                <h2 className="text-3xl md:text-4xl font-semibold">Corporate Profile</h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Registered in Panama with offices in Guatemala, Panama, and the United States, TGP is developing a premiere inter‑oceanic energy corridor connecting the Atlantic and Pacific Oceans.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <article className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-start">
              <div className="md:col-span-1">
                <h2 className="text-3xl md:text-4xl font-semibold">Mission & Values</h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Our mission is to deliver a safer, faster, and more sustainable route for crude oil and refined products — underpinned by Integrity, Excellence, Sustainability, and Partnership.
                </p>
              </div>
            </article>
          </div>
        </section>
        
        {/* Community Engagement */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <article className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-start">
              <div className="md:col-span-1">
                <h2 className="text-3xl md:text-4xl font-semibold">Community Engagement</h2>
              </div>
              <div className="md:col-span-3">
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                    TGP prioritizes meaningful partnerships with indigenous communities throughout Guatemala. Our commitment extends beyond regulatory compliance to genuine collaboration, cultural respect, and shared prosperity.
                  </p>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                    Through transparent communication and inclusive decision-making processes, we work to create lasting positive impacts that honor indigenous heritage while supporting sustainable development goals.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Community Image Block */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <figure className="rounded-lg overflow-hidden ring-1 ring-border">
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

        {/* Leadership & Team */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <article className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-start mb-12">
              <div className="md:col-span-1">
                <h2 className="text-3xl md:text-4xl font-semibold">Leadership & Team</h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                  TGP is led by a multidisciplinary leadership team with deep experience in large-scale energy infrastructure, governance, and stakeholder engagement across the Americas.
                </p>

                <div className="grid gap-8 md:gap-12 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Board of Directors</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong className="text-foreground">George E. Mesa</strong> — Chairman</li>
                      <li><strong className="text-foreground">Xavier Rivera</strong> — Chief Executive Officer</li>
                      <li><strong className="text-foreground">Thomas J. Dimitroff</strong> — EVP Legal</li>
                      <li><strong className="text-foreground">Dr. Peter S. Watson</strong> — EVP Policy</li>
                      <li><strong className="text-foreground">Timothy J. Bluish</strong></li>
                      <li><strong className="text-foreground">Louis Jimenez</strong></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Advisory Board</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong className="text-foreground">Amb. Hans H. Hertell</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Governance Framework */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <article className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-start">
              <div className="md:col-span-1">
                <h2 className="text-3xl md:text-4xl font-semibold">Governance Framework</h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                  TGP maintains board, audit, ESG committees, and procurement oversight to uphold transparency and accountability across the project lifecycle.
                </p>
              </div>
            </article>
          </div>
        </section>
        
        {/* Corporate Ethics */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <article className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-start">
              <div className="md:col-span-1">
                <h2 className="text-3xl md:text-4xl font-semibold">Corporate Ethics</h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                  We adhere to strict anti‑bribery and anti‑corruption policies and a comprehensive code of conduct aligned with international standards.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>

      <section className="container mx-auto py-8 md:py-16">
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="underline decoration-accent decoration-2 underline-offset-8 text-lg font-medium">Contact</Link>
          <Link to="/project-overview" className="underline decoration-accent/80 decoration-2 underline-offset-8 text-lg font-medium">Project Overview</Link>
        </div>
      </section>
    </main>
  );
}
