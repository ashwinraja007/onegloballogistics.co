import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const GlobalPresence = () => {
  const countries = [
    "UAE",
    "Qatar",
    "India",
    "China",
    "Germany",
    "USA",
    "South Africa",
    "Singapore",
    "Malaysia",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-gradient-to-b from-brand-navy to-brand-navy/90 text-white py-12 px-4"
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-3 mb-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Globe className="h-10 w-10 text-white" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            Global Presence
          </h2>
        </motion.div>

        <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
        <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl mb-10">
          Our logistics network spans across continents, enabling seamless global shipping solutions.
        </p>

        {/* Country Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {countries.map((country) => (
            <motion.button
              key={country}
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2 bg-white text-brand-navy font-semibold rounded-full shadow-md hover:bg-brand-gold hover:text-white transition-all duration-300"
            >
              {country}
            </motion.button>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link to="/global-presence">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-flex items-center gap-2 text-brand-navy text-lg font-bold rounded-lg shadow-lg hover:shadow-navy-glow transition-all duration-300 px-6 py-3 bg-brand-white"
            >
              Explore Our Global Network <ExternalLink size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GlobalPresence;
