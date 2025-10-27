import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

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
  { title: "Oil & Gas", icon: <Flame /> },
  { title: "Retail & E-commerce", icon: <ShoppingCart /> },
  { title: "FMCG", icon: <Package /> },
  { title: "Automotive", icon: <Car /> },
  { title: "Healthcare & Pharma", icon: <Stethoscope /> },
  { title: "Construction", icon: <Building2 /> },
];

const container = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { delay, staggerChildren: 0.08 }
  }),
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const shimmer =
  "before:absolute before:inset-[-1px] before:rounded-[inherit] before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-700 before:[mask-image:radial-gradient(40%_60%_at_50%_0%,black,transparent)]";

const IndustryCard = ({ title, icon }: Industry) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      tabIndex={0}
      className={[
        "group relative outline-none",
        "rounded-2xl p-[1px]",
        // gradient ring
        "bg-gradient-to-br from-brand-navy/40 via-indigo-400/30 to-cyan-400/30",
        "hover:from-brand-navy/60 hover:via-indigo-400/50 hover:to-cyan-400/50",
        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-navy focus-visible:ring-offset-[#F5F7FB]",
      ].join(" ")}
    >
      <div
        className={[
          "relative rounded-2xl bg-white dark:bg-zinc-900",
          "border border-zinc-200/70 dark:border-zinc-700/60",
          "shadow-sm hover:shadow-xl transition-shadow duration-300",
          "p-5 sm:p-6",
          shimmer,
        ].join(" ")}
      >
        {/* icon + title */}
        <div className="flex items-center gap-3">
          <div className="relative">
            {/* soft glow behind icon */}
            <span className="pointer-events-none absolute inset-0 -z-10 blur-xl opacity-40 bg-gradient-to-tr from-indigo-300/40 to-cyan-300/40" />
            <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-cyan-50 text-[#0B1739] dark:text-white dark:from-zinc-800 dark:to-zinc-800 border border-zinc-200/70 dark:border-zinc-700/60 w-11 h-11">
              {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5" })}
            </div>
          </div>
          <h3 className="text-[#0B1739] dark:text-white font-semibold text-base sm:text-lg">
            {title}
          </h3>
        </div>

        {/* divider */}
        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent" />

        {/* subtle microcopy */}
        <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
          Specialized solutions tailored to the {title} sector—optimized for reliability, scalability, and compliance.
        </p>
      </div>
    </motion.div>
  );
};

const IndustriesPage = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FB] dark:bg-zinc-950">
      <ScrollToTop />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* decorative blobs */}
          <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-indigo-300/40" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-cyan-300/40" />

          <div className="relative container mx-auto px-4 py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-2 text-[#0B1739] dark:text-white">
                Industries We Serve
              </h1>
              <div className="w-16 h-1 bg-[#0B1739] dark:bg-white mx-auto mb-4 rounded" />
              <p className="text-[#0B1739]/70 dark:text-zinc-300 text-base md:text-lg">
                Tailored logistics & infrastructure for high-performance operations across key verticals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              custom={prefersReduced ? 0 : 0.05}
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
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
