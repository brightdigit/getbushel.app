const isProduction = process.env.NODE_ENV === `production`;

var md = require('markdown-it')('commonmark');
var markdownItAttrs = require('markdown-it-imsize');
var markdownItImgSize = require('markdown-it-imsize');
const AdmZip = require('adm-zip');
const { glob } = require('glob');
const svgSprite = require("eleventy-plugin-svg-sprite");
const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  const outputDir = isProduction ? "public" : ".tmp"
  eleventyConfig.addPlugin(svgSprite, {
    path: "./components/Assets/svg",
    outputFilepath: "sprites/icons.svg"
  });

  eleventyConfig.on('eleventy.after', async ({ dir, results, runMode, outputMode }) => {
    
    await fs.promises.mkdir(`${outputDir}/media/downloads/zips`, { recursive: true });
    const directories = await glob('./components/Assets/zips/*',{ stat: true, withFileTypes: true });
    console.log(directories)
    const timeSortedFiles = await directories.map(async (path) => {
      console.log(`${path.fullpath()}/*.*`);
       return  glob(`${path.fullpath()}/*.*`);
  })
    
    for await (const file of timeSortedFiles) {
      console.log(file)
      if (file.length < 1) {
        console.log("isEmpty")
        continue;
      }
      let zip = new AdmZip();
      for await (const f of file) {
        zip.addLocalFile(f);
      }
      console.log("Creating zip file for", file[0].split('/')[4])
      zip.writeZip(`${outputDir}/media/downloads/zips/${file[0].split('/')[4]}.zip`);
    }
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

  eleventyConfig.addShortcode("youtube", function(id) {
    return `<iframe class="youtube" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  });


  eleventyConfig.addShortcode("yta", function(id, alt) {
    return `<a class="yta" href="https://www.youtube.com/watch?v=${id}" title="${alt}" target="_blank" rel="noopener noreferrer">
    <svg>
    <use xlink:href="#svg-youtube"></use>
    </svg>
    </a>
    `
  });

  eleventyConfig.addShortcode("picture", function(src, alt) {
   return  `          <picture class="sm:flex w-auto">
    <source
      type="image/webp"
      srcset="${src}.webp"
    />
    <source
      type="image/png"
      srcset="${src}.png"
    />
    <img
      class="w-full"
      src="${src}.png"
      alt="${alt}"
    />
  </picture>`
  });

  return {
    dir : {
      input: "site",
      output: outputDir,
    }
  }
};