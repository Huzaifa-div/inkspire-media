import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ProcessSection from '../components/ProcessSection';
import GoldDivider from '../components/GoldDivider';
import Button from '../components/Button';
import { services } from '../data/services';
import { siteConfig } from '../data/siteConfig';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-cream">
      {/* 1. Hero Section */}
      <Hero />

      {/* Editorial Metallic Gold Divider */}
      <GoldDivider variant="diamond" />

      {/* 2. Brand Introduction Section */}
      <section id="intro-section" className="py-24 md:py-32 bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-ultra text-brand-gold-champagne block mb-3">
                MORE THAN PRINT
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-brand-cream leading-tight">
                Where <span className="italic font-normal gold-metallic-text font-serif">creativity</span> meets print.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg md:text-xl text-brand-cream/90 font-normal leading-relaxed">
                At InkSpire Media, we turn ideas into tangible experiences. From corporate stationery and customized packaging to event prints and creative promotional products, we create pieces designed to be noticed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-brand-surface">
                <div className="p-4 bg-brand-charcoal/40 border-l-2 border-brand-gold/60">
                  <h3 className="font-serif text-lg font-normal text-brand-cream mb-1">
                    Bespoke Precision
                  </h3>
                  <p className="text-xs md:text-sm text-brand-cream/70 leading-relaxed">
                    Every piece is calibrated with precision dies, premium paper weights, and tactile foil stamping.
                  </p>
                </div>
                <div className="p-4 bg-brand-charcoal/40 border-l-2 border-brand-gold/60">
                  <h3 className="font-serif text-lg font-normal text-brand-cream mb-1">
                    Quirky & Creative Soul
                  </h3>
                  <p className="text-xs md:text-sm text-brand-cream/70 leading-relaxed">
                    We infuse wit, vibrant energy, and high-end design elegance into every custom creation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Metallic Gold Divider */}
      <GoldDivider variant="line" />

      {/* 3. Services Section ("WHAT WE CREATE") */}
      <section className="py-24 md:py-32 bg-brand-charcoal/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              badge="OUR CRAFT"
              title="WHAT WE CREATE."
              italicWord="CREATE."
              subtitle="From everyday essentials to statement-making prints, we bring creativity into every detail."
              align="left"
              className="mb-0"
            />
            <div className="shrink-0">
              <Button to="/services" variant="outline" size="md" showArrow>
                View All Services
              </Button>
            </div>
          </div>

          {/* Asymmetrical Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Metallic Gold Divider */}
      <GoldDivider variant="diamond" />

      {/* 4. Why InkSpire / Brand Values */}
      <section className="py-24 md:py-32 bg-brand-black text-brand-cream relative overflow-hidden">
        {/* Subtle radial ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-5xl h-72 bg-brand-gold/4 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="OUR VALUES"
            title="THE INKSPIRE STANDARD."
            italicWord="STANDARD."
            subtitle="We treat print as an artisanal craft where luxury aesthetics meet flawless execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
            {siteConfig.values.map((val, idx) => (
              <div
                key={val.title}
                className="p-8 bg-brand-charcoal border border-brand-gold/25 hover:border-brand-gold-highlight hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-400 group relative"
              >
                {/* Metallic Gold Top Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-brand-gold-highlight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <span className="text-xs font-mono text-brand-gold-champagne tracking-widest block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-serif font-normal text-brand-cream group-hover:text-brand-gold-highlight transition-colors mb-1">
                  {val.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-brand-gold/80 font-mono mb-3">
                  {val.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-brand-cream/70 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Metallic Gold Divider */}
      <GoldDivider variant="line" />

      {/* 5. Process Section */}
      <ProcessSection />
    </div>
  );
}
