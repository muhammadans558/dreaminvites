import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_CONFIG } from '../data/weddingData';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('collections');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5] dark:bg-[#121110]"
    >
      {/* ========================================================
          FULL-WIDTH IMMERSIVE EDITORIAL PHOTOGRAPHY BACKGROUND
          (With subtle slow parallax and high-contrast scrim)
         ======================================================== */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img
          src="/src/assets/images/hero_wedding_stationery_1790662746929.jpg"
          alt="Editorial luxury wedding invitation stationery suite with gold foil calligraphy and wax seal by Dream Invites"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-center scale-104 transition-opacity duration-1000 ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* 
          CRITICAL CONTRAST SCRIM:
          Multi-layer editorial scrim gradient ensuring text is 100% readable in both Light & Dark modes
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/85 via-[#121110]/45 to-[#121110]/35 dark:from-[#0C0B0A]/95 dark:via-[#0C0B0A]/60 dark:to-[#0C0B0A]/45 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#121110]/20 to-[#121110]/60 pointer-events-none" />
      </div>

      {/* ========================================================
          HERO EDITORIAL CONTENT (Centered, Controlled, High Contrast)
          With subtle graceful staggered entrance animation
         ======================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        
        {/* Primary Headline: "Invitations That Begin The Celebration" */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.08] text-balance drop-shadow-md animate-heroReveal">
          Invitations That Begin <br className="hidden sm:inline" />
          <span className="italic font-light text-stone-200">The Celebration</span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-stone-200 font-light leading-relaxed drop-shadow-xs animate-heroSubReveal">
          Elegant wedding cards and bid boxes designed to make your special moments unforgettable.
        </p>

        {/* Refined Editorial CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto animate-heroBtnReveal">
          
          <a
            href="#collections"
            onClick={handleExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold tracking-widest uppercase text-stone-900 bg-white hover:bg-stone-100 rounded-xs border border-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
          >
            <span>Explore Collection</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#00AEEF]" />
          </a>

          <a
            href={BRAND_CONFIG.getWhatsAppUrl("Hi Dream Invites, I would like to discuss wedding invitations and bid boxes for my upcoming wedding.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold tracking-widest uppercase text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xs border border-white/40 hover:border-white transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] group"
          >
            <WhatsAppIcon className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
            <span>WhatsApp Us</span>
          </a>

        </div>

        {/* Quiet scroll indicator without hyphens */}
        <div className="pt-10 flex items-center justify-center gap-3 text-[11px] uppercase tracking-widest text-stone-300/80">
          <span>Scroll to Discover</span>
        </div>

      </div>
    </section>
  );
};
