import React from 'react';
import { Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_CONFIG } from '../data/weddingData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const EditorialStorySection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.15);

  return (
    <section
      ref={ref}
      id="story"
      className={`py-24 sm:py-32 bg-[#FAF8F5] dark:bg-[#121110] overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pr-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#00AEEF] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-[1.14] text-balance">
              Every detail begins <br className="hidden sm:inline" />
              <span className="italic font-light text-stone-700 dark:text-stone-300">
                with an invitation.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed">
              From the paper and typography to the smallest finishing detail, we create stationery that sets the tone for your celebration.
            </p>

            <div className="pt-2 space-y-4 text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-normal leading-relaxed border-l-2 border-[#00AEEF] pl-4">
              <p>
                Whether celebrating a Nikah, Baraat, Walima, or an intimate dinner, the first moment your guests hold is the weight of your card and the shine of your monogram.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={BRAND_CONFIG.getWhatsAppUrl("Hi Dream Invites, I would like to consult on wedding stationery paper & finishes.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-white rounded-xs transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <WhatsAppIcon className="w-4.5 h-4.5 group-hover:scale-105 transition-transform" />
                <span>Discuss Your Vision</span>
              </a>
            </div>
          </div>

          {/* Right Column: Close-up Stationery Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 sm:aspect-1/1 max-w-lg mx-auto rounded-xs overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800/90 shadow-xl">
              <img
                src="/assets/images/stationery_detail_wax_seal_1790663743925.jpg"
                alt="Close-up detail of wedding invitation envelope, gold calligraphy, and wax seal by Dream Invites"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              />

              {/* Tag without Atelier */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#FAF8F5]/95 dark:bg-[#121110]/95 backdrop-blur-md p-4 border border-stone-200 dark:border-stone-800 rounded-xs shadow-md max-w-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#00AEEF] font-semibold">Fine Finishing</span>
                <p className="font-serif text-sm text-stone-900 dark:text-stone-100 mt-0.5">Hand-Poured Monogram Wax Seal</p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Champagne satin ribbon · Metallic gold stamp</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
