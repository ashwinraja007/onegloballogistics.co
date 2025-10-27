import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VisionMission } from "@/components/about/VisionMission";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Car,
  Clock,
  Factory,
  Globe2,
  Headphones,
  HeartPulse,
  Mail,
  MapPin,
  Package,
  PiggyBank,
  Plane,
  Radio,
  ShieldCheck,
  Ship,
  ShoppingBag,
  Truck,
  Users,
  Warehouse,
  FileText,
  Globe,
  Phone,
} from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        <section className="mt-16 bg-gradient-to-r from-brand-navy to-brand-navy/90 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">About Us</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                One Global Logistics LLC
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-2xl">
                One Global Logistics LLC is a multinational logistics company headquartered in the UAE, offering end-to-end supply
                chain solutions across air, sea, and land. With a strong presence in many countries and a dedicated team of logistics
                professionals, we ensure reliability, speed, and transparency in every shipment.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                <Link
                  to="/services"
                  className="rounded-full bg-white px-5 py-2 font-semibold text-brand-navy shadow-sm transition hover:bg-white/90"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/40 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">Who We Are</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                One Global Logistics LLC delivers comprehensive logistics and supply chain solutions that empower businesses to
                connect across continents. Our end-to-end capabilities across air, sea, road, customs, and warehousing operations
                are backed by a global network and an experienced team committed to service excellence.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                We combine innovation, local market knowledge, and strategic partnerships to move cargo securely and efficiently,
                giving our customers the confidence to grow in new markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-xl"
            >
              <div className="relative flex flex-col gap-6 text-brand-navy">
                <div className="flex items-center gap-4">
                  <span className="rounded-2xl bg-brand-navy/10 p-4">
                    <Globe2 className="h-8 w-8" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">Global Reach</h3>
                    <p className="text-sm text-gray-600">
                      Strategic hubs across the Middle East, Asia, Europe, Africa, and the Americas.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="rounded-2xl bg-brand-navy/10 p-4">
                    <Headphones className="h-8 w-8" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">Dedicated Experts</h3>
                    <p className="text-sm text-gray-600">Experienced professionals guiding every shipment from start to finish.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="rounded-2xl bg-brand-navy/10 p-4">
                    <ShieldCheck className="h-8 w-8" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">Trusted Processes</h3>
                    <p className="text-sm text-gray-600">Compliance-driven operations ensure transparency and reliability.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <VisionMission />

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-3xl font-bold text-brand-navy md:text-4xl"
            >
              Core Services
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  title: "Air Freight",
                  description: "Express & deferred services, airport-to-airport & door-to-door, dangerous goods & temperature-sensitive cargo.",
                  icon: Plane,
                },
                {
                  title: "Sea Freight",
                  description: "FCL/LCL shipping, breakbulk and Ro-Ro solutions, and global consolidation services.",
                  icon: Ship,
                },
                {
                  title: "Road Freight",
                  description: "GCC distribution, cross-border trucking, and last-mile delivery for regional coverage.",
                  icon: Truck,
                },
                {
                  title: "Customs Clearance & Documentation",
                  description: "Import/export documentation, free zone & mainland clearance, and compliance support.",
                  icon: FileText,
                },
                {
                  title: "Warehousing & Distribution",
                  description: "Bonded & non-bonded facilities, inventory management, and value-added services.",
                  icon: Warehouse,
                },
              ].map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="w-fit rounded-2xl bg-brand-navy/10 p-3 text-brand-navy">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-3xl font-bold text-brand-navy md:text-4xl"
            >
              Industries We Serve
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                { title: "Oil & Gas", icon: Factory },
                { title: "Retail & E-commerce", icon: ShoppingBag },
                { title: "FMCG", icon: Package },
                { title: "Automotive", icon: Car },
                { title: "Healthcare & Pharma", icon: HeartPulse },
                { title: "Construction", icon: Building2 },
              ].map(({ title, icon: Icon }) => (
                <div key={title} className="flex items-center gap-4 rounded-2xl bg-gray-50 p-5">
                  <span className="rounded-2xl bg-brand-navy/10 p-3 text-brand-navy">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="font-semibold text-gray-700">{title}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-3xl font-bold text-brand-navy md:text-4xl"
            >
              Why Choose One Global Logistics
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                { title: "Global network", description: "Extensive partner coverage and strategic alliances across major trade lanes.", icon: Globe2 },
                { title: "24/7 customer support", description: "Responsive assistance from logistics specialists around the clock.", icon: Clock },
                { title: "Integrated tracking systems", description: "Real-time visibility through advanced tracking and reporting tools.", icon: Radio },
                { title: "Experienced operations team", description: "Seasoned professionals managing complex cargo requirements.", icon: Users },
                { title: "Transparent & secure", description: "Robust compliance processes and proactive risk management.", icon: ShieldCheck },
                { title: "Cost-effective solutions", description: "Optimized routes and economies of scale that protect your bottom line.", icon: PiggyBank },
              ].map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <span className="rounded-2xl bg-brand-navy/10 p-3 text-brand-navy">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-brand-navy md:text-4xl"
            >
              Our Presence
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {[
                "UAE",
                "Qatar",
                "India",
                "China",
                "Germany",
                "USA",
                "South Africa",
                "Singapore",
                "Malaysia",
              ].map((location) => (
                <span
                  key={location}
                  className="flex items-center gap-2 rounded-full border border-brand-navy/20 px-5 py-2 text-sm font-semibold text-brand-navy"
                >
                  <MapPin className="h-4 w-4" />
                  {location}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-3xl font-bold text-brand-navy md:text-4xl"
            >
              Contact Us
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-10 grid gap-6 md:grid-cols-2"
            >
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="rounded-2xl bg-brand-navy/10 p-3 text-brand-navy">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy">Address</h3>
                    <p className="mt-1 text-sm text-gray-600">[Company Address]</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="rounded-2xl bg-brand-navy/10 p-3 text-brand-navy">
                    <Phone className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy">Phone</h3>
                    <p className="mt-1 text-sm text-gray-600">[Number]</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="rounded-2xl bg-brand-navy/10 p-3 text-brand-navy">
                    <Mail className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy">Email</h3>
                    <p className="mt-1 text-sm text-gray-600">[Email Address]</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="rounded-2xl bg-brand-navy/10 p-3 text-brand-navy">
                    <Globe className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy">Website & Social</h3>
                    <p className="mt-1 text-sm text-gray-600">[Website URL]</p>
                    <p className="mt-1 text-sm text-gray-600">Social: [LinkedIn/Facebook/Instagram]</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
