const postcssNesting = require('postcss-nesting');
const postcssPresetEnv = require('postcss-preset-env')({
  stage: 1,
});
const tailwindcss = require('tailwindcss', {});
const autoprefixer = require('autoprefixer', {});

module.exports = {
  plugins: [postcssNesting, postcssPresetEnv, tailwindcss, autoprefixer],
};
