import React from 'react';
import { Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { instagramHighlights } from '../data/portfolio';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from './SectionHeading';
import Button from './Button';

export default function InstagramSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream border-t border-brand-cream-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="INSTAGRAM FEED"
            title="FOLLOW THE INKSPIRE JOURNEY."
            italicWord="INKSPIRE"
            subtitle="More prints. More ideas. More inspiration from our daily creative print work."
            align="left"
            className="mb-0"
          />

          <div className="shrink-0">
            <Button
              href={siteConfig.instagramUrl}
              variant="outline"
              size="md"
              externalArrow
              icon={InstagramIcon}
            >
              Follow {siteConfig.instagramHandle}
            </Button>
          </div>
        </div>

        {/* 6-Grid Instagram Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramHighlights.map((post) => (
            <a
              key={post.id}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-brand-charcoal block shadow-subtle hover:shadow-luxury border border-brand-cream-dark hover:border-brand-gold"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-brand-cream backdrop-blur-[2px]">
                <div className="flex items-center justify-between text-brand-gold text-[10px] font-mono uppercase">
                  <span>{post.category}</span>
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>

                <p className="text-[11px] leading-snug line-clamp-3 font-sans text-brand-cream/90">
                  {post.title}
                </p>

                <div className="flex items-center gap-3 text-[10px] text-brand-gold font-mono pt-1 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-brand-gold/30" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" /> {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
