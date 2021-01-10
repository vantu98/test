module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "primary-serif": ["Playfair Display"],
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
    },
    container: {
      center: true,
      padding: {
        sm: "16px",
        md: "36px",
        lg: "48px",
        xl: "56px",
      },
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1152px",
    //   "2xl": "1536px",
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
