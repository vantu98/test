module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "primary-font-sans": ["Source Sans Pro"],
        "primary-serif": ["Playfair Display"],
      },
      zIndex: {
        "-1": "-1",
      },
      transformOrigin: {
        0: "0%",
      },
      minHeight:{
        '120px': '120px',
        '135px': '135px',
        '143px': '143px'
      }
    },
  },
  variants: {
    extend: {},
    borderColor: ["focus-within", "hover"],
  },
  plugins: [],
};
