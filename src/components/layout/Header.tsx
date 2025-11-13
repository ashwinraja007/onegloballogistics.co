import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import CountrySelector from "../common/CountrySelector";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Transparent only when at top of page
  const isTransparent = !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    }, 400);
  };

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const textColor = isTransparent ? "text-white" : "text-gray-800";

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-2"
      style={{
        backgroundColor: isTransparent ? "transparent" : "#ffffff",
        boxShadow: isTransparent
          ? "none"
          : "0 4px 12px rgba(15, 23, 42, 0.12)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* ---------- LOGOS ---------- */}
          <div className="flex items-center gap-3">
            {/* Main Logo */}
            <img
              src="/ogl-logo.png"
              onClick={handleLogoClick}
              className="h-16 w-auto cursor-pointer object-contain"
              alt="One Global Logistics"
            />

            {/* Second Logo (6958.png only on transparent hero) */}
            <a
              href="https://www.1ge.sg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={isTransparent ? "/6958.png" : "/group.png"}
                className="h-11 w-auto object-contain"
                alt="1 Global Enterprises"
              />
            </a>
          </div>

          {/* ---------- MOBILE MENU ICON ---------- */}
          <button
            className={`md:hidden p-1 ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* ---------- DESKTOP NAV ---------- */}
          <nav className="hidden md:flex gap-6 items-center">
            <button
              onClick={() => handleNavClick("/")}
              className={`${textColor} font-medium hover:text-brand-gold`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className={`${textColor} font-medium hover:text-brand-gold`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className={`${textColor} font-medium hover:text-brand-gold`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/careers")}
              className={`${textColor} font-medium hover:text-brand-gold`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick("/global-presence")}
              className={`${textColor} font-medium hover:text-brand-gold`}
            >
              Global Presence
            </button>

            <CountrySelector />

            <button
              onClick={() => handleNavClick("/contact", "contact-form")}
              className={`px-5 py-2 font-medium rounded-xl ${
                isTransparent
                  ? "bg-white/20 border border-white text-white"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              Get A Quote
            </button>
          </nav>
        </div>

        {/* ---------- MOBILE NAV ---------- */}
        <div
          className={`${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300 md:hidden`}
        >
          <nav
            className={`flex flex-col gap-4 mt-4 rounded-b-xl px-4 py-4 ${
              isTransparent ? "bg-black/60 text-white" : "bg-white text-gray-800"
            }`}
          >
            <button
              onClick={() => handleNavClick("/")}
              className={`${textColor} text-left`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className={`${textColor} text-left`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className={`${textColor} text-left`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/careers")}
              className={`${textColor} text-left`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick("/global-presence")}
              className={`${textColor} text-left`}
            >
              Global Presence
            </button>

            <CountrySelector />

            <button
              onClick={() => handleNavClick("/contact", "contact-form")}
              className={`px-4 py-2 rounded-md w-full font-medium ${
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
