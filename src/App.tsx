import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectOverview from "./pages/ProjectOverview";
import StrategicAdvantages from "./pages/StrategicAdvantages";
import EconomicEnvironmentalBenefits from "./pages/EconomicEnvironmentalBenefits";
import Partners from "./pages/Partners";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import LegalDisclaimer from "./pages/LegalDisclaimer";
import ProjectBrief from "./pages/ProjectBrief";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/project-overview" element={<ProjectOverview />} />
              <Route path="/strategic-advantages" element={<StrategicAdvantages />} />
              <Route path="/economic-environmental-benefits" element={<EconomicEnvironmentalBenefits />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
              <Route path="/project-brief" element={<ProjectBrief />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
