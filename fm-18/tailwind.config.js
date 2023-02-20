/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-desktop-top": "url('../images/bg-footer-top-desktop.svg')",
        "footer-mobile-top": "url('../images/bg-footer-top-mobile.svg')",
        "bg-section-bottom-desktop-1": "url('/img/footer-texture.png')",
        "bg-section-bottom-desktop-2": "url('/img/footer-texture.png')",
        "bg-section-bottom-mobile-1": "url('/img/footer-texture.png')",
        "bg-section-bottom-mobile-2": "url('/img/footer-texture.png')",
        "bg-section-top-desktop-1": "url('/img/footer-texture.png')",
        "bg-section-top-desktop-2": "url('/img/footer-texture.png')",
        "bg-section-top-mobile-1": "url('/img/footer-texture.png')",
        "bg-section-top-mobile-2": "url('/img/footer-texture.png')",
      },
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
