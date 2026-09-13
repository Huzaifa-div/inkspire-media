import React, { useState, useMemo } from 'react';
import SectionHeading from '../components/SectionHeading';
import PortfolioCard from '../components/PortfolioCard';
import ProductFilter from '../components/ProductFilter';
import Lightbox from '../components/Lightbox';
import Button from '../components/Button';
import GoldDivider from '../components/GoldDivider';
import { portfolioItems, portfolioCategories } from '../data/portfolio';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return portfolioItems;
    return portfolioItems.filter(
      (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-brand-black text-brand-cream">
      {/* Header */}
      <section className="py-16 md:py-20 border-b border-brand-surface bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="OUR PORTFOLIO"
            title="IDEAS MADE TANGIBLE."
            italicWord="TANGIBLE."
            subtitle="A curated showcase of bespoke corporate stationery, luxury packaging, illuminated neon signs, and artisan print projects."
            align="center"
          />
        </div>
      </section>

      <GoldDivider variant="line" />

      {/* Main Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Category Filters */}
        <div className="mb-12 pb-2 border-b border-brand-surface flex items-center justify-between flex-wrap gap-4">
          <ProductFilter
            categories={portfolioCategories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          <span className="text-xs text-brand-gray font-mono">
            {filteredItems.length} Projects Displayed
          </span>
        </div>

        {/* Portfolio Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, idx) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={() => setLightboxIndex(idx)}
            />
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-20 p-8 sm:p-12 bg-brand-charcoal text-brand-cream border border-brand-gold/30 hover:border-brand-gold-highlight flex flex-col md:flex-row items-center justify-between gap-6 shadow-dark-luxury transition-all duration-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-champagne block mb-1">
              Have an Inspired Concept?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-brand-cream">
              Let's create your next signature print piece.
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream/70 mt-1 max-w-xl">
              We collaborate with forward-thinking brands, agencies, and event planners to craft standout tangible designs.
            </p>
          </div>
          <Button
            to="/quote"
            variant="gold"
            size="lg"
            showArrow
            className="shrink-0"
          >
            Start Your Project
          </Button>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev === 0 ? filteredItems.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev === filteredItems.length - 1 ? 0 : prev + 1
          )
        }
      />
    </div>
  );
}
