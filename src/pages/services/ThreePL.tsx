import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Warehouse, TrendingUp, Clock, Shield } from "lucide-react";

const ThreePL = () => {
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
                  Third Party Logistics (3PL)
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-700 mb-6"
                >
                  Comprehensive warehousing and logistics management solutions
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
                      alt="Third Party Logistics Service"
                      className="w-full h-full object-cover"
                      src="/3pl.png"
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
                Complete 3PL Solutions
              </h2>
              <div className="w-24 h-1 bg-brand-navy mx-auto mb-8" />

              <p className="text-lg mb-6 leading-relaxed text-justify text-gray-700">
                At <strong>One Global Logistics</strong>, our Third Party Logistics (3PL) services provide end-to-end supply chain management solutions. We handle warehousing, inventory management, order fulfillment, and distribution, allowing you to focus on your core business while we manage your logistics operations with expertise and efficiency.
              </p>

              <div className="bg-blue-50 border-l-4 border-brand-navy p-6 rounded-lg mb-6 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Our 3PL Services Include</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Warehousing & Storage:</strong> Secure, climate-controlled facilities with flexible storage options for short and long-term needs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Inventory Management:</strong> Real-time tracking and management systems ensuring optimal stock levels and visibility.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Order Fulfillment:</strong> Efficient pick, pack, and ship services with same-day processing capabilities.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Distribution Services:</strong> Last-mile delivery and nationwide distribution network.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Value-Added Services:</strong> Labeling, packaging, kitting, and quality inspection services.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">Why Choose Our 3PL Services?</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Cost Reduction</h4>
                  <p className="text-gray-600 text-sm">Eliminate overhead costs of maintaining your own warehouse and logistics infrastructure.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Scalability</h4>
                  <p className="text-gray-600 text-sm">Flexible solutions that grow with your business, handling seasonal peaks effortlessly.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Technology Integration</h4>
                  <p className="text-gray-600 text-sm">Advanced WMS and real-time reporting for complete supply chain visibility.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-brand-navy mb-2">Expert Management</h4>
                  <p className="text-gray-600 text-sm">Professional logistics team with years of experience optimizing supply chains.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">Industries We Serve</h3>
              <p className="text-gray-700 mb-4">
                Our 3PL solutions cater to diverse industries including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {['E-commerce', 'Retail', 'Manufacturing', 'Healthcare', 'Automotive', 'Consumer Goods'].map((industry, index) => (
                  <div key={index} className="bg-brand-navy/5 p-3 rounded text-center text-gray-700 font-medium">
                    {industry}
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
              {[
                {
                  icon: <Warehouse className="h-10 w-10 text-brand-navy" />,
                  title: "Modern Facilities",
                  description: "State-of-the-art warehouses with advanced security and climate control."
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-brand-navy" />,
                  title: "Operational Excellence",
                  description: "Streamlined processes ensuring accuracy and efficiency in all operations."
                },
                {
                  icon: <Clock className="h-10 w-10 text-brand-navy" />,
                  title: "Fast Processing",
                  description: "Same-day order processing with quick turnaround times."
                },
                {
                  icon: <Shield className="h-10 w-10 text-brand-navy" />,
                  title: "Secure & Compliant",
                  description: "Full insurance coverage and compliance with industry standards."
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
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Optimize Your Supply Chain?</h3>
              <p className="mb-6 text-blue-50">
                Partner with us for comprehensive 3PL solutions tailored to your needs.
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

export default ThreePL;
