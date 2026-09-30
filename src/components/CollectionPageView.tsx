import React, { useEffect } from 'react';
import { ArrowLeft, Eye } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import {
  CollectionInfo,
  Product,
  getProductsByCollectionSlug,
  BRAND_CONFIG,
} from '../data/weddingData';

interface CollectionPageViewProps {
  collection: CollectionInfo;
  onBackToHome: () => void;
  onSelectProduct: (product: Product) => void;
}

export const CollectionPageView: React.FC<CollectionPageViewProps> = ({
  collection,
  onBackToHome,
  onSelectProduct,
}) => {
  // Scroll to top when collection page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [collection.slug]);

  const products = getProductsByCollectionSlug(collection.slug);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#121110] text-stone-900 dark:text-stone-100 py-10 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-5">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Collections</span>
          </button>

          <div className="text-xs uppercase tracking-widest text-stone-400 font-sans">
            {collection.name}
          </div>
        </div>

        {/* Collection Editorial Header */}
        <div className="space-y-4 max-w-3xl text-left">
          <span className="text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold block">
            {collection.productCountDescription}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-[1.12]">
            {collection.name}
          </h1>
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed">
            {collection.shortDescription} Explore our designs below. Every piece is customizable with your preferred colors, names, and typography.
          </p>
        </div>

        {/* Clean Product Grid (2 to 3 Columns on Desktop, 1 to 2 on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-4">
          {products.map((product) => {
            const whatsAppUrl = BRAND_CONFIG.getProductWhatsAppUrl(product);

            return (
              <div
                key={product.id}
                className="group relative flex flex-col bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800/90 rounded-xs overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image Frame */}
                <div
                  className="relative aspect-4/3 overflow-hidden bg-stone-100 dark:bg-stone-900 cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.altText}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />

                  {/* Category marker */}
                  {product.subCategory && (
                    <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 dark:bg-[#121110]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] tracking-widest uppercase font-medium text-stone-800 dark:text-stone-200 border border-stone-200/60 dark:border-stone-700/60">
                      {product.subCategory}
                    </div>
                  )}

                  {/* Multi-photo indicator */}
                  {product.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 bg-stone-950/70 text-white backdrop-blur-xs text-[10px] font-sans font-medium px-2 py-0.5 rounded-xs tracking-wider">
                      {product.images.length} photos
                    </div>
                  )}

                  {/* Hover Quick View affordance */}
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <span className="bg-stone-900/90 dark:bg-stone-100/90 text-white dark:text-stone-900 text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xs shadow-md flex items-center gap-2">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </span>
                  </div>
                </div>

                {/* Metadata & Actions (NO PRICES!) */}
                <div className="p-5 sm:p-6 space-y-3 grow flex flex-col justify-between text-left">
                  <div className="space-y-1.5">
                    <div className="text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold">
                      {product.category}
                    </div>
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-serif text-2xl font-normal text-stone-900 dark:text-stone-50 group-hover:text-[#00AEEF] dark:group-hover:text-[#00AEEF] group-hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-light italic line-clamp-1">
                      {product.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-normal leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Dual Action Buttons */}
                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
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
                      aria-label={`Inquire on WhatsApp about ${product.name}`}
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

        {/* Bottom Back Button */}
        <div className="pt-10 text-center border-t border-stone-200 dark:border-stone-800">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 rounded-xs hover:border-stone-900 dark:hover:border-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore All Collections</span>
          </button>
        </div>

      </div>
    </div>
  );
};
