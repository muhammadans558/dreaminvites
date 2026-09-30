import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Check, ArrowRight, ZoomIn } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Product, BRAND_CONFIG, getRelatedProducts } from '../data/weddingData';
import { ImageLightbox } from './ImageLightbox';

interface ProductDetailViewProps {
  product: Product;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onClose,
  onSelectProduct,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Touch swipe support for mobile
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Reset active image when product changes
  useEffect(() => {
    setActiveImageIndex(0);
    setImageLoaded(false);
    setImageError(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  // Keyboard navigation (Esc to close, Left/Right for gallery)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, activeImageIndex, product.images.length]);

  const handlePrevImage = useCallback(() => {
    setImageLoaded(false);
    setActiveImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  }, [product.images.length]);

  const handleNextImage = useCallback(() => {
    setImageLoaded(false);
    setActiveImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  }, [product.images.length]);

  // Mobile touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45; // px

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next image
      handleNextImage();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev image
      handlePrevImage();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // WhatsApp inquiry URL
  const whatsAppUrl = BRAND_CONFIG.getProductWhatsAppUrl(product);

  // Related products from same category
  const relatedProducts = getRelatedProducts(product, 4);

  // Extract non-empty details
  const detailsEntries = Object.entries(product.details || {}).filter(
    ([, val]) => val && val.trim().length > 0 && val !== '—'
  );

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#FAF8F5] dark:bg-[#121110] text-stone-900 dark:text-stone-100 min-h-screen flex flex-col transition-colors duration-300 animate-fadeIn"
      role="region"
      aria-label={`${product.name} product details`}
    >
      {/* Top Bar with Clear, Accessible Close Button (>= 44x44px target) */}
      <nav aria-label="Product navigation" className="sticky top-0 z-60 w-full bg-[#FAF8F5]/95 dark:bg-[#121110]/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Breadcrumb path */}
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-sans truncate pr-4">
            <button
              type="button"
              onClick={onClose}
              className="hover:text-[#00AEEF] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#00AEEF] underline decoration-stone-300 dark:decoration-stone-700 underline-offset-4"
            >
              Collection
            </button>
            <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">/</span>
            <span className="text-stone-700 dark:text-stone-300">{product.category}</span>
            <span aria-hidden="true" className="text-stone-300 dark:text-stone-700 hidden sm:inline">/</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100 hidden sm:inline truncate">
              {product.name}
            </span>
          </div>

          {/* Prominent, Accessible Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white bg-stone-100 dark:bg-stone-800/80 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-sm border border-stone-300/80 dark:border-stone-700/80 transition-colors shadow-2xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
          >
            <span className="hidden sm:inline">Close</span>
            <X className="w-5 h-5 text-stone-800 dark:text-stone-100" />
          </button>

        </div>
      </nav>

      {/* Main Product Layout */}
      <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ========================================================
              LEFT COLUMN: MULTI-IMAGE GALLERY (DESKTOP & MOBILE)
             ======================================================== */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Image Frame with Touch Swipe & Fullscreen Lightbox */}
            <div
              className="relative aspect-4/3 sm:aspect-16/11 bg-stone-100 dark:bg-stone-900 rounded-xs overflow-hidden border border-stone-200/90 dark:border-stone-800/90 shadow-md select-none cursor-zoom-in group/mainimg"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={() => setIsLightboxOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsLightboxOpen(true);
                }
              }}
              aria-label={`Click to zoom image ${activeImageIndex + 1} for ${product.name}`}
            >
              {!imageError ? (
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={`${product.name} View ${activeImageIndex + 1} of ${product.images.length}`}
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`w-full h-full object-cover sm:object-contain transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-stone-100 dark:bg-stone-900 text-stone-500 text-center">
                  <span className="font-serif text-2xl text-stone-800 dark:text-stone-200">{product.name}</span>
                  <span className="text-xs uppercase tracking-wider text-stone-400 mt-1">Dream Invites</span>
                </div>
              )}

              {/* Prev / Next Arrows (if > 1 image) */}
              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevImage();
                    }}
                    aria-label="Previous product image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-stone-900/90 hover:bg-white dark:hover:bg-stone-900 text-stone-800 dark:text-stone-100 shadow-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextImage();
                    }}
                    aria-label="Next product image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-stone-900/90 hover:bg-white dark:hover:bg-stone-900 text-stone-800 dark:text-stone-100 shadow-md flex items-center justify-center transition-all opacity-85 hover:opacity-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Zoom In Badge Top Right */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                aria-label="Open fullscreen image viewer"
                className="absolute top-3 right-3 bg-stone-900/80 hover:bg-stone-900 text-white backdrop-blur-xs text-[11px] font-medium px-2.5 py-1.5 rounded-xs flex items-center gap-1.5 shadow-sm transition-transform group-hover/mainimg:scale-105 cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span className="hidden sm:inline uppercase tracking-wider text-[10px]">Fullscreen</span>
              </button>

              {/* Image Counter Badge */}
              {product.images.length > 1 && (
                <div className="absolute bottom-3 right-3 bg-stone-900/75 text-white backdrop-blur-xs text-[11px] font-sans font-medium px-2.5 py-1 rounded-xs tracking-wider">
                  {activeImageIndex + 1} / {product.images.length}
                </div>
              )}

              {/* Category Marker */}
              <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 dark:bg-[#121110]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] tracking-widest uppercase font-medium text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-800/60">
                {product.category}
              </div>
            </div>

            {/* Thumbnail Navigation Bar (auto-adjusts to however many images exist) */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                {product.images.map((imgUrl, index) => {
                  const isSelected = index === activeImageIndex;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setImageLoaded(false);
                        setActiveImageIndex(index);
                      }}
                      aria-label={`View image ${index + 1} for ${product.name}`}
                      aria-pressed={isSelected}
                      className={`relative shrink-0 w-20 h-16 sm:w-24 sm:h-18 rounded-xs overflow-hidden border-2 transition-all duration-200 bg-stone-100 dark:bg-stone-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] ${
                        isSelected
                          ? 'border-[#00AEEF] shadow-sm scale-102 opacity-100'
                          : 'border-stone-200 dark:border-stone-700 opacity-65 hover:opacity-100 hover:border-stone-400'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Thumbnail ${index + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Mobile swipe hint */}
            {product.images.length > 1 && (
              <p className="text-[11px] text-stone-400 dark:text-stone-500 text-center sm:hidden">
                Swipe left or right to browse gallery
              </p>
            )}

          </div>

          {/* ========================================================
              RIGHT COLUMN: PRODUCT DETAILS & WHATSAPP ACTION
             ======================================================== */}
          <div className="lg:col-span-5 space-y-6 lg:pl-2">
            
            {/* Category & Kicker */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#00AEEF] font-semibold">
                <span>{product.category}</span>
                {product.subCategory && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{product.subCategory}</span>
                  </>
                )}
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-[1.12]">
                {product.name}
              </h1>

              {/* Poetic Tagline */}
              {product.tagline && (
                <p className="font-serif text-base text-stone-600 dark:text-stone-300 italic font-light">
                  &ldquo;{product.tagline}&rdquo;
                </p>
              )}
            </div>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Primary Action: INQUIRE ON WHATSAPP (NO PRICES!) */}
            <div className="pt-2 pb-2 space-y-2.5">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-sm hover:bg-stone-800 dark:hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
              >
                <WhatsAppIcon className="w-5.5 h-5.5 group-hover:scale-105 transition-transform" />
                <span>Inquire on WhatsApp</span>
              </a>

              <p className="text-[11px] text-stone-500 dark:text-stone-400 text-center font-sans">
                Direct WhatsApp consultation with our team. Custom names, colors &amp; samples.
              </p>
            </div>

            {/* Product Details Section (Only displays present fields) */}
            <div className="pt-5 border-t border-stone-200 dark:border-stone-800 space-y-4">
              <h2 className="text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-semibold">
                Details &amp; Specifications
              </h2>

              {/* Dynamic Key-Value Details (No empty fields) */}
              {detailsEntries.length > 0 && (
                <div className="space-y-2.5 text-xs text-stone-700 dark:text-stone-300">
                  {detailsEntries.map(([key, val]) => (
                    <div key={key} className="flex items-start justify-between py-1 border-b border-stone-100 dark:border-stone-800/60">
                      <span className="font-medium text-stone-500 dark:text-stone-400 capitalize">
                        {key}
                      </span>
                      <span className="font-normal text-stone-900 dark:text-stone-100 text-right max-w-[65%]">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Required Standard bullet points */}
              <div className="pt-3 space-y-2 text-xs text-stone-600 dark:text-stone-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                  <span>
                    {product.category === 'Bid Boxes'
                      ? 'Ceremonial Bid Box & Sweets Keepsake'
                      : product.category === 'Nikah Frames'
                      ? 'Ceremonial Nikah Certificate Keepsake Frame'
                      : 'Wedding Card & Stationery Suite'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                  <span>Customizable design (couple names, Urdu/English calligraphy &amp; palettes)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                  <span>Multiple fine finishing options available upon request</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                  <span>Contact us on WhatsApp for complete details &amp; custom orders</span>
                </div>
              </div>

            </div>

            {/* How to Order Box */}
            <div className="p-4 bg-stone-100/70 dark:bg-stone-800/40 rounded-xs border border-stone-200/80 dark:border-stone-800/80 text-xs text-stone-500 dark:text-stone-400 space-y-1">
              <p className="font-semibold text-stone-800 dark:text-stone-200">How to Order</p>
              <p>Share your vision on WhatsApp with the &ldquo;Inquire on WhatsApp&rdquo; button above. Our team will guide you through typography mockups, paper selection, and sample proofs.</p>
            </div>

          </div>

        </div>

        {/* ========================================================
            RELATED PRODUCTS: "YOU MAY ALSO LIKE"
           ======================================================== */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-stone-200 dark:border-stone-800 space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#00AEEF] font-semibold">
                  Curated Suggestions
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 dark:text-stone-50 mt-1">
                  You May Also Like
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="hidden sm:inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                <span>Back to Full Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProduct(rel)}
                  className="group cursor-pointer bg-white dark:bg-[#181716] border border-stone-200/80 dark:border-stone-800/80 rounded-xs overflow-hidden transition-all duration-200 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-md flex flex-col"
                >
                  <div className="aspect-4/3 overflow-hidden bg-stone-100 dark:bg-stone-900 relative">
                    <img
                      src={rel.images[0]}
                      alt={rel.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute top-2 left-2 bg-[#FAF8F5]/90 dark:bg-[#121110]/90 backdrop-blur-xs px-2 py-0.5 text-[10px] tracking-widest uppercase font-medium text-stone-700 dark:text-stone-300">
                      {rel.category}
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5 grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-lg text-stone-900 dark:text-stone-50 group-hover:text-[#00AEEF] transition-colors">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-1">
                        {rel.tagline}
                      </p>
                    </div>

                    <div className="pt-2 text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100 group-hover:text-[#00AEEF] inline-flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* FULLSCREEN IMAGE VIEWER / LIGHTBOX */}
      <ImageLightbox
        product={product}
        initialIndex={activeImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />

    </div>
  );
};
