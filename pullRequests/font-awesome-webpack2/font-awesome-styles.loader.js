var styles = [
  'mixins',

  'bordered-pulled',
  'core',
  'fixed-width',
  'icons',
  'larger',
  'list',
  'path',
  'rotated-flipped',
  'animated',
  'stacked',
];

module.exports = function (content) {
  // Webpack 5 removed this.exec(), so we need to use require instead
  var config;
  try {
    // Clear the require cache to ensure fresh config
    delete require.cache[this.resourcePath];
    config = require(this.resourcePath);
  } catch (e) {
    // Fallback: include all styles if config can't be loaded
    config = {
      styles: styles.reduce(function(acc, style) {
        acc[style] = true;
        return acc;
      }, {})
    };
  }

  var start =
    '@import          "~font-awesome/less/variables.less";\n' +
    '@fa-font-path: "~font-awesome/fonts/";\n' +
    '@import          "./font-awesome.config.less";\n';
  var source =
    start +
    styles
      .filter(function (style) {
        return config.styles[style];
      })
      .map(function (style) {
        return '@import "~font-awesome/less/' + style + '.less";';
      })
      .join('\n');
  return source;
};
