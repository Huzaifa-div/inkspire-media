import React from 'react';
import { X, CheckCircle2, Clock } from 'lucide-react';
import Button from './Button';

export default function ServiceModal({ service, isOpen, onClose }) {
  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-brand-charcoal border border-brand-gold/40 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-dark-luxury relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-brand-black/80 hover:bg-brand-black text-brand-cream hover:text-brand-gold-highlight flex items-center justify-center transition-colors border border-brand-gold/30"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-brand-black">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-brand-cream">
            <span className="inline-block px-3 py-1 btn-metallic-gold text-[11px] font-semibold uppercase tracking-widest mb-2">
              {service.category} • {service.number}
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-normal text-brand-cream">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 bg-brand-charcoal">
          <div>
            <p className="text-sm font-medium text-brand-gold-champagne uppercase tracking-widest mb-2 font-mono">
              {service.tagline}
            </p>
            <p className="text-base text-brand-cream/80 leading-relaxed font-normal">
              {service.fullDesc || service.shortDesc}
            </p>
          </div>

          {/* Capabilities / Features */}
          {service.features && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-ultra text-brand-cream mb-4">
                Specialized Capabilities & Finishes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 bg-brand-surface border border-brand-gold/20 text-sm text-brand-cream"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-gold-highlight shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metadata Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-surface">
            <div className="p-4 bg-brand-surface border border-brand-gold/20">
              <span className="text-xs uppercase tracking-wider text-brand-gray block mb-1">
                Typical Turnaround
              </span>
              <span className="text-sm font-medium text-brand-cream flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold-highlight" />
                {service.turnaround || '3 - 7 Business Days'}
              </span>
            </div>
            <div className="p-4 bg-brand-surface border border-brand-gold/20">
              <span className="text-xs uppercase tracking-wider text-brand-gray block mb-1">
                Ideal For
              </span>
              <span className="text-sm font-medium text-brand-cream">
                {service.idealFor || 'Custom Enterprise & Creator Projects'}
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-surface">
            <p className="text-xs text-brand-gray">
              Have unique requirements or bespoke dimensions?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                to={`/quote?service=${encodeURIComponent(service.title)}`}
                variant="gold"
                size="md"
                showArrow
                className="w-full sm:w-auto"
                onClick={onClose}
              >
                Request Quote For This
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
