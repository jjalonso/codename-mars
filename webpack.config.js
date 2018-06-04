'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        new HtmlWebpackPlugin({
            title: 'codename-mars'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
                // TODO: Port it to new babel env loaders

            },
            {   
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, 
                use: [
                    {
                        loader: 'file-loader',
                        query: {
                            name: '[name].[ext]',
                            outputPath: 'assets/'
                        }            
                    }
                ]    
            }
        ]
    }
};
