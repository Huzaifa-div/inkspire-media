import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function WhatsAppButton({ customMessage = '' }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMsg = "Hi InkSpire Media, I found you through your website and would like to get a quote.";
  const message = encodeURIComponent(customMessage || defaultMsg);
  const cleanPhone = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on Desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-brand-charcoal text-brand-cream border border-brand-gold/40 px-3.5 py-2 text-xs shadow-dark-luxury animate-fade-in">
          <span>Chat with us on WhatsApp</span>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 p-3.5 bg-brand-charcoal text-brand-gold-highlight hover:text-brand-cream hover:bg-emerald-700 border border-brand-gold/40 hover:border-emerald-500 shadow-dark-luxury flex items-center justify-center transition-all duration-300 transform hover:scale-110 group relative"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-brand-black animate-pulse" />
        <MessageCircle className="w-6 h-6 text-brand-gold-highlight group-hover:text-white transition-colors" />
      </a>
    </div>
  );
}
