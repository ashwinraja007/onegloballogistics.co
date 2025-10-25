import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Users, UserCircle, SearchCode, Ship, Calendar } from "lucide-react";

const SLIDER_IMAGES = [
  { src: "/h1.png", text: "Cost-effective and top-quality LCL & FCL services" },
  { src: "/h2.jpg", text: "Top-notch warehousing services for all your shipments" },
  { src: "/h3.jpg", text: "Get the best LCL & FCL services at unbeatable prices" },
  { src: "/h4.png", text: "Get the best logistics service at very competitive prices" },
] as const;

const PORTAL_LINKS = [
  {
    icon: Users,
    title: "Customer Portal",
    description: "Access shipping dashboard",
    kind: "modal" as const,
  },
  {
    icon: UserCircle,
    title: "Partner Portal",
    description: "Manage partnership",
    href: "https://pp.onlinetracking.co/auth/login/3",
    external: true,
  },
  {
    icon: SearchCode,
    title: "Tracking",
    description: "Track your shipment",
    href: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:59",
    external: true,
  },
  {
    icon: Ship,
    title: "Sailing Schedule",
    description: "View schedules",
    href: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:59",
    external: true,
  },
  {
    icon: Calendar,
    title: "Online Quote",
    description: "Request a quote",
    href: "/contact",
    external: false,
  },
] as const;

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // one-time entrance
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  // auto-rotate slider (pause if tab is hidden)
  useEffect(() => {
    const next = () =>
      setActiveSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);

    const id = setInterval(() => {
      if (!document.hidden) next();
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const onOpenCustomerPortal = useCallback(() => {
    setIsCustomerPortalOpen(true);
  }, []);

  const onCloseCustomerPortal = useCallback(() => {
    setIsCustomerPortalOpen(false);
  }, []);

  // build links (stable)
  const portalLinks = useMemo(
    () =>
      PORTAL_LINKS.map((l) => ({
        ...l,
        aria: `${l.title}: ${l.description}`,
      })),
    []
  );

  return (
    <section className="relative min-h-screen overflow-hidden pt-8 md:pt-16">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {SLIDER_IMAGES.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: activeSlide === index ? 1 : 0 }}
            aria-hidden={activeSlide !== index}
          >
            <img
              src={slide.src}
              alt=""
              className="h-full w-full object-cover object-[50%_40%]"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </div>
        ))}
      </div>

      {/* Overlay (gradient scrim for contrast) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-tr from-black/70 via-black/40 to-black/20" />

      {/* Main Content */}
      <div className="absolute inset-0 z-[2] flex items-center justify-start">
        <div className="container mx-auto h-full px-4 md:px-6 lg:px-8 flex items-center">
          <div
            className={`max-w-2xl text-left transition-all duration-700 transform ${
              isVisible ? "opacity-100 -translate-y-[3%]" : "opacity-0 translate-y-6"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white">
              {SLIDER_IMAGES[activeSlide].text}
            </h1>

            {/* Optional supporting line – uncomment if needed */}
            {/* <p className="mt-3 max-w-xl text-white/80">
              Secure storage, fast pick-pack, and seamless last-mile—integrated with tracking across regions.
            </p> */}
          </div>
        </div>
      </div>

      {/* Portal Buttons */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-[10] px-2 sm:px-4">
        <div
          className={`mx-auto max-w-7xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 sm:gap-3">
              {portalLinks.map((link) => {
                const Icon = link.icon;
                const baseClasses =
                  "w-full h-12 sm:h-14 md:h-16 rounded-lg shadow-sm text-xs sm:text-sm inline-flex flex-col items-center justify-center gap-1 transition-transform duration-200 hover:shadow-md hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 bg-brand-navy text-slate-50";

                if (link.kind === "modal") {
                  return (
                    <button
                      key={link.title}
                      type="button"
                      onClick={onOpenCustomerPortal}
                      aria-label={link.aria}
                      className={baseClasses}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="font-medium leading-none">{link.title}</span>
                    </button>
                  );
                }

                return (
                  <a
                    key={link.title}
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={link.aria}
                    className={baseClasses}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-medium leading-none">{link.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Portal Modal */}
      {isCustomerPortalOpen && (
        <div
          className="fixed inset-0 z-[50] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="customer-portal-title"
        >
          <div className="w-full max-h-[90vh] max-w-2xl overflow-y-auto rounded-lg bg-white">
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2
                  id="customer-portal-title"
                  className="text-xl font-bold text-blue-900"
                >
                  Customer Portal
                </h2>
                <button
                  type="button"
                  onClick={onCloseCustomerPortal}
                  className="text-2xl text-gray-500 hover:text-gray-700"
                  aria-label="Close customer portal"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-800">Tutorial Videos</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[
                    { src: "/GGL_demo1.mp4", label: "Getting Started" },
                    { src: "/GGL_promo.mp4", label: "Advanced Features" },
                  ].map((video) => (
                    <div key={video.src} className="overflow-hidden rounded-lg border">
                      <div className="aspect-video">
                        <video
                          className="h-full w-full object-cover"
                          controls
                          preload="metadata"
                        >
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="bg-gray-50 p-2 text-sm font-medium">
                        {video.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onCloseCustomerPortal}
                  className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <a
                  href="https://cp.onlinetracking.co/#/login/3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
