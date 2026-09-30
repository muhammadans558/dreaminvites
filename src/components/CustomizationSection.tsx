import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../data/weddingData';

export const CustomizationSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation & Concept',
      desc: 'Connect with us on WhatsApp. Share your preferred styles, event dates, themes, and wording ideas.',
    },
    {
      step: '02',
      title: 'Digital Layout Proofs',
      desc: 'We draft bespoke layouts featuring your names, bilingual verses, and custom monogram designs for review.',
    },
    {
      step: '03',
      title: 'Artisanal Production',
      desc: 'Selected luxury cotton papers, hot foil stamping, letterpress deboss, and hand-sealed finishes are brought to life.',
    },
    {
      step: '04',
      title: 'Delivered With Care',
      desc: 'Safely packed in archival presentation boxes and delivered across Pakistan to your doorstep.',
    },
  ];

  return (
    <section id="personalization" className="py-20 md:py-28 bg-[#FAF8F5] dark:bg-[#121110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Story & Personalization Journey */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#00AEEF] font-semibold">
                <span>Personalized Wedding Stationery</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-[1.15] text-balance">
                Made Personal, Just for You
              </h2>

              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                Your names, your colors, your words, your story. Tell us what you envision and we&apos;ll help turn it into an invitation that feels truly yours.
              </p>
            </div>

            {/* 4 Process Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="p-5 bg-white dark:bg-[#181716] border border-stone-200/80 dark:border-stone-800/80 rounded-xs space-y-2 hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#00AEEF] font-bold">
                      Step {item.step}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-stone-400" />
                  </div>
                  <h3 className="font-serif text-lg font-normal text-stone-900 dark:text-stone-100">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary Action */}
            <div className="pt-2">
              <a
                href={BRAND_CONFIG.getWhatsAppUrl("Hi Dream Invites, I'd like to discuss a custom wedding invitation suite.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-sm hover:bg-[#00AEEF] dark:hover:bg-[#00AEEF] dark:hover:text-white transition-all shadow-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
              >
                <MessageCircle className="w-4 h-4 text-[#00AEEF]" />
                <span>Talk to Us on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Close-up Stationery Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/3 sm:aspect-1/1 rounded-xs overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl">
              <img
                src="/src/assets/images/card_floral_romance_1790662796207.jpg"
                alt="Close-up luxury wedding card with botanical watercolor and wax seal by Dream Invites"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-xs uppercase tracking-widest text-stone-300 font-medium">Bespoke Monogram</p>
                  <p className="font-serif text-lg text-white">Every invitation tailored to your love story</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
