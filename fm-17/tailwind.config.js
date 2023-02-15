/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "Very-Dark-Blue": "#070439",
        "Desaturated-Blue": "#585989",
        "Bright-Blue": "#3065f8",
        "Moderate-Cyan": "#3c9f8f",
        "Light-Grayish-Blue": "#f6f6fe",
        "Light-Gray": "#bfbfbf",
      },
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"],
        opensans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
