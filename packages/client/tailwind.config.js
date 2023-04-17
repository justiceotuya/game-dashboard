/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "color-white": "#FFFFFF",
      "color-primary-1": "#3685D4",
      "color-primary-2": "#2952CC",
      "color-secondary-1": "#696F8C",
      "color-secondary-2": "#474D66",
      "color-secondary-3": "#D8DAE5",
      "color-secondary-4": "#E6E8F0",
      "color-secondary-5": "#F9FAFC",
      "color-accent-1": "#101840",
      "color-accent-2": "rgba(16, 24, 64, 0.8)",
      "color-yellow-1": "#66460D",
      "color-yellow-2": "#FFEFD2",
      "color-yellow-3": "#FFEFD2",
      "color-cyan-1": "#D3F5F7",
      "color-cyan-2": "#3685D4",
      "color-navy-1": "#0F5156",
      "color-navy-2": "#D6E0FF",
      "color-error": "#D14343"
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
