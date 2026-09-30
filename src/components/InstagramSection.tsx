import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/weddingData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const InstagramSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.2);

  return (
    <section
      ref={ref}
      id="gallery"
      className={`py-20 md:py-24 bg-[#F5F1E9] dark:bg-[#161514] border-t border-stone-200/80 dark:border-stone-800/80 text-center transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Simple English Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50 tracking-tight">
          Follow Our Work
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-normal max-w-xl mx-auto leading-relaxed">
          Discover our latest wedding card and bid box designs on Instagram.
        </p>

        {/* Clean Instagram Action Button with Subtle Hover Animation */}
        <div className="pt-2">
          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-xs hover:bg-stone-800 dark:hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            aria-label="Follow Dream Invites on Instagram"
          >
            <Instagram className="w-4 h-4 text-white dark:text-stone-900 group-hover:scale-110 transition-transform duration-200" />
            <span>Follow @dream_invites</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

      </div>
    </section>
  );
};
