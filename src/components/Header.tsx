import React, { useState, useEffect } from 'react';
import { X, Sun, Moon } from 'lucide-react';
import { DreamInvitesLogo } from './DreamInvitesLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_CONFIG } from '../data/weddingData';

export type Theme = 'light' | 'dark';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  onSetTheme: (theme: Theme) => void;
  onSelectCollection?: (slug: string) => void;
  onGoHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onSetTheme,
  onSelectCollection,
  onGoHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const navLinks = [
    { label: 'Collections', href: '#collections', type: 'anchor' },
    { label: 'Wedding Cards', slug: 'wedding-cards', type: 'collection' },
    { label: 'Bid Boxes', slug: 'bid-boxes', type: 'collection' },
    { label: 'Nikah Frames', slug: 'nikah-frames', type: 'collection' },
    { label: 'Customer Reviews', href: '#reviews', type: 'anchor' },
    { label: 'Follow Our Work', href: '#gallery', type: 'anchor' },
    { label: 'Contact', href: '#contact', type: 'anchor' },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setDrawerOpen(false);
    if (link.type === 'collection' && link.slug && onSelectCollection) {
      onSelectCollection(link.slug);
      return;
    }
    if (onGoHome) {
      onGoHome();
    }
    setTimeout(() => {
      if (link.href) {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 60);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoHome) {
      onGoHome();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 relative ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 dark:bg-[#121110]/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 py-3 sm:py-3.5 shadow-xs'
            : 'bg-[#FAF8F5] dark:bg-[#121110] border-b border-stone-200/40 dark:border-stone-800/40 py-3.5 sm:py-4.5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between min-h-[50px] sm:min-h-[56px]">
          
          {/* ========================================================
              LEFT: THREE-LINE HAMBURGER MENU ICON (Exactly 3 lines)
             ======================================================== */}
          <div className="relative z-20 flex items-center justify-start">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open Navigation Menu"
              className="min-w-[44px] min-h-[44px] -ml-2 p-2.5 text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white rounded-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] flex items-center justify-center group"
            >
              {/* Exactly 3 clean horizontal lines */}
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-stone-900 dark:text-stone-100 transition-transform group-hover:scale-105"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

          {/* ========================================================
              CENTER: MATHEMATICALLY VIEWPORT-CENTERED LOGO
              (Exact center relative to viewport, not between left/right)
             ======================================================== */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 pointer-events-auto flex items-center justify-center">
            <a
              href="#home"
              onClick={handleLogoClick}
              className="inline-flex items-center justify-center group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] rounded-xs transition-opacity hover:opacity-90 py-1"
              aria-label="Dream Invites Home"
            >
              {/* 
                Slightly increased size per specification:
                Desktop: ~180px - 210px wide
                Mobile: ~155px - 175px wide
              */}
              <div className="w-[155px] sm:w-[180px] md:w-[205px] flex items-center justify-center">
                <DreamInvitesLogo
                  size="md"
                  withTagline={true}
                  darkInvert={true}
                  className="w-full h-auto"
                />
              </div>
            </a>
          </div>

          {/* ========================================================
              RIGHT: LIGHT / DARK THEME TOGGLE ONLY
              (NO search icon, NO WhatsApp icon in header)
             ======================================================== */}
          <div className="relative z-20 flex items-center justify-end">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="min-w-[44px] min-h-[44px] -mr-2 p-2.5 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white rounded-full hover:bg-stone-200/60 dark:hover:bg-stone-800/80 transition-colors flex items-center justify-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-500 fill-amber-500" strokeWidth={1.8} />
              ) : (
                <Moon className="w-5 h-5 text-stone-700" strokeWidth={1.8} />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================
          EDITORIAL SLIDE-OUT MENU DRAWER
         ======================================================== */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-[#FAF8F5] dark:bg-[#151413] border-r border-stone-200 dark:border-stone-800 shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-10 overflow-y-auto">
            
            {/* Top row */}
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
                <DreamInvitesLogo size="sm" withTagline={true} />
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="min-w-[40px] min-h-[40px] p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white rounded-md flex items-center justify-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4">
                <p className="text-[11px] uppercase tracking-widest text-[#00AEEF] font-semibold">
                  Navigation
                </p>
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleNavClick(link)}
                    className="font-serif text-2xl sm:text-3xl text-stone-800 dark:text-stone-200 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors py-1 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* Appearance / Theme Choice */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-2">
                <p className="text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold">
                  Theme Appearance
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onSetTheme('light')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold rounded-xs border transition-all ${
                      !isDark
                        ? 'bg-white text-stone-900 border-[#00AEEF] shadow-xs'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                    }`}
                  >
                    <Sun className={`w-3.5 h-3.5 ${!isDark ? 'text-amber-500 fill-amber-500' : ''}`} />
                    <span>Light Theme</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSetTheme('dark')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold rounded-xs border transition-all ${
                      isDark
                        ? 'bg-[#181716] text-white border-[#00AEEF] shadow-xs'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                    }`}
                  >
                    <Moon className={`w-3.5 h-3.5 ${isDark ? 'text-[#00AEEF] fill-[#00AEEF]' : ''}`} />
                    <span>Dark Theme</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom contact block with Official WhatsApp Icon */}
            <div className="pt-8 border-t border-stone-200 dark:border-stone-800 space-y-3">
              <a
                href={BRAND_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-sm hover:bg-stone-800 dark:hover:bg-white transition-all shadow-sm group"
              >
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-105 transition-transform" />
                <span>WhatsApp Us</span>
              </a>

              <div className="text-center text-xs text-stone-500 dark:text-stone-400 font-sans">
                Email: {BRAND_CONFIG.email}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
