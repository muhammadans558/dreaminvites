import React, { useEffect, useState } from 'react';
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

type GridViewMode = 'single' | 'two';

export const CollectionPageView: React.FC<CollectionPageViewProps> = ({
  collection,
  onBackToHome,
  onSelectProduct,
}) => {
  // Grid layout view state: 'single' (1 product per row) or 'two' (2 products per row)
  const [gridView, setGridView] = useState<GridViewMode>('two');

  // Scroll to top when collection page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [collection.slug]);

  const products = getProductsByCollectionSlug(collection.slug);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#121110] text-stone-900 dark:text-stone-100 py-10 sm:py-16">
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 transition-all duration-300 ${
        gridView === 'two' ? 'max-w-[1340px]' : 'max-w-[1200px]'
      }`}>
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-5">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] py-1 cursor-pointer"
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

        {/* ========================================================
            FEATURE 2: PRODUCT GRID VIEW TOGGLE (1 COL vs 2 COL)
           ======================================================== */}
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-stone-200/80 dark:border-stone-800/80">
          <div className="text-xs font-sans text-stone-500 dark:text-stone-400">
            Showing <span className="font-semibold text-stone-900 dark:text-stone-100">{products.length}</span> Designs
          </div>

          <div
            className="inline-flex items-center gap-1 p-1 bg-stone-200/60 dark:bg-stone-800/60 rounded-xs border border-stone-250 dark:border-stone-700/60 shadow-2xs"
            role="group"
            aria-label="Product grid layout view"
          >
            {/* 1. Single Product View (1 product per row) */}
            <button
              type="button"
              onClick={() => setGridView('single')}
              aria-label="Single column view"
              title="Single column view"
              aria-pressed={gridView === 'single'}
              className={`p-2 rounded-xs transition-all duration-200 cursor-pointer ${
                gridView === 'single'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <rect x="2" y="2" width="12" height="12" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
              </svg>
            </button>

            {/* 2. Two Product View (2 products per row) */}
            <button
              type="button"
              onClick={() => setGridView('two')}
              aria-label="Two column view"
              title="Two column view"
              aria-pressed={gridView === 'two'}
              className={`p-2 rounded-xs transition-all duration-200 cursor-pointer ${
                gridView === 'two'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <rect x="1.5" y="2" width="5.5" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.75" />
                <rect x="9" y="2" width="5.5" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.75" />
              </svg>
            </button>
          </div>
        </div>

        {/* ========================================================
            DYNAMIC PRODUCT GRID (SINGLE vs TWO COLUMN)
           ======================================================== */}
        <div
          className={`pt-2 transition-all duration-300 ${
            gridView === 'single'
              ? 'grid grid-cols-1 gap-8 sm:gap-12 max-w-2xl sm:max-w-3xl mx-auto'
              : 'grid grid-cols-2 gap-3 sm:gap-5 lg:gap-7 items-stretch'
          }`}
        >
          {products.map((product, idx) => {
            const whatsAppUrl = BRAND_CONFIG.getProductWhatsAppUrl(product);
            const isPriority = idx < (gridView === 'single' ? 2 : 4);

            return (
              <div
                key={product.id}
                className="group relative flex flex-col bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800/90 rounded-xs overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image Frame: Clicking opens Product Details */}
                <div
                  className={`relative overflow-hidden bg-stone-100 dark:bg-stone-900 cursor-pointer ${
                    gridView === 'single'
                      ? 'aspect-4/3 sm:aspect-16/10'
                      : 'aspect-[1/1] sm:aspect-[4/3] md:aspect-[1.12/1]'
                  }`}
                  onClick={() => onSelectProduct(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProduct(product);
                    }
                  }}
                  aria-label={`View details for ${product.name}`}
                >
                  <img
                    src={product.images[0]}
                    alt={product.altText}
                    referrerPolicy="no-referrer"
                    loading={isPriority ? 'eager' : 'lazy'}
                    fetchPriority={idx < 2 ? 'high' : 'auto'}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />

                  {/* Category marker */}
                  {product.subCategory && (
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#FAF8F5]/90 dark:bg-[#121110]/90 backdrop-blur-xs px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] tracking-widest uppercase font-medium text-stone-800 dark:text-stone-200 border border-stone-200/60 dark:border-stone-700/60">
                      {product.subCategory}
                    </div>
                  )}

                  {/* Multi-photo indicator */}
                  {product.images.length > 1 && (
                    <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-stone-950/75 text-white backdrop-blur-xs text-[9px] sm:text-[10px] font-sans font-medium px-2 py-0.5 rounded-xs tracking-wider">
                      {product.images.length} photos
                    </div>
                  )}

                  {/* Hover Quick View Affordance */}
                  <div className="absolute inset-0 bg-stone-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-3">
                    <span className="bg-stone-900/90 dark:bg-stone-100/90 text-white dark:text-stone-900 text-[11px] sm:text-xs uppercase tracking-wider font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-xs shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>See Details</span>
                    </span>
                  </div>
                </div>

                {/* Metadata & Actions (Product Name & Actions on Collection Page) */}
                <div
                  className={`grow flex flex-col justify-between text-left ${
                    gridView === 'single'
                      ? 'p-5 sm:p-6 space-y-3'
                      : 'p-3 sm:p-4.5 space-y-2'
                  }`}
                >
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold">
                      {product.category}
                    </div>
                    <h2
                      onClick={() => onSelectProduct(product)}
                      className={`font-serif font-normal text-stone-900 dark:text-stone-50 group-hover:text-[#00AEEF] dark:group-hover:text-[#00AEEF] transition-colors cursor-pointer ${
                        gridView === 'single'
                          ? 'text-2xl sm:text-3xl'
                          : 'text-base sm:text-xl truncate'
                      }`}
                    >
                      {product.name}
                    </h2>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 sm:pt-2.5 border-t border-stone-100 dark:border-stone-800/80 grid grid-cols-2 gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="w-full inline-flex items-center justify-center gap-1 py-2 sm:py-2.5 px-2 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 rounded-xs hover:border-stone-900 dark:hover:border-stone-100 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>See Details</span>
                    </button>

                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1 py-2 sm:py-2.5 px-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-xs hover:bg-stone-800 dark:hover:bg-white transition-all shadow-2xs group/btn"
                      aria-label={`Inquire on WhatsApp about ${product.name}`}
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:scale-105 transition-transform" />
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
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 rounded-xs hover:border-stone-900 dark:hover:border-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore All Collections</span>
          </button>
        </div>

      </div>
    </div>
  );
};

