const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEFEFE",
        pile_orange: "#F7C7A6",
        even_page: "#FBE2D0",
        button_secondary: "#F7C7A6",
        button_primary: "#EB6D18",
        dark_font: "#121212",
        brown_footer: "#382C1E",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
