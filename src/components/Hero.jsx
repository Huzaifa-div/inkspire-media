import React from 'react';
import { ArrowDown, Globe2, Sparkles } from 'lucide-react';
import Button from './Button';
import { siteConfig } from '../data/siteConfig';
import { inkImages } from '../assets/images';

export default function Hero() {
  const scrollToExplore = () => {
    const el = document.getElementById('intro-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-brand-black border-b border-brand-charcoal">
      {/* Subtle Ambient Radial Gold Glow */}
      <div className="absolute top-1/4 -right-16 w-[28rem] h-[28rem] bg-brand-gold/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-[26rem] h-[26rem] bg-brand-gold/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Large Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-charcoal/90 border border-brand-gold/30 text-[11px] font-semibold uppercase tracking-ultra text-brand-cream shadow-[0_0_15px_rgba(201,169,97,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-highlight shadow-[0_0_6px_rgba(252,246,186,0.9)] animate-pulse" />
              <span className="gold-foil-subtle font-sans font-medium">COOL, QUIRKY & CREATIVE PRINTS</span>
            </div>

            {/* Main Editorial Headline with Shiny Metallic Gold Accent */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-serif font-normal text-brand-cream leading-[0.98] tracking-tight">
              IDEAS <br />
              <span className="italic font-normal gold-metallic-text font-serif">WORTH</span> <br />
              PRINTING.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-brand-cream/70 font-normal leading-relaxed max-w-xl">
              {siteConfig.subtitle}
            </p>

            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-cream/90">
              <Globe2 className="w-4 h-4 text-brand-gold-highlight" aria-hidden="true" />
              <span>Worldwide Shipping Available</span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                to="/services"
                variant="gold"
                size="lg"
                showArrow
              >
                Explore Services
              </Button>
              <Button
                to="/portfolio"
                variant="outline"
                size="lg"
              >
                View Our Work
              </Button>
              <Button
                to="/quote"
                variant="ghost"
                size="md"
                className="text-xs text-brand-gold hover:text-brand-gold-highlight"
              >
                Get a Quote →
              </Button>
            </div>

            {/* Quick Metrics Bar with Metallic Accents */}
            <div className="pt-8 border-t border-brand-surface grid grid-cols-3 gap-4 max-w-md">
              <div>
                <span className="font-mono text-xl sm:text-2xl font-semibold text-brand-cream block">12+</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-brand-gray">Techniques</span>
              </div>
              <div>
                <span className="font-mono text-xl sm:text-2xl font-semibold text-brand-cream block">100%</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-brand-gray">Custom Crafted</span>
              </div>
              <div>
                <span className="font-mono text-xl sm:text-2xl font-semibold gold-metallic-text block">Bespoke</span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-brand-gray">Artisanal Finish</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase / Luxury Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Luxury Frame with Polished Gold Border & Sheen */}
              <div className="relative aspect-[4/5] bg-brand-charcoal overflow-hidden shadow-dark-luxury border border-brand-gold/35 hover:border-brand-gold-highlight transition-all duration-500 group">
                <img
                  src={inkImages.book}
                  alt="Premium printed book with a refined editorial cover"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                {/* Metallic Gold Corner Highlights */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-gold-highlight pointer-events-none opacity-80" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-gold-highlight pointer-events-none opacity-80" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-black/25 pointer-events-none" />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-brand-charcoal/90 backdrop-blur-md border border-brand-gold/30 text-brand-cream shadow-luxury">
                  <div className="flex items-center justify-between text-xs font-mono text-brand-gold-highlight uppercase tracking-wider mb-1">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-brand-gold" />
                      Print Detail
                    </span>
                    <span className="text-brand-gray">Editorial Books</span>
                  </div>
                  <p className="font-serif text-sm text-brand-cream/90 leading-snug">
                    Considered paper, precise finishing, and tactile foil stamping made to be remembered.
                  </p>
                </div>
              </div>

              {/* Secondary Floating Offset Card */}
              <div className="hidden sm:block absolute -top-6 -left-8 w-52 p-3 bg-brand-charcoal/95 border border-brand-gold/40 shadow-dark-luxury transform -rotate-3 hover:rotate-0 hover:border-brand-gold-highlight transition-all duration-300">
                <div className="aspect-[4/5] bg-brand-black overflow-hidden mb-2 border border-brand-gold/20">
                  <img
                    src={inkImages.newCorporateLetterhead}
                    alt="Premium corporate letterhead"
                    loading="eager"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-brand-cream font-medium block">
                  Corporate Letterheads
                </span>
              </div>

              {/* Quirky Floating Tag */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 p-4 bg-brand-surface/95 text-brand-cream border border-brand-gold/40 shadow-dark-luxury transform rotate-2 hover:rotate-0 hover:border-brand-gold-highlight transition-all duration-300">
                <span className="text-[10px] font-mono tracking-widest uppercase block text-brand-cream/60">
                  Brand Philosophy
                </span>
                <span className="font-serif text-sm italic gold-metallic-text font-semibold">
                  "Cool, quirky & creative."
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between relative z-10">
        <button
          onClick={scrollToExplore}
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-brand-cream/60 hover:text-brand-gold-highlight transition-colors focus:outline-none group"
        >
          <ArrowDown className="w-3.5 h-3.5 text-brand-gold-highlight group-hover:translate-y-1 transition-transform" />
          <span>SCROLL TO EXPLORE</span>
        </button>

        <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-brand-gray">
          <span className="hover:text-brand-gold-highlight transition-colors">FOIL STAMPING</span>
          <span className="text-brand-gold/40">•</span>
          <span className="hover:text-brand-gold-highlight transition-colors">PACKAGING</span>
          <span className="text-brand-gold/40">•</span>
          <span className="hover:text-brand-gold-highlight transition-colors">STATIONERY</span>
          <span className="text-brand-gold/40">•</span>
          <span className="hover:text-brand-gold-highlight transition-colors">NEON SIGNS</span>
        </div>
      </div>
    </section>
  );
}
