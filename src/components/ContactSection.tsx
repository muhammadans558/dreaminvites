import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_CONFIG } from '../data/weddingData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ContactSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.15);

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-20 sm:py-28 bg-[#F5F1E9] dark:bg-[#161514] text-[#171717] dark:text-[#F5F5F4] transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-left space-y-10">
        
        {/* Section Heading & Supporting Text (Strict Left Alignment) */}
        <div className="space-y-4 max-w-2xl text-left">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-[1.12]">
            Let&apos;s Create Something Beautiful
          </h2>

          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed">
            Have a wedding card or bid box in mind? Talk to us and let us help you choose the right design.
          </p>
        </div>

        {/* ONE Main WhatsApp CTA (Strict Left Alignment) */}
        <div className="pt-1">
          <a
            href={BRAND_CONFIG.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-xs hover:bg-stone-800 dark:hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            aria-label="Chat on WhatsApp with Dream Invites"
          >
            <WhatsAppIcon className="w-5.5 h-5.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* 
          Two-Column Contact Item Structure (Strict Left Alignment):
          LEFT: Icon
          RIGHT: Label (top), Value (directly below)
        */}
        <div className="pt-8 border-t border-stone-300/60 dark:border-stone-800 flex flex-col sm:flex-row items-start gap-8 sm:gap-16">
          
          {/* Email Item */}
          <div className="flex items-start gap-3.5">
            <div className="mt-1">
              <Mail className="w-5 h-5 text-[#00AEEF] shrink-0" strokeWidth={1.8} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold font-sans">
                Email
              </span>
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="text-stone-900 dark:text-stone-100 font-medium font-sans text-sm sm:text-base hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors mt-0.5"
              >
                {BRAND_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Instagram Item */}
          <div className="flex items-start gap-3.5">
            <div className="mt-1">
              <Instagram className="w-5 h-5 text-[#00AEEF] shrink-0" strokeWidth={1.8} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold font-sans">
                Instagram
              </span>
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 dark:text-stone-100 font-medium font-sans text-sm sm:text-base hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors mt-0.5"
              >
                {BRAND_CONFIG.instagramHandle}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
