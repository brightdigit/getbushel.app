module.exports = function(eleventyConfig) {
  // Universal filters add to:
  // * Liquid
  // * Nunjucks
  // * Handlebars
  // * JavaScript

  eleventyConfig.addFilter("hex", function(value) {    
    return parseInt(value, 10).toString(16).padStart(8,'0')        
  });
};