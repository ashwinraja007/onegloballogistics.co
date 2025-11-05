import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Plane, Ship, Truck, Package, Boxes, Warehouse } from "lucide-react";
import { Building2 } from "lucide-react"; // ✅ for 3PL icon

type OneGlobalCardProps = {
  image: string;
  title: string;
  points: string[];
  icon: React.ReactElement;
  link: string;
};

const OneGlobalCard = ({ image, title, points, icon, link }: OneGlobalCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </AspectRatio>

        {/* Logo badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 backdrop-blur-sm py-1 shadow-sm">
          <img src="/ogl-logo.png" alt="One Global Logo" className="h-4 w-auto" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 text-[#0B1739]">
        <div className="flex items-center gap-2 text-[#0B1739] font-semibold mb-2">
          {React.cloneElement(icon, { size: 16 })}
          <h3 className="text-base font-semibold">{title}</h3>
        </div>

        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1 leading-snug">
          {points.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>

        {/* Learn More button */}
        <div className="mt-4">
          <Link
            to={link}
            className="inline-block rounded-full px-4 py-2 text-sm font-medium text-white bg-[#0B1739] hover:bg-[#13225a] transition-colors duration-200 shadow"
            aria-label={`Learn more about ${title}`}
          >
            Learn More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  const services: OneGlobalCardProps[] = [
    {
      image: "/aircargo2.png",
      title: "Air Freight",
      icon: <Plane />,
      points: [
        "Express & deferred services",
        "Airport-to-airport & door-to-door",
        "Dangerous goods & temperature-sensitive cargo",
      ],
      link: "/services/air-freight",
    },
    {
      image: "/oceanf.png",
      title: "Sea Freight",
      icon: <Ship />,
      points: ["FCL / LCL shipping", "Breakbulk and Ro-Ro solutions", "Global consolidation services"],
      link: "/services/sea-freight",
    },
    {
      image: "/CARGO.png",
      title: "Road Freight",
      icon: <Truck />,
      points: ["GCC distribution", "Cross-border trucking", "Last-mile delivery"],
      link: "/services/road-freight",
    },
    {
      image: "/lovable-uploads/cc.jpg",
      title: "Customs Clearance & Documentation",
      icon: <Package />,
      points: ["Import/export documentation", "Free zone & mainland clearance", "Compliance support"],
      link: "/services/customs-clearance",
    },
    {
      image: "/warhouseh1.png",
      title: "Warehousing & Distribution",
      icon: <Warehouse />,
      points: ["Bonded & non-bonded facilities", "Inventory management", "Value-added services"],
      link: "/services/warehousing",
    },
    {
      image: "/h4.png",
      title: "Project Logistics",
      icon: <Boxes />,
      points: ["Planning & Coordination", "Operations & Management", "Compliance & Support"],
      link: "/services/project-logistics",
    },
    // ✅ NEW CARD: 3PL (Third-Party Logistics)
    {
      image: "/abstract-glowing-blurry-global-delivery-scheme-hol-2025-10-15-01-51-06-utc.jpg",
      title: "3PL (Third-Party Logistics)",
      icon: <Building2 />,
      points: [
        "Integrated logistics and supply chain outsourcing",
        "Scalable warehousing, distribution, and transportation management",
        "Technology-driven visibility and real-time tracking",
        "Flexible, cost-efficient fulfillment tailored to your business",
      ],
      link: "/services/3pl",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      className="bg-[#F8F9FB] py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div variants={item} className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0B1739]">Core Services</h2>
          <div className="w-24 h-1 bg-[#0B1739] mx-auto mt-3 mb-4"></div>
          <p className="text-sm md:text-base text-gray-600">
            Comprehensive logistics solutions built for speed, reliability, and control.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="w-full sm:w-[95%] lg:w-[95%]"
            >
              <OneGlobalCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
