import React from 'react';

export default function ProductFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 scrollbar-none no-scrollbar">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 whitespace-nowrap select-none border ${
              isActive
                ? 'bg-brand-charcoal text-brand-gold-highlight border-brand-gold-highlight shadow-[0_0_15px_rgba(201,169,97,0.25)]'
                : 'bg-brand-surface/70 border-brand-gold/20 text-brand-cream/70 hover:border-brand-gold hover:text-brand-cream hover:bg-brand-surface'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
