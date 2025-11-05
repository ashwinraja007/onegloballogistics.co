import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import FCL from "./pages/services/FCL";
import LCL from "./pages/services/LCL";
import ThreePL from "./pages/services/ThreePL";
import CFS from "./pages/services/CFS";
import ProjectLogistics from "./pages/services/ProjectLogistics";
import Warehousing from "./pages/services/Warehousing";
import CustomsClearance from "./pages/services/CustomsClearance";
import Transportation from "./pages/services/Transportation";
import OceanFreight from "./pages/services/OceanFreight";
import AirFreight from "./pages/services/AirFreight";
import ThreePL from "./pages/services/ThreePL";
import GlobalPresence from "./pages/GlobalPresence";
import { ScrollToTop } from "./components/common/ScrollToTop";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// App component as a regular function component
function App() {
  return <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsOfUse />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
            {/* Service specific pages */}
            <Route path="/services/fcl" element={<FCL />} />
            <Route path="/services/lcl" element={<LCL />} />
            <Route path="/services/3pl" element={<ThreePL />} />
            <Route path="/services/cfs" element={<CFS />} />
            <Route path="/services/project-logistics" element={<ProjectLogistics />} />
             <Route path="/services/warehousing" element={<Warehousing />} />
             <Route path="/services/customs-clearance" element={<CustomsClearance />} />
            <Route path="/services/road-freight" element={<Transportation />} />
            <Route path="/services/sea-freight" element={<OceanFreight />} />
            <Route path="/services/air-freight" element={<AirFreight />} />
            <Route path="/services/3pl" element={<ThreePL />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>;
}
export default App;
