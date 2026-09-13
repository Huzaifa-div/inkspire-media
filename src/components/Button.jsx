import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  externalArrow = false,
  className = '',
  type = 'button',
  disabled = false,
  icon: Icon = null,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-none focus:outline-none focus:ring-1 focus:ring-brand-gold-highlight select-none group relative overflow-hidden gold-shimmer-sweep";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 uppercase tracking-wider",
    md: "text-xs md:text-sm px-6 py-3.5 uppercase tracking-widest",
    lg: "text-sm md:text-base px-8 py-4 uppercase tracking-widest font-semibold",
  };

  const variantStyles = {
    // Primary: Dark luxury background with thin metallic gold border, brightening on hover with subtle gold glow
    primary: "bg-brand-charcoal text-brand-cream border border-brand-gold/40 hover:border-brand-gold-highlight hover:text-brand-gold-highlight hover:shadow-gold-glow hover:bg-brand-surface shadow-subtle",
    // Filled Metallic Gold: Real multi-stop chrome gold gradient with reflective highlight
    gold: "btn-metallic-gold font-semibold",
    // Secondary: Deep surface with subtle gold rim
    secondary: "bg-brand-surface text-brand-cream hover:bg-brand-surface-light hover:text-brand-gold-highlight border border-brand-gold/30 hover:border-brand-gold shadow-subtle",
    // Outline: Dark translucent backdrop with crisp metallic gold edge
    outline: "btn-metallic-outline",
    outlineLight: "btn-metallic-outline",
    dark: "bg-brand-black text-brand-cream hover:text-brand-gold-highlight border border-brand-gold/30 hover:border-brand-gold-highlight hover:shadow-gold-glow",
    ghost: "bg-transparent text-brand-cream/80 hover:text-brand-gold-highlight p-0 tracking-widest hover:underline underline-offset-8 transition-colors",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />}
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-brand-gold group-hover:text-brand-gold-highlight relative z-10" />
      )}
      {externalArrow && (
        <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-brand-gold group-hover:text-brand-gold-highlight relative z-10" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
