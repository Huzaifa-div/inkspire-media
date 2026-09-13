import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] pt-36 pb-24 flex items-center justify-center bg-brand-cream text-center px-4">
      <div className="max-w-lg mx-auto space-y-6">
        <span className="text-xs font-mono uppercase tracking-ultra text-brand-gold-dark block">
          404 ERROR
        </span>
        <h1 className="text-5xl sm:text-6xl font-serif font-normal text-brand-black">
          Page Not Found.
        </h1>
        <p className="text-base text-brand-gray leading-relaxed">
          The page you are looking for does not exist or has been relocated within our website directory.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Button to="/" variant="primary" size="md" showArrow>
            Return to Homepage
          </Button>
          <Button to="/services" variant="outline" size="md">
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
}
