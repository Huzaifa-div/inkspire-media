import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

export default function Lightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}) {
  if (!isOpen || currentIndex === null || !items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-brand-black/95 backdrop-blur-md animate-fade-in select-none"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
        <div className="text-xs font-mono text-brand-gold-champagne tracking-widest bg-brand-charcoal/90 px-3 py-1.5 border border-brand-gold/30">
          {currentIndex + 1} / {items.length}
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 bg-brand-charcoal text-brand-cream hover:text-brand-gold-highlight border border-brand-gold/30 hover:border-brand-gold-highlight flex items-center justify-center transition-colors"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-6 z-20 w-12 h-12 bg-brand-charcoal/90 text-brand-cream hover:text-brand-gold-highlight border border-brand-gold/30 hover:border-brand-gold-highlight flex items-center justify-center transition-all duration-300 transform hover:-translate-x-1 shadow-dark-luxury"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-6 z-20 w-12 h-12 bg-brand-charcoal/90 text-brand-cream hover:text-brand-gold-highlight border border-brand-gold/30 hover:border-brand-gold-highlight flex items-center justify-center transition-all duration-300 transform hover:translate-x-1 shadow-dark-luxury"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Content Box */}
      <div
        className="relative max-w-5xl w-full bg-brand-charcoal border border-brand-gold/40 shadow-dark-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left / Top: High-Res Image */}
        <div className="lg:col-span-8 bg-brand-black flex items-center justify-center overflow-hidden max-h-[50vh] lg:max-h-[85vh]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-contain max-h-[80vh] transition-all duration-500"
          />
        </div>

        {/* Right / Bottom: Metadata & Inquiry */}
        <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-brand-charcoal border-t lg:border-t-0 lg:border-l border-brand-surface text-brand-cream">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-ultra px-2.5 py-1 bg-brand-surface text-brand-gold-champagne border border-brand-gold/30 inline-block mb-3">
                {currentItem.categoryLabel || currentItem.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-brand-cream leading-tight">
                {currentItem.title}
              </h3>
              {currentItem.client && (
                <p className="text-xs text-brand-gold-highlight mt-1 font-mono">
                  Client: {currentItem.client}
                </p>
              )}
            </div>

            <p className="text-sm text-brand-cream/80 leading-relaxed font-normal">
              {currentItem.description}
            </p>

            {/* Tags */}
            {currentItem.tags && (
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-brand-cream/60 block mb-2 font-mono">
                  Techniques & Materials
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentItem.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2.5 py-1 bg-brand-surface border border-brand-gold/20 text-brand-cream/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 mt-6 border-t border-brand-surface space-y-3">
            <Button
              to={`/quote?service=${encodeURIComponent(currentItem.categoryLabel || currentItem.title)}`}
              variant="gold"
              size="md"
              showArrow
              className="w-full justify-between"
              onClick={onClose}
            >
              Order Similar Prints
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
