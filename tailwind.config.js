module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./layouts/**/*.html"],
  theme: {
    extend: {
      opacity: {
        "10": "0.1",
        "20": "0.2",
        "35": "0.35",
        "45": "0.45",
      },
    },
  },
  variants: {},
  plugins: [],
};
