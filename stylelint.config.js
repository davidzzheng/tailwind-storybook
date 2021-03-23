module.exports = {
  extends: ["stylelint-config-recommended"],
  plugins: ["stylelint-prettier"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "no-descending-specificity": null,
  },
};
