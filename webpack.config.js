var path = require('path'),
    webpack = require('webpack'),
    extractTextPlugin = require('extract-text-webpack-plugin');

var cssExtractTextPlugin = new extractTextPlugin('dist/styles.css');

const config = {
  entry: {
    "script": "./scripts/index.jsx",
    "style": "./styles/index.less",
  },
  output: {
    path: __dirname,
    filename: "dist/[name].js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        include: path.join(__dirname, 'scripts')
      },
      {
        test: /\.css?$/,
        loader: cssExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.less?$/,
        loader: cssExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
      },
    ]
  },
  plugins: [
    cssExtractTextPlugin,
  ],
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 8000,
  },
}

module.exports = config;
