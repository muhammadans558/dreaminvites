import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS, CustomerReview } from '../data/weddingData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CustomerReviewsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.15);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Number of reviews to slide through
  const totalReviews = CUSTOMER_REVIEWS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }, [totalReviews]);

  // Autoplay: slide every 6 seconds, pausing on hover/interaction
  useEffect(() => {
    if (isPaused) return;

    autoPlayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

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
      if (diff > 45) {
        nextSlide();
      } else if (diff < -45) {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
    // Resume autoplay after 3s
    setTimeout(() => setIsPaused(false), 3000);
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
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
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

          {/* Desktop Arrow Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 flex items-center justify-center transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 flex items-center justify-center transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
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
          <div className="absolute -top-4 -left-2 text-stone-300/40 dark:text-stone-700/30 pointer-events-none select-none">
            <Quote className="w-24 h-24 stroke-[1]" />
          </div>

          {/* Reviews Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {CUSTOMER_REVIEWS.map((item, idx) => (
              <div
                key={item.id}
                className="w-full shrink-0 px-2 sm:px-4"
              >
                <div className="bg-white/80 dark:bg-[#1C1A18] backdrop-blur-xs p-8 sm:p-12 rounded-xs border border-stone-200/80 dark:border-stone-800 shadow-2xs max-w-3xl mx-auto space-y-6 text-left relative">
                  
                  {/* Review Text in dark charcoal */}
                  <p className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-900 dark:text-stone-100 font-normal leading-relaxed italic">
                    &ldquo;{item.review}&rdquo;
                  </p>

                  {/* Customer Information (Individual Islamic names only, no avatars, no stars) */}
                  <div className="pt-4 border-t border-stone-200/60 dark:border-stone-800/80 flex items-center justify-between">
                    <div>
                      <h4 className="font-sans text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100">
                        {item.name}
                      </h4>
                      {item.context && (
                        <span className="text-xs text-stone-500 dark:text-stone-400 font-normal font-sans">
                          {item.context}
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] font-sans text-[#00AEEF] uppercase tracking-wider font-semibold">
                      Verified Client
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {CUSTOMER_REVIEWS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to review ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? 'w-8 bg-[#00AEEF]'
                  : 'w-2 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
