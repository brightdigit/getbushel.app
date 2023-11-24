var md = require('markdown-it')();
var markdownItAttrs = require('markdown-it-imsize');
var markdownItImgSize = require('markdown-it-imsize');
const svgSprite = require("eleventy-plugin-svg-sprite");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(svgSprite, {
    path: "./components/Assets/svg"
  });

  eleventyConfig.addCollection("support", function(collectionApi) {
    
    return collectionApi.getFilteredByGlob("site/support/**/index.md")
    .map( (post) =>
      {
        post.data.tags = post.data.tags ?? []
        const tag = post.inputPath.split('/')[3]   
        post.data.tags.push(tag)     
        if (tag) {
          post.data.children = collectionApi.getFilteredByGlob(`site/support/${tag}/*.md`)
          .filter(
            x => x.fileSlug !== tag
          )
          .sort( (lhs, rhs) => {
            return (lhs.data.order ?? 0) - (rhs.data.order ?? 0)
          }
          )
        }
        return post
      }
    )
    .sort( (lhs, rhs) => {
      return (lhs.data.order ?? 0) - (rhs.data.order ?? 0)
    }
    )
  });

  eleventyConfig.addFilter( 'unique', (obj, propertyName, expect) => {
    const tagMap = obj.reduce( (values, current) => {
      const tags = current.data.tags.filter((tag) => tag !== expect)
      tags.forEach(tag => {
        values[tag] = {}
      });
      return values
    }, {});
    return Object.keys(tagMap)
  });


  eleventyConfig.addFilter( 'index', (collections, tag, expect) => {
    collections[tag].filter( (post) =>
       post.data.tags.indexOf(expect) < 0
    ).shift()
  });
  
  eleventyConfig.setLibrary(
      'md', 
      md
        .use(markdownItImgSize)
        .use(markdownItAttrs)
  );

  eleventyConfig.addFilter("hex", function(value) {    
    return parseInt(value, 10).toString(16).padStart(8,'0')        
  });


};