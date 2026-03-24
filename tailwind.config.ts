import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  "#f0f7f1",
          100: "#d8edd9",
          200: "#b3dab6",
          300: "#7ebf84",
          400: "#4fa158",
          500: "#2e8037",
          600: "#1f6628",
          700: "#1B4332",
          800: "#163628",
          900: "#0d2019",
        },
        amber: {
          50:  "#fdf8ed",
          100: "#f9eecb",
          200: "#f3d98a",
          300: "#ecc04e",
          400: "#D4A843",
          500: "#c48f1f",
          600: "#a47018",
          700: "#845416",
          800: "#6b4118",
          900: "#593518",
        },
        cream: {
          50:  "#FFFBF2",
          100: "#FFF7E6",
          200: "#FFF0CC",
          300: "#FFE4A3",
        },
        earth: {
          800: "#2A1810",
          900: "#1A0F08",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
