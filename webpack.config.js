var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var extractHTML = new ExtractTextPlugin('index.html');
var extractLess = new ExtractTextPlugin('[name].css');

var config = {
  devtool: 'source-map',

  devServer: {
    inline: true,
    port: 8000,
    historyApiFallback: true,
  },

  entry: {
    'script': './scripts/index.jsx',
    'styles': './styles/index.less',
    'index': './index.html',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: "[name].map.js",
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: extractHTML.extract({
          use: ['html-loader'],
        }),
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'less-loader',
            loader: 'css-loader',
          }],
        }),
      },
      {
        test: /\.css$/,
        use: extractLess.extract({
          use: [{
            loader: 'less-loader',
            loader: 'css-loader',
          }],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)\//,
        use: ['babel-loader'],
      },
      {
        test: /\.json$/,
        use: ['json-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg.*)$/,
        use: [{
          loader: 'file-loader',
          query: {
            useRelativePath: false,
          },
        }, 'img-loader'],
      },
      {
        test: /\.(ttf.*|eot.*|woff.*|ogg|mp3)$/,
        use: [{
          loader: 'file-loader',
          query: {
            useRelativePath: false,
          },
        }],
      },
      {
        test: /\.po$/,
        use: [
          'json-loader',
          {
            loader: 'po-loader',
            query: {format: 'jed1.x'},
          },
        ],
      },
    ],
  },

  plugins: [
    extractHTML,
    extractLess,
    //new webpack.DefinePlugin({
    //  'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV)},
    //  Environment: JSON.stringify(require('config')),
    //}),
  ],

  resolve: {
    modules: [__dirname, path.join(__dirname, 'node_modules'), path.join(__dirname, 'scripts')],
    extensions: ['.js', '.jsx', '.json'],
  },
};

module.exports = config;
