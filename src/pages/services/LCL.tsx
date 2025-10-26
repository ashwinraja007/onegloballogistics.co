import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Package, DollarSign, Truck, MapPin } from "lucide-react";

const LCL = () => {
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
                  Less than Container Load (LCL)
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-700 mb-6"
                >
                  Cost-effective consolidation services for smaller shipments
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
                      alt="Less than Container Load Service"
                      className="w-full h-full object-cover"
                      src="/lovable-uploads/lcl.png"
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
                Efficient LCL Consolidation Services
              </h2>
              <div className="w-24 h-1 bg-brand-navy mx-auto mb-8" />

              <p className="text-lg mb-6 leading-relaxed text-justify text-gray-700">
                At <strong>One Global Logistics</strong>, our Less than Container Load (LCL) services provide an economical solution for businesses that don't require a full container. We consolidate multiple shipments from different shippers into a single container, allowing you to pay only for the space you use while maintaining service quality and reliability.
              </p>

              <div className="bg-blue-50 border-l-4 border-brand-navy p-6 rounded-lg mb-6 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Benefits of Our LCL Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Cost Savings:</strong> Pay only for the container space you use, making it ideal for smaller shipments that don't warrant a full container.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Flexible Volume:</strong> Ship any quantity without minimum volume requirements, from 1 CBM upwards.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Regular Departures:</strong> Frequent consolidation schedules through our strategic transshipment hubs ensure timely service.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Global Reach:</strong> Access to major ports worldwide through our extensive network in Singapore, Malaysia, Sri Lanka, and Dubai.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Reduced Risk:</strong> Lower financial exposure compared to FCL, perfect for testing new markets or seasonal shipments.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">How Our LCL Service Works</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-lg border-l-4 border-brand-navy">
                  <h4 className="font-semibold text-brand-navy mb-2">1. Booking & Documentation</h4>
                  <p className="text-gray-600">Submit your shipping requirements and we handle all documentation and booking processes.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-brand-navy">
                  <h4 className="font-semibold text-brand-navy mb-2">2. Consolidation</h4>
                  <p className="text-gray-600">Your cargo is carefully consolidated with other shipments at our strategic hub locations.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-brand-navy">
                  <h4 className="font-semibold text-brand-navy mb-2">3. Ocean Transit</h4>
                  <p className="text-gray-600">Shipped via reliable carriers with full tracking visibility throughout the journey.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-brand-navy">
                  <h4 className="font-semibold text-brand-navy mb-2">4. Deconsolidation & Delivery</h4>
                  <p className="text-gray-600">Your cargo is separated at destination and delivered to your door with customs clearance support.</p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
              {[
                {
                  icon: <DollarSign className="h-10 w-10 text-brand-navy" />,
                  title: "Cost Effective",
                  description: "Affordable rates with payment only for actual space used in shared containers."
                },
                {
                  icon: <Package className="h-10 w-10 text-brand-navy" />,
                  title: "Professional Handling",
                  description: "Expert consolidation and deconsolidation services ensuring cargo safety."
                },
                {
                  icon: <MapPin className="h-10 w-10 text-brand-navy" />,
                  title: "Strategic Hubs",
                  description: "Weekly departures from key transshipment points to all major destinations."
                },
                {
                  icon: <Truck className="h-10 w-10 text-brand-navy" />,
                  title: "Door-to-Door",
                  description: "Complete service including pickup, customs, and final mile delivery."
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
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Ship Your LCL Cargo?</h3>
              <p className="mb-6 text-blue-50">
                Get competitive rates and reliable service for your smaller shipments.
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

export default LCL;
