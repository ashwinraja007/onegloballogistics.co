import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Headphones,
  Radar,
  Users,
  DollarSign,
} from "lucide-react";

const reasons = [
  {
    icon: <Globe2 />,
    title: "Global Network",
  },
  {
    icon: <Headphones />,
    title: "24/7 Customer Support",
  },
  {
    icon: <Radar />,
    title: "Integrated Tracking Systems",
  },
  {
    icon: <Users />,
    title: "Experienced Operations Team",
  },
  {
    icon: <DollarSign />,
    title: "Cost-Effective Solutions",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const WhyChooseUs = () => {
  return (
    // ✅ Reduced bottom space, balanced padding overall
    <section className="bg-[#F8F9FB] pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1739]">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-[#0B1739] mx-auto my-4 rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We deliver world-class logistics excellence through innovation,
            expertise, and a customer-first approach.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-200 text-center transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#E8F2FF] text-[#0B1739] shadow-inner">
                {React.cloneElement(reason.icon as React.ReactElement, {
                  className: "w-6 h-6",
                })}
              </div>
              <h3 className="text-lg font-semibold text-[#0B1739]">
                {reason.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
