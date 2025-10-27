import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Ship,
  Truck,
  Package,
  Shield,
  Target,
  Users,
  Warehouse,
  Compass,
  Flag,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-navy text-white px-6 mt-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-50">
                About <span className="text-slate-50">One Global Logistics</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-50">
                Qatar-based global NVOCC operator providing LCL consolidation services to worldwide markets
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text (UPDATED CONTENT) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  <span className="text-brand-navy">About Us</span>
                </h2>

                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <strong>One Global Logistics LLC</strong> is a multinational logistics company headquartered in
                    the UAE, offering end-to-end supply chain solutions across air, sea, and land. With a strong
                    presence in many countries and a dedicated team of logistics professionals, we ensure reliability,
                    speed, and transparency in every shipment.
                  </p>

                  {/* Vision & Mission Cards */}
                  <div className="grid sm:grid-cols-2 gap-6 pt-2">
                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-full">
                          <Compass className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                      </div>
                      <p className="text-gray-700 text-base">
                        To be the preferred global logistics partner through innovation, efficiency, and customer focus.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-100 rounded-full">
                          <Flag className="w-5 h-5 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                      </div>
                      <p className="text-gray-700 text-base">
                        To deliver seamless, cost-effective, and sustainable logistics services, connecting businesses
                        across continents.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    alt="GGL Global Logistics"
                    className="w-full h-[600px] object-cover"
                    src="/abstract-glowing-blurry-global-delivery-scheme-hol-2025-10-15-01-51-06-utc.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "FCL (Full Container Load)",
                    description: "Dedicated containers for your cargo with fixed schedules.",
                    icon: Ship,
                  },
                  {
                    title: "LCL (Less than Container Load)",
                    description: "Shared container services with reliable weekly sailings.",
                    icon: Package,
                  },
                  {
                    title: "3PL (Third-Party Logistics)",
                    description: "End-to-end logistics outsourcing and distribution.",
                    icon: Truck,
                  },
                  {
                    title: "CFS (Container Freight Station)",
                    description: "Secure CFS operations for stuffing and de-stuffing.",
                    icon: Warehouse,
                  },
                  {
                    title: "Project Logistics",
                    description: "Specialized handling for heavy-lift and ODC cargo.",
                    icon: Shield,
                  },
                ].map(({ title, description, icon: Icon }, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Icon className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                        <p className="text-gray-600 text-sm">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who We Serve */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Who We Serve</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Freight Forwarders",
                    description: "Trusted partners for global shipping solutions.",
                    icon: Globe,
                  },
                  {
                    title: "NVOCCs",
                    description: "Neutral support for non-vessel operating common carriers.",
                    icon: Users,
                  },
                  {
                    title: "Logistics Companies",
                    description: "Comprehensive logistics partnership for third-party providers.",
                    icon: Target,
                  },
                ].map(({ title, description, icon: Icon }, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Icon className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                        <p className="text-gray-600 text-sm">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
