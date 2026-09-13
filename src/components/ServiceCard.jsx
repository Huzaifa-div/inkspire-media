import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ServiceModal from './ServiceModal';

export default function ServiceCard({ service, index = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="group relative bg-brand-charcoal/90 border border-brand-gold/25 hover:border-brand-gold-highlight transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-subtle hover:shadow-card-hover hover:-translate-y-1.5 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Card Header & Media */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-black">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-black/35 group-hover:bg-brand-black/10 transition-colors duration-500" />
          
          {/* Service Number Badge with Metallic Gold Rim */}
          <div className="absolute top-4 left-4 bg-brand-black/90 backdrop-blur-sm text-brand-gold-highlight text-xs font-mono px-3 py-1 border border-brand-gold/40 shadow-sm">
            {service.number}
          </div>

          {/* Category Tag */}
          <div className="absolute top-4 right-4 bg-brand-charcoal/90 backdrop-blur-sm text-brand-cream/90 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 border border-white/10">
            {service.category}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 md:p-7 flex-1 flex flex-col justify-between bg-brand-charcoal/60">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-normal text-brand-cream group-hover:text-brand-gold-highlight transition-colors duration-300 mb-2.5">
              {service.title}
            </h3>
            <p className="text-xs md:text-sm text-brand-cream/70 leading-relaxed line-clamp-3 mb-4">
              {service.shortDesc}
            </p>
          </div>

          {/* Action Trigger */}
          <div className="pt-4 border-t border-brand-surface flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-cream/80 group-hover:text-brand-gold-highlight transition-colors flex items-center gap-1.5">
              Explore Details
            </span>
            <div className="w-8 h-8 rounded-none border border-brand-gold/30 group-hover:border-brand-gold-highlight group-hover:bg-gradient-to-br group-hover:from-brand-gold group-hover:to-brand-gold-deep group-hover:text-brand-black flex items-center justify-center transition-all duration-300 text-brand-gold">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Deep-dive modal */}
      <ServiceModal
        service={service}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
