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

  // Navigation with scroll support
  const handleNavClick = (path: string, scrollToId?: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === path && scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    navigate(path);
    setTimeout(() => {
      if (scrollToId) {
        const el = document.getElementById(scrollToId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const headerBgClass = isTransparent
    ? "bg-transparent"
    : "bg-white/95 shadow-md";

  const desktopText = isTransparent ? "text-white" : "text-gray-800";
  const mobileText = isTransparent ? "text-white" : "text-gray-800";

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-2 ${headerBgClass}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* ---------- Logo Section ---------- */}
          <div className="flex items-center gap-3">
            {/* Main Logo (unchanged) */}
            <img
              src="/ogl-logo.png"
              alt="One Global Logistics"
              onClick={handleLogoClick}
              className="h-16 w-auto cursor-pointer transition-all duration-300 object-contain"
            />

            {/* ---------- Second Logo (UPDATED ONLY THIS LOGIC) ---------- */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.1ge.sg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={isTransparent ? "/Singapore.png‎" : "/group.png"} 
                  alt="1 Global Enterprises"
                  className="h-11 w-auto object-contain hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* ---------- Mobile Menu Button ---------- */}
          <button
            className={`md:hidden p-1 rounded-md ${
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
              className={`${desktopText} hover:text-brand-gold font-medium transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className={`${desktopText} hover:text-brand-gold font-medium transition-colors`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className={`${desktopText} hover:text-brand-gold font-medium transition-colors`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/careers")}
              className={`${desktopText} hover:text-brand-gold font-medium transition-colors`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick("/global-presence")}
              className={`${desktopText} hover:text-brand-gold font-medium transition-colors`}
            >
              Global Presence
            </button>

            <CountrySelector />

            <button
              onClick={() => handleNavClick("/contact", "contact-form")}
              className={`px-5 py-2 transition font-medium rounded-xl ${
                isTransparent
                  ? "bg-white/20 border border-white text-white"
                  : "bg-slate-900 text-white hover:bg-slate-800"
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
          } md:hidden overflow-hidden transition-all duration-300`}
        >
          <nav
            className={`flex flex-col gap-4 border-t mt-4 ${
              isTransparent ? "text-white" : "text-gray-800"
            }`}
          >
            <button onClick={() => handleNavClick("/")} className={mobileText}>
              Home
            </button>
            <button onClick={() => handleNavClick("/about")} className={mobileText}>
              About Us
            </button>
            <button onClick={() => handleNavClick("/services")} className={mobileText}>
              Services
            </button>
            <button onClick={() => handleNavClick("/careers")} className={mobileText}>
              Careers
            </button>
            <button
              onClick={() => handleNavClick("/global-presence")}
              className={mobileText}
            >
              Global Presence
            </button>

            <div className="flex items-center gap-4 py-2">
              <a
                href="https://www.linkedin.com/company/gglus/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isTransparent ? "text-white" : "text-gray-600"}`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/gglusa"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isTransparent ? "text-white" : "text-gray-600"}`}
              >
                <Facebook size={20} />
              </a>
            </div>

            <CountrySelector />

            <button
              onClick={() => handleNavClick("/contact", "contact-form")}
              className={`px-4 py-2 rounded-md font-medium w-full ${
                isTransparent
                  ? "bg-white/20 border border-white text-white"
                  : "bg-brand-gold text-brand-navy"
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
