import webpack = require('webpack');
import CleanPlugin = require('clean-webpack-plugin');
import HtmlPlugin = require('html-webpack-plugin');
import ExtractTextPlugin = require('extract-text-webpack-plugin');
import Notifier = require('webpack-notifier');

import path = require('path');

const inputPath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'build');

const config: webpack.Configuration = {
  context: inputPath,

  entry: './',

  output: {
    path: outputPath,
    filename: '[name].js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  resolveLoader: {
    moduleExtensions: ['-loader'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel',
            options: {
              presets: [['es2015', { 'modules': false }], 'react']
            }
          },
          'awesome-typescript?configFileName=src/tsconfig.json'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ use: ['css', 'sass'] })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: 'css' })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|wav|mp3|mp4)$/,
        use: 'file'
      }
    ]
  },

  plugins: [
    new CleanPlugin("build"),

    new Notifier({
      alwaysNotify: true
    }),

    new webpack.ProvidePlugin({
      React: 'react'
    }),

    new HtmlPlugin({
      template: './index.html',
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
  ],
};

export default config;
