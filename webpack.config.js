const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // альтернатива плагину ExtractTextWebpackPlugin в части работы с css. Хотя можно для четвертой версии вебпака использовать бета версию npm install --save-dev extract-text-webpack-plugin@next
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env, options) {
  const isDevMode = options.mode === 'development';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'js/[name].js',
      publicPath: '/'
    },
    devServer: {
      overlay: true,
      // host: '192.168.1.33',
      host: 'localhost',
      contentBase: path.join(__dirname, 'dist'),
      watchContentBase: true,
      index: 'index.html',
      open: true,
    },
    devtool: isDevMode ? 'eval-source-map' : false,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: isDevMode,
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            }, {
              loader: 'css-loader',
              options: {
                modules: false,
                sourceMap: isDevMode,
                // importLoaders: 1,
                // localIdentName: '[name]_[local]_[hash:base64:5]',
              }
            }, {
              loader: 'postcss-loader',
              options: { sourceMap: isDevMode, config: { path: './postcss.config.js' } }
            }, {
              loader: 'resolve-url-loader',
              options: {
                debug: isDevMode,
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true, // всегда true, чтобы resolve-url-loader мог работать
                sourceMapContents: false,
              }
            },
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }, {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'media/[name].[hash:7].[ext]'
          }
        }, {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "css/[name].css",
        chunkFilename: "css/[id].css"
      }),
      new HtmlWebpackPlugin({
        template: './src/pug/pages/index.pug',
        filename: './index.html',
        minify: isDevMode,
        inject: false,
      }),
      new CleanWebpackPlugin(['dist']),
    ],
  }

}