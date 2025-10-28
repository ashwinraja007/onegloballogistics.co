import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Plane, Ship, Truck, Warehouse, Package, Boxes } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  image?: string;
  description?: string;
  points?: string[];
};

const ServiceCard = ({ icon, title, description, points, image }: ServiceCardProps) => {
  const getServiceImage = () => {
    switch (title) {
      case "Air Freight":
        return "/aircargo2.png";
      case "Sea Freight":
        return "/oceanf.png";
      case "Sea Freight":
        return "/oceanf.png";
      case "Road Freight":
        return "/CARGO.png";
      case "Customs Clearance & Documentation":
        return "/lovable-uploads/cc.jpg";
      case "Warehousing & Distribution":
        return "/warhouseh1.png";
      case "Project Logistics":
        return "/h4.png"; // ✅ optional new image
      default:
        return image || "/placeholder-service.jpg";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group grid grid-cols-1 md:grid-cols-2"
    >
      <div className="w-full h-48 md:h-64">
        <img
          src={getServiceImage()}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <div className="bg-brand-navy text-brand-navy p-2 rounded-full inline-block mb-2 w-fit bg-white">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-brand-navy mb-3">{title}</h3>

        {points && points.length > 0 ? (
          <ul className="text-gray-600 text-sm mb-4 list-disc pl-5 space-y-1">
            {points.map((pt, idx) => (
              <li key={idx}>{pt}</li>
            ))}
          </ul>
        ) : (
          description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-4">{description}</p>
          )
        )}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <Plane className="w-5 h-5" />,
      title: "Air Freight",
      image: "/aircargo2.png",
      points: [
        "Express & deferred services",
        "Airport-to-airport & door-to-door",
        "Dangerous goods & temperature-sensitive cargo",
      ],
    },
    {
      icon: <Ship className="w-5 h-5" />,
      title: "Sea Freight",
      image: "/oceanf.png",
      points: [
        "FCL / LCL shipping",
        "Breakbulk and Ro-Ro solutions",
        "Global consolidation services",
      ],
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Road Freight",
      image: "/CARGO.png",
      points: [
        "GCC distribution",
        "Cross-border trucking",
        "Last-mile delivery",
      ],
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Customs Clearance & Documentation",
      image: "/lovable-uploads/cc.jpg",
      points: [
        "Import/export documentation",
        "Free zone & mainland clearance",
        "Compliance support",
      ],
    },
    {
      icon: <Warehouse className="w-5 h-5" />,
      title: "Warehousing & Distribution",
      image: "/warhouseh1.png",
      points: [
        "Bonded & non-bonded facilities",
        "Inventory management",
        "Value-added services",
      ],
    },
    // ✅ NEW SERVICE
    {
      icon: <Boxes className="w-5 h-5" />,
      title: "Project Logistics",
      image: "/h4.png",
      points: [
        "Planning & Coordination: Scope assessment, multimodal transport, scheduling, and route surveys.",  
        "Operations & Management: Cargo handling, on-site logistics, and execution.",
        "Compliance & Support: Customs, HSE standards, and post-delivery support.",        
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/gp.jpg"
              alt="Services"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-brand-navy opacity-90" />
          </div>

          <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-2 text-slate-50">
                Our Logistics Services
              </h1>
              <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
              <p className="text-base md:text-lg text-white/90 mb-4">
                From air and ocean freight to specialized transportation solutions, we offer end-to-end logistics
                expertise to meet your global shipping needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
