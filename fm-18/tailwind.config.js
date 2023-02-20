/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "Color-pink": "#ff52bf",
        "Light-Pink": "#ff8fd8",
        "Light-Red": "#ff4242",
        "Very-Dark-Cyan": "#00252e",
        "Light-Grayish-Blue": "#f6f6fe",
        "Very-Pale-Blue": "#f5faff",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        opensans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
