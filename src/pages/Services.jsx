import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import GoldDivider from '../components/GoldDivider';
import { services } from '../data/services';
import { printTechniques } from '../data/faqs';

export default function Services() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-brand-black text-brand-cream">
      {/* Page Header */}
      <section className="py-16 md:py-24 border-b border-brand-surface bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="OUR CAPABILITIES"
            title="WHAT WE CREATE."
            italicWord="CREATE."
            subtitle="From everyday corporate essentials to high-impact packaging and luminous neon, we bring cool, quirky and creative precision into every single piece."
            align="center"
          />
        </div>
      </section>

      <GoldDivider variant="line" />

      {/* Services Showcase Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </section>

      <GoldDivider variant="diamond" />

      {/* Specialized Printing Techniques */}
      <section className="py-24 bg-brand-charcoal text-brand-cream border-t border-b border-brand-surface relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="MASTER CRAFT"
            title="SPECIALIZED TECHNIQUES."
            italicWord="TECHNIQUES."
            subtitle="Explore the tactile finishes and artisanal processes that set InkSpire Media apart."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {printTechniques.map((tech, idx) => (
              <div
                key={tech.name}
                className="p-6 sm:p-8 bg-brand-surface border border-brand-gold/25 hover:border-brand-gold-highlight hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-xs font-mono text-brand-gold-champagne uppercase tracking-wider mb-2">
                  0{idx + 1} • Technique
                </div>
                <h3 className="text-xl font-serif text-brand-cream font-normal group-hover:text-brand-gold-highlight transition-colors mb-3">
                  {tech.name}
                </h3>
                <p className="text-xs sm:text-sm text-brand-cream/70 leading-relaxed mb-4">
                  {tech.description}
                </p>
                <div className="pt-3 border-t border-brand-charcoal text-xs">
                  <span className="text-brand-gold font-mono uppercase block mb-1">
                    Ideal Applications:
                  </span>
                  <span className="text-brand-cream/80">{tech.ideal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider variant="line" />

      {/* Bottom Quote Banner */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 bg-brand-charcoal border border-brand-gold/30 hover:border-brand-gold-highlight shadow-dark-luxury transition-all duration-300">
          <span className="text-xs font-semibold uppercase tracking-ultra text-brand-gold-champagne block mb-2">
            START YOUR ORDER
          </span>
          <h3 className="text-3xl font-serif text-brand-cream mb-3">
            Ready to bring your print project to life?
          </h3>
          <p className="text-sm text-brand-cream/70 mb-8 max-w-md mx-auto">
            Get a quick custom estimate or contact InkSpire Media directly via WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/quote" variant="gold" size="lg" showArrow>
              Request a Custom Quote
            </Button>
            <Button to="/portfolio" variant="outline" size="lg">
              Explore Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
