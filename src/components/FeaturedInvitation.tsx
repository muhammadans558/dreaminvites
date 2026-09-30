import React, { useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/weddingData';

export const FeaturedInvitation: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-[#F5F1EB]/60 dark:bg-[#161514]/60 border-y border-stone-200/60 dark:border-stone-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Large Editorial Image with Scrim/Framing */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-4/3 rounded-xs overflow-hidden bg-stone-200 dark:bg-stone-800 border border-stone-300/80 dark:border-stone-700/80 shadow-xl">
              <img
                src="/src/assets/images/featured_invitation_editorial_1790662767611.jpg"
                alt="Editorial luxury wedding card flat lay with bespoke monogram wax seal and gold foil lettering by Dream Invites"
                referrerPolicy="no-referrer"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-700 hover:scale-[1.02] transition-transform ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#FAF8F5]/95 dark:bg-[#121110]/95 backdrop-blur-xs p-4 border border-stone-200 dark:border-stone-800 rounded-xs shadow-md max-w-sm">
                <span className="text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold">Featured Design</span>
                <p className="font-serif text-base text-stone-900 dark:text-stone-100 font-normal mt-0.5">The Archival Monogram Edition</p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Sage green envelope · Pure gold calligraphy · Hand-poured wax seal</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Conversation CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 font-medium">
              <span>Bespoke Commission</span>
              <span aria-hidden="true">·</span>
              <span>Tailored To You</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-[1.18] text-balance">
              Your Story, Beautifully Invited
            </h2>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              From the first glimpse to the final detail, every invitation is designed to set the tone for your celebration.
            </p>

            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              We collaborate with you on selecting the perfect paper weight, typographic harmonies, custom family monograms, and finishing touches so that your guests hold a tangible token of your joy.
            </p>

            <div className="pt-2">
              <a
                href={BRAND_CONFIG.getWhatsAppUrl("Hi Dream Invites, I'd like to discuss creating a bespoke invitation suite for my wedding.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-sm hover:bg-[#00AEEF] dark:hover:bg-[#00AEEF] dark:hover:text-white transition-all duration-200 shadow-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
              >
                <MessageCircle className="w-4 h-4 text-[#00AEEF]" />
                <span>Discuss Your Invitation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
