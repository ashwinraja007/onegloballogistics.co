import { Suspense, lazy } from 'react';
import { Header } from "@/components/layout/Header";   // Named export (fixed)
import { Footer } from "@/components/layout/Footer";   // Named or default depending on your file
import { Loader2 } from "lucide-react";
import Hero from "@/components/home/Hero";
import { VisionMission } from "@/components/about/VisionMission";

// Lazy loaded sections
const AboutUs = lazy(() => import("@/components/home/AboutUs"));
const Services = lazy(() => import("@/components/home/Services"));
const GlobalPresence = lazy(() => import("@/components/home/GlobalPresence"));
const QuickEnquiry = lazy(() => import("@/components/home/QuickEnquiry"));
const IndustriesPage = lazy(() => import("@/components/home/IndustriesPage"));
const WhyChooseUs = lazy(() => import("@/components/home/WhyChooseUs"));

// Loader component
const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-[100px]">
    <Loader2 className="h-6 w-6 animate-spin text-brand-navy" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">

      {/* ✅ Transparent Header (Overlaying Hero) */}
      <Header />

      {/* 
        ❌ Removed pt-16 because it creates a white gap behind header
        ✔ Hero now sits exactly under the transparent header
      */}
      <main className="flex-grow">

        {/* HERO SECTION */}
        <Hero />

        {/* OTHER SECTIONS */}
        <Suspense fallback={<LoadingComponent />}>
          <AboutUs />
        </Suspense>

        <Suspense fallback={<LoadingComponent />}>
          <VisionMission />
        </Suspense>

        <Suspense fallback={<LoadingComponent />}>
          <Services />
        </Suspense>

        <Suspense fallback={<LoadingComponent />}>
          <IndustriesPage />
        </Suspense>

        <Suspense fallback={<LoadingComponent />}>
          <WhyChooseUs />
        </Suspense>

        <Suspense fallback={<LoadingComponent />}>
          <GlobalPresence />
        </Suspense>

        <Suspense fallback={<LoadingComponent />}>
          <QuickEnquiry />
        </Suspense>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Index;
