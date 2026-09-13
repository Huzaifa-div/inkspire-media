import React from 'react';
import SectionHeading from '../components/SectionHeading';
import QuoteForm from '../components/QuoteForm';
import GoldDivider from '../components/GoldDivider';
import { ShieldCheck, Clock, Layers, MessageCircle } from 'lucide-react';

export default function Quote() {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-brand-black text-brand-cream">
      {/* Header */}
      <section className="py-16 md:py-20 border-b border-brand-surface bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="CUSTOM ESTIMATE"
            title="LET'S BRING YOUR IDEAS TO LIFE."
            italicWord="IDEAS"
            subtitle="Complete the form below to receive a custom quote. Our team provides material recommendations, digital proofs, and transparent turnaround timelines."
            align="center"
          />
        </div>
      </section>

      <GoldDivider variant="line" />

      {/* Main Form Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="p-4 bg-brand-charcoal border border-brand-gold/25 hover:border-brand-gold-highlight flex items-center gap-3 transition-colors shadow-subtle">
            <Clock className="w-5 h-5 text-brand-gold-highlight shrink-0" />
            <div className="text-xs">
              <span className="font-semibold block text-brand-cream">Fast Response</span>
              <span className="text-brand-gray">Within 2-4 Hours</span>
            </div>
          </div>

          <div className="p-4 bg-brand-charcoal border border-brand-gold/25 hover:border-brand-gold-highlight flex items-center gap-3 transition-colors shadow-subtle">
            <Layers className="w-5 h-5 text-brand-gold-highlight shrink-0" />
            <div className="text-xs">
              <span className="font-semibold block text-brand-cream">Paper Samples</span>
              <span className="text-brand-gray">Available on request</span>
            </div>
          </div>

          <div className="p-4 bg-brand-charcoal border border-brand-gold/25 hover:border-brand-gold-highlight flex items-center gap-3 transition-colors shadow-subtle">
            <ShieldCheck className="w-5 h-5 text-brand-gold-highlight shrink-0" />
            <div className="text-xs">
              <span className="font-semibold block text-brand-cream">100% Quality</span>
              <span className="text-brand-gray">Precision guarantee</span>
            </div>
          </div>

          <div className="p-4 bg-brand-charcoal border border-brand-gold/25 hover:border-brand-gold-highlight flex items-center gap-3 transition-colors shadow-subtle">
            <MessageCircle className="w-5 h-5 text-brand-gold-highlight shrink-0" />
            <div className="text-xs">
              <span className="font-semibold block text-brand-cream">Direct WhatsApp</span>
              <span className="text-brand-gray">One-click chat</span>
            </div>
          </div>
        </div>

        {/* The Quote Form */}
        <QuoteForm />
      </div>
    </div>
  );
}
