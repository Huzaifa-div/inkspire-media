import React from 'react';

export default function GoldDivider({ variant = 'diamond', className = '' }) {
  if (variant === 'line') {
    return (
      <div className={`w-full flex items-center justify-center py-2 ${className}`}>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 via-brand-gold-highlight/70 via-brand-gold/40 to-transparent" />
      </div>
    );
  }

  return (
    <div className={`w-full flex items-center justify-center py-4 relative ${className}`}>
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/25 via-brand-gold-highlight/60 via-brand-gold/25 to-transparent" />
      <div className="relative z-10 w-2 h-2 rotate-45 bg-gradient-to-br from-brand-gold-highlight via-brand-gold to-brand-gold-deep shadow-[0_0_8px_rgba(252,246,186,0.8)] border border-brand-black" />
    </div>
  );
}
