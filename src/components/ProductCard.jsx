import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import ProductQuickView from './ProductQuickView';

export default function ProductCard({ product }) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  return (
    <>
      <div className="group bg-brand-charcoal border border-brand-gold/25 hover:border-brand-gold-highlight transition-all duration-400 flex flex-col justify-between overflow-hidden shadow-subtle hover:shadow-card-hover hover:-translate-y-1">
        {/* Media Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-black">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-black/25 group-hover:bg-brand-black/5 transition-colors duration-400" />

          {/* Category Tag */}
          <div className="absolute top-3.5 left-3.5 bg-brand-black/90 backdrop-blur-sm text-brand-gold-champagne text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 border border-brand-gold/30">
            {product.category}
          </div>

          {/* Optional Badge */}
          {product.tag && (
            <div className="absolute top-3.5 right-3.5 bg-brand-charcoal/90 backdrop-blur-sm text-brand-cream text-[10px] font-semibold uppercase tracking-wider px-2 py-1 border border-white/10">
              {product.tag}
            </div>
          )}

          {/* Quick View Button Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-black/50 backdrop-blur-[2px]">
            <button
              onClick={() => setQuickViewOpen(true)}
              className="btn-metallic-gold text-xs uppercase tracking-widest px-4 py-2.5 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              aria-label={`Quick View ${product.name}`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-serif text-brand-cream font-normal group-hover:text-brand-gold-highlight transition-colors duration-300 mb-2">
              <Link to={`/products/${product.id}`} className="focus:outline-none">
                {product.name}
              </Link>
            </h3>
            <p className="text-xs md:text-sm text-brand-cream/70 leading-relaxed line-clamp-2 mb-4">
              {product.shortDesc}
            </p>
          </div>

          {/* Card Footer Actions */}
          <div className="pt-4 border-t border-brand-surface flex items-center justify-between gap-2">
            <Link
              to={`/products/${product.id}`}
              className="text-xs font-medium uppercase tracking-widest text-brand-cream/80 hover:text-brand-gold-highlight transition-colors flex items-center gap-1 group-hover:underline underline-offset-4"
            >
              Details
            </Link>

            <Link
              to={`/quote?product=${encodeURIComponent(product.name)}`}
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 bg-brand-surface text-brand-cream hover:text-brand-gold-highlight hover:border-brand-gold-highlight border border-brand-gold/30 transition-all duration-300 shadow-sm"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickView
        product={product}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  );
}
