import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import GoldDivider from '../components/GoldDivider';
import { Check, ArrowLeft, Sliders } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(
    product ? product.gallery?.[0] || product.image : ''
  );

  if (!product) {
    return (
      <div className="pt-36 pb-24 min-h-screen bg-brand-black text-brand-cream text-center px-4">
        <h2 className="font-serif text-3xl text-brand-cream mb-4">Product Not Found</h2>
        <p className="text-brand-gray mb-6">The requested product could not be located in our catalogue.</p>
        <Button to="/products" variant="gold" size="md">
          Back to Catalogue
        </Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-brand-black text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Button */}
        <div className="py-6 flex items-center justify-between border-b border-brand-surface mb-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-brand-gray hover:text-brand-gold-highlight transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
            <Link to="/products" className="hover:text-brand-gold-highlight underline">
              Products
            </Link>
            <span>/</span>
            <span className="text-brand-cream">{product.category}</span>
          </div>
        </div>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[4/3] w-full bg-brand-charcoal overflow-hidden border border-brand-gold/35 shadow-dark-luxury group">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>

            {/* Thumbnail Row */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 border overflow-hidden transition-all ${
                      (selectedImage || product.image) === img
                        ? 'border-brand-gold-highlight ring-2 ring-brand-gold-highlight/40 scale-105 shadow-gold-glow'
                        : 'border-brand-gold/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 bg-brand-charcoal text-brand-gold-champagne border border-brand-gold/30">
                  {product.category}
                </span>
                {product.tag && (
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 btn-metallic-gold text-[10px]">
                    {product.tag}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-serif font-normal text-brand-cream leading-tight mb-4">
                {product.name}
              </h1>

              <p className="text-base text-brand-cream/80 font-normal leading-relaxed">
                {product.description || product.shortDesc}
              </p>
            </div>

            {/* Customization Options */}
            {product.customizationOptions && (
              <div className="p-6 bg-brand-charcoal border border-brand-gold/25 shadow-subtle">
                <h3 className="text-xs font-semibold uppercase tracking-ultra text-brand-cream mb-4 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-brand-gold-highlight" /> Customization Options:
                </h3>
                <ul className="space-y-2.5">
                  {product.customizationOptions.map((opt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-cream/90">
                      <Check className="w-4 h-4 text-brand-gold-highlight shrink-0 mt-0.5" />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications Box */}
            {product.specs && (
              <div className="p-6 bg-brand-surface border border-brand-gold/20 shadow-subtle">
                <h3 className="text-xs font-semibold uppercase tracking-ultra text-brand-gold-champagne mb-3">
                  Technical Specifications
                </h3>
                <dl className="space-y-2 text-xs divide-y divide-brand-charcoal">
                  {Object.entries(product.specs).map(([label, val]) => (
                    <div key={label} className="pt-2 flex justify-between">
                      <dt className="text-brand-gray">{label}</dt>
                      <dd className="font-medium text-brand-cream">{val}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Primary Action Button */}
            <div className="pt-4 space-y-3">
              <Button
                to={`/quote?product=${encodeURIComponent(product.name)}&service=${encodeURIComponent(product.category)}`}
                variant="gold"
                size="lg"
                showArrow
                className="w-full justify-between"
              >
                Request a Custom Quote
              </Button>
              <p className="text-center text-xs text-brand-gray">
                Bespoke sizing, foil colors & volume discounts available
              </p>
            </div>
          </div>
        </div>

        <GoldDivider variant="diamond" />

        {/* Related Products Row */}
        {relatedProducts.length > 0 && (
          <div className="pt-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl text-brand-cream">
                Related {product.category} Prints
              </h3>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-xs uppercase tracking-widest font-semibold text-brand-gold-highlight hover:underline"
              >
                View Category →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
