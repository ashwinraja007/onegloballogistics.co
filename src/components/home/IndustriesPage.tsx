import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Flame,          // Oil & Gas
  ShoppingCart,   // Retail & E-commerce
  Package,        // FMCG
  Car,            // Automotive
  Stethoscope,    // Healthcare & Pharma
  Building2       // Construction
} from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => void window.scrollTo({ top: 0, behavior: "smooth" }), [pathname]);
  return null;
};

type Industry = {
  title: string;
  icon: React.ReactNode;
};

const industries: Industry[] = [
  { title: "Oil & Gas", icon: <Flame className="w-5 h-5" /> },
  { title: "Retail & E-commerce", icon: <ShoppingCart className="w-5 h-5" /> },
  { title: "FMCG", icon: <Package className="w-5 h-5" /> },
  { title: "Automotive", icon: <Car className="w-5 h-5" /> },
  { title: "Healthcare & Pharma", icon: <Stethoscope className="w-5 h-5" /> },
  { title: "Construction", icon: <Building2 className="w-5 h-5" /> },
];

const item = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

const IndustryCard = ({ title, icon }: Industry) => (
  <motion.div
    variants={item}
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.985 }}
    transition={{ type: "spring", stiffness: 220, damping: 20 }}
    className="group relative rounded-xl border border-gray-200 bg-white p-5 shadow-md hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center gap-3">
      <div className="inline-flex items-center justify-center rounded-lg bg-[#0B1739]/5 text-[#0B1739] p-2">
        {/* enforce icon size */}
        {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5" })}
      </div>
      <h3 className="text-[#0B1739] font-semibold text-base">{title}</h3>
    </div>
  </motion.div>
);

const IndustriesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FB]">
      <ScrollToTop />
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-brand-navy text-white">
          <div className="absolute inset-0">
            {/* optional background image – replace if you have one */}
            {/* <img src="/lovable-uploads/industries-hero.jpg" className="w-full h-full object-cover opacity-20" /> */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-brand-navy opacity-90" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-2 text-slate-50">Industries We Serve</h1>
              <div className="w-16 h-1 bg-white mx-auto mb-4" />
              <p className="text-white/90 text-base md:text-lg">
                Tailored logistics and infrastructure solutions for diverse sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {industries.map((ind) => (
                <IndustryCard key={ind.title} {...ind} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
