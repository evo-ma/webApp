/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // EVO Brand
        orange: {
          DEFAULT: '#f7931e',
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f7931e',
          600: '#ea7b0a',
          700: '#c2620b',
          800: '#9a4f11',
          900: '#7c4010',
        },
        navy: {
          DEFAULT: '#1e3a6e',
          50:  '#eff4ff',
          100: '#dbe7ff',
          200: '#bfd3ff',
          300: '#93b5fd',
          400: '#6089f8',
          500: '#3b5ef1',
          600: '#2742e6',
          700: '#1e32cd',
          800: '#1e3a6e',
          900: '#0d1b3e',
          950: '#060d1f',
        },
        dark: {
          DEFAULT: '#030712',
          card:    '#0d1424',
          border:  'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        display: ['"DM Sans"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'orange-glow': 'radial-gradient(ellipse at center, rgba(247,147,30,0.15) 0%, transparent 70%)',
        'navy-glow':   'radial-gradient(ellipse at center, rgba(30,58,110,0.25) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow':   'pulse 3s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'fade-up':      'fadeUp 0.6s ease forwards',
        'counter':      'counter 2s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'orange-glow': '0 0 40px rgba(247,147,30,0.3)',
        'orange-sm':   '0 0 20px rgba(247,147,30,0.2)',
        'card':        '0 1px 1px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)',
        'card-hover':  '0 2px 2px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(247,147,30,0.15)',
      },
    },
  },
  plugins: [],
}
