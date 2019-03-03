import webpack from 'webpack';
import WebpackMd5Hash from 'webpack-md5-hash';
import autoprefixer from 'autoprefixer';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = 'development';
}
const devMode = process.env.NODE_ENV !== 'production';
const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    __DEV__: false,
};

const webpackConfig = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
    },
    mode: process.env.NODE_ENV,
    devtool: 'source-map',
    entry: [path.resolve(__dirname, 'src/index')],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: devMode ? 'index_bundle.js' : './[name].[hash].js'
    },
    plugins: [
        new WebpackMd5Hash(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
        new webpack.DefinePlugin(GLOBALS),
        // Generate an external css file with a hash in the filename
        new MiniCssExtractPlugin(devMode ? '[name].css' : '[name].[hash].css'),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            noInfo: true, // set to false to see a list of every file being bundled.
            options: {
                sassLoader: {
                    includePaths: [path.resolve(__dirname, 'src', 'scss')],
                },
                context: '/',
                postcss: () => [autoprefixer],
            },
        }),
    ],
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/react', '@babel/env']
                }
              }
          },
          {
              test: /\.(sa|sc|c)ss$/,
              exclude: /node_modules/,
              use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                  'sass-loader',
              ]
          },
          {
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts/',    // where the fonts will go
                    publicPath: '/dist/'       // override the default path
                }
            }]
        },
        {
            test: /\.(gif|png|jpe?g)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images/',    // where the fonts will go
                    publicPath: '/dist/'       // override the default path
                }
            }]
        },
      ]
  },
}
if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins.push(
      new CompressionPlugin({
          test: /\.(js|css)$/,
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          deleteOriginalAssets: true,
      })
  );
  webpackConfig.optimization = {
      minimizer: [
          new UglifyJsPlugin({
              sourceMap: true,
              uglifyOptions: {
                  warnings: false,
                  mangle: true,
                  ie8: false,
                  output: {
                      comments: false,
                  },
              },
          }),
      ],
      splitChunks: {
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
              vendor: {
                  test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                  name: 'vendor',
                  chunks: 'all',
              },
          },
      },
      noEmitOnErrors: true,
      mangleWasmImports: true,
      removeAvailableModules: true,
      removeEmptyChunks: true,
      mergeDuplicateChunks: true,
      flagIncludedChunks: true,
      occurrenceOrder: true,
      usedExports: true,
      concatenateModules: true,
  }
}
module.exports = webpackConfig