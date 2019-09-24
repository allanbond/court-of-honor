module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("./site/assets");
};
