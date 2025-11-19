import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import CountrySelector from "../common/CountrySelector";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const isHomePage = location.pathname === "/" || location.pathname === "/sg";
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string, scrollToId?: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === path && scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate(path);
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
        boxShadow: isTransparent ? "none" : "0 4px 12px rgba(15,23,42,0.12)"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">

          {/* ---------- LOGOS ---------- */}
          <div className="flex items-center gap-3">

            {/* Smaller main logo */}
            <img
              src="/ogl-logo.png"
              onClick={handleLogoClick}
              className="h-12 md:h-11 lg:h-14 w-auto cursor-pointer object-contain"
              alt="One Global Logistics"
            />

            {/* Bigger 1 Global logo */}
            <a href="https://www.1ge.sg/" target="_blank" rel="noopener noreferrer">
              <img
                src={isTransparent ? "/Singapore.png" : "/group.png"}
                className="h-10 md:h-8 lg:h-11 xl:h-[40px] object-contain"
                alt="1 Global Enterprises"
              />
            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className={`md:hidden p-1 ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* ---------- DESKTOP NAV ---------- */}
          <nav className="hidden md:flex gap-4 lg:gap-5 xl:gap-6 items-center">

            {["/", "/about", "/services", "/careers", "/global-presence"].map((path, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(path)}
                className={`
                  ${textColor} font-medium hover:text-brand-gold whitespace-nowrap
                  text-[12px]     /* small desktop */
                  md:text-[13px]  /* normal laptop */
                  lg:text-[14px]  /* large laptop / desktop */
                `}
              >
                {["Home", "About Us", "Services", "Careers", "Global Presence"][idx]}
              </button>
            ))}

            {/* Country Selector */}
            <div className="scale-[0.9] lg:scale-[1]">
              <CountrySelector />
            </div>

            {/* SHOW ONLY ON XL  (hide at 1024 & 1280) */}
            <button
              onClick={() => handleNavClick("/contact", "contact-form")}
              className={`
                hidden xl:inline-flex items-center justify-center
                px-5 py-2 font-medium rounded-xl text-[14px]
                ${isTransparent ? "bg-white/20 border border-white text-white" : "bg-slate-900 text-white hover:bg-slate-800"}
              `}
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
            {["/", "/about", "/services", "/careers", "/global-presence"].map(
              (path, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(path)}
                  className="text-left text-base"
                >
                  {["Home", "About Us", "Services", "Careers", "Global Presence"][idx]}
                </button>
              )
            )}

            <CountrySelector />

            {/* Get A Quote hidden on mobile */}
          </nav>
        </div>
      </div>
    </header>
  );
};
