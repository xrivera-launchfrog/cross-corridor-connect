import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <div className="text-lg font-semibold text-primary font-display">TGP</div>
          <p className="text-sm text-muted-foreground max-w-xs">Trans-Guatemala Inter-Oceanic Pipeline — a strategic energy corridor linking the Atlantic and Pacific.</p>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/project-overview" className="text-muted-foreground hover:text-foreground">Project Overview</Link></li>
            <li><Link to="/partners" className="text-muted-foreground hover:text-foreground">Partners</Link></li>
            <li><Link to="/media" className="text-muted-foreground hover:text-foreground">Media</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Legal</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className="text-muted-foreground hover:text-foreground">Terms of Use</Link></li>
            <li><Link to="/legal-disclaimer" className="text-muted-foreground hover:text-foreground">Legal Disclaimer</Link></li>
          </ul>
        </div>

        <div className="space-y-2 text-sm">
          <div className="text-sm font-semibold">Contact</div>
          <a href="mailto:investorrelations@tgppipeline.com" className="text-muted-foreground hover:text-foreground">investorrelations@tgppipeline.com</a>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">© 2025 Trans-Guatemala Inter-Oceanic Pipeline (TGP). All rights reserved.</div>
    </footer>
  );
}
