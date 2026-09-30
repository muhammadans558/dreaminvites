import React, { useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Product } from '../data/weddingData';

interface ImageLightboxProps {
  product: Product | null;
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  product,
  initialIndex = 0,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(initialIndex);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Sync index when lightbox opens or product changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex, product]);

  // Lock background scroll when lightbox is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const images = product?.images || [];
  const totalImages = images.length;

  const handlePrev = useCallback(() => {
    if (totalImages <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [totalImages]);

  const handleNext = useCallback(() => {
    if (totalImages <= 1) return;
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [totalImages]);

  // Keyboard controls: Escape to close, ArrowLeft / ArrowRight to navigate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch swipe support for mobile
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
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  if (!isOpen || !product || totalImages === 0) {
    return null;
  }

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} fullscreen image viewer`}
      className="fixed inset-0 z-100 flex items-center justify-center bg-stone-950/92 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Bar: Product Name, Counter, and Close Button */}
      <div
        className="absolute top-0 inset-x-0 z-110 flex items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Product Name & Category */}
        <div className="flex flex-col text-left pointer-events-auto pr-4 truncate">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold">
            {product.category}
          </span>
          <span className="font-serif text-lg sm:text-xl text-stone-100 truncate">
            {product.name}
          </span>
        </div>

        {/* Center: Dynamic Image Counter */}
        {totalImages > 1 && (
          <div className="pointer-events-auto bg-stone-900/80 border border-stone-800 text-stone-200 text-xs sm:text-sm font-sans font-medium px-3 py-1 rounded-full shadow-md backdrop-blur-xs tracking-wider">
            {currentIndex + 1} / {totalImages}
          </div>
        )}

        {/* Right: Highly Accessible Close (X) Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close fullscreen image viewer"
          className="pointer-events-auto min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-full bg-stone-900/90 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-750 transition-colors shadow-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 sm:p-10 select-none overflow-hidden"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative max-w-full max-h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            key={currentImage}
            src={currentImage}
            alt={`${product.name} photo ${currentIndex + 1} of ${totalImages}`}
            referrerPolicy="no-referrer"
            className="max-h-[82vh] sm:max-h-[86vh] max-w-[92vw] sm:max-w-[85vw] w-auto h-auto object-contain rounded-xs shadow-2xl transition-transform duration-300"
          />
        </div>
      </div>

      {/* Navigation Arrows (if > 1 image) */}
      {totalImages > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-110 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-stone-900/85 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-750 shadow-xl flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-110 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-stone-900/85 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-750 shadow-xl flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </>
      )}

      {/* Bottom Thumbnail Strip (if > 1 image) */}
      {totalImages > 1 && (
        <div
          className="absolute bottom-3 inset-x-0 z-110 flex items-center justify-center gap-2 px-4 py-2 pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pointer-events-auto flex items-center gap-2 p-1.5 bg-stone-950/70 backdrop-blur-md rounded-full border border-stone-800/80 overflow-x-auto max-w-[90vw] scrollbar-none">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to image ${idx + 1}`}
                className={`relative shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? 'border-[#00AEEF] scale-110 opacity-100'
                    : 'border-transparent opacity-50 hover:opacity-90'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
