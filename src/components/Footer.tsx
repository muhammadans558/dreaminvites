import React from 'react';
import { Mail, Instagram, ArrowUp } from 'lucide-react';
import { DreamInvitesLogo } from './DreamInvitesLogo';
import { BRAND_CONFIG } from '../data/weddingData';

interface FooterProps {
  onSelectCollection?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCollection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EAE5DC] dark:bg-[#161514] text-[#171717] dark:text-[#F5F5F4] border-t border-[rgba(0,0,0,0.08)] dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-14 sm:py-16 text-left space-y-12">
        
        {/* Main Footer Layout (Strict Left Alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start text-left">
          
          {/* LEFT SIDE: Logo & Short Description (5 cols) */}
          <div className="md:col-span-6 space-y-4 text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block text-left"
              aria-label="Dream Invites Home"
            >
              {/* Width: 140px to 165px on mobile, 160px to 190px on desktop */}
              <div className="w-[150px] sm:w-[170px] md:w-[185px]">
                <DreamInvitesLogo
                  size="md"
                  withTagline={true}
                  darkInvert={true}
                  className="w-full h-auto"
                />
              </div>
            </a>

            <p className="text-sm text-[#5F5A55] dark:text-[#A8A29E] font-normal font-sans max-w-sm leading-relaxed text-left">
              Beautiful wedding cards and bid boxes made for your special celebrations.
            </p>
          </div>

          {/* RIGHT SIDE: The Collections & Contact (6 cols, left-aligned) */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            
            {/* The Collections */}
            <div className="space-y-3 text-left">
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 font-normal tracking-wide">
                The Collections
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5F5A55] dark:text-[#A8A29E] font-sans font-normal text-left">
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectCollection?.('wedding-cards')}
                    className="hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors text-left"
                  >
                    Wedding Cards
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectCollection?.('bid-boxes')}
                    className="hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors text-left"
                  >
                    Bid Boxes
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onSelectCollection?.('nikah-frames')}
                    className="hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors text-left"
                  >
                    Nikah Frames
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Details (No repeated phone number, No monospace) */}
            <div className="space-y-3 text-left">
              <h3 className="font-serif text-lg text-stone-900 dark:text-stone-100 font-normal tracking-wide">
                Contact
              </h3>
              
              <div className="space-y-2 text-xs sm:text-sm text-[#5F5A55] dark:text-[#A8A29E] font-sans text-left">
                {/* Email */}
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                  <a
                    href={`mailto:${BRAND_CONFIG.email}`}
                    className="text-stone-900 dark:text-stone-100 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors font-medium font-sans"
                  >
                    {BRAND_CONFIG.email}
                  </a>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                  <a
                    href={BRAND_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-900 dark:text-stone-100 hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors font-medium font-sans"
                  >
                    {BRAND_CONFIG.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top (Left Aligned Base) */}
        <div className="pt-8 border-t border-[rgba(0,0,0,0.06)] dark:border-stone-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5F5A55] dark:text-[#A8A29E] font-sans text-left">
          <div className="text-left">
            &copy; 2026 Dream Invites. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="italic font-serif text-stone-700 dark:text-stone-300">
              &ldquo;{BRAND_CONFIG.tagline}&rdquo;
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full hover:bg-stone-300/40 dark:hover:bg-white/10 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
