/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, 
      blue: colors.blue, 
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {
      backgroundColor: {
        'blueprimary': '#0D2577',
        'bluemain': '#0D2577',
      },
      color: {
          'blueppal': '#0D2577',
          'bluemain': '#0D2577',
      },
      textColor: {
        'blueppal': '#0D2577',
        'bluemain': '#0D2577',
      },
      textShadow: {
        'shadow-hero': '-1px 1px 11px white',
      },
      margin: {
        'margin-hero': '4rem',
      },
      fillColor: {
        'blueppal': '#0D2577',
        'bluemain': '#0D2577',
      },
      backgroundImage: {
        'hero-icon': "url('/src/images/hero-icon5.svg')",
        'hero-icon-mobile': "url('/src/images/hero-icon7.svg')", // Reemplaza con la imagen que deseas para móviles
      },
      backgroundSize: {
        'contain': 'contain',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
      screens: {
        'mobile': '640px',
        // => @media (min-width: 640px) { ... }
      },
      border: {
        '4': '4px',
      },

    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
