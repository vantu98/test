module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "primary-font-sans": ["Source Sans Pro"],
      },
      zIndex: {
        "-1": "-1",
      },
      transformOrigin: {
        0: "0%",
      },
    },
  },
  variants: {
    extend: {},
    borderColor: ["focus-within", "hover"],
  },
  plugins: [],
};
