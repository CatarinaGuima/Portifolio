import type { Config } from "tailwindcss";
import scrollbarPlugin from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // <- pega tudo dentro de src (inclusive components/ui)
  ],
  theme: {
    extend: {
      colors: {
        electricViolet: "#8f00ff",
        lightSkyBlue: "#a6d3ff",
      },
    },
  },
  plugins: [
    scrollbarPlugin({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
};

export default config;
