import webpack = require('webpack');
//import CleanPlugin = require('clean-webpack-plugin');
import HtmlPlugin = require('html-webpack-plugin');
import Notifier = require('webpack-notifier');
import { resolve } from 'path';


const inPath = resolve(__dirname, 'src');
//const outPath = resolve(__dirname, 'build');

const config: webpack.Configuration = {
  context: inPath,

  entry: ['react-hot-loader/patch', '/'],

  devServer: {
    hot: true,
  },

  output: {
    //path: outPath,
    filename: '[name].js',
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel',
            options: {
              presets: [['es2015', { modules: false }], 'react'],
              plugins: ['react-hot-loader/babel']
            }
          },
          'awesome-typescript?configFileName=src/tsconfig.json'
        ]
      },
      {
        test: /\.css$/,
        use: ['style', 'css']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: 'url'
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        use: 'file'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

    new Notifier({ alwaysNotify: true }),
    new webpack.ProvidePlugin({ React: 'react' }),
    new HtmlPlugin({ template: 'index.html' }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('development')
    //   }
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks({ context }) {
        return context && context.indexOf('node_modules') >= 0;
      },
    })
  ]
};

export default config;
