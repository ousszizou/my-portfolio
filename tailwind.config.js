module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
  theme: {
    extend: {
      letterSpacing: {
        widerPlus: "0.09375rem",
      },
      fontSize: {
        smallest: "11px",
        "1xl": "1.35rem",
        "2xlPlus": "1.7rem",
      },
      height: {
        104: "26rem",
        112: "28rem"
      }
    },
  },
  variants: {},
  plugins: [],
};
