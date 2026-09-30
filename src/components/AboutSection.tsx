import React from 'react';
import { DreamInvitesLogo } from './DreamInvitesLogo';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#FAF8F5] dark:bg-[#121110] border-t border-stone-200/60 dark:border-stone-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Brand Logo Presentation */}
        <div className="flex justify-center">
          <DreamInvitesLogo size="lg" withTagline={false} darkInvert={true} />
        </div>

        {/* Section Heading with Official Tagline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50 tracking-tight text-balance">
          Bringing Your Print to Life.
        </h2>

        {/* Brand Narrative */}
        <div className="max-w-2xl mx-auto space-y-4 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
          <p>
            Dream Invites is dedicated to creating beautiful wedding stationery that reflects the personality, style, and joy behind every celebration.
          </p>
          <p className="text-sm sm:text-base text-stone-500 dark:text-stone-400">
            From the subtle weight of archival paper to the warmth of hand-pressed metallic foil, every invitation is treated as a treasured prelude to the vows you exchange.
          </p>
        </div>

        {/* Craft values */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 font-medium">
          <span>Lahore Studio</span>
          <span aria-hidden="true">·</span>
          <span>Nationwide Dispatch Across Pakistan</span>
          <span aria-hidden="true">·</span>
          <span>Custom Hand Finishing</span>
        </div>

      </div>
    </section>
  );
};
