/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      "colors": {
        primary: "#fd3d57",
        "sinematv": {
          50: "#E2F1FD",
          100: "#C6E4FB",
          200: "#87C7F7",
          300: "#4EACF3",
          400: "#108EEF",
          500: "#0C6CB6",
          600: "#095590",
          700: "#07426E",
          800: "#052B48",
          900: "#031726",
          950: "#010B13"
        },
        "dark-black": {
          50: "#E8E8E8",
          100: "#D4D4D4",
          200: "#A6A6A6",
          300: "#7A7A7A",
          400: "#4D4D4D",
          500: "#212121",
          600: "#1A1A1A",
          700: "#141414",
          800: "#0D0D0D",
          900: "#080808",
          950: "#030303"
        }
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
