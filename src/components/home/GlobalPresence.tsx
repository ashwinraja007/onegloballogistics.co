import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-6 text-base text-justify">
              One Global Logistics LLC is a multinational logistics company headquartered in the UAE, offering end-to-end supply chain solutions across air, sea, and land. With a strong presence in many countries and a dedicated team of logistics professionals, we ensure reliability, speed, and transparency in every shipment.
            </p>
            <Link to="/about">
              <Button
                variant="outline"
                size="sm"
                className="text-sm my-0 mx-0 rounded-md font-semibold bg-brand-navy text-slate-50"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
              <img
                src="/about.jpg"
                alt="About Us"
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
