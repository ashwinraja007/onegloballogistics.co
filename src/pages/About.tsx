import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VisionMission } from "@/components/about/VisionMission";

const coreServices = [
  {
    title: "Air Freight",
    details: [
      "Express & deferred services",
      "Airport-to-airport & door-to-door",
      "Dangerous goods & temperature-sensitive cargo",
    ],
  },
  {
    title: "Sea Freight",
    details: [
      "FCL / LCL shipping",
      "Breakbulk and Ro-Ro solutions",
      "Global consolidation services",
    ],
  },
  {
    title: "Road Freight",
    details: [
      "GCC distribution",
      "Cross-border trucking",
      "Last-mile delivery",
    ],
  },
  {
    title: "Customs Clearance & Documentation",
    details: [
      "Import/export documentation",
      "Free zone & mainland clearance",
      "Compliance support",
    ],
  },
  {
    title: "Warehousing & Distribution",
    details: [
      "Bonded & non-bonded facilities",
      "Inventory management",
      "Value-added services",
    ],
  },
];

const industries = [
  "Oil & Gas",
  "Retail & E-commerce",
  "FMCG",
  "Automotive",
  "Healthcare & Pharma",
  "Construction",
];

const whyChooseUs = [
  "Global network",
  "24/7 customer support",
  "Integrated tracking systems",
  "Experienced operations team",
  "Cost-effective solutions",
];

const presence = "UAE | Qatar | India | China | Germany | USA | South Africa | Singapore l Malaysia";

const contactDetails = [
  "[Company Address]",
  "Phone: [Number]",
  "Email: [Email Address]",
  "Website: [Website URL]",
  "Social: [LinkedIn/Facebook/Instagram]",
];

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="flex-grow pb-20 pt-24">
        <section className="mx-auto w-full max-w-4xl px-6">
          <h1 className="text-3xl font-bold text-brand-navy md:text-4xl">About Us</h1>
          <p className="mt-6 text-base leading-relaxed text-gray-700 md:text-lg">
            One Global Logistics LLC is a multinational logistics company headquartered in the UAE, offering end-to-end supply
            chain solutions across air, sea, and land. With a strong presence in many countries and a dedicated team of logistics
            professionals, we ensure reliability, speed, and transparency in every shipment.
          </p>
        </section>

        <VisionMission />

        <section className="mt-16 w-full bg-white py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">Core Services</h2>
            <ol className="mt-6 list-decimal space-y-6 pl-6 text-gray-700">
              {coreServices.map(({ title, details }) => (
                <li key={title}>
                  <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-6 text-sm md:text-base">
                    {details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-16 w-full bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">Industries We Serve</h2>
            <ul className="mt-6 grid gap-3 text-gray-700 sm:grid-cols-2">
              {industries.map((industry) => (
                <li key={industry} className="text-sm md:text-base">
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16 w-full bg-white py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">Why Choose Us</h2>
            <ul className="mt-6 grid gap-3 text-gray-700 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <li key={item} className="text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16 w-full bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-6 text-gray-700">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">Our Presence</h2>
            <p className="mt-4 text-sm md:text-base">{presence}</p>
          </div>
        </section>

        <section className="mt-16 w-full bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 text-gray-700">
            <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">Contact Us</h2>
            <ul className="mt-6 space-y-3 text-sm md:text-base">
              {contactDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
