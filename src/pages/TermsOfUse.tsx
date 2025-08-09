import { Helmet } from "react-helmet-async";

export default function TermsOfUse() {
  return (
    <main>
      <Helmet>
        <title>Terms of Use | TGP</title>
        <meta name="description" content="Website terms including informational purpose, intellectual property, acceptable use, disclaimers, and jurisdiction." />
        <link rel="canonical" href="/terms-of-use" />
      </Helmet>

      <section className="container mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Terms of Use</h1>
        <p className="mt-4 text-sm text-muted-foreground">Effective Date: August 9, 2025</p>
        <div className="prose prose-neutral max-w-none mt-6">
          <p><strong>1. Acceptance of Terms</strong><br/>By accessing this website, you agree to these Terms. If you do not agree, do not use the site.</p>
          <p><strong>2. Informational Purpose Only</strong><br/>Content is for informational purposes and does not constitute an offer to sell or a solicitation of an offer to buy any security or financial instrument.</p>
          <p><strong>3. Intellectual Property</strong><br/>All content, logos, graphics, and layouts are owned by TGP or licensed to us. You may not reproduce or distribute without prior written consent, except for personal, non-commercial viewing.</p>
          <p><strong>4. Acceptable Use</strong><br/>You agree not to misuse the site, attempt to breach security, interfere with operation, or submit unlawful content.</p>
          <p><strong>5. Third-Party Links</strong><br/>We may reference partners or institutions. We are not responsible for third-party sites or content.</p>
          <p><strong>6. Disclaimers</strong><br/>The site is provided “as is” without warranties of any kind. We disclaim all implied warranties to the fullest extent permitted by law.</p>
          <p><strong>7. Limitation of Liability</strong><br/>To the maximum extent allowed by law, TGP will not be liable for indirect, incidental, or consequential damages arising from your use of the site.</p>
          <p><strong>8. Indemnification</strong><br/>You agree to indemnify and hold harmless TGP from claims related to your misuse of the site.</p>
          <p><strong>9. Governing Law & Jurisdiction</strong><br/>Guatemala law; courts in Guatemala City have exclusive jurisdiction.</p>
          <p><strong>10. Changes</strong><br/>We may modify these Terms at any time by posting an updated version with a new Effective Date.</p>
          <p><strong>11. Contact</strong><br/>legal@tgppipeline.com</p>
        </div>
      </section>
    </main>
  );
}
