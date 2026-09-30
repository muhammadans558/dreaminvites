import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F1EB]/50 dark:bg-[#161514]/50 border-y border-stone-200/50 dark:border-stone-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Subtle decorative emblem */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-12 h-px bg-stone-300 dark:bg-stone-700" />
          <span className="text-[#00AEEF] text-xs font-serif italic">Fine Craftsmanship</span>
          <span className="w-12 h-px bg-stone-300 dark:bg-stone-700" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-normal text-stone-900 dark:text-stone-100 tracking-tight">
          Made to Begin Your Celebration
        </h2>

        {/* Text */}
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed font-light italic max-w-2xl mx-auto">
          &ldquo;At Dream Invites, we believe your invitation is more than paper. It is the first glimpse of a celebration, a reflection of your style, and a keepsake of a beautiful beginning.&rdquo;
        </p>

        {/* Three poetic pillar markers */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 font-medium">
          <span>Artisanal Papers</span>
          <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">/</span>
          <span>Bespoke Typography</span>
          <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">/</span>
          <span>Enduring Keepsakes</span>
        </div>

      </div>
    </section>
  );
};
