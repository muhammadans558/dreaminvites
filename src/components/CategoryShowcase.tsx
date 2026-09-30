import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CategoryShowcase: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.12);

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id="categories"
      className={`py-20 md:py-28 bg-[#FAF8F5] dark:bg-[#121110] transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================
            EDITORIAL INTRODUCTION (Simple English, No Atelier)
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-stone-300 dark:bg-stone-700" />
            <span className="text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold">
              Our Collections
            </span>
            <span className="w-10 h-px bg-stone-300 dark:bg-stone-700" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight">
            Made for Your Celebration
          </h2>

          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Explore our two specialized collections designed to honor timeless wedding traditions and contemporary celebrations.
          </p>
        </div>

        {/* ========================================================
            TWO EDITORIAL CATEGORY BLOCKS (WEDDING CARDS + BID BOXES)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* CATEGORY 01: WEDDING CARDS */}
          <div
            onClick={() => scrollToSection('wedding-cards')}
            className="lg:col-span-6 group cursor-pointer bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800/90 rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative aspect-4/3 sm:aspect-16/11 overflow-hidden bg-stone-100 dark:bg-stone-900">
              <img
                src="/src/assets/images/featured_invitation_editorial_1790662767611.jpg"
                alt="Wedding cards collection by Dream Invites"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute top-4 left-4 bg-[#FAF8F5]/95 dark:bg-[#121110]/95 backdrop-blur-xs px-3 py-1.5 text-xs font-sans tracking-widest uppercase font-semibold text-stone-900 dark:text-stone-100 border border-stone-200/70 dark:border-stone-700/70">
                01 / WEDDING CARDS
              </div>
            </div>

            <div className="p-7 sm:p-9 space-y-4 grow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 dark:text-stone-50 group-hover:text-[#00AEEF] dark:group-hover:text-[#00AEEF] transition-colors">
                  Wedding Cards
                </h3>
                <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                  Invitation cards crafted with heavyweight textured cotton paper, hot gold foil stamping, and personalized couple names.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-stone-100 group-hover:text-[#00AEEF] transition-colors inline-flex items-center gap-2">
                  <span>Explore Wedding Cards</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-sans font-medium">8 Designs</span>
              </div>
            </div>
          </div>

          {/* CATEGORY 02: BID BOXES */}
          <div
            onClick={() => scrollToSection('bid-boxes')}
            className="lg:col-span-6 group cursor-pointer bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800/90 rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative aspect-4/3 sm:aspect-16/11 overflow-hidden bg-stone-100 dark:bg-stone-900">
              <img
                src="/src/assets/images/bidbox_royal_emerald_1790663691007.jpg"
                alt="Sweet favor bid boxes by Dream Invites"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute top-4 left-4 bg-[#FAF8F5]/95 dark:bg-[#121110]/95 backdrop-blur-xs px-3 py-1.5 text-xs font-sans tracking-widest uppercase font-semibold text-stone-900 dark:text-stone-100 border border-stone-200/70 dark:border-stone-700/70">
                02 / BID BOXES
              </div>
            </div>

            <div className="p-7 sm:p-9 space-y-4 grow flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 dark:text-stone-50 group-hover:text-[#00AEEF] dark:group-hover:text-[#00AEEF] transition-colors">
                  Bid Boxes
                </h3>
                <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                  Ceremonial announcement and sweet favor boxes finished with royal velvet, textured linen, and silk tassels.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-stone-100 group-hover:text-[#00AEEF] transition-colors inline-flex items-center gap-2">
                  <span>Explore Bid Boxes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-sans font-medium">4 Keepsakes</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
