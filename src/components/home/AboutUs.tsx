import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const AboutUs = () => {
  return <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7
      }} viewport={{
        once: true
      }} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4 text-base text-justify">
              One Global Logistics services W.L.L is a Qatar-based global NVOCC
              (Non-vessel owned common carrier) operator providing LCL
              consolidation services worldwide markets. We at OGL have a well
              experienced and established team with relevant experience in their
              own dedicated trade lanes supporting our customers with all their
              special requirements with complete dedication and transparency.
            </p>
            <p className="text-gray-600 mb-6 text-base text-justify">
              Our commitment to honest, transparent business practice and
              pricing, backed by a network of experienced and trusted agents
              from around the world, makes us one of the fast-growing
              consolidators based in Qatar. We are well-positioned to manage
              your LCL business with full attention. We aim at providing secured
              end-to-end LCL services to the Freight Forwarding / Logistics
              Companies in Qatar, ensuring to maintain trust and not entertain
              direct customer business.
            </p>
            <Link to="/about">
              <Button variant="outline" size="sm" className="text-sm my-0 mx-0 rounded-md font-semibold bg-brand-navy text-slate-50">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="order-1 md:order-2 flex justify-center">
            {/* Full-width Image */}
            <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
              <img src="/about.jpg" alt="About Us" loading="lazy" className="w-full h-auto object-cover rounded-lg" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default AboutUs;
