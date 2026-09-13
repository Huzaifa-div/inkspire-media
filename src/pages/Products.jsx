import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import GoldDivider from '../components/GoldDivider';
import Button from '../components/Button';
import { products, productCategories } from '../data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-brand-black text-brand-cream">
      {/* Page Header */}
      <section className="py-16 md:py-20 border-b border-brand-surface bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="PRODUCT CATALOGUE"
            title="MADE TO BE REMEMBERED."
            italicWord="REMEMBERED."
            subtitle="Explore our curated collection of bespoke stationery, luxury packaging, corporate diaries, and quirky merchandise."
            align="center"
          />

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mt-8">
            <input
              type="text"
              placeholder="Search products, materials, finishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3.5 pl-11 bg-brand-charcoal border border-brand-gold/30 focus:border-brand-gold-highlight text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none shadow-subtle transition-colors"
            />
            <Search className="w-4 h-4 text-brand-gold-highlight absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      <GoldDivider variant="line" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Category Filters */}
        <div className="mb-10 pb-2 border-b border-brand-surface">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs uppercase tracking-ultra font-semibold text-brand-cream flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-gold-highlight" /> Filter by Category
            </span>
            <span className="text-xs text-brand-gray font-mono">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
            </span>
          </div>

          <ProductFilter
            categories={productCategories}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-brand-charcoal border border-brand-gold/20 p-12">
            <p className="font-serif text-2xl text-brand-cream mb-2">No products found</p>
            <p className="text-sm text-brand-cream/70 mb-6">
              We couldn't find any products matching "{searchQuery}". Try selecting a different category or search term.
            </p>
            <Button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              variant="gold"
              size="sm"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Custom Printing Prompt */}
        <div className="mt-20 p-8 sm:p-12 bg-brand-charcoal text-brand-cream border border-brand-gold/30 hover:border-brand-gold-highlight flex flex-col md:flex-row items-center justify-between gap-6 shadow-dark-luxury transition-all duration-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-champagne block mb-1">
              Custom Dimensions & Formats
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-brand-cream">
              Need a completely bespoke size or unique shape?
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream/70 mt-1 max-w-xl">
              We fabricate custom die-cut shapes, specialized unboxing boxes, and one-of-a-kind event stationery from your exact technical schematics.
            </p>
          </div>
          <Button
            to="/quote"
            variant="gold"
            size="lg"
            showArrow
            className="shrink-0"
          >
            Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
