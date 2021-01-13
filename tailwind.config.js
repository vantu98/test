module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "primary-serif": ["Playfair Display"],
        "primary-sans": ["Nunito"],
      },
      minHeight: {
        "40px": "40px",
        "120px": "120px",
        "135px": "135px",
        "143px": "143px",
      },
      backgroundColor: {
        "banner-red": "#F5E3E7",
        "section-red": "#FAF2F4",
        "red-section": "#FAF2F4",
        "gray-item": "#FAFAFA",
      },
      textColor: {
        "hover-purple": "#5858FF",
        "gray-sub": "#555555",
      },
      fontSize: {
        "11px": "11px",
      },
      lineHeight: {
        "11px": "11px",
        "14px": "14px",
      },
      letterSpacing: {
        "1px": "1px",
      },
      height: {
        "19px": "19px",
      },
      borderRadius: {
        "3px": "3px",
      },
      zIndex: {
        "-10": "-10",
      },
      maxWidth: {
        "4/5": "80%",
      },
      screens: {
        "3xl": "1441px",
      },
    },
    container: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
