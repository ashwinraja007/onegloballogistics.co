import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";

const ADDRESS =
  "One Global Logistics LLC, Jebel Ali Free Zone, South Street, Dubai, UAE";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * i },
  }),
};

const QuickEnquiry = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* soft pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,23,57,0.06),transparent_55%)]" />

      {/* top accent */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-28 bg-gradient-to-b from-brand-navy/10 to-transparent" />

      <div className="container mx-auto max-w-5xl px-4">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-navy/10 px-4 py-1.5 text-[13px] font-medium text-black">
            Contact Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#0B1739]">
            We’re here to help
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-600">
            Reach our team for enquiries, partnerships, or support. We usually respond within one business day.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-[0_18px_60px_rgba(2,6,23,0.07)]"
        >
          {/* gradient header band */}
          <div className="h-2 w-full bg-gradient-to-r from-gray-900 via-brand-navy to-gray-900" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Address & channels */}
            <div className="p-6 md:p-8 lg:p-10">
              <div className="space-y-6">
                {/* Address */}
                <motion.div
                  variants={fadeUp}
                  custom={2}
                  className="flex items-start gap-3"
                >
                  <span className="rounded-2xl bg-[#0B1739]/10 p-2 text-[#0B1739]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#0B1739]">
                      Address
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">
                      {ADDRESS}
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="flex items-start gap-3"
                >
                  <span className="rounded-2xl bg-[#0B1739]/10 p-2 text-[#0B1739]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#0B1739]">
                      Phone
                    </h3>
                    <a
                      href="tel:+971 0563440073"
                      className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#0B1739] hover:underline"
                    >
                      +971 0563440073<ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={fadeUp}
                  custom={4}
                  className="flex items-start gap-3"
                >
                  <span className="rounded-2xl bg-[#0B1739]/10 p-2 text-[#0B1739]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#0B1739]">
                      Email
                    </h3>
                    <a
                      href="mailto:info@onegloballogistics.co"
                      className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#0B1739] hover:underline"
                    >
                      info@onegloballogistics.co <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>

                {/* Website */}
                <motion.div
                  variants={fadeUp}
                  custom={5}
                  className="flex items-start gap-3"
                >
                  <span className="rounded-2xl bg-[#0B1739]/10 p-2 text-[#0B1739]">
                    <Globe className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#0B1739]">
                      Website
                    </h3>
                    <a
                      href="#"
                      className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#0B1739] hover:underline"
                    >
                      www.onegloballogistics.co <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Socials & highlight */}
            <div className="relative overflow-hidden rounded-t-[2rem] md:rounded-t-none md:rounded-l-[2rem] bg-gradient-to-b from-brand-navy/95 to-brand-navy">
              {/* decorative glow */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

              <div className="relative z-10 p-6 md:p-8 lg:p-10 text-white">
                <h3 className="text-xl text-white/80 font-semibold">Connect with us</h3>
                <p className="mt-2 text-sm text-white/80">
                  Follow our updates and reach the team directly via social.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  <a
                    href="https://www.linkedin.com/company/onegloballogistics/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm font-medium ring-1 ring-white/15 backdrop-blur hover:bg-white/15 transition"
                  >
                    <span>LinkedIn</span>
                    <span className="opacity-70 group-hover:opacity-100 transition">
                      → onegloballogistics
                    </span>
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm font-medium ring-1 ring-white/15 backdrop-blur hover:bg-white/15 transition"
                  >
                    <span>Facebook</span>
                    <span className="opacity-70 group-hover:opacity-100 transition">
                      → @oneglobal
                    </span>
                  </a>
                  <a
                    href="https://"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm font-medium ring-1 ring-white/15 backdrop-blur hover:bg-white/15 transition"
                  >
                    <span>Instagram</span>
                    <span className="opacity-70 group-hover:opacity-100 transition">
                      → @oneglobal
                    </span>
                  </a>
                </div>

                {/* mini CTA */}
                <a
                  href="mailto:xxx@oneglobal.com"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-navy shadow-sm transition hover:shadow-md"
                >
                  Email us directly <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickEnquiry;
