import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import CountrySelector from "../common/CountrySelector";
export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

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
        el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      navigate(path);
      setTimeout(() => {
        if (scrollToId) {
          const el = document.getElementById(scrollToId);
          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      }, 500); // wait for navigation to complete
    }
  };
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  return <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white py-2 shadow-md' : 'bg-white/95 py-2'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/ogl-logo.png" alt="One Global Logistics" onClick={handleLogoClick} className="h-16 w-auto cursor-pointer transition-all duration-300 object-contain" />
          </div>

          <button className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-navy rounded-md p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <nav className="hidden md:flex gap-6 items-center">
            <button onClick={() => handleNavClick("/")} className={`text-gray-800 hover:text-brand-navy font-medium transition-colors py-1 ${location.pathname === '/' ? 'text-brand-navy' : ''}`}>
              Home
            </button>
            <button onClick={() => handleNavClick("/about")} className={`text-gray-800 hover:text-brand-navy font-medium transition-colors py-1 ${location.pathname === '/about' ? 'text-brand-navy' : ''}`}>
              About Us
            </button>
            <button onClick={() => handleNavClick("/services")} className={`text-gray-800 hover:text-brand-navy font-medium transition-colors py-1 ${location.pathname.includes('/services') ? 'text-brand-navy' : ''}`}>
              Services
            </button>
            <button onClick={() => handleNavClick("/global-presence")} className={`text-gray-800 hover:text-brand-navy font-medium transition-colors py-1 ${location.pathname === '/global-presence' ? 'text-brand-navy' : ''}`}>
              Global Presence
            </button>
            <button onClick={() => handleNavClick("/careers")} className={`text-gray-800 hover:text-brand-navy font-medium transition-colors py-1 ${location.pathname === '/careers' ? 'text-brand-navy' : ''}`}>
              Careers
            </button>
            <button onClick={() => handleNavClick("/contact")} className={`text-gray-800 hover:text-brand-navy font-medium transition-colors py-1 ${location.pathname === '/contact' ? 'text-brand-navy' : ''}`}>
              Contact Us
            </button>

            <div className="flex items-center gap-2">
              <a href="https://linkedin.com/company/onegloballogistics/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-navy transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.facebook.com/oneglobalqatar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-navy transition-colors">
                <Facebook size={18} />
              </a>
            </div>

            <CountrySelector />

            <button onClick={() => handleNavClick("/contact", "contact-form")} className="px-5 py-2 transition font-medium bg-brand-navy hover:bg-brand-navy/90 text-white rounded-xl">
              Get A Quote
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMobileMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}>
          <nav className="flex flex-col gap-4 border-t mt-4 border-gray-100">
            <button onClick={() => handleNavClick("/")} className={`text-gray-800 hover:text-brand-navy font-medium ${location.pathname === '/' ? 'text-brand-navy' : ''}`}>
              Home
            </button>
            <button onClick={() => handleNavClick("/about")} className={`text-gray-800 hover:text-brand-navy font-medium ${location.pathname === '/about' ? 'text-brand-navy' : ''}`}>
              About Us
            </button>
            <button onClick={() => handleNavClick("/services")} className={`text-gray-800 hover:text-brand-navy font-medium ${location.pathname.includes('/services') ? 'text-brand-navy' : ''}`}>
              Services
            </button>
            <button onClick={() => handleNavClick("/global-presence")} className={`text-gray-800 hover:text-brand-navy font-medium ${location.pathname === '/global-presence' ? 'text-brand-navy' : ''}`}>
              Global Presence
            </button>
            <button onClick={() => handleNavClick("/careers")} className={`text-gray-800 hover:text-brand-navy font-medium ${location.pathname === '/careers' ? 'text-brand-navy' : ''}`}>
              Careers
            </button>
            <button onClick={() => handleNavClick("/contact")} className={`text-gray-800 hover:text-brand-navy font-medium ${location.pathname === '/contact' ? 'text-brand-navy' : ''}`}>
              Contact Us
            </button>

            <div className="flex items-center gap-4 py-2">
              <a href="https://linkedin.com/company/onegloballogistics/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-navy transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/oneglobalqatar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-navy transition-colors">
                <Facebook size={20} />
              </a>
            </div>

            <CountrySelector />

            <button onClick={() => handleNavClick("/contact", "contact-form")} className="px-4 py-2 bg-brand-navy text-white rounded-md hover:bg-brand-navy/90 text-center font-medium w-full">
              Get A Quote
            </button>
          </nav>
        </div>
      </div>
    </header>;
};