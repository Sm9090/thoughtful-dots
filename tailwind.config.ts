import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Soft Sage Greens (muted, calming)
        sage: {
          50: "#f8faf7",
          100: "#e8efe5",
          200: "#d1dfcc",
          300: "#afc7a7",
          400: "#88a97d",
          500: "#6b8f5e",
          600: "#547349",
          700: "#445c3b",
          800: "#394b32",
          900: "#303f2b",
          950: "#172115",
        },
        // Warm Sand & Beige tones
        sand: {
          50: "#fdfcfa",
          100: "#f9f6f0",
          200: "#f3ede1",
          300: "#e9ddc9",
          400: "#dcc8a8",
          500: "#cdb28a",
          600: "#bc9a6c",
          700: "#9d7d55",
          800: "#816749",
          900: "#6a553d",
          950: "#382c1e",
        },
        // Terracotta & Clay accents
        clay: {
          50: "#faf7f5",
          100: "#f5ede8",
          200: "#edddd3",
          300: "#e0c5b4",
          400: "#cfa78e",
          500: "#c08d70",
          600: "#b07659",
          700: "#936049",
          800: "#79503f",
          900: "#644436",
          950: "#35221a",
        },
        // Warm Stone neutrals
        stone: {
          50: "#faf9f7",
          100: "#f0eeea",
          200: "#e0dcd4",
          300: "#ccc5b8",
          400: "#b5ab99",
          500: "#a39682",
          600: "#96866f",
          700: "#7d6f5d",
          800: "#675c4e",
          900: "#554d42",
          950: "#2d2822",
        },
        // Soft Blush / Dusty Rose (optional warmth)
        blush: {
          50: "#fdf8f8",
          100: "#fcf0f0",
          200: "#fae4e4",
          300: "#f5cdcd",
          400: "#ecaaaa",
          500: "#df8585",
          600: "#cc6363",
          700: "#ab4d4d",
          800: "#8e4242",
          900: "#773c3c",
          950: "#401c1c",
        },
        // Cream backgrounds (very soft, warm white)
        cream: {
          50: "#fffefb",
          100: "#fefcf6",
          200: "#fdf9ed",
          300: "#faf3de",
          400: "#f5e9c8",
          500: "#eddcab",
          600: "#e2c986",
          700: "#caa85c",
          800: "#a98944",
          900: "#8b713a",
          950: "#4a3a1c",
        },
        // Muted mist for subtle sections
        mist: {
          50: "#f9fafa",
          100: "#f0f2f2",
          200: "#e2e6e6",
          300: "#cbd2d2",
          400: "#a8b4b4",
          500: "#8a9999",
          600: "#728080",
          700: "#5e6969",
          800: "#505858",
          900: "#454b4b",
          950: "#282d2d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 10px 20px -2px rgba(0, 0, 0, 0.03)",
        "soft-lg": "0 10px 40px -10px rgba(0, 0, 0, 0.08), 0 4px 25px -5px rgba(0, 0, 0, 0.03)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
        "glow": "0 0 40px -10px rgba(107, 143, 94, 0.3)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 10s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 30s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "breathe": "breathe 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-soft": "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "smooth-in": "cubic-bezier(0.4, 0, 1, 1)",
        "smooth-out": "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;