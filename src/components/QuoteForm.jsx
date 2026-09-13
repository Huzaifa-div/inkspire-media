import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Upload, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { services } from '../data/services';
import Button from './Button';

export default function QuoteForm({ initialService = '', initialProduct = '' }) {
  const [searchParams] = useSearchParams();
  const queryService = searchParams.get('service') || initialService;
  const queryProduct = searchParams.get('product') || initialProduct;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: queryService || '',
    product: queryProduct || '',
    quantity: '',
    deadline: '',
    description: '',
    fileName: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');

  useEffect(() => {
    if (queryService) {
      setFormData((prev) => ({ ...prev, service: queryService }));
    }
    if (queryProduct) {
      setFormData((prev) => ({ ...prev, product: queryProduct }));
    }
  }, [queryService, queryProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, fileName: file.name }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name or business name';
    if (!formData.phone.trim()) newErrors.phone = 'Please provide your WhatsApp or phone number';
    if (!formData.service) newErrors.service = 'Please select a core printing service';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `INK-${Math.floor(100000 + Math.random() * 900000)}`;
      setQuoteRef(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Quote Request - InkSpire Media*
• *Ref:* ${quoteRef || 'Website Inquiry'}
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email || 'N/A'}
• *Service:* ${formData.service}
• *Product:* ${formData.product || 'Custom'}
• *Quantity:* ${formData.quantity || 'Flexible'}
• *Deadline:* ${formData.deadline || 'Standard'}
• *Details:* ${formData.description || 'Discuss via WhatsApp'}
${formData.fileName ? `• *Design File Attached:* ${formData.fileName}` : ''}`;

    const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  };

  if (submitted) {
    return (
      <div className="bg-brand-charcoal text-brand-cream border border-brand-gold/40 p-8 sm:p-12 shadow-dark-luxury text-center max-w-2xl mx-auto animate-fade-in">
        <div className="w-16 h-16 btn-metallic-gold text-brand-black mx-auto flex items-center justify-center mb-6 shadow-gold-glow">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-champagne block mb-1">
          Reference Code: {quoteRef}
        </span>
        <h3 className="text-3xl font-serif font-normal text-brand-cream mb-4">
          Quote Request Received.
        </h3>
        <p className="text-sm text-brand-cream/70 leading-relaxed mb-8 max-w-md mx-auto">
          Thank you, <span className="text-brand-gold-highlight font-medium">{formData.name}</span>. Our print specialists are reviewing your project specifications and will contact you via WhatsApp or email with an itemized proposal.
        </p>

        <div className="p-4 bg-brand-surface border border-brand-gold/20 mb-8 text-left text-xs space-y-2">
          <div className="flex justify-between border-b border-brand-charcoal pb-1">
            <span className="text-brand-cream/60">Service Requested:</span>
            <span className="text-brand-cream font-medium">{formData.service}</span>
          </div>
          {formData.product && (
            <div className="flex justify-between border-b border-brand-charcoal pb-1">
              <span className="text-brand-cream/60">Product / Item:</span>
              <span className="text-brand-cream font-medium">{formData.product}</span>
            </div>
          )}
          {formData.quantity && (
            <div className="flex justify-between border-b border-brand-charcoal pb-1">
              <span className="text-brand-cream/60">Estimated Quantity:</span>
              <span className="text-brand-cream font-medium">{formData.quantity}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 btn-metallic-gold text-xs font-semibold uppercase tracking-widest transition-all"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Send Instantly to WhatsApp
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                product: '',
                quantity: '',
                deadline: '',
                description: '',
                fileName: '',
              });
            }}
            className="w-full sm:w-auto px-6 py-3.5 bg-brand-surface text-brand-cream/80 hover:text-brand-gold-highlight text-xs uppercase tracking-widest border border-brand-gold/30 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-brand-charcoal border border-brand-gold/30 p-6 sm:p-10 shadow-dark-luxury max-w-3xl mx-auto">
      <div className="border-b border-brand-surface pb-6 mb-8">
        <h3 className="text-2xl sm:text-3xl font-serif text-brand-cream font-normal">
          Request an Itemized Quotation
        </h3>
        <p className="text-xs sm:text-sm text-brand-cream/70 mt-1">
          Tell us about your print concept. We provide transparent estimates, material recommendations, and digital proofing.
        </p>
      </div>

      <div className="space-y-6">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
              Your Name / Company *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Eleanor Vance / Lumina Brand"
              className={`w-full px-4 py-3 bg-brand-surface border ${
                errors.name ? 'border-red-500' : 'border-brand-gold/25 focus:border-brand-gold-highlight'
              } text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors`}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
              WhatsApp / Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +44 7477 228445"
              className={`w-full px-4 py-3 bg-brand-surface border ${
                errors.phone ? 'border-red-500' : 'border-brand-gold/25 focus:border-brand-gold-highlight'
              } text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors`}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Row 2: Email & Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
              Email Address (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="eleanor@example.com"
              className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/25 focus:border-brand-gold-highlight text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
              Service Category *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-brand-surface border ${
                errors.service ? 'border-red-500' : 'border-brand-gold/25 focus:border-brand-gold-highlight'
              } text-brand-cream text-sm rounded-none focus:outline-none transition-colors`}
            >
              <option value="" className="bg-brand-charcoal text-brand-cream">Select a Service Category</option>
              {services.map((svc) => (
                <option key={svc.id} value={svc.title} className="bg-brand-charcoal text-brand-cream">
                  {svc.title}
                </option>
              ))}
              <option value="Custom Creative Consultation" className="bg-brand-charcoal text-brand-cream">Custom Creative Consultation / Other</option>
            </select>
            {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
          </div>
        </div>

        {/* Row 3: Product Name & Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
              Specific Product / Item Name
            </label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="e.g. Luxury Magnetic Gift Boxes, Visiting Cards"
              className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/25 focus:border-brand-gold-highlight text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
              Estimated Quantity
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 50 units, 250 sets, 1 custom unit"
              className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/25 focus:border-brand-gold-highlight text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 4: Deadline & Design File Upload */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
              Target Delivery Date / Deadline
            </label>
            <input
              type="text"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              placeholder="e.g. Next week, Oct 15, Flexible"
              className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/25 focus:border-brand-gold-highlight text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
              Upload Design / Reference (Optional)
            </label>
            <label className="flex items-center justify-between px-4 py-3 bg-brand-surface border border-dashed border-brand-gold/30 hover:border-brand-gold-highlight cursor-pointer transition-colors text-xs text-brand-gray">
              <span className="truncate">
                {formData.fileName || 'Attach PDF, AI, PSD, or Image'}
              </span>
              <Upload className="w-4 h-4 text-brand-gold-highlight shrink-0 ml-2" />
              <input
                type="file"
                className="hidden"
                accept=".pdf,.ai,.psd,.eps,.jpg,.png,.jpeg"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        </div>

        {/* Description / Custom Requirements */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
            Project Requirements & Finishes
          </label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your dimensions, paper preferences, foil colors (gold, silver, holographic), debossing, custom linings, or special packaging inserts..."
            className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/25 focus:border-brand-gold-highlight text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors"
          ></textarea>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            type="submit"
            variant="gold"
            size="lg"
            showArrow
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? 'Processing Quote...' : 'SUBMIT REQUEST'}
          </Button>

          <p className="text-xs text-brand-gray text-center sm:text-right">
            ⚡ Quick turnaround • Direct response
          </p>
        </div>
      </div>
    </form>
  );
}
