import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import CountrySelector from "../common/CountrySelector";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = location.pathname === "/" || location.pathname === "/sg";
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (path: string, scrollToId?: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === path && scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isTransparent ? "transparent" : "#ffffff",
        boxShadow: isTransparent ? "none" : "0 4px 12px rgba(15,23,42,0.12)",
      }}
    >
      <div className="w-full max-w-[1650px] mx-auto px-4 lg:px-8 xl:px-10 2xl:px-14 py-2">
        <div className="flex justify-between items-center w-full">
          {/* LEFT — LOGO + SUB LOGO */}
          <div className="flex items-center gap-3 shrink-0">
            <img
              src="/ogl-logo.png"
              onClick={handleLogoClick}
              className="h-10 lg:h-12 xl:h-[52px] w-auto cursor-pointer object-contain"
              alt="One Global Logistics"
            />

            <a
              href="https://www.1ge.sg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={isTransparent ? "/Singapore.png" : "/group.png"}
                className="h-7 lg:h-8 xl:h-9 w-auto object-contain"
                alt="1 Global Enterprises"
              />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`md:hidden p-2 ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
            {["/", "/about", "/services", "/careers", "/global-presence"].map(
              (path, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(path)}
                  className={`${textColor} text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] font-medium tracking-wide hover:text-brand-gold whitespace-nowrap`}
                >
                  {["Home", "About Us", "Services", "Careers", "Global Presence"][idx]}
                </button>
              )
            )}

            <div className="scale-[.90] lg:scale-[.95] xl:scale-100">
              <CountrySelector />
            </div>

            <button
              onClick={() => handleNavClick("/contact", "contact-form")}
              className={`px-3 lg:px-4 py-[6px] lg:py-[7px] text-[13px] lg:text-[14px] rounded-xl font-medium whitespace-nowrap ${
                isTransparent
                  ? "bg-white/25 border border-white text-white"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              Get A Quote
            </button>
          </nav>
        </div>

        {/* MOBILE NAV */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className={`flex flex-col gap-4 mt-4 rounded-b-xl px-4 py-4 ${
              isTransparent
                ? "bg-black/70 text-white backdrop-blur-md"
                : "bg-white text-gray-800 shadow-lg"
            }`}
          >
            {["/", "/about", "/services", "/careers", "/global-presence"].map(
              (path, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(path)}
                  className="text-left py-1 text-base"
                >
                  {["Home", "About Us", "Services", "Careers", "Global Presence"][idx]}
                </button>
              )
            )}

            <div className="mt-2 mb-2">
              <CountrySelector />
            </div>

            <button
              onClick={() => handleNavClick("/contact", "contact-form")}
              className={`px-4 py-2 rounded-md w-full font-medium mt-2 ${
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
