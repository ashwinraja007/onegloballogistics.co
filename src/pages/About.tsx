import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import AboutUs1 from "@/components/home/AboutUs1";
import { VisionMission } from "@/components/about/VisionMission";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* ✅ Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-brand-navy text-white py-20 md:py-28 px-6">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-brand-navy opacity-90" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-50">
                About Us
              </h1>
              <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
              <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                Discover who we are, what drives us, and how we’re redefining global logistics 
                through innovation, reliability, and seamless connectivity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ✅ About Us Section */}
        <AboutUs1 />

        {/* ✅ Vision & Mission Section */}
        <VisionMission />
      </main>

      <Footer />
    </div>
  );
};

export default About;
