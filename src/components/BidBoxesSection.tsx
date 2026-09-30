import React from 'react';
import { Eye, PackageOpen } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Product, PRODUCTS, BRAND_CONFIG } from '../data/weddingData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BidBoxesSectionProps {
  onSelectProduct: (product: Product) => void;
}

export const BidBoxesSection: React.FC<BidBoxesSectionProps> = ({ onSelectProduct }) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.1);
  const bidBoxes = PRODUCTS.filter((p) => p.category === 'Bid Boxes');

  return (
    <section
      ref={ref}
      id="bid-boxes"
      className={`py-24 sm:py-32 bg-[#1A141C] text-stone-100 relative overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 bg-radial-gradient from-[#2C1F30]/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header with Deep Plum Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#00AEEF] font-semibold">
              <PackageOpen className="w-4 h-4" />
              <span>02 / Ceremonial Keepsakes</span>
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
              Bid Boxes
            </h2>

            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
              Beautifully presented details designed to make your announcement even more special.
              Handcrafted in velvet, textured linen, and metallic foil for luxury sweets and ceremonial keepsakes.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-sans font-medium">
              Announcement Suites
            </span>
          </div>
        </div>

        {/* Tactile Luxury Bid Boxes Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {bidBoxes.map((box) => {
            const whatsAppUrl = BRAND_CONFIG.getProductWhatsAppUrl(box);

            return (
              <div
                key={box.id}
                className="group relative flex flex-col bg-[#241B26] border border-white/10 rounded-xs overflow-hidden shadow-lg hover:border-white/25 hover:shadow-2xl transition-all duration-300"
              >
                {/* Product Image Frame */}
                <div
                  className="relative aspect-4/3 overflow-hidden bg-stone-900 cursor-pointer"
                  onClick={() => onSelectProduct(box)}
                >
                  <img
                    src={box.images[0]}
                    alt={box.altText}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />

                  {/* Multi-photo indicator without font-mono */}
                  {box.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 bg-stone-950/80 text-white backdrop-blur-xs text-[10px] font-sans font-medium px-2 py-0.5 rounded-xs tracking-wider">
                      {box.images.length} views
                    </div>
                  )}

                  {/* Category marker */}
                  <div className="absolute top-3 left-3 bg-[#1A141C]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] tracking-widest uppercase font-medium text-stone-200 border border-white/10">
                    {box.subCategory || 'Keepsake Box'}
                  </div>

                  {/* Hover Quick View */}
                  <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <span className="bg-white/95 text-stone-950 text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xs shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Box</span>
                    </span>
                  </div>
                </div>

                {/* Box Metadata & Narrative (No Prices!) */}
                <div className="p-5 sm:p-6 space-y-3 grow flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3
                      onClick={() => onSelectProduct(box)}
                      className="font-serif text-2xl font-normal text-white group-hover:text-[#00AEEF] group-hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                    >
                      {box.name}
                    </h3>
                    <p className="text-xs text-stone-400 font-light italic line-clamp-1">
                      {box.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-stone-300 font-normal leading-relaxed line-clamp-2">
                    {box.description}
                  </p>

                  {/* Finishing details */}
                  {box.details?.material && (
                    <div className="text-[11px] text-stone-400 pt-1 border-t border-white/10 truncate font-sans">
                      {box.details.material}
                    </div>
                  )}

                  {/* Dual Action Buttons */}
                  <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(box)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium uppercase tracking-wider text-stone-200 border border-white/20 rounded-xs hover:border-white hover:text-white transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-white rounded-xs hover:bg-stone-200 transition-all shadow-sm group/btn"
                      aria-label={`Inquire on WhatsApp about ${box.name}`}
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

        {/* Custom Favor Box Note */}
        <div className="text-center pt-4 border-t border-white/10">
          <p className="text-xs text-stone-400 font-normal">
            Need custom dimension sweet boxes, wedding announcement hampers, or custom fabric colors?{' '}
            <a
              href={BRAND_CONFIG.getWhatsAppUrl("Hi Dream Invites, I would like to discuss custom bid boxes and ceremonial favor packaging.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00AEEF] font-semibold underline hover:text-white inline-flex items-center gap-1.5 ml-1"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 inline-block" />
              <span>Consult on WhatsApp for custom box packaging</span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
