const path = require('path');

module.exports = {
  publicPath: '/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '~': path.resolve(__dirname, 'src/'),
        '@': path.resolve('src/'),
      },
    },
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        data: `
          @import "~@/assets/style/_variables.scss";
          @import "~@/assets/style/foundation-sites/settings";
          @import "~@/assets/style/foundation-sites/scss/foundation";
          @import url("https://fonts.googleapis.com/css?family=PT+Sans:400,700");
          @import url("https://fonts.googleapis.com/css?family=Ubuntu:500");
        `,
      },
    },
  },
};
