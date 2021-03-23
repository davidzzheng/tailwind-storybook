module.exports = {
  plugins: [
    require("postcss-import"),
    require("@tailwindcss/jit"),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
      autoprefixer: true,
    }),
  ],
};
