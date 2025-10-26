import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Ship, Shield, Clock, Globe } from "lucide-react";

const FCL = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                >
                  Full Container Load (FCL)
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-700 mb-6"
                >
                  Dedicated container solutions for your bulk shipments
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-brand-navy hover:bg-brand-navy/90 text-white font-medium rounded-md shadow-md transition-all"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl overflow-hidden shadow-xl"
                >
                  <AspectRatio ratio={16 / 9}>
                    <img
                      alt="Full Container Load Service"
                      className="w-full h-full object-cover"
                      src="/lovable-uploads/fcl.jpg"
                    />
                  </AspectRatio>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-brand-navy">
                Comprehensive FCL Services
              </h2>
              <div className="w-24 h-1 bg-brand-navy mx-auto mb-8" />

              <p className="text-lg mb-6 leading-relaxed text-justify text-gray-700">
                At <strong>One Global Logistics</strong>, we specialize in Full Container Load (FCL) services that provide dedicated container space for your cargo. Our FCL solutions are designed for businesses shipping large volumes that require exclusive container usage, offering maximum security and control over your shipments.
              </p>

              <div className="bg-blue-50 border-l-4 border-brand-navy p-6 rounded-lg mb-6 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Why Choose Our FCL Services?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Exclusive Container Space:</strong> Your cargo gets dedicated container space with no sharing, ensuring maximum security and reducing handling risks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Cost-Effective for Large Shipments:</strong> Ideal for businesses with substantial cargo volumes, offering better rates compared to LCL for bulk shipments.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Faster Transit Times:</strong> Direct port-to-port delivery without intermediate consolidation or deconsolidation, resulting in quicker delivery.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Flexible Scheduling:</strong> Greater control over departure and arrival times to match your supply chain requirements.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">Container Types Available</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">20' Standard Container</h4>
                  <p className="text-gray-600 text-sm">Ideal for smaller FCL shipments, accommodating approximately 10-11 standard pallets.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">40' Standard Container</h4>
                  <p className="text-gray-600 text-sm">Perfect for larger volumes, fitting approximately 20-21 standard pallets.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">40' High Cube Container</h4>
                  <p className="text-gray-600 text-sm">Extra height for oversized cargo or maximizing volume utilization.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Refrigerated Containers</h4>
                  <p className="text-gray-600 text-sm">Temperature-controlled solutions for perishable and sensitive goods.</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
              {[
                {
                  icon: <Ship className="h-10 w-10 text-brand-navy" />,
                  title: "Global Network",
                  description: "Direct sailings to all major ports worldwide through our strategic hub network."
                },
                {
                  icon: <Shield className="h-10 w-10 text-brand-navy" />,
                  title: "Cargo Security",
                  description: "Exclusive container space ensures maximum protection for your valuable cargo."
                },
                {
                  icon: <Clock className="h-10 w-10 text-brand-navy" />,
                  title: "On-Time Delivery",
                  description: "Direct port-to-port service with reliable transit times and departure schedules."
                },
                {
                  icon: <Globe className="h-10 w-10 text-brand-navy" />,
                  title: "Door-to-Door Service",
                  description: "Complete logistics solution including inland transportation and customs clearance."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-brand-navy to-blue-700 rounded-xl text-white p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Ship Your FCL Cargo?</h3>
              <p className="mb-6 text-blue-50">
                Contact our team today for competitive FCL rates and reliable service.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-brand-navy px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FCL;
