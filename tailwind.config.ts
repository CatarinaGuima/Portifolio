import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // opcional, dependendo da estrutura
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8f00ff",
        secondary: "#a6d3ff",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        logo: ["'Monoton'", "cursive"], 
      },
    },
  },
  plugins: [],
};

export default config;
