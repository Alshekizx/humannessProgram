import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#83C5BE", // Main primary color
        secondary: "#A8DADC", // Secondary color
        tertiary: "#FFD166", // Tertiary color 1
        tertiary2: "#FF6B6B", // Tertiary color 2
        white: "#F6F8FA", // Light background color
        black: "#6D6875", // Dark color
        accentGreen: "#28a745", // Accent green
        accentRed: "#dc3545", // Accent red
        background: {
          light: "#F6F8FA", // Background light
          DEFAULT: "#ffffff", // Default background
          dark: "#343a40", // Background dark
        },
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"], // Body text font
        heading: ["Playfair Display", "serif"], // Headings font
      },
      fontSize: {
        xs: "0.75rem", // Extra small (12px)
        sm: "0.875rem", // Small (14px)
        base: "1rem", // Base (16px)
        lg: "1.125rem", // Large (18px)
        xl: "1.25rem", // Extra large (20px)
        "2xl": "1.5rem", // Double extra large (24px)
        "3xl": "1.875rem", // Triple extra large (30px)
        "4xl": "2.25rem", // Quadruple extra large (36px)
        "5xl": "3rem", // Quintuple extra large (48px)
        "6xl": "4rem",
      },

      fontWeight: {
        light: "300", // Light weight
        regular: "400", // Regular weight
        bold: "700", // Bold weight
      },
    },
  },
  plugins: [forms, typography, scrollbarHide],
} satisfies Config;