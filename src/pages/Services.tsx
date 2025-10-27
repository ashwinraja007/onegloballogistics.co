import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const services = [
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

const Services = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="flex-grow pb-20 pt-24">
        <section className="mx-auto w-full max-w-5xl px-6">
          <h1 className="text-3xl font-bold text-brand-navy md:text-4xl">Core Services</h1>
          <ol className="mt-6 list-decimal space-y-8 pl-6 text-gray-700">
            {services.map(({ title, details }) => (
              <li key={title}>
                <h2 className="text-lg font-semibold text-brand-navy md:text-xl">{title}</h2>
                <ul className="mt-2 list-disc space-y-2 pl-6 text-sm md:text-base">
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
