import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Boxes,
  Package,
  Warehouse,
  Truck,
  Construction,
  ArrowRight
} from "lucide-react";

// ================================================================
//  One Global Card Component
// ================================================================
const OneGlobalCard = ({ image, title, description, icon, link }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="group relative rounded-xl overflow-hidden bg-gradient-to-b from-[#0B1739] to-[#0E224B] border border-[#24356B]/60 shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
    >
      {/* ============== Image Section ============== */}
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500"
            loading="lazy"
          />
        </AspectRatio>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1739] via-transparent to-transparent" />

        {/* Top-left logo badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
          <img src="/ogl-logo.png" alt="One Global Logo" className="h-4 w-auto" />
        </div>
      </div>

      {/* ============== Content Section ============== */}
      <div className="p-5 flex flex-col gap-2 text-white">
        <div className="flex items-center gap-2 text-[#F6B100]">
          {React.cloneElement(icon, { size: 16 })}
          <h3 className="text-base font-semibold tracking-wide">{title}</h3>
        </div>

        <p className="text-xs text-gray-300 leading-snug line-clamp-3">
          {description}
        </p>

        <Link
          to={link}
          className="inline-flex items-center text-[13px] text-[#F6B100] font-medium mt-1 group-hover:underline"
          onClick={() => window.scrollTo(0, 0)}
        >
          Learn More
          <motion.span
            className="ml-1"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.3, repeat: Infinity, repeatType: "mirror" }}
          >
            <ArrowRight size={12} />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

// ================================================================
//  One Global Services Section
// ================================================================
export const Services = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  const services = [
    {
      image: "/oneglobal/fcl.jpg",
      title: "FCL (Full Container Load)",
      description:
        "Dedicated containers for your cargo with fixed schedules, secure stuffing, and full visibility across major trade lanes.",
      icon: <Boxes />,
      link: "/one-global/fcl"
    },
    {
      image: "/oneglobal/lcl.jpg",
      title: "LCL (Less than Container Load)",
      description:
        "Shared container services with reliable weekly sailings, optimized consolidation, and smooth deconsolidation at destination.",
      icon: <Package />,
      link: "/one-global/lcl"
    },
    {
      image: "/oneglobal/3pl.jpg",
      title: "3PL (Third-Party Logistics)",
      description:
        "End-to-end logistics outsourcing — inventory, order fulfillment, and scalable distribution with advanced visibility.",
      icon: <Truck />,
      link: "/one-global/3pl"
    },
    {
      image: "/oneglobal/cfs.jpg",
      title: "CFS (Container Freight Station)",
      description:
        "Secure and efficient CFS operations for stuffing, de-stuffing, and customs checks with digital documentation.",
      icon: <Warehouse />,
      link: "/one-global/cfs"
    },
    {
      image: "/oneglobal/project.jpg",
      title: "Project Logistics",
      description:
        "Specialized handling for heavy-lift and ODC cargo with engineered transport plans ensuring zero-surprise execution.",
      icon: <Construction />,
      link: "/one-global/project-logistics"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      className="bg-[#F8F9FB] py-10"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* ============== Section Header ============== */}
        <motion.div variants={item} className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0B1739]">
            One Global — Core Services
          </h2>
          <div className="w-24 h-1 bg-[#F6B100] mx-auto mt-3 mb-4"></div>
          <p className="text-sm md:text-base text-gray-600">
            Focused capabilities engineered for reliability, speed, and control.
          </p>
        </motion.div>

        {/* ============== Services Grid ============== */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <OneGlobalCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        {/* ============== Explore Button ============== */}
        <motion.div variants={item} className="flex justify-center mt-10">
          <Link to="/one-global">
            <Button
              variant="navy"
              className="bg-[#0B1739] text-white hover:bg-[#13285A] text-sm px-6 py-2 rounded-full flex items-center gap-2"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4 text-[#F6B100]" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
