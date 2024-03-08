module.exports = {
  plugins: [
    require("postcss-variable-compress"),
    require("postcss-lightningcss")({
      browsers: ">= 0.75%"
    }),
    require("postcss-drop-empty-css-vars")
  ]
};
