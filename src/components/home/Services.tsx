import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Boxes, Package, Warehouse, Truck, Construction, ArrowRight } from "lucide-react";

const OneGlobalCard = ({ image, title, description, icon, link }) => {
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
        <div className="flex items-center gap-2 text-[#0B1739] font-semibold">
          {React.cloneElement(icon, { size: 16 })}
          <h3 className="text-base font-semibold">{title}</h3>
        </div>

        <p className="text-sm text-gray-600 mt-2 flex-grow leading-snug">{description}</p>

        <Link
          to={link}
          className="inline-flex items-center text-sm text-[#0B1739] font-medium mt-3 group"
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

export const Services = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  const services = [
    {
      image: "/fcl.png",
      title: "FCL (Full Container Load)",
      description:
        "Dedicated containers for your cargo with fixed schedules, secure stuffing, and full visibility across major trade lanes.",
      icon: <Boxes />,
      link: "/one-global/fcl",
    },
    {
      image: "/lcl.png",
      title: "LCL (Less than Container Load)",
      description:
        "Shared container services with reliable weekly sailings, optimized consolidation, and smooth deconsolidation at destination.",
      icon: <Package />,
      link: "/one-global/lcl",
    },
    {
      image: "/3pl.png",
      title: "3PL (Third-Party Logistics)",
      description:
        "End-to-end logistics outsourcing — inventory, order fulfillment, and scalable distribution with advanced visibility.",
      icon: <Truck />,
      link: "/one-global/3pl",
    },
    {
      image: "/cfs.png",
      title: "CFS (Container Freight Station)",
      description:
        "Secure and efficient CFS operations for stuffing, de-stuffing, and customs checks with digital documentation.",
      icon: <Warehouse />,
      link: "/one-global/cfs",
    },
    {
      image: "/projectcargo.png",
      title: "Project Logistics",
      description:
        "Specialized handling for heavy-lift and ODC cargo with engineered transport plans ensuring zero-surprise execution.",
      icon: <Construction />,
      link: "/one-global/project-logistics",
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
      // ✅ Added vertical space above & below
      className="bg-[#F8F9FB] py-20 mt-16 mb-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div variants={item} className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0B1739]">Core Services</h2>
          <div className="w-24 h-1 bg-[#0B1739] mx-auto mt-3 mb-4"></div>
          <p className="text-sm md:text-base text-gray-600">
            Focused capabilities engineered for reliability, speed, and control.
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
