import React from 'react';
import { CATEGORIES } from '../data/weddingData';

type CategoryType = typeof CATEGORIES[number];

interface CollectionFilterProps {
  activeCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  countByCategory: Record<string, number>;
}

export const CollectionFilter: React.FC<CollectionFilterProps> = ({
  activeCategory,
  onSelectCategory,
  countByCategory,
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mb-10">
      <div className="inline-flex items-center p-1 bg-stone-100 dark:bg-stone-800/80 rounded-sm border border-stone-200/80 dark:border-stone-700/80 max-w-full overflow-x-auto">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          const count = countByCategory[cat] ?? 0;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-xs whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF] ${
                isActive
                  ? 'bg-white dark:bg-stone-900 text-stone-950 dark:text-white shadow-xs font-semibold'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <span>{cat}</span>
              <span className="ml-1.5 text-[10px] opacity-60 font-mono">({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
