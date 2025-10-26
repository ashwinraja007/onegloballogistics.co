import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Ship, Truck, Package, Clock, Shield, Target, Users, Award, CheckCircle, Warehouse } from 'lucide-react';
const About = () => {
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-navy text-white px-6 mt-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center">
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
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  <span className="text-[navy-blue] text-brand-navy">About Us</span>
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    One Global Logistics services W.L.L is a Qatar-based global NVOCC (Non-vessel owned common carrier) operator providing LCL consolidation services worldwide markets. We at OGL have a well experienced and established team with relevant experience in their own dedicated trade lanes supporting our customers with all their special requirements with complete dedication and transparency.
                  </p>
                  <p>
                    Our commitment to honest, transparent business practice and pricing, backed by a network of experienced and trusted agents from around the world, makes us one of the fast-growing consolidators based in Qatar.
                  </p>
                  <p>
                    We are well-positioned to manage your LCL business with full attention. We aim at providing secured end-to-end LCL services to the Freight Forwarding/Logistics Companies in Qatar, ensuring to maintain trust and not entertain direct customer business.
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img alt="GGL Global Logistics" className="w-full h-[600px] object-cover" src="/abstract-glowing-blurry-global-delivery-scheme-hol-2025-10-15-01-51-06-utc.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Network</h4>
                      <p className="text-sm text-gray-600">50+ countries worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose GGL Cards Section */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Logistics Services */}
            <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[{
                title: "FCL (Full Container Load)",
                description: "Dedicated containers for your cargo with fixed schedules.",
                icon: Ship
              }, {
                title: "LCL (Less than Container Load)",
                description: "Shared container services with reliable weekly sailings.",
                icon: Package
              }, {
                title: "3PL (Third-Party Logistics)",
                description: "End-to-end logistics outsourcing and distribution.",
                icon: Truck
              }, {
                title: "CFS (Container Freight Station)",
                description: "Secure CFS operations for stuffing and de-stuffing.",
                icon: Warehouse
              }, {
                title: "Project Logistics",
                description: "Specialized handling for heavy-lift and ODC cargo.",
                icon: Shield
              }].map(({
                title,
                description,
                icon: Icon
              }, i) => <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Icon className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                        <p className="text-gray-600 text-sm">{description}</p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Who We Serve */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Who We Serve</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[{
                title: "Freight Forwarders",
                description: "Trusted partners for global shipping solutions.",
                icon: Globe
              }, {
                title: "NVOCCs",
                description: "Neutral support for non-vessel operating common carriers.",
                icon: Users
              }, {
                title: "Logistics Companies",
                description: "Comprehensive logistics partnership for third-party providers.",
                icon: Target
              }].map(({
                title,
                description,
                icon: Icon
              }, i) => <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Icon className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                        <p className="text-gray-600 text-sm">{description}</p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;
