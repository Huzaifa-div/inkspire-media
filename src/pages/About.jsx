import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProcessSection from '../components/ProcessSection';
import Button from '../components/Button';
import GoldDivider from '../components/GoldDivider';
import { siteConfig } from '../data/siteConfig';
import { inkImages } from '../assets/images';

export default function About() {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-brand-black text-brand-cream">
      {/* Editorial Header */}
      <section className="py-20 md:py-28 border-b border-brand-surface bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-semibold uppercase tracking-ultra rounded-full bg-brand-charcoal text-brand-gold-champagne border border-brand-gold/30 shadow-[0_0_12px_rgba(201,169,97,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-highlight shadow-[0_0_6px_rgba(252,246,186,0.9)] animate-pulse" />
            <span>ABOUT INKSPIRE MEDIA</span>
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-brand-cream leading-tight mb-6">
            WE MAKE IDEAS <span className="italic font-normal gold-metallic-text font-serif">TANGIBLE.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-cream/80 font-normal leading-relaxed max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
        </div>
      </section>

      <GoldDivider variant="line" />

      {/* Our Story & Philosophy */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] bg-brand-charcoal overflow-hidden border border-brand-gold/35 shadow-dark-luxury group">
              <img
                src={inkImages.corporateLetterheadLaw}
                alt="InkSpire Media custom corporate stationery and prints"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Quirky Quote Card */}
            <div className="p-6 bg-brand-charcoal text-brand-cream border border-brand-gold/40 max-w-sm absolute -bottom-6 -right-6 hidden sm:block shadow-dark-luxury">
              <p className="font-serif italic text-base gold-foil-subtle">
                "Offering cool, quirky & creative prints & services."
              </p>
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cream/60 mt-2 block">
                — InkSpire Media
              </span>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-ultra text-brand-gold-champagne block">
              OUR STORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-brand-cream leading-snug">
              Born from a desire to escape standard, boring print shops.
            </h2>
            <p className="text-base text-brand-cream/70 leading-relaxed">
              InkSpire Media was founded to bridge the gap between high-fashion aesthetics and everyday physical production. We believe that printing shouldn't be a cold commodity—it should be a tactile art form that excites the senses and turns heads.
            </p>
            <p className="text-base text-brand-cream/70 leading-relaxed">
              Whether it’s a metallic hot foil visiting card that leaves an indelible first impression, a rigid packaging unboxing experience that customers document on Instagram, or a custom glowing neon sign for a vibrant space, we obsess over every millimeter.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <Button to="/portfolio" variant="gold" size="md" showArrow>
                View Our Portfolio
              </Button>
              <Button to="/quote" variant="outline" size="md">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider variant="diamond" />

      {/* Core Values */}
      <section className="py-24 bg-brand-charcoal text-brand-cream border-t border-b border-brand-surface relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="FOUR PILLARS"
            title="OUR CORE VALUES."
            italicWord="VALUES."
            subtitle="The foundational principles that guide every print run, die-cut, and foil impression."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {siteConfig.values.map((val, idx) => (
              <div
                key={val.title}
                className="p-8 bg-brand-surface border border-brand-gold/25 hover:border-brand-gold-highlight hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 mb-6 bg-brand-black border border-brand-gold/40 text-brand-gold-highlight flex items-center justify-center font-mono text-sm shadow-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-brand-cream group-hover:text-brand-gold-highlight transition-colors mb-1">
                    {val.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-brand-gold/80 font-mono block mb-4">
                    {val.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-brand-cream/70 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider variant="line" />

      {/* Process Section */}
      <ProcessSection />

      <GoldDivider variant="diamond" />

      {/* Production Philosophy */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-charcoal p-8 sm:p-14 border border-brand-gold/30 hover:border-brand-gold-highlight shadow-dark-luxury transition-all duration-300">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-ultra text-brand-gold-champagne block">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-cream">
              Artisan Craft Meets Modern Production.
            </h2>
            <p className="text-base text-brand-cream/70 leading-relaxed">
              We combine traditional heritage techniques—like letterpress debossing, brass die hot foil stamping, and manual screen printing—with high-precision modern large-format digital presses, UV flatbed printing, and optical laser contour cutting.
            </p>
            <div className="pt-4">
              <Button to="/quote" variant="gold" size="lg" showArrow>
                Work With Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
