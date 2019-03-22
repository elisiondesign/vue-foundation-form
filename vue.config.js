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
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `
          @import "~@/assets/style/_variables.scss";
          @import "~@/assets/style/foundation-sites/settings";
          @import "~@/assets/style/foundation-sites/scss/foundation";
        `,
      },
    },
  },
};
