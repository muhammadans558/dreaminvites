import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Header, Theme } from './components/Header';
import { Hero } from './components/Hero';
import { CollectionsOverviewSection } from './components/CollectionsOverviewSection';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CollectionPageView } from './components/CollectionPageView';
import { ProductDetailView } from './components/ProductDetailView';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import {
  Product,
  getProductBySlug,
  getCollectionBySlug,
  CollectionInfo,
} from './data/weddingData';

export default function App() {
  // Global Theme state: MUST ALWAYS start in LIGHT MODE when landing on website
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const session = sessionStorage.getItem('dream-invites-theme');
      if (session === 'dark' || session === 'light') {
        return session;
      }
    }
    return 'light';
  });

  // Apply theme to DOM and sync storage
  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
    }
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('dream-invites-theme', newTheme);
      localStorage.setItem('dream-invites-theme', newTheme);
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const handleToggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Active Collection Page state
  const [activeCollection, setActiveCollection] = useState<CollectionInfo | null>(null);

  // Dedicated Product Detail View state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const scrollPosRef = useRef<number>(0);

  // Parse URL hash for direct links (e.g. #collections/wedding-cards, #product/royal-floral)
  const syncNavigationFromUrl = useCallback(() => {
    const hash = window.location.hash;

    // Check for product link
    const productMatch = hash.match(/^#product\/([a-zA-Z0-9_-]+)/);
    if (productMatch && productMatch[1]) {
      const product = getProductBySlug(productMatch[1]);
      if (product) {
        setSelectedProduct(product);
        return;
      }
    }

    // Check for collection link
    const collectionMatch = hash.match(/^#collections\/([a-zA-Z0-9_-]+)/);
    if (collectionMatch && collectionMatch[1]) {
      const collection = getCollectionBySlug(collectionMatch[1]);
      if (collection) {
        setActiveCollection(collection);
        setSelectedProduct(null);
        return;
      }
    }

    // Default to Home if no matched sub-view
    if (!hash.startsWith('#product') && !hash.startsWith('#collections/')) {
      setActiveCollection(null);
      setSelectedProduct(null);
    }
  }, []);

  // Listen for browser Back/Forward (popstate & hashchange)
  useEffect(() => {
    syncNavigationFromUrl();

    const handlePopState = () => {
      syncNavigationFromUrl();
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [syncNavigationFromUrl]);

  // Navigate to dedicated collection page
  const handleOpenCollection = useCallback((slug: string) => {
    const collection = getCollectionBySlug(slug);
    if (collection) {
      scrollPosRef.current = window.scrollY;
      setActiveCollection(collection);
      setSelectedProduct(null);
      const targetHash = `#collections/${collection.slug}`;
      if (window.location.hash !== targetHash) {
        window.history.pushState({ collectionSlug: collection.slug }, '', targetHash);
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  // Navigate back to Homepage
  const handleBackToHome = useCallback(() => {
    setActiveCollection(null);
    setSelectedProduct(null);
    if (window.location.hash.startsWith('#collections/') || window.location.hash.startsWith('#product')) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollPosRef.current, behavior: 'smooth' });
    });
  }, []);

  // Open individual product detail view and update URL history
  const handleOpenProduct = useCallback((product: Product) => {
    scrollPosRef.current = window.scrollY;
    setSelectedProduct(product);
    const targetHash = `#product/${product.slug}`;
    if (window.location.hash !== targetHash) {
      window.history.pushState({ productId: product.id, slug: product.slug }, '', targetHash);
    }
  }, []);

  // Close individual product detail view and restore user to collection/home position
  const handleCloseProduct = useCallback(() => {
    setSelectedProduct(null);
    if (window.location.hash.startsWith('#product')) {
      if (activeCollection) {
        window.history.pushState(null, '', `#collections/${activeCollection.slug}`);
      } else {
        window.history.pushState(null, '', window.location.pathname + window.location.search);
      }
    }
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollPosRef.current, behavior: 'instant' });
    });
  }, [activeCollection]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#121110] text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors duration-300">
      
      {/* 1. HEADER (Hamburger left, Centered Logo, Theme toggle right - NO search icon) */}
      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onSetTheme={handleSetTheme}
        onSelectCollection={handleOpenCollection}
        onGoHome={handleBackToHome}
      />

      {/* Main Content Area: switches cleanly between Homepage and Dedicated Collection Page */}
      <main className="grow">
        {activeCollection ? (
          /* ========================================================
             DEDICATED COLLECTION PAGE VIEW
             (Wedding Cards, Bid Boxes, or Nikah Frames)
             ======================================================== */
          <>
            <CollectionPageView
              collection={activeCollection}
              onBackToHome={handleBackToHome}
              onSelectProduct={handleOpenProduct}
            />
            {/* Direct Contact section accessible at bottom of collection */}
            <ContactSection />
          </>
        ) : (
          /* ========================================================
             NEW CLEAN HOMEPAGE ARCHITECTURE (NOT CROWDED)
             1. Hero
             2. Collections (3 major editorial collection blocks)
             3. Customer Reviews (slow authentic carousel)
             4. Follow Our Work (Instagram CTA, NO image gallery)
             5. Contact (WhatsApp CTA + left-aligned Email & Instagram)
             ======================================================== */
          <>
            {/* 2. Hero Section */}
            <Hero />

            {/* 3. Three Editorial Collection Blocks (Wedding Cards, Bid Boxes, Nikah Frames) */}
            <CollectionsOverviewSection onSelectCollection={handleOpenCollection} />

            {/* 4. Customer Reviews Section (Individual names, natural tone, slow carousel) */}
            <CustomerReviewsSection />

            {/* 5. Instagram Social Section (Minimal, NO image gallery below it) */}
            <InstagramSection />

            {/* 6. Contact Section (Warm ivory, left-aligned, no repeated phone number) */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 7. PREMIUM LIGHT FOOTER (Warm beige, visible left-aligned logo, collections links) */}
      <Footer onSelectCollection={handleOpenCollection} />

      {/* DEDICATED INDIVIDUAL PRODUCT DETAIL EXPERIENCE */}
      {selectedProduct && (
        <ProductDetailView
          product={selectedProduct}
          onClose={handleCloseProduct}
          onSelectProduct={handleOpenProduct}
        />
      )}

      {/* FLOATING WHATSAPP BUTTON (Fixed at bottom-right, official WhatsApp green) */}
      <FloatingWhatsApp />

    </div>
  );
}
