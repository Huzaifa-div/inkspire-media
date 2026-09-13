import React from 'react';
import { Eye } from 'lucide-react';

export default function PortfolioCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden bg-brand-charcoal border border-brand-gold/25 hover:border-brand-gold-highlight cursor-pointer transition-all duration-500 shadow-subtle hover:shadow-card-hover hover:-translate-y-1.5"
    >
      {/* Image Container with Luxury Zoom & Gradient Sheen */}
      <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-brand-black">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Subtle Metallic Corner Guides */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-brand-gold-highlight/80 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-brand-gold-highlight/80 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />
      </div>

      {/* Floating Category Badge with Fine Metallic Edge */}
      <div className="absolute top-3.5 left-3.5 z-10">
        <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 bg-brand-black/90 backdrop-blur-sm text-brand-gold-champagne border border-brand-gold/35 shadow-sm">
          {item.categoryLabel || item.category}
        </span>
      </div>

      {/* Center Hover Magnifier Icon with Metallic Chrome Pop */}
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-11 h-11 btn-metallic-gold flex items-center justify-center shadow-[0_0_20px_rgba(201,169,97,0.4)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
          <Eye className="w-4 h-4 text-brand-black" />
        </div>
      </div>

      {/* Bottom Content Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-brand-cream transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg sm:text-xl font-serif text-brand-cream font-normal group-hover:text-brand-gold-highlight transition-colors leading-tight mb-1">
          {item.title}
        </h3>
        {item.client && (
          <p className="text-xs text-brand-cream/60 font-mono tracking-wide">
            {item.client}
          </p>
        )}
      </div>
    </div>
  );
}
