import React, { useState } from 'react';
import { MessageCircle, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import GoldDivider from '../components/GoldDivider';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-brand-black text-brand-cream">
      {/* Header */}
      <section className="py-16 md:py-20 border-b border-brand-surface bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="CONNECT WITH US"
            title="LET'S CREATE SOMETHING."
            italicWord="CREATE"
            subtitle="Have questions about paper stocks, custom fabrication, or starting an order? Reach out directly."
            align="center"
          />
        </div>
      </section>

      <GoldDivider variant="line" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-ultra text-brand-gold-champagne block mb-2">
                DIRECT CONTACT
              </span>
              <h2 className="text-3xl font-serif font-normal text-brand-cream mb-4">
                We're always ready to talk print.
              </h2>
              <p className="text-sm text-brand-cream/70 leading-relaxed">
                Whether you prefer a swift WhatsApp exchange, an email review of design vectors, or an in-depth consultation.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20InkSpire%20Media,%20I'd%20like%20to%20inquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-brand-charcoal border border-brand-gold/25 hover:border-brand-gold-highlight flex items-center justify-between group transition-all duration-300 shadow-subtle hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-surface border border-brand-gold/30 text-brand-gold-highlight flex items-center justify-center shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-gray block">
                      WhatsApp Chat
                    </span>
                    <span className="text-sm font-semibold text-brand-cream group-hover:text-brand-gold-highlight transition-colors">
                      {siteConfig.whatsappDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-highlight">
                  Chat Now →
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="p-5 bg-brand-charcoal border border-brand-gold/25 hover:border-brand-gold-highlight flex items-center justify-between group transition-all duration-300 shadow-subtle hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-surface border border-brand-gold/30 text-brand-gold-highlight flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-gray block">
                      Email Inquiries
                    </span>
                    <span className="text-sm font-semibold text-brand-cream group-hover:text-brand-gold-highlight transition-colors">
                      {siteConfig.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-highlight">
                  Send Email →
                </span>
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-brand-charcoal border border-brand-gold/25 hover:border-brand-gold-highlight flex items-center justify-between group transition-all duration-300 shadow-subtle hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-surface border border-brand-gold/30 text-brand-gold-highlight flex items-center justify-center shadow-sm">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-gray block">
                      Official Instagram
                    </span>
                    <span className="text-sm font-semibold text-brand-cream group-hover:text-brand-gold-highlight transition-colors">
                      {siteConfig.instagramHandle}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-highlight">
                  Follow →
                </span>
              </a>
            </div>

            {/* Operating Hours */}
            <div className="p-6 bg-brand-charcoal border border-brand-gold/20 shadow-subtle">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-brand-gold-champagne uppercase tracking-widest">
                <Clock className="w-4 h-4 text-brand-gold" /> Working Hours
              </div>
              <p className="text-sm text-brand-cream font-medium">{siteConfig.hours}</p>
              <p className="text-xs text-brand-gray mt-1">Sundays by appointment only.</p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-brand-charcoal text-brand-cream p-10 sm:p-14 border border-brand-gold/40 shadow-dark-luxury text-center animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-brand-gold-highlight mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-brand-cream mb-2">
                  Message Dispatched to InkSpire Media.
                </h3>
                <p className="text-sm text-brand-cream/70 leading-relaxed mb-6">
                  Thank you, <span className="text-brand-gold-highlight font-medium">{formData.name}</span>. We've received your note and will get back to you shortly.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  variant="gold"
                  size="md"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-brand-charcoal border border-brand-gold/30 p-8 sm:p-10 shadow-dark-luxury">
                <h3 className="text-2xl font-serif text-brand-cream font-normal mb-6 pb-4 border-b border-brand-surface">
                  Send a Direct Message
                </h3>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Eleanor Vance"
                        className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/25 focus:border-brand-gold-highlight text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="eleanor@example.com"
                        className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/25 focus:border-brand-gold-highlight text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7477 228445"
                        className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/25 focus:border-brand-gold-highlight text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Bespoke Foil Sampling"
                        className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/25 focus:border-brand-gold-highlight text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream/80 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your upcoming project, questions regarding materials, or timeline requirements..."
                      className="w-full px-4 py-3 bg-brand-surface border border-brand-gold/25 focus:border-brand-gold-highlight text-brand-cream placeholder-brand-gray text-sm rounded-none focus:outline-none transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      showArrow
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Transmitting Message...' : 'Send Message'}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
