import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Container, PackageCheck, Truck, FileCheck } from "lucide-react";

const CFS = () => {
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
                  Container Freight Station (CFS)
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-700 mb-6"
                >
                  Professional cargo consolidation and deconsolidation services
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
                      alt="Container Freight Station Service"
                      className="w-full h-full object-cover"
                      src="/cfs.png"
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
                Expert CFS Operations
              </h2>
              <div className="w-24 h-1 bg-brand-navy mx-auto mb-8" />

              <p className="text-lg mb-6 leading-relaxed text-justify text-gray-700">
                At <strong>One Global Logistics</strong>, our Container Freight Station (CFS) services provide professional cargo handling, consolidation, and deconsolidation solutions. Located strategically near major ports, our CFS facilities ensure efficient processing of LCL shipments with comprehensive cargo management and documentation services.
              </p>

              <div className="bg-blue-50 border-l-4 border-brand-navy p-6 rounded-lg mb-6 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Our CFS Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>LCL Consolidation:</strong> Efficient grouping of multiple shipments into full containers for export, reducing costs and optimizing space.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Deconsolidation Services:</strong> Professional unpacking and segregation of imported LCL cargo with accurate inventory management.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Cargo Inspection:</strong> Thorough examination of goods for quality, quantity, and condition verification.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Container Stuffing & Destuffing:</strong> Expert loading and unloading services with proper cargo securing and damage prevention.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Short-term Storage:</strong> Secure warehousing facilities for cargo awaiting consolidation or delivery.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Documentation Services:</strong> Complete handling of shipping documents, customs paperwork, and cargo manifests.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">Key Features of Our CFS</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Strategic Location</h4>
                  <p className="text-gray-600 text-sm">Located near major ports for quick turnaround and reduced drayage costs.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Modern Equipment</h4>
                  <p className="text-gray-600 text-sm">Equipped with forklifts, pallet jacks, and material handling equipment.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Trained Personnel</h4>
                  <p className="text-gray-600 text-sm">Experienced staff ensuring safe and efficient cargo handling operations.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Security Systems</h4>
                  <p className="text-gray-600 text-sm">24/7 surveillance and security measures protecting your valuable cargo.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">CFS Process Flow</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-lg border-l-4 border-brand-navy">
                  <h4 className="font-semibold text-brand-navy mb-2">Export Consolidation</h4>
                  <p className="text-gray-600">Cargo receipt → Inspection & documentation → Consolidation → Container stuffing → Port delivery</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-brand-navy">
                  <h4 className="font-semibold text-brand-navy mb-2">Import Deconsolidation</h4>
                  <p className="text-gray-600">Container receipt → Destuffing → Cargo segregation → Documentation → Customer delivery</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-brand-navy p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Value-Added Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cargo weighing and measurement</li>
                  <li>• Palletization and packaging services</li>
                  <li>• Labeling and marking</li>
                  <li>• Customs examination facilities</li>
                  <li>• Real-time cargo tracking and reporting</li>
                </ul>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
              {[
                {
                  icon: <Container className="h-10 w-10 text-brand-navy" />,
                  title: "Professional Handling",
                  description: "Expert stuffing and destuffing services ensuring cargo safety and integrity."
                },
                {
                  icon: <PackageCheck className="h-10 w-10 text-brand-navy" />,
                  title: "Quality Control",
                  description: "Thorough inspection and verification processes for all cargo movements."
                },
                {
                  icon: <Truck className="h-10 w-10 text-brand-navy" />,
                  title: "Quick Turnaround",
                  description: "Efficient operations ensuring minimal dwell time and faster delivery."
                },
                {
                  icon: <FileCheck className="h-10 w-10 text-brand-navy" />,
                  title: "Complete Documentation",
                  description: "Comprehensive paperwork handling and customs compliance support."
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
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Need CFS Services?</h3>
              <p className="mb-6 text-blue-50">
                Contact us for professional cargo consolidation and deconsolidation solutions.
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

export default CFS;
