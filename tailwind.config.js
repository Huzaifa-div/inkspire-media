/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0D0C0B',
          charcoal: '#161514',
          surface: '#1F1D1B',
          'surface-light': '#2A2724',
          cream: '#F5F2EB',
          'cream-dark': '#E6E0D3',
          'cream-light': '#FAF8F5',
          beige: '#262320',
          // Rich metallic gold chrome palette
          gold: '#C9A961',
          'gold-light': '#DFC486',
          'gold-dark': '#A6873F',
          'gold-deep': '#8A6E2F',
          'gold-champagne': '#EEDCBA',
          'gold-bronze': '#705423',
          'gold-highlight': '#FCF6BA',
          gray: '#8C857B',
          'gray-light': '#D6D0C5',
          'gray-dark': '#383430',
          pink: '#E85D75',
          purple: '#7B42BC',
          neon: '#00F0FF'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.25em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'luxury': '0 12px 36px -8px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(201, 169, 97, 0.2)',
        'gold-glow': '0 0 25px rgba(201, 169, 97, 0.25)',
        'gold-glow-sm': '0 0 12px rgba(201, 169, 97, 0.18)',
        'gold-glow-lg': '0 0 45px rgba(201, 169, 97, 0.35)',
        'gold-rim': '0 0 0 1px rgba(201, 169, 97, 0.45), 0 4px 20px rgba(0, 0, 0, 0.5)',
        'gold-rim-hover': '0 0 0 1px rgba(252, 246, 186, 0.7), 0 8px 30px rgba(201, 169, 97, 0.25)',
        'dark-luxury': '0 20px 50px -10px rgba(0, 0, 0, 0.7)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 24px rgba(201, 169, 97, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
      }
    },
  },
  plugins: [],
}
