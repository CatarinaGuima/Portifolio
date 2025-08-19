/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from 'tailwind-scrollbar';

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#8f00ff',
        },
      },
    },
  },
  plugins: [
    scrollbarPlugin({
      nocompatible: true,
      preferredStrategy: 'pseudoelements'
    }),
  ],
};

export default config;