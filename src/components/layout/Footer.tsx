import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Linkedin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
interface AddressInfo {
  title: string;
  address: string;
  phone?: string | string[];
  email?: string;
}
export const Footer = () => {
  const footerAnimation = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const addressVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.5
      }
    }
  };
  const addresses: AddressInfo[] = [{
    title: "Dubai Office",
    address: "One Global Logistics LLC, Jebel Ali Free Zone, South Street, Dubai, UAE"
  }];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % addresses.length);
  };
  return <footer className="pt-16 pb-8 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="h-1 bg-gradient-to-r from-brand-navy to-brand-navy rounded-full mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-4">
          {/* Column 1: About */}
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={footerAnimation} className="flex flex-col items-start">
            <div className="mb-4">
              <img src="/ogl-logo.png" alt="One Global Logistics" className="h-16 w-auto object-contain" loading="lazy" />
            </div>
            <p className="text-sm md:text-base text-gray-600 max-w-xs text-left">
              Leading NVOCC operator providing LCL consolidation services to worldwide markets with dedication and transparency.
            </p>
            <div className="flex space-x-3 mt-4">
              <motion.a href="https://www.facebook.com/oneglobalqatar" target="_blank" rel="noopener noreferrer" className="bg-brand-navy text-white p-2 rounded-full hover:bg-brand-navy/80 transition" whileHover={{
              y: -3,
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }}>
                <Facebook size={18} />
              </motion.a>
              <motion.a href="https://linkedin.com/company/onegloballogistics/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="bg-brand-navy text-white p-2 rounded-full hover:bg-brand-navy/80 transition" whileHover={{
              y: -3,
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }}>
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={footerAnimation} transition={{
          delay: 0.2
        }} className="flex flex-col items-start">
            <h3 className="font-bold text-lg text-brand-navy mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { name: "ConsolMate", href: "https://consolmate.com/auth/login/9", external: true },
                { name: "Partner Portal", href: "https://pp.onlinetracking.co/auth/login/9", external: true },
                { name: "Tracking", href: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:188", external: true },
                { name: "Sailing Schedule", href: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:188", external: true }
              ].map((link, index) => 
                link.external ? (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-navy transition flex items-center gap-2">
                    <ArrowRight size={14} className="text-brand-navy" />
                    {link.name}
                  </a>
                ) : null
              )}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={footerAnimation} transition={{
          delay: 0.3
        }} className="flex flex-col items-start">
            <h3 className="font-bold text-lg text-brand-navy mb-4">Company</h3>
            <div className="flex flex-col gap-2">
              {[{
              name: "Home",
              path: "/"
            }, {
              name: "About",
              path: "/about"
            }, {
              name: "Services",
              path: "/services"
            }, {
              name: "Contact Us",
              path: "/contact"
            }, {
              name: "Privacy Policy",
              path: "/privacy-policy"
            }, {
              name: "Terms & Conditions",
              path: "/terms-and-conditions"
            }].map((link, index) => <Link key={index} to={link.path} className="text-gray-600 hover:text-brand-navy transition flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-navy" />
                  {link.name}
                </Link>)}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={footerAnimation} transition={{
          delay: 0.4
        }} className="flex flex-col items-start">
            <h3 className="font-bold text-lg text-brand-navy mb-4">Our Vision & Mission</h3>
            <div className="text-gray-600 text-sm space-y-4">
              <div>
                <h4 className="font-semibold text-brand-navy mb-2">Our Vision</h4>
                <p>OGL to be the leading global logistics solution provider through our most advanced systems combined with well experienced logistics professionals.</p>
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy mb-2">Our Mission</h4>
                <p className="mb-2">OGL to be Forwarders first choice for:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>FCL, LCL, Air Freight</li>
                  <li>Freight Management Services</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center text-gray-600 mt-10 text-sm">
          &copy; {new Date().getFullYear()} One Global Logistics. All Rights Reserved.
        </div>
      </div>
    </footer>;
};