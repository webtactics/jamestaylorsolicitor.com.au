module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("isChildActive", function (entry, currentPageUrl, activePages) {
      if (entry.url === currentPageUrl) {
        activePages.push(entry.url);
      }
      for (let child of entry.children) {
        eleventyConfig.addFilter("isChildActive", child, currentPageUrl, activePages);
      }
      return activePages.includes(entry.url);
    });
  };
  