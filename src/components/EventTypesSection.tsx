import React, { useState } from 'react';
import { MessageCircle, Sparkles, Palette } from 'lucide-react';
import { EVENT_TYPES, BRAND_CONFIG, EventType } from '../data/weddingData';

export const EventTypesSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventType>(EVENT_TYPES[0]);

  return (
    <section id="occasions" className="py-20 md:py-28 bg-[#FAF8F5] dark:bg-[#121110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#00AEEF] font-semibold">
            <span>Pakistani Wedding Traditions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50 tracking-tight">
            Designed for Every Celebration
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light">
            Whether it&apos;s an intimate Nikah or a vibrant Mehndi, find an invitation style that belongs to your celebration.
          </p>
        </div>

        {/* Event Selection Tabs */}
        <div className="flex items-center justify-center">
          <div className="inline-flex p-1 bg-stone-100 dark:bg-stone-800/80 rounded-sm border border-stone-200 dark:border-stone-700/80 overflow-x-auto max-w-full">
            {EVENT_TYPES.map((event) => {
              const isSelected = selectedEvent.id === event.id;
              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-xs whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] ${
                    isSelected
                      ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-white shadow-xs font-bold'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                >
                  {event.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Event Showcase Feature */}
        <div className="bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800/90 rounded-xs overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 relative aspect-4/3 lg:aspect-auto min-h-[320px] bg-stone-100 dark:bg-stone-900">
              <img
                src={selectedEvent.image}
                alt={`${selectedEvent.name} invitation design by Dream Invites`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 dark:bg-[#121110]/90 backdrop-blur-xs px-3 py-1.5 text-xs font-serif italic text-stone-800 dark:text-stone-200 border border-stone-200/60 dark:border-stone-800/60">
                {selectedEvent.name} Suite
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>{selectedEvent.vibe}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 dark:text-stone-50">
                  {selectedEvent.name} <span className="italic font-light text-stone-500 dark:text-stone-400">· {selectedEvent.subtitle}</span>
                </h3>

                <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                  {selectedEvent.description}
                </p>

                {/* Color Harmonization Notes */}
                <div className="pt-3 border-t border-stone-100 dark:border-stone-800/70 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                    <Palette className="w-3.5 h-3.5 text-[#00AEEF]" />
                    <span>Ceremonial Palette &amp; Finishes</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {selectedEvent.palette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-6 h-6 rounded-full border border-stone-300 dark:border-stone-700 shadow-2xs"
                        style={{ backgroundColor: color }}
                        title={`Color swatch ${color}`}
                      />
                    ))}
                    <span className="text-xs text-stone-500 dark:text-stone-400 ml-2">
                      {selectedEvent.accentNotes}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800/70">
                <a
                  href={BRAND_CONFIG.getEventWhatsAppUrl(selectedEvent.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-sm hover:bg-[#00AEEF] dark:hover:bg-[#00AEEF] dark:hover:text-white transition-all shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
                >
                  <MessageCircle className="w-4 h-4 text-[#00AEEF]" />
                  <span>Inquire for {selectedEvent.name}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
