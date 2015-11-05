var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
        { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
      new BrowserSyncPlugin(
        // browserSync options
        // http://www.browsersync.io/docs/options/
        {
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['dist'] }
        },
        // plugin options
        {
          // browserSync instance name
          // http://www.browsersync.io/docs/api/#api-name
          name: 'my-awesome-bullshit-instance',
          // browserSync instance init callback
          // http://www.browsersync.io/docs/api/#api-cb
          callback: function () {
            console.log('browserSync started!');
          },
          // determines if browserSync should take care
          // of reload (defaults to true). switching it off
          // might be useful if you combine this plugin
          // with webpack-dev-server to reach
          // Hot Loader/Hot Module Replacement tricks
          reload: true
        }
      )
  ]
};
