import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame, ShoppingCart, Package, Car, Stethoscope, Building2 } from "lucide-react";

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
  { title: "Oil & Gas", icon: <Flame /> },
  { title: "Retail & E-commerce", icon: <ShoppingCart /> },
  { title: "FMCG", icon: <Package /> },
  { title: "Automotive", icon: <Car /> },
  { title: "Healthcare & Pharma", icon: <Stethoscope /> },
  { title: "Construction", icon: <Building2 /> },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const IndustryCard = ({ title, icon }: Industry) => (
  <motion.div
    variants={item}
    whileHover={{ y: -6 }}
    whileTap={{ scale: 0.985 }}
    transition={{ type: "spring", stiffness: 220, damping: 20 }}
    className="group flex flex-col items-center justify-center text-center rounded-xl border border-gray-200 bg-white hover:bg-gradient-to-b hover:from-white hover:to-[#E8F2FF] shadow-md hover:shadow-xl p-6 sm:p-8 transition-all duration-300"
  >
    <div className="flex items-center justify-center w-14 h-14 mb-3 rounded-2xl bg-[#E8F2FF] text-[#0B1739] shadow-inner">
      {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
    </div>
    <h3 className="text-[#0B1739] font-semibold text-base sm:text-lg">{title}</h3>
  </motion.div>
);

const IndustriesPage = () => {
  return (
    // Removed min-h-screen to avoid forcing extra height when content is short
    <div className="flex flex-col bg-[#F8F9FB]">
      <ScrollToTop />

      <main className="flex-grow pt-0">
        {/* Hero Section (reduced bottom padding) */}
        <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-brand-navy text-white py-8 md:py-10">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-brand-navy opacity-90" />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-2 text-slate-50">
                Industries We Serve
              </h1>
              <div className="w-16 h-1 bg-white mx-auto mb-4" />
              <p className="text-white/90 text-base md:text-lg">
                Tailored logistics & infrastructure for high-performance operations across key sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grid Section (trimmed bottom padding to kill the white gap) */}
        <section className="pt-8 md:pt-10 pb-6 md:pb-8 bg-gradient-to-r from-gray-900 to-brand-navy">
          <div className="container mx-auto px-4">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {industries.map((ind) => (
                <IndustryCard key={ind.title} {...ind} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndustriesPage;
