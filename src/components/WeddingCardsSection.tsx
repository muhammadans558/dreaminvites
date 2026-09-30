import React, { useState } from 'react';
import { Eye, ZoomIn } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Product, PRODUCTS, BRAND_CONFIG } from '../data/weddingData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ImageLightbox } from './ImageLightbox';

interface WeddingCardsSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const WeddingCardsSection: React.FC<WeddingCardsSectionProps> = ({ onSelectProduct }) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.1);
  const weddingCards = PRODUCTS.filter((p) => p.category === 'Wedding Cards');
  const [lightboxProduct, setLightboxProduct] = useState<Product | null>(null);

  return (
    <section
      ref={ref}
      id="wedding-cards"
      className={`py-20 md:py-28 bg-[#F4F0E8]/70 dark:bg-[#161514]/70 border-t border-stone-200/80 dark:border-stone-800/80 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold">
              01 / Our Stationery Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50 tracking-tight">
              Wedding Cards Collection
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-normal max-w-xl">
              An elegant collection of wedding invitation cards designed for timeless celebrations. Click any design to explore its multiple photo angles.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 font-sans font-medium">
              {weddingCards.length} Designs
            </span>
          </div>
        </div>

        {/* Editorial Masonry Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {weddingCards.map((card, idx) => {
            const isTall = idx % 3 === 0;
            const isWide = idx % 5 === 0 && idx !== 0;

            const aspectClass = isWide
              ? 'aspect-16/11'
              : isTall
              ? 'aspect-3/4 sm:aspect-4/5'
              : 'aspect-4/3';

            const whatsAppUrl = BRAND_CONFIG.getProductWhatsAppUrl(card);

            return (
              <div
                key={card.id}
                className="group relative flex flex-col bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800/90 rounded-xs overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image Frame */}
                <div
                  className={`relative ${aspectClass} overflow-hidden bg-stone-100 dark:bg-stone-900 cursor-pointer`}
                  onClick={() => setLightboxProduct(card)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open fullscreen zoom view for ${card.name}`}
                >
                  <img
                    src={card.images[0]}
                    alt={card.altText}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />

                  {/* Category marker */}
                  <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 dark:bg-[#121110]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] tracking-widest uppercase font-medium text-stone-800 dark:text-stone-200 border border-stone-200/60 dark:border-stone-700/60">
                    {card.subCategory || 'Wedding Card'}
                  </div>

                  {/* Multi-photo indicator without font-mono */}
                  {card.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 bg-stone-950/70 text-white backdrop-blur-xs text-[10px] font-sans font-medium px-2 py-0.5 rounded-xs tracking-wider">
                      {card.images.length} photos
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <span className="bg-stone-900/90 dark:bg-stone-100/90 text-white dark:text-stone-900 text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xs shadow-md flex items-center gap-2">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Zoom Image</span>
                    </span>
                  </div>
                </div>

                {/* Metadata Block */}
                <div className="p-4 sm:p-5 space-y-3 grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold">
                      Wedding Invitation
                    </div>
                    <h3
                      onClick={() => onSelectProduct(card)}
                      className="font-serif text-xl sm:text-2xl font-normal text-stone-900 dark:text-stone-50 group-hover:text-[#00AEEF] dark:group-hover:text-[#00AEEF] transition-colors cursor-pointer"
                    >
                      {card.name}
                    </h3>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(card)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium uppercase tracking-wider text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 rounded-xs hover:border-stone-900 dark:hover:border-stone-100 hover:text-stone-900 dark:hover:text-white transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-xs hover:bg-stone-800 dark:hover:bg-white transition-all shadow-2xs group/btn"
                      aria-label={`Inquire on WhatsApp about ${card.name}`}
                    >
                      <WhatsAppIcon className="w-4 h-4 group-hover/btn:scale-105 transition-transform" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Consultation footnote */}
        <div className="text-center pt-4">
          <p className="text-xs text-stone-500 dark:text-stone-400 font-normal">
            Need a completely custom stationery concept or personalized Urdu calligraphy?{' '}
            <a
              href={BRAND_CONFIG.getWhatsAppUrl("Hi Dream Invites, I am looking for a custom wedding invitation suite.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 dark:text-stone-100 font-semibold underline hover:text-[#00AEEF] inline-flex items-center gap-1.5 ml-1"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 inline-block" />
              <span>Consult our team on WhatsApp</span>
            </a>
          </p>
        </div>

      </div>

      {/* FULLSCREEN IMAGE VIEWER / LIGHTBOX */}
      <ImageLightbox
        product={lightboxProduct}
        initialIndex={0}
        isOpen={Boolean(lightboxProduct)}
        onClose={() => setLightboxProduct(null)}
      />
    </section>
  );
};
