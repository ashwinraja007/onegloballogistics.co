import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ADDRESS = "One Global Logistics LLC, Jebel Ali Free Zone, South Street, Dubai, UAE";

const QuickEnquiry = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50 to-gray-100">
      {/* subtle top accent */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-[#0B1739]/5 to-transparent" />

      <div className="container mx-auto max-w-3xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1739]">Contact Us</h2>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-[0_12px_40px_rgba(2,6,23,0.08)]"
        >
          {/* Address */}
          <div className="flex items-start gap-3">
            <span className="rounded-2xl bg-[#0B1739]/10 p-2 text-[#0B1739]">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-[#0B1739]">Address</h3>
              <p className="mt-1 text-sm text-gray-700">{ADDRESS}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="mt-5 flex items-start gap-3">
            <span className="rounded-2xl bg-[#0B1739]/10 p-2 text-[#0B1739]">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-[#0B1739]">Phone</h3>
              <p className="mt-1 text-sm text-gray-700">
                <a href="tel:xxxxxxxxxxx" className="hover:underline">xxx xxxx xxxx</a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="mt-5 flex items-start gap-3">
            <span className="rounded-2xl bg-[#0B1739]/10 p-2 text-[#0B1739]">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-[#0B1739]">Email</h3>
              <p className="mt-1 text-sm text-gray-700">
                <a href="mailto:xxx@oneglobal.com" className="hover:underline">xxx@oneglobal.com</a>
              </p>
            </div>
          </div>

          {/* Website */}
          <div className="mt-5 flex items-start gap-3">
            <span className="rounded-2xl bg-[#0B1739]/10 p-2 text-[#0B1739]">
              <Globe className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-[#0B1739]">Website</h3>
              <p className="mt-1 text-sm text-gray-700">
                <a href="#" className="hover:underline">[Website URL]</a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="mt-5">
            <h3 className="text-base font-semibold text-[#0B1739]">Social</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>
                LinkedIn —{" "}
                <a
                  className="text-[#0B1739] hover:underline break-all"
                  href="https://www.linkedin.com/company/onegloballogistics/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/company/onegloballogistics/?viewAsMember=true
                </a>
              </li>
              <li>
                Facebook —{" "}
                <a
                  className="text-[#0B1739] hover:underline break-all"
                  href="https://www.facebook.com/oneglobalqatar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/oneglobalqatar
                </a>
              </li>
              <li>
                Instagram —{" "}
                <a
                  className="text-[#0B1739] hover:underline break-all"
                  href="https://www.instagram.com/oneglobalqatar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.instagram.com/oneglobalqatar/
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickEnquiry;
