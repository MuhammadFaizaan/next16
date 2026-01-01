/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ff1313",
        },
        dark: {
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.05)",
          300: "#121212",
          400: "#0A0A0A",
          500: "#050505",
        },
        "theme-light": "#F0F2F4",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '4px',
      },
      screens: {
        'mob': { 'min': '0px', 'max': '767px' },
        // 'tab': { 'min': '768px', 'max': '991px' },
        '3xl': { 'min': '1800px' },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': 'var(--text-stroke-width, 1px) var(--text-stroke-color, #000)',
          'text-stroke': 'var(--text-stroke-width, 1px) var(--text-stroke-color, #000)',
        },
        '.text-stroke-1': {
          '--text-stroke-width': '1px',
        },
        '.text-stroke-white': {
          '--text-stroke-color': 'white',
        },
      });
    },
  ],
}