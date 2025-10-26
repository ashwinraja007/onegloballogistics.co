import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2, Loader2, Mail, User, Phone, FileText, MessageSquare } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface EnquiryForm {
  fullName: string;
  phone: string;
  email: string;
  purpose: string;
  comment: string;
}

const ADDRESS = "One Global Logistics LLC, Jebel Ali Free Zone, South Street, Dubai, UAE";
// Standard Google Maps embed (no My Maps header)
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

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
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Quick Enquiry</h2>
          <p className="text-gray-600">
            Have a question? Fill out the form below and we’ll get back to you shortly.
          </p>
        </motion.div>

        {/* Map (no header) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={MAP_SRC}
                title="One Global Logistics Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </AspectRatio>
            <div className="p-4 text-sm text-gray-700">
              <strong className="block text-gray-900">Address</strong>
              <span>{ADDRESS}</span>
            </div>
          </div>
        </motion.div>

        {/* Alerts */}
        {submitStatus === "success" && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Alert className="mb-6 bg-green-50 border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Success!</AlertTitle>
              <AlertDescription className="text-green-700">
                Your enquiry has been submitted successfully. We’ll contact you soon.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Alert className="mb-6 bg-red-50 border-red-200">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">Error</AlertTitle>
              <AlertDescription className="text-red-700">
                Something went wrong. Please try again later.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 p-8 rounded-xl shadow-lg bg-gradient-to-br from-white to-slate-100 border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-700 flex items-center gap-2">
                  <User className="h-4 w-4 text-[#0B1739]" />
                  Full Name*
                </Label>
                <Input
                  id="fullName"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                  })}
                  className={`bg-white/80 focus:ring-2 focus:ring-[#0B1739]/20 transition-all ${
                    errors.fullName ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-[#0B1739]"
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
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
                    pattern: { value: /^[0-9+-]+$/, message: "Please enter a valid phone number" },
                  })}
                  className={`bg-white/80 focus:ring-2 focus:ring-[#0B1739]/20 transition-all ${
                    errors.phone ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-[#0B1739]"
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email" },
                  })}
                  className={`bg-white/80 focus:ring-2 focus:ring-[#0B1739]/20 transition-all ${
                    errors.email ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-[#0B1739]"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
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
                    minLength: { value: 3, message: "Purpose must be at least 3 characters" },
                  })}
                  className={`bg-white/80 focus:ring-2 focus:ring-[#0B1739]/20 transition-all ${
                    errors.purpose ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-[#0B1739]"
                  }`}
                />
                {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>}
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
                  minLength: { value: 10, message: "Comment must be at least 10 characters" },
                })}
                className={`bg-white/80 focus:ring-2 focus:ring-[#0B1739]/20 transition-all min-h-[120px] ${
                  errors.comment ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-[#0B1739]"
                }`}
              />
              {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>}
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full transition-colors text-white bg-[#0B1739] hover:bg-[#13285A] shadow-md"
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
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickEnquiry;
