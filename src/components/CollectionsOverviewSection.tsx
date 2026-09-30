import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COLLECTIONS, CollectionInfo } from '../data/weddingData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CollectionsOverviewSectionProps {
  onSelectCollection: (slug: string) => void;
}

export const CollectionsOverviewSection: React.FC<CollectionsOverviewSectionProps> = ({
  onSelectCollection,
}) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>(0.15);

  return (
    <section id="collections" className="py-20 md:py-28 bg-[#FAF8F5] dark:bg-[#121110]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* ========================================================
            SECTION INTRODUCTION (Minimal & Elegant)
           ======================================================== */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto space-y-3 transition-all duration-700 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold">
            Our Collections
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-[1.12]">
            Collections
          </h2>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed">
            Three specialized collections crafted with premium papers, luxury velvet, and timeless finishing.
          </p>
        </div>

        {/* ========================================================
            EXACTLY THREE EDITORIAL COLLECTION BLOCKS
            1. Wedding Cards  |  2. Bid Boxes  |  3. Nikah Frames
           ======================================================== */}
        <div className="space-y-16 sm:space-y-24">
          {COLLECTIONS.map((col, index) => (
            <CollectionBlock
              key={col.id}
              collection={col}
              index={index}
              onSelectCollection={onSelectCollection}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

interface CollectionBlockProps {
  collection: CollectionInfo;
  index: number;
  onSelectCollection: (slug: string) => void;
}

const CollectionBlock: React.FC<CollectionBlockProps> = ({
  collection,
  index,
  onSelectCollection,
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.15);
  // Alternate subtle editorial composition: even (0, 2) left image, odd (1) right image on desktop
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div
        onClick={() => onSelectCollection(collection.slug)}
        className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-white dark:bg-[#181716] p-6 sm:p-10 lg:p-12 rounded-xs border border-stone-200/90 dark:border-stone-800/90 shadow-2xs hover:shadow-xl transition-all duration-300"
      >
        {/* Large Editorial Image */}
        <div
          className={`lg:col-span-7 overflow-hidden rounded-xs bg-stone-100 dark:bg-stone-900 ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="relative aspect-4/3 sm:aspect-16/10 overflow-hidden">
            <img
              src={collection.coverImage}
              alt={collection.altText}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
            />
            {/* Subtle category identifier on top */}
            <div className="absolute top-4 left-4 bg-[#FAF8F5]/95 dark:bg-[#121110]/95 backdrop-blur-xs px-3 py-1.5 text-xs font-sans tracking-widest uppercase font-semibold text-stone-900 dark:text-stone-100 border border-stone-200/70 dark:border-stone-700/70">
              0{index + 1} / {collection.name.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Narrative & CTA */}
        <div
          className={`lg:col-span-5 space-y-6 text-left flex flex-col justify-between ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold block">
              Collection Showcase
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50 tracking-tight group-hover:text-[#00AEEF] dark:group-hover:text-[#00AEEF] transition-colors">
              {collection.name}
            </h3>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed">
              {collection.shortDescription}
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectCollection(collection.slug);
              }}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-widest uppercase text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-xs hover:bg-stone-800 dark:hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 group/btn focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            >
              <span>{collection.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
