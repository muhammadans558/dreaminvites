import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/weddingData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CustomerReviewsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.15);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Responsive items visible count: 1 on mobile, 2 on tablet, 3 on desktop
  const [itemsPerPage, setItemsPerPage] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalReviews = CUSTOMER_REVIEWS.length;
  const maxIndex = Math.max(0, totalReviews - itemsPerPage);

  // Keep currentIndex within valid bounds when resizing
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex, currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay: continuously move at a comfortable, smooth 4.5s pace
  useEffect(() => {
    if (isPaused) return;

    autoPlayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const diff = touchStartXRef.current - touchEndXRef.current;
      if (diff > 40) {
        nextSlide();
      } else if (diff < -40) {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
    // Smoothly resume autoplay after 2.5s
    setTimeout(() => setIsPaused(false), 2500);
  };

  return (
    <section
      ref={ref}
      id="reviews"
      aria-label="Customer Reviews"
      className={`py-24 sm:py-32 bg-[#F5F1E9] dark:bg-[#161514] border-t border-stone-200/80 dark:border-stone-800/80 overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-stone-300/60 dark:border-stone-800">
          <div className="space-y-2 text-left">
            <span className="text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold">
              Client Words
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50 tracking-tight">
              Customer Reviews
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-normal max-w-xl">
              Real notes from families and individuals who trusted us with their wedding stationery.
            </p>
          </div>

          {/* Desktop & Mobile Arrow Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 flex items-center justify-center transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 flex items-center justify-center transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Subtle decorative quotation mark */}
          <div className="absolute -top-4 -left-2 text-stone-300/35 dark:text-stone-700/25 pointer-events-none select-none">
            <Quote className="w-20 h-20 stroke-[1]" />
          </div>

          {/* Reviews Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {CUSTOMER_REVIEWS.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-3 flex flex-col"
              >
                <div className="h-full bg-white/85 dark:bg-[#1C1A18] backdrop-blur-xs p-6 sm:p-8 rounded-xs border border-stone-200/80 dark:border-stone-800 shadow-2xs space-y-4 text-left flex flex-col justify-between relative hover:border-stone-300 dark:hover:border-stone-700 transition-colors">
                  
                  {/* Review Text */}
                  <p className="font-serif text-lg sm:text-xl text-stone-900 dark:text-stone-100 font-normal leading-relaxed italic grow">
                    &ldquo;{item.review}&rdquo;
                  </p>

                  {/* Customer Information (Individual Islamic names, context, no fake labels or stars) */}
                  <div className="pt-3 border-t border-stone-200/60 dark:border-stone-800/80 flex items-center justify-between">
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-stone-900 dark:text-stone-100">
                        {item.name}
                      </h4>
                      {item.context && (
                        <span className="text-[11px] text-stone-500 dark:text-stone-400 font-normal font-sans block">
                          {item.context}
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 pt-2">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to review slide ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                dotIdx === currentIndex
                  ? 'w-7 bg-[#00AEEF]'
                  : 'w-2 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
