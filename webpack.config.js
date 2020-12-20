const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    //optimization: {
    //  minimize: true,
    //},
    
    //mode: 'development',
    //devtool: 'source-map',


    entry: {
      app: './src/app.js',
      projects: './src/projects.js'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.css$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
        },
        {
          test: /\.scss$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: false
      }),
      new  MiniCssExtractPlugin ({
        filename: '[name].bundle.css'
      }),
    ]
};