// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/portfolio": { page: "/portfolio" },
      "/passions": { page: "/passions" },
      "/resume": { page: "/resume" },
      "/contact": { page: "/contact" },
      "/blog": { page: "/blog" },
      "/portfolio/section-31": { page: "/portfolio/section-31" },
      "/portfolio/rogue-squadron": { page: "/portfolio/rogue-squadron" },
      "/portfolio/defense-innovation-unit": { page: "portfolio/defense-innovation-unit" },
      "/portfolio/streetcode-academy": { page: "/portfolio/streetcode-academy" },
      "/portfolio/darpa": { page: "/portfolio/darpa" },
    }
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '/choochiutrainz.github.io/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }/*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */
}