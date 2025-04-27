/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fantasy-dark': {
          DEFAULT: '#1a1a2e',
          light: '#2a2a3e',
        },
        'fantasy-primary': {
          DEFAULT: '#4a90e2',
          dark: '#357abd',
        },
        'fantasy-accent': {
          DEFAULT: '#ffd700',
          dark: '#ffc107',
        },
        'fantasy-light': {
          DEFAULT: '#f8f9fa',
          dark: '#e9ecef',
        },
      },
      fontFamily: {
        fantasy: ['MedievalSharp', 'cursive'],
      },
    },
  },
  plugins: [],
}; 