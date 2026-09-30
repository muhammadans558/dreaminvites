import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const FullWidthBreak: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.15);

  return (
    <section
      ref={ref}
      className="relative w-full h-[50vh] sm:h-[65vh] overflow-hidden bg-stone-900 flex items-center justify-center"
    >
      {/* Background Editorial Image with subtle 800ms reveal transition */}
      <img
        src="/src/assets/images/fullwidth_stationery_atelier_1790666883253.jpg"
        alt="Wedding stationery flat lay by Dream Invites"
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-800 ease-out ${
          imageLoaded && isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-103'
        }`}
      />

      {/* Controlled High-Contrast Scrim Overlay */}
      <div className="absolute inset-0 bg-stone-950/50 dark:bg-stone-950/65 backdrop-blur-[1px]" />

      {/* Text Overlay */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-[#00AEEF] font-semibold">
          Dream Invites
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight drop-shadow-md">
          Made for moments worth remembering.
        </h2>
        <div className="w-12 h-px bg-white/40 mx-auto mt-4" />
      </div>
    </section>
  );
};
