'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve('./src/main.js')
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./dist')
  },

  devtool: '#cheap-source-map',

  plugins: [
    new HtmlWebpackPlugin({ title: 'codename-mars' }),
    new CopyWebpackPlugin([{
      from: '**/*/assets/*',
      to: 'assets',
      flatten: true
    }]),
    new MergeJsonWebpackPlugin({
      "output": {
        "groupBy": [
          {
            "pattern": "src/**/pack.json",
            "fileName": "assets/pack.json"
          }
        ]
      },
    })

    // )
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
        // TODO: Port it to new babel env loaders
      }
    ]
  }
};
