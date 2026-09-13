import React from 'react';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from './SectionHeading';
import { Sparkles, Palette, Printer, PackageCheck } from 'lucide-react';

const icons = [Sparkles, Palette, Printer, PackageCheck];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-charcoal text-brand-cream border-b border-brand-surface relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-brand-gold/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OUR CREATIVE PROCESS"
          title="FROM CONCEPT TO LUXURY PRINT."
          italicWord="LUXURY PRINT."
          subtitle="A seamless, white-glove workflow engineered to turn your visual ideas into tactile masterpieces."
        />

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-16">
          {/* Connecting Line on Desktop with Metallic Sheen */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 via-brand-gold-highlight/70 via-brand-gold/40 to-transparent -z-0" />

          {siteConfig.steps.map((step, idx) => {
            const IconComponent = icons[idx] || Sparkles;
            return (
              <div
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Circle & Number with Metallic Gold Accents */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center border border-brand-gold/30 group-hover:border-brand-gold-highlight bg-brand-surface group-hover:bg-brand-black transition-all duration-400 relative shadow-subtle group-hover:shadow-[0_0_20px_rgba(201,169,97,0.25)]">
                  <span className="font-mono text-xl font-bold tracking-wider gold-metallic-text">
                    {step.number}
                  </span>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 btn-metallic-gold flex items-center justify-center shadow-sm">
                    <IconComponent className="w-3.5 h-3.5 text-brand-black" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-serif font-normal text-brand-cream group-hover:text-brand-gold-highlight transition-colors mb-2.5">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs md:text-sm text-brand-cream/70 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
