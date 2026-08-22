/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#7C3AED',
        secondary: '#06B6D4',
        surface: '#FFFFFF',
        background: '#F8FAFC',
        text: '#0F172A',
        muted: '#64748B',
        border: 'rgba(148,163,184,.18)',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};
