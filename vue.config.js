const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Kirkron',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    loaderOptions: {
        scss: {
            additionalData: '@import "~@/static/styles/scss/_variables.scss";@import "~@/static/styles/scss/_mixins.scss";'
        },
    },
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
