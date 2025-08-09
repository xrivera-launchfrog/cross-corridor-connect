import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <main>
      <Helmet>
        <title>Contact | TGP</title>
        <meta name="description" content="For all inquiries, email investorrelations@tgppipeline.com." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <section className="container mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
        <figure className="mt-6 rounded-md overflow-hidden ring-1 ring-border">
          <img
            src="/lovable-uploads/1ce8b9ad-746f-4d09-b817-2d124d0dd188.png"
            alt="Pipeline traversing rolling green highlands under cloudy sky"
            loading="lazy"
            decoding="async"
            width={1280}
            height={720}
            className="w-full h-auto"
          />
        </figure>

        <div className="mt-8 max-w-2xl rounded-md ring-1 ring-border p-6 bg-white">
          <h2 className="text-2xl font-semibold">Investor Relations</h2>
          <p className="mt-2 text-muted-foreground">For all inquiries, please email our team directly. We typically respond within 2 business days.</p>
          <a
            href="mailto:investorrelations@tgppipeline.com"
            className="mt-4 inline-flex items-center underline decoration-accent decoration-2 underline-offset-8 text-lg font-medium"
          >
            investorrelations@tgppipeline.com
          </a>
          <p className="mt-4 text-sm text-muted-foreground">Information on this site is for informational purposes only and does not constitute an offer to sell securities.</p>
        </div>
      </section>
    </main>
  );
}
