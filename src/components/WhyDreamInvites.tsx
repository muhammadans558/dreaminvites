import React from 'react';
import { PenTool, Feather, HeartHandshake, Sparkles } from 'lucide-react';
import { WHY_DREAM_INVITES } from '../data/weddingData';

export const WhyDreamInvites: React.FC = () => {
  const icons = [
    <PenTool key="1" className="w-5 h-5 text-[#00AEEF]" />,
    <Feather key="2" className="w-5 h-5 text-[#00AEEF]" />,
    <HeartHandshake key="3" className="w-5 h-5 text-[#00AEEF]" />,
    <Sparkles key="4" className="w-5 h-5 text-[#00AEEF]" />,
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F5F1EB]/50 dark:bg-[#161514]/50 border-t border-stone-200/60 dark:border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 font-medium">
            <span>The Dream Invites Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50 tracking-tight">
            Why Dream Invites?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light">
            Dedicated to creating wedding stationery that echoes the care, joy, and distinction of your wedding day.
          </p>
        </div>

        {/* 4 Feature Blocks in Refined Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_DREAM_INVITES.map((prop, idx) => (
            <div
              key={prop.title}
              className="bg-white dark:bg-[#181716] p-7 border border-stone-200/80 dark:border-stone-800/80 rounded-xs flex flex-col justify-between space-y-4 hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
            >
              <div className="space-y-4">
                {/* Number & Icon lockup */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xs bg-stone-100 dark:bg-stone-800/60 inline-flex">
                    {icons[idx]}
                  </div>
                  <span className="font-serif text-xl text-stone-300 dark:text-stone-700 select-none">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-normal text-stone-900 dark:text-stone-100">
                  {prop.title}
                </h3>

                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                  {prop.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400">
                {prop.details}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
