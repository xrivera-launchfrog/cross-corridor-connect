import { Helmet } from "react-helmet-async";

export default function LegalDisclaimer() {
  return (
    <main>
      <Helmet>
        <title>Legal & Regulatory Disclaimer | TGP</title>
        <meta name="description" content="Informational site; no offer to sell securities. Forward-looking statements involve risks. Contact legal@tgppipeline.com." />
        <link rel="canonical" href="/legal-disclaimer" />
      </Helmet>

      <section className="container mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Legal & Regulatory Disclaimer</h1>
        <div className="prose prose-neutral max-w-none mt-6">
          <p>This website is for informational purposes only. It does not constitute an offer to sell or a solicitation of an offer to buy any securities, nor shall there be any sale of securities in any jurisdiction in which such offer, solicitation, or sale would be unlawful prior to registration or qualification under the securities laws of that jurisdiction.</p>
          <p>Any potential financing of the Trans-Guatemala Inter-Oceanic Pipeline (TGP) may be conducted under exemptions from registration, including, where applicable, Regulation D of the U.S. Securities Act of 1933, as amended. Participation is limited to eligible investors who satisfy all applicable regulatory requirements. Any indication of interest does not involve any obligation or commitment of any kind.</p>
          <p>Forward-looking statements are subject to risks and uncertainties that could cause actual outcomes to differ materially. No assurance can be given that any expectations will prove accurate. We undertake no obligation to update forward-looking statements, except as required by law.</p>
          <p>Questions: <a href="mailto:legal@tgppipeline.com">legal@tgppipeline.com</a></p>
        </div>
      </section>
    </main>
  );
}
