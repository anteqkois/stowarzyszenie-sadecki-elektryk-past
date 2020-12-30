const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    //optimization: {
    //  minimize: true,
    //},
    
    //mode: 'development',
    //devtool: 'source-map',


    entry: {
      index: './src/index.js',
      projects: './src/projects.js'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js'
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
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'img',
            name: '[name].[ext]',
            },         
        },
        {
          test: /\.php$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'php',
            name: '[name].[ext]',
            },         
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['index'],
        inject: false,
        minify: false
      }),
      new HtmlWebpackPlugin({
        template: './src/projects.html',
        filename: 'projects.html',
        inject: false,
        minify: false
      }),
      new  MiniCssExtractPlugin ({
        filename: '[name].css'
      }),
      new BrowserSyncPlugin(
        // BrowserSync options
        {
          // browse to http://localhost:3000/ during development
          host: 'localhost',
          port: 3000,
          // proxy the Webpack Dev Server endpoint
          // (which should be serving on http://localhost:3100/)
          // through BrowserSync
          proxy: 'http://localhost:8080/Stowarzyszenie%20S%C4%85decki%20Elektryk/dist/index.html'
        },
        // plugin options
        {
          // prevent BrowserSync from reloading the page
          // and let Webpack Dev Server take care of this
          reload: true
        }
      )
    ]
};