import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0a1628", light: "#111d32", mid: "#162341", surface: "#1a2a4a" },
        gold: { DEFAULT: "#c9a84c", light: "#dfc06a", dim: "#a08838" },
        cream: { DEFAULT: "#f5f0e8", dim: "#e8e0d0" },
        txt: { DEFAULT: "#c8c4bc", dim: "#7a7568", light: "#9e998f" },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
