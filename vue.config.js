const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  outputDir: 'dist',
  publicPath: './',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/manifest.json', to: '' },
          { from: 'public/background.js', to: '' },
          { from: 'public/favicon', to: 'favicon' }
        ]
      })
    ]
  }
};
