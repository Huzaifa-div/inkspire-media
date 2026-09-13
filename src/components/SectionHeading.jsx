import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'dark',
  italicWord = '',
  className = '',
}) {
  const isCenter = align === 'center';
  const isRight = align === 'right';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : isRight ? 'text-right ml-auto max-w-2xl' : 'text-left max-w-2xl'} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-[10px] sm:text-xs font-semibold uppercase tracking-ultra rounded-full bg-brand-surface/80 text-brand-gold-champagne border border-brand-gold/30 shadow-[0_0_12px_rgba(201,169,97,0.12)]">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-highlight shadow-[0_0_6px_rgba(252,246,186,0.9)] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-normal tracking-tight leading-[1.15] mb-4 text-brand-cream">
          {italicWord && title.includes(italicWord) ? (
            <>
              {title.split(italicWord)[0]}
              <span className="italic font-normal gold-metallic-text font-serif">{italicWord}</span>
              {title.split(italicWord)[1]}
            </>
          ) : (
            title
          )}
        </h2>
      )}

      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed font-normal text-brand-cream/70 ${isCenter ? 'max-w-2xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
