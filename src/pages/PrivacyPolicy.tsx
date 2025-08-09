import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <main>
      <Helmet>
        <title>Privacy Policy | TGP</title>
        <meta name="description" content="How TGP collects, uses, shares, and protects personal information when you visit our website or contact us." />
        <link rel="canonical" href="/privacy-policy" />
      </Helmet>

      <section className="container mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Effective Date: August 9, 2025</p>
        <div className="prose prose-neutral max-w-none mt-6">
          <p><strong>1. Introduction</strong><br/>This Privacy Policy explains how Trans-Guatemala Inter-Oceanic Pipeline (TGP) (“we”, “our”, “us”) collects, uses, shares, and protects personal information when you visit our website or contact us.</p>
          <p><strong>2. Information We Collect</strong><br/>Information you provide: name, organization, email, phone, and message content submitted via forms or email. Technical data: IP address, device/browser type, pages visited, and timestamps (via standard server logs and cookies). Cookies: session cookies to maintain basic site functionality and analytics cookies to understand traffic patterns.</p>
          <p><strong>3. How We Use Information</strong><br/>Responding to inquiries; operating and improving the website; compliance with legal obligations.</p>
          <p><strong>4. Legal Bases (where applicable)</strong><br/>Performance of a contract; Legitimate interests; Consent (where required for analytics cookies).</p>
          <p><strong>5. Sharing of Information</strong><br/>We may share information with service providers under confidentiality obligations and to comply with law.</p>
          <p><strong>6. International Transfers</strong><br/>Data may be processed in countries with different data protection laws; we use reasonable safeguards.</p>
          <p><strong>7. Retention</strong><br/>We retain personal information only as long as necessary for the purposes described or as required by law.</p>
          <p><strong>8. Your Rights</strong><br/>Depending on your jurisdiction, you may have rights to access, correct, delete, or object to certain processing. Contact: privacy@tgppipeline.com.</p>
          <p><strong>9. Security</strong><br/>We use reasonable administrative, technical, and physical safeguards appropriate to the nature of the data and our operations.</p>
          <p><strong>10. Children</strong><br/>This site is not intended for children under 16. We do not knowingly collect their data.</p>
          <p><strong>11. Changes</strong><br/>We may update this Policy. The “Effective Date” will reflect the latest version.</p>
          <p><strong>12. Contact</strong><br/>privacy@tgppipeline.com</p>
        </div>
      </section>
    </main>
  );
}
