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

/* ===================== Fancy / One Global Card ===================== */
type Service = {
  image: string;
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
  tags?: string[];
};

const OneGlobalCard = ({ image, title, description, icon, link, tags = [] }: Service) => {
  return (
    <motion.div
      whileHover={{ y: -3, rotateX: 0.5, rotateY: -1 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative h-full"
    >
      {/* Diagonal glow border */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-tr from-brand-gold/60 via-amber-400/40 to-cyan-300/40 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
      <Link
        to={link}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/70 bg-white/70 shadow-sm backdrop-blur-md transition-shadow hover:shadow-lg"
        onClick={() => window.scrollTo(0, 0)}
      >
        {/* Image with soft overlay */}
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </AspectRatio>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />
          {/* Corner ribbon */}
          <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/80 px-2 py-1 text-[10px] font-semibold text-brand-navy backdrop-blur-sm">
            <span className="grid place-content-center rounded-full bg-[#f6b100] p-1 text-white">
              {React.cloneElement(icon, { size: 12 })}
            </span>
            ONE GLOBAL
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-4">
          <h3 className="text-base font-semibold text-brand-navy">{title}</h3>
          <p className="line-clamp-3 text-xs leading-snug text-gray-700">{description}</p>

          {/* tags */}
          {tags.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-1.5">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className="rounded-full border border-gray-200 bg-white/70 px-2 py-0.5 text-[10px] text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-1 inline-flex items-center text-xs font-medium text-brand-gold">
            Learn More
            <motion.span
              className="ml-1"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.3, repeat: Infinity, repeatType: "mirror" }}
            >
              <ArrowRight size={12} />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* ===================== One Global – Services ===================== */
export const Services = () => {
  const services: Service[] = [
    {
      image: "/oneglobal/fcl.jpg",
      title: "FCL (Full Container Load)",
      description:
        "Dedicated containers for your cargo with fixed schedules, secure stuffing, and end-to-end visibility across major trade lanes.",
      icon: <Boxes />,
      link: "/one-global/fcl",
      tags: ["Sea Freight", "Fixed Schedules", "Door-to-Door"]
    },
    {
      image: "/oneglobal/lcl.jpg",
      title: "LCL (Less than Container Load)",
      description:
        "Cost-efficient shared containers with reliable weekly sailings, optimized consolidation, and robust deconsolidation at destination.",
      icon: <Package />,
      link: "/one-global/lcl",
      tags: ["Consolidation", "Weekly Services", "Cost Efficient"]
    },
    {
      image: "/oneglobal/3pl.jpg",
      title: "3PL (Third-Party Logistics)",
      description:
        "Outsource your logistics to us—inventory, order fulfillment, distribution, and value-adds—scaled to your growth.",
      icon: <Truck />,
      link: "/one-global/3pl",
      tags: ["Inventory", "Fulfilment", "Distribution"]
    },
    {
      image: "/oneglobal/cfs.jpg",
      title: "CFS (Container Freight Station)",
      description:
        "Secure CFS operations for stuffing, de-stuffing, customs checks, and quick TAT with digital documentation flows.",
      icon: <Warehouse />,
      link: "/one-global/cfs",
      tags: ["Stuffing/De-stuffing", "Customs", "Fast TAT"]
    },
    {
      image: "/oneglobal/project.jpg",
      title: "Project Logistics",
      description:
        "Heavy-lift & ODC handling, route surveys, cranes, and multi-modal moves—engineered plans for zero-surprise execution.",
      icon: <Construction />,
      link: "/one-global/project-logistics",
      tags: ["ODC", "Heavy-lift", "Multimodal"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 }
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      className="bg-gradient-to-b from-white to-brand-lightGray py-10"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div variants={item} className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-brand-navy md:text-3xl">
            One Global — Core Services
          </h2>
          <div className="mx-auto mb-4 h-1 w-24 bg-brand-gold" />
          <p className="mx-auto max-w-xl text-sm text-gray-600 md:text-base">
            Focused capabilities engineered for reliability, speed, and control.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => (
            <motion.div key={s.title} variants={item} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <OneGlobalCard {...s} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={item} transition={{ duration: 0.6, delay: 0.35 }} className="mt-8 flex justify-center">
          <Link to="/one-global" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="navy" className="navy-glow group flex items-center gap-2 text-sm transition-all duration-300">
              Explore One Global
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
