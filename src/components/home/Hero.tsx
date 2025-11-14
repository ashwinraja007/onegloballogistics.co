import React, { useState, useEffect } from 'react';
import { Users, UserCircle, SearchCode, Ship, Calendar } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderImages = [
    { src: '/h1.jpg', text: 'Cost effective and top quality LCL & FCL services' },
    { src: '/h2.jpg', text: 'Top-notch warehousing services for all your shipments' },
    { src: '/h3.jpg', text: 'Get the best LCL & FCL services at unbeatable prices' },
    { src: '/h4.png', text: 'Get the best logistics service at very competitive prices' },
    { src: '/15.png', text: 'Cost effective and top quality LCL & FCL services' },
    { src: '/13.png', text: 'Top-notch warehousing services for all your shipments' },
    { src: '/12.png', text: 'Get the best LCL & FCL services at unbeatable prices' },
    { src: '/14.png', text: 'Get the best logistics service at very competitive prices' }
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const portalLinks = [
    { icon: <Users className="w-5 h-5" />, title: 'ConsolMate', url: '', external: true },
    { icon: <UserCircle className="w-5 h-5" />, title: 'Partner Portal', url: '', external: true },
    { icon: <SearchCode className="w-5 h-5" />, title: 'Tracking', url: '', external: true },
    { icon: <Ship className="w-5 h-5" />, title: 'Sailing Schedule', url: '', external: true },
    { icon: <Calendar className="w-5 h-5" />, title: 'Online Quote', url: '/contact', external: false }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-10 md:pt-16">

      {/* BG Slider */}
      <div className="absolute inset-0">
        {sliderImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.text}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Hero text */}
      <div className="absolute inset-0 flex items-center z-[2]">
        <div className="container mx-auto px-6">
          <h1
            className={`text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {sliderImages[activeSlide].text}
          </h1>
        </div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent z-[2]" />

      {/* BOTTOM BUTTONS */}
      <div className="absolute bottom-6 left-0 right-0 z-[3] px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {portalLinks.map((link, i) => (
              <div key={i} className="flex justify-center">
                {link.external ? (
                  <a href={link.url} target="_blank" className="w-full">
                    <button className="w-full h-16 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center gap-1 hover:scale-105 transition">
                      {link.icon}
                      <span className="text-sm font-medium">{link.title}</span>
                    </button>
                  </a>
                ) : (
                  <a href={link.url} className="w-full">
                    <button className="w-full h-16 bg-brand-navy text-white rounded-lg flex flex-col items-center justify-center gap-1 hover:scale-105 transition">
                      {link.icon}
                      <span className="text-sm font-medium">{link.title}</span>
                    </button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
