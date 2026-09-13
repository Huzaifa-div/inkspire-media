import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { siteConfig } from '../data/siteConfig';
import { services } from '../data/services';
import Button from './Button';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-cream border-t border-brand-charcoal pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-32 bg-brand-gold/6 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Callout Banner with Polished Metallic Gold Rim */}
        <div className="bg-brand-charcoal/90 border border-brand-gold/30 hover:border-brand-gold-highlight p-8 sm:p-12 mb-16 rounded-none flex flex-col md:flex-row items-center justify-between gap-8 shadow-dark-luxury transition-all duration-400">
          <div className="text-center md:text-left max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-ultra text-brand-gold-champagne mb-2 inline-block">
              Start Your Project
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-brand-cream leading-tight">
              Have a bold idea? <span className="italic font-normal gold-metallic-text font-serif">Let’s print it.</span>
            </h3>
            <p className="text-sm text-brand-cream/70 mt-2">
              From bespoke corporate stationery to tactile packaging and statement-making neon signs.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              to="/quote"
              variant="gold"
              size="lg"
              showArrow
            >
              Get a Quote
            </Button>
            <Button
              to="/contact"
              variant="outlineLight"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-brand-surface">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group focus:outline-none">
              <Logo className="w-11 h-11" showText={true} theme="dark" />
            </Link>

            <p className="text-sm text-brand-cream/70 leading-relaxed max-w-sm">
              Cool, quirky & creative prints crafted to turn your ideas into something people remember. Bespoke corporate stationery, luxury packaging, and creative merchandising.
            </p>

            {/* Social Icons with Metallic Gold Hover Sheen */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-brand-surface border border-brand-gold/25 hover:border-brand-gold-highlight text-brand-cream hover:text-brand-gold-highlight flex items-center justify-center transition-all duration-300 group shadow-subtle"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20InkSpire%20Media,%20I%20found%20you%20through%20your%20website%20and%20would%20like%20to%20get%20a%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none bg-brand-surface border border-brand-gold/25 hover:border-brand-gold-highlight text-brand-cream hover:text-brand-gold-highlight flex items-center justify-center transition-all duration-300 group shadow-subtle"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 rounded-none bg-brand-surface border border-brand-gold/25 hover:border-brand-gold-highlight text-brand-cream hover:text-brand-gold-highlight flex items-center justify-center transition-all duration-300 group shadow-subtle"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-ultra text-brand-gold-champagne mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-brand-cream/70 hover:text-brand-gold-highlight transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/0 group-hover:bg-brand-gold-highlight mr-2 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/quote"
                  className="text-sm text-brand-gold hover:text-brand-gold-highlight transition-colors duration-200 inline-flex items-center font-medium"
                >
                  Request a Quote →
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-ultra text-brand-gold-champagne mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-sm text-brand-cream/70 hover:text-brand-gold-highlight transition-colors duration-200 block truncate"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-ultra text-brand-gold-champagne mb-5">
              Direct Inquiries
            </h4>
            <div className="space-y-3 text-sm text-brand-cream/70">
              <p className="flex items-start gap-2.5">
                <InstagramIcon className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold-highlight hover:underline transition-colors"
                >
                  {siteConfig.instagramHandle}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-brand-gold-highlight hover:underline transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <span>WhatsApp: {siteConfig.whatsappDisplay}</span>
              </p>
              <div className="pt-2 text-xs text-brand-cream/50 border-t border-white/5">
                <p>{siteConfig.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream/60">
          <p>© {new Date().getFullYear()} InkSpire Media. All rights reserved.</p>
          <p className="font-serif italic gold-foil-subtle">
            "Cool, quirky & creative prints & services."
          </p>
        </div>
      </div>
    </footer>
  );
}
