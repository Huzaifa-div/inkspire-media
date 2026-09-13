import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Check } from 'lucide-react';
import Button from './Button';

export default function ProductQuickView({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  const [activeImage, setActiveImage] = useState(product.gallery?.[0] || product.image);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-brand-charcoal border border-brand-gold/40 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-dark-luxury relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-brand-black text-brand-cream hover:text-brand-gold-highlight flex items-center justify-center transition-colors border border-brand-gold/30"
          aria-label="Close Quick View"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Gallery */}
          <div className="p-6 md:p-8 bg-brand-surface flex flex-col justify-between">
            <div className="aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-brand-charcoal border border-brand-gold/20 mb-4">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 shrink-0 border overflow-hidden transition-all ${
                      activeImage === img
                        ? 'border-brand-gold-highlight ring-1 ring-brand-gold-highlight/50 scale-105 shadow-gold-glow'
                        : 'border-brand-gold/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6 bg-brand-charcoal">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 bg-brand-surface text-brand-gold-champagne border border-brand-gold/30">
                  {product.category}
                </span>
                {product.tag && (
                  <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 btn-metallic-gold">
                    {product.tag}
                  </span>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-brand-cream font-normal mb-3">
                {product.name}
              </h3>

              <p className="text-sm text-brand-cream/70 leading-relaxed mb-6">
                {product.description || product.shortDesc}
              </p>

              {/* Customization Options list */}
              {product.customizationOptions && (
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-ultra text-brand-cream mb-3">
                    Available Customization Options:
                  </h4>
                  <ul className="space-y-2">
                    {product.customizationOptions.map((opt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-brand-cream/90">
                        <Check className="w-3.5 h-3.5 text-brand-gold-highlight shrink-0 mt-0.5" />
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specs snippet */}
              {product.specs && (
                <div className="p-4 bg-brand-surface border border-brand-gold/20 text-xs space-y-1.5 mb-6">
                  {Object.entries(product.specs).slice(0, 3).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b border-brand-charcoal pb-1">
                      <span className="text-brand-gray">{key}:</span>
                      <span className="font-medium text-brand-cream">{val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-4 border-t border-brand-surface">
              <Button
                to={`/quote?product=${encodeURIComponent(product.name)}`}
                variant="gold"
                size="md"
                showArrow
                className="w-full justify-between"
                onClick={onClose}
              >
                Request a Custom Quote
              </Button>
              <Link
                to={`/products/${product.id}`}
                onClick={onClose}
                className="block text-center text-xs font-medium uppercase tracking-widest text-brand-cream/80 hover:text-brand-gold-highlight underline underline-offset-4 py-1 transition-colors"
              >
                View Full Product Specifications →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
