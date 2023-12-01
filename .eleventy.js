const allPlugins = require("./_11ty/allPlugins");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(allPlugins);

  return {
    markdownTemplateEngine: "njk",
  };
};
