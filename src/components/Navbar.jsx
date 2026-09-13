import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Button from './Button';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-black/90 backdrop-blur-md border-b border-brand-gold/25 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-brand-black/60 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="InkSpire Media Home"
            >
              <Logo className="w-10 h-10" showText={true} theme="dark" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
              {siteConfig.navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-1 text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                      active
                        ? 'text-brand-cream font-semibold'
                        : 'text-brand-cream/70 hover:text-brand-gold-champagne'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold-highlight via-brand-gold to-transparent shadow-[0_0_8px_rgba(252,246,186,0.8)] animate-fade-in" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                to="/quote"
                variant="primary"
                size="sm"
                showArrow
                className="text-[11px]"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-brand-cream hover:text-brand-gold-highlight focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-gold-highlight" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-brand-black/80 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-sm bg-brand-charcoal border-l border-brand-gold/30 p-6 sm:p-8 flex flex-col justify-between shadow-dark-luxury transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-brand-gold/20">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <Logo className="w-10 h-10" showText={true} theme="dark" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-brand-cream hover:text-brand-gold-highlight transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="mt-8 space-y-3">
              {siteConfig.navLinks.map((link, idx) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between py-3 px-3 text-base font-serif transition-all border-b border-brand-surface ${
                      active
                        ? 'text-brand-gold-highlight font-bold bg-brand-surface/60 border-brand-gold/40'
                        : 'text-brand-cream hover:text-brand-gold hover:bg-brand-surface/30'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-sans text-brand-gold/60 font-normal">0{idx + 1}</span>
                      {link.name}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${active ? 'text-brand-gold-highlight translate-x-1' : 'text-brand-gray'}`} />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Drawer Content */}
          <div className="pt-6 border-t border-brand-gold/20 space-y-4">
            <Button
              to="/quote"
              variant="gold"
              size="lg"
              showArrow
              className="w-full justify-between"
            >
              Get a Free Quote
            </Button>

            <div className="text-xs text-brand-gray text-center pt-2">
              <p className="font-serif italic text-brand-gold/80">Cool, Quirky & Creative Prints</p>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cream font-medium hover:text-brand-gold-highlight underline mt-1 inline-block transition-colors"
              >
                {siteConfig.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
