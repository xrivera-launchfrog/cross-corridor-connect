import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <main>
      <Helmet>
        <title>Contact | TGP</title>
        <meta name="description" content="General inquiries: info@tgpipe.com. Media: media@tgpipe.com." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <section className="w-full">
        <div className="grid md:grid-cols-2 min-h-[70vh]">
          <figure className="relative h-64 md:h-auto">
            <img
              src="/lovable-uploads/1ce8b9ad-746f-4d09-b817-2d124d0dd188.png"
              alt="Pipeline traversing rolling green highlands under cloudy sky"
              loading="lazy"
              decoding="async"
              width={1280}
              height={720}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </figure>

          <div className="flex items-center">
            <div className="container mx-auto py-12 md:py-20">
              <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
              <div id="investor-access" className="mt-6 max-w-xl rounded-md ring-1 ring-border p-6 bg-card">
                <h2 className="text-2xl font-semibold">Public Contact Information</h2>
                <p className="mt-2 text-muted-foreground">For inquiries, please reach out via email. We typically respond within 2 business days.</p>
                <div className="mt-4 grid gap-2">
                  <a
                    href="mailto:info@tgpipe.com"
                    className="inline-flex items-center underline decoration-accent decoration-2 underline-offset-8 text-lg font-medium"
                  >
                    info@tgpipe.com
                  </a>
                  <a
                    href="mailto:media@tgpipe.com"
                    className="inline-flex items-center underline decoration-accent/80 decoration-2 underline-offset-8 text-lg font-medium"
                  >
                    media@tgpipe.com
                  </a>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Information on this site is for informational purposes only and does not constitute an offer to sell securities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
