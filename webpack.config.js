const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const SOURCE = /src/;

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
  },
  devtool: "source-map",
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.json',
      '.svg'
    ]
  },
  module: {
    loaders: [
      { enforce: 'pre', test: /\.js$/, loaders: 'source-map-loader', include: [SOURCE] },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader', include: [SOURCE] },
      { test: /\.js$/, loader: 'babel-loader', include: [SOURCE] },
      { test: /\.jsx$/, loader: 'babel-loader', include: [SOURCE] },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!sass-loader'
        })
      },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader?name=img/img-[hash:6].[ext]', include: [SOURCE] }
    ]
  },
  plugins: [HtmlWebpackPluginConfig,
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })]
};

