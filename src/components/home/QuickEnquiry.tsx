import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  User,
  Phone,
  FileText,
  MessageSquare,
  MapPin
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";

interface EnquiryForm {
  fullName: string;
  phone: string;
  email: string;
  purpose: string;
  comment: string;
}

const ADDRESS = "One Global Logistics LLC, Jebel Ali Free Zone, South Street, Dubai, UAE";
// Your exact My Maps embed (kept as-is)
const MY_MAPS_SRC =
  "https://www.google.com/maps/d/embed?mid=1qWghU49ntyeH-GlJASqRYPXxl2hb6ws&ehbc=2E312F&noprof=1";

export const QuickEnquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<EnquiryForm>();

  const onSubmit = async (data: EnquiryForm) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.fullName);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("subject", data.purpose);
      formData.append("message", data.comment);
      formData.append("_subject", "New Quick Enquiry Submission");
      formData.append("_template", "table");

      const response = await fetch("https://formsubmit.co/ajax/sunder@ggl.sg", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Form submission failed");
      setSubmitStatus("success");
      reset();
    } catch (e) {
      console.error(e);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50 to-gray-100">
      {/* subtle top accent */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-[#0B1739]/5 to-transparent" />

      <div className="container mx-auto max-w-6xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1739]">Quick Enquiry</h2>
          <p className="mt-2 text-gray-600">
            Have a question? Fill out the form or find us on the map.
          </p>
        </motion.div>

        {/* 50 / 50 row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 bg-white shadow-[0_12px_40px_rgba(2,6,23,0.08)]"
          >
            <div className="p-6 md:p-8">
              {submitStatus === "success" && (
                <Alert className="mb-6 bg-green-50 border-green-200">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Success!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Your enquiry has been submitted. We’ll contact you soon.
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === "error" && (
                <Alert className="mb-6 bg-red-50 border-red-200">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertTitle className="text-red-800">Error</AlertTitle>
                  <AlertDescription className="text-red-700">
                    Something went wrong. Please try again later.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-700 flex items-center gap-2">
                      <User className="h-4 w-4 text-[#0B1739]" />
                      Full Name*
                    </Label>
                    <Input
                      id="fullName"
                      {...register("fullName", {
                        required: "Full name is required",
                        minLength: { value: 2, message: "Min 2 characters" },
                      })}
                      className={`bg-white focus:ring-2 focus:ring-[#0B1739]/20 ${
                        errors.fullName ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-[#0B1739]"
                      }`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[#0B1739]" />
                      Phone Number*
                    </Label>
                    <Input
                      id="phone"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: { value: /^[0-9+-]+$/, message: "Invalid phone number" },
                      })}
                      className={`bg-white focus:ring-2 focus:ring-[#0B1739]/20 ${
                        errors.phone ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-[#0B1739]"
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#0B1739]" />
                      Email*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                      })}
                      className={`bg-white focus:ring-2 focus:ring-[#0B1739]/20 ${
                        errors.email ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-[#0B1739]"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purpose" className="text-gray-700 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-[#0B1739]" />
                      Purpose*
                    </Label>
                    <Input
                      id="purpose"
                      {...register("purpose", {
                        required: "Purpose is required",
                        minLength: { value: 3, message: "Min 3 characters" },
                      })}
                      className={`bg-white focus:ring-2 focus:ring-[#0B1739]/20 ${
                        errors.purpose ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-[#0B1739]"
                      }`}
                    />
                    {errors.purpose && <p className="text-red-500 text-sm">{errors.purpose.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment" className="text-gray-700 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-[#0B1739]" />
                    Comment*
                  </Label>
                  <Textarea
                    id="comment"
                    {...register("comment", {
                      required: "Comment is required",
                      minLength: { value: 10, message: "Min 10 characters" },
                    })}
                    className={`min-h-[120px] bg-white focus:ring-2 focus:ring-[#0B1739]/20 ${
                      errors.comment ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-[#0B1739]"
                    }`}
                  />
                  {errors.comment && <p className="text-red-500 text-sm">{errors.comment.message}</p>}
                </div>

                <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-[#0B1739] hover:bg-[#13285A] shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </motion.div>

                {/* Contact chips (adds richness) */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-gray-600">
                    Business Hours: Mon–Fri
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-gray-600">
                    Response Time: &lt; 24 hrs
                  </span>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right: Map Card (with header crop + overlay) */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative rounded-2xl border border-gray-200 bg-white shadow-[0_12px_40px_rgba(2,6,23,0.08)] overflow-hidden"
          >
            {/* Mask the My Maps top bar by cropping the iframe */}
            <div className="relative h-[560px] overflow-hidden">
              <iframe
                src={MY_MAPS_SRC}
                title="One Global Logistics — Map"
                className="w-full h-[606px] translate-y-[-46px]" // crop ~46px header
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>

            {/* Overlay badge (brand + location) */}
            <div className="pointer-events-none absolute left-4 top-4">
              <div className="flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow-sm ring-1 ring-gray-200">
                <img src="/ogl-logo.png" alt="One Global" className="h-4 w-auto" />
                <span className="text-xs font-medium text-[#0B1739]">Dubai • Jebel Ali Free Zone</span>
              </div>
            </div>

            {/* Address footer */}
            <div className="flex items-start gap-2 border-t border-gray-200 bg-white/95 px-5 py-4">
              <MapPin className="mt-0.5 h-4 w-4 text-[#0B1739]" />
              <p className="text-sm leading-snug text-gray-700">{ADDRESS}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickEnquiry;
