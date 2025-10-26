import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Boxes, Ruler, Settings, Shield } from "lucide-react";

const ProjectLogistics = () => {
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
                  Project Logistics
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-700 mb-6"
                >
                  Specialized solutions for oversized and complex cargo movements
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
                      alt="Project Logistics Service"
                      className="w-full h-full object-cover"
                      src="/projectcargo.png"
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
                Specialized Project Cargo Handling
              </h2>
              <div className="w-24 h-1 bg-brand-navy mx-auto mb-8" />

              <p className="text-lg mb-6 leading-relaxed text-justify text-gray-700">
                At <strong>One Global Logistics</strong>, we specialize in handling complex project cargo that requires specialized expertise, equipment, and planning. Our project logistics services are designed for oversized, heavy-lift, and out-of-gauge cargo, serving industries such as oil & gas, construction, energy, mining, and manufacturing.
              </p>

              <div className="bg-blue-50 border-l-4 border-brand-navy p-6 rounded-lg mb-6 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Project Logistics Capabilities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Heavy Lift Cargo:</strong> Specialized equipment and expertise for moving exceptionally heavy equipment and machinery.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Oversized Cargo:</strong> Handling of out-of-gauge shipments requiring special permits, route surveys, and custom solutions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Break Bulk Cargo:</strong> Management of cargo that cannot be containerized and requires individual piece handling.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Multimodal Transportation:</strong> Seamless coordination across ocean, air, road, and rail to optimize routes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>On-site Services:</strong> Loading, unloading, positioning, and installation support at project sites.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">Industries We Serve</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Oil & Gas</h4>
                  <p className="text-gray-600 text-sm">Offshore platforms, drilling equipment, pipelines, and refinery components.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Power & Energy</h4>
                  <p className="text-gray-600 text-sm">Wind turbines, transformers, generators, and renewable energy equipment.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Construction</h4>
                  <p className="text-gray-600 text-sm">Heavy machinery, cranes, steel structures, and prefabricated building components.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Mining</h4>
                  <p className="text-gray-600 text-sm">Mining equipment, conveyor systems, crushers, and processing machinery.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Manufacturing</h4>
                  <p className="text-gray-600 text-sm">Industrial machinery, production lines, and factory equipment.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Infrastructure</h4>
                  <p className="text-gray-600 text-sm">Bridge components, tunnel equipment, and railway infrastructure.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">Our Project Management Approach</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-lg border-l-4 border-brand-navy">
                  <h4 className="font-semibold text-brand-navy mb-2">1. Planning & Engineering</h4>
                  <p className="text-gray-600">Detailed feasibility studies, route surveys, and custom engineering solutions for complex movements.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-brand-navy">
                  <h4 className="font-semibold text-brand-navy mb-2">2. Permits & Documentation</h4>
                  <p className="text-gray-600">Securing all necessary permits, licenses, and regulatory approvals for oversized cargo.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-brand-navy">
                  <h4 className="font-semibold text-brand-navy mb-2">3. Equipment Selection</h4>
                  <p className="text-gray-600">Choosing appropriate lifting, loading, and transportation equipment for safe cargo handling.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-brand-navy">
                  <h4 className="font-semibold text-brand-navy mb-2">4. Execution & Monitoring</h4>
                  <p className="text-gray-600">Real-time tracking and on-ground supervision ensuring safe and timely project completion.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-brand-navy p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Specialized Equipment</h3>
                <p className="text-gray-700 mb-2">We have access to specialized equipment including:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Heavy-lift cranes and mobile cranes</li>
                  <li>• Low-bed trailers and SPMTs (Self-Propelled Modular Transporters)</li>
                  <li>• RoRo vessels and heavy-lift ships</li>
                  <li>• Flatracks, open-top containers, and break-bulk vessels</li>
                  <li>• Jacking and skidding systems</li>
                </ul>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
              {[
                {
                  icon: <Boxes className="h-10 w-10 text-brand-navy" />,
                  title: "Complex Cargo",
                  description: "Expert handling of oversized, heavy-lift, and out-of-gauge shipments."
                },
                {
                  icon: <Ruler className="h-10 w-10 text-brand-navy" />,
                  title: "Custom Solutions",
                  description: "Tailored logistics plans designed for unique project requirements."
                },
                {
                  icon: <Settings className="h-10 w-10 text-brand-navy" />,
                  title: "End-to-End Management",
                  description: "Complete project coordination from planning to final delivery."
                },
                {
                  icon: <Shield className="h-10 w-10 text-brand-navy" />,
                  title: "Risk Mitigation",
                  description: "Comprehensive insurance and safety protocols protecting your investment."
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
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Have a Complex Project?</h3>
              <p className="mb-6 text-blue-50">
                Let our experts design a custom logistics solution for your project cargo.
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

export default ProjectLogistics;
