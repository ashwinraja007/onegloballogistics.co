import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import CountrySelector from "../common/CountrySelector";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled;

  // Scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced navigation with scroll-to-id support
  const handleNavClick = (path: string, scrollToId?: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === path && scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(path);
      setTimeout(() => {
        if (scrollToId) {
          const el = document.getElementById(scrollToId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 500);
    }
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const baseDesktopLink =
    "font-medium transition-colors py-1";
  const desktopTextColor = isTransparent ? "text-white" : "text-gray-800";

  const baseMobileLink = "font-medium";
  const mobileTextColor = isTransparent ? "text-white" : "text-gray-800";

  const headerBgClass = isTransparent
    ? "bg-transparent"
    : "bg-white/95 shadow-md";

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-2 ${headerBgClass}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* ---------- Logo Section ---------- */}
          <div className="flex items-center gap-3">
            {/* Main Logo (switch to transparent logo on hero) */}
            <img
              src={isTransparent ? "/6958.png" : "/ogl-logo.png"}
              alt="One Global Logistics"
              onClick={handleLogoClick}
              className="h-16 w-auto cursor-pointer transition-all duration-300 object-contain"
            />

            {/* Second Logo + Text */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.1ge.sg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/group.png"
                  alt="1 Global Enterprises"
                  className="h-11 w-auto object-contain hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* ---------- Mobile Menu Button ---------- */}
          <button
            className={`md:hidden focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-md p-1 ${
              isTransparent ? "text-white" : "text-gray-800"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* ---------- Desktop Navigation ---------- */}
          <nav className="hidden md:flex gap-6 items-center">
            <button
              onClick={() => handleNavClick("/")}
              className={`${baseDesktopLink} ${desktopTextColor} hover:text-brand-gold ${
                location.pathname === "/" ? "text-brand-gold" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className={`${baseDesktopLink} ${desktopTextColor} hover:text-brand-gold ${
                location.pathname === "/about" ? "text-brand-gold" : ""
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className={`${baseDesktopLink} ${desktopTextColor} hover:text-brand-gold ${
                location.pathname.includes("/services") ? "text-brand-gold" : ""
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/careers")}
              className={`${baseDesktopLink} ${desktopTextColor} hover:text-brand-gold ${
                location.pathname === "/careers" ? "text-brand-gold" : ""
              }`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick("/global-presence")}
              className={`${baseDesktopLink} ${desktopTextColor} hover:text-brand-gold ${
                location.pathname === "/global-presence" ? "text-brand-gold" : ""
              }`}
            >
              Global Presence
            </button>

            <CountrySelector />

            <button
              onClick={() => handleNavClick("/contact", "contact-form")}
              className={`px-5 py-2 transition font-medium rounded-xl ${
                isTransparent
                  ? "bg-white/15 border border-white/30 text-white hover:bg-white/25"
                  : "bg-slate-900 hover:bg-slate-800 text-slate-50"
              }`}
            >
              Get A Quote
            </button>
          </nav>
        </div>

        {/* ---------- Mobile Navigation ---------- */}
        <div
          className={`${
            isMobileMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav
            className={`flex flex-col gap-4 border-t mt-4 border-gray-100 ${
              isTransparent ? "text-white" : "text-gray-800"
            }`}
          >
            <button
              onClick={() => handleNavClick("/")}
              className={`${baseMobileLink} ${mobileTextColor} hover:text-brand-gold ${
                location.pathname === "/" ? "text-brand-gold" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className={`${baseMobileLink} ${mobileTextColor} hover:text-brand-gold ${
                location.pathname === "/about" ? "text-brand-gold" : ""
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className={`${baseMobileLink} ${mobileTextColor} hover:text-brand-gold ${
                location.pathname.includes("/services") ? "text-brand-gold" : ""
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/careers")}
              className={`${baseMobileLink} ${mobileTextColor} hover:text-brand-gold ${
                location.pathname === "/careers" ? "text-brand-gold" : ""
              }`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick("/global-presence")}
              className={`${baseMobileLink} ${mobileTextColor} hover:text-brand-gold ${
                location.pathname === "/global-presence" ? "text-brand-gold" : ""
              }`}
            >
              Global Presence
            </button>

            <div className="flex items-center gap-4 py-2">
              <a
                href="https://www.linkedin.com/company/gglus/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isTransparent ? "text-white" : "text-gray-600"} hover:text-brand-gold transition-colors`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/gglusa"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isTransparent ? "text-white" : "text-gray-600"} hover:text-brand-gold transition-colors`}
              >
                <Facebook size={20} />
              </a>
            </div>

            <CountrySelector />

            <button
              onClick={() => handleNavClick("/contact", "contact-form")}
              className={`px-4 py-2 rounded-md text-center font-medium w-full ${
                isTransparent
                  ? "bg-white/15 border border-white/30 text-white hover:bg-white/25"
                  : "bg-brand-gold text-brand-navy hover:bg-amber-500"
              }`}
            >
              Get A Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
