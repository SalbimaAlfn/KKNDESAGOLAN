/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand — extracted from logoKKN.png: golden accent + forest green base.
        // NOTE: primary (gold) is for FILLS only — never use it as text on light backgrounds.
        primary: '#F5B301',
        'primary-strong': '#D99C00',
        forest: '#2E6B3A',
        'forest-deep': '#1B4A28',
        'forest-light': '#8FC79E',
        // Light theme
        background: '#FAF7F0', // warm paper
        surface: '#FFFFFF',
        text: '#1A1D16', // warm ink
        muted: '#6E7266',
        border: 'rgba(26,29,22,.14)',
        // Dark theme (class toggled)
        night: '#14160F',
        'night-surface': '#1E211A',
        'night-text': '#F2EFE6',
        'night-muted': '#A8AC9E',
        'night-border': 'rgba(242,239,230,.14)',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 12px 32px rgba(26, 29, 22, 0.10)',
        card: '0 1px 2px rgba(26, 29, 22, 0.05)',
        lift: '0 14px 36px rgba(26, 29, 22, 0.12)',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};
