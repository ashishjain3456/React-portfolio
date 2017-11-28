const {resolve} = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const extractCSS = new ExtractTextPlugin('./public/css/style.css');

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env)
console.log("Env: ", env);
  return {
    entry: ['./app/index.js', './public/scss/style.scss'],
    context: __dirname,
    output: {
      path: resolve(__dirname, './build'),
      filename: 'bundle.js',
      publicPath: '/build/',
      pathinfo: ifNotProd(),
    },
    devtool: ifProd('source-map', 'eval'),
    devServer: {
      port: 8082,
      historyApiFallback: true
    },
    module: {
      loaders: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "file-loader"
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'react-hot-loader!babel-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader', 'eslint-loader']
        },
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: 'file-loader'},
        {
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader' // compiles SASS to CSS
    }]
  }
        // {
        //   test: /\.scss$/,
        //   use: [
        //     {loader: 'style-loader'},
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         sourceMap: true
        //       }
        //     },
        //     {
        //       loader: 'sass-loader',
        //       options: {
        //           sourceMap: true
        //       }
        //     }
        //   ]
        // }
      ],
    },
    plugins: removeEmpty([
      new ExtractTextPlugin({ // define where to save the file
      filename: './public/css/style.css',
      allChunks: true,
    }),
      ifProd(new webpack.optimize.DedupePlugin()),
      ifProd(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        quiet: true,
      })),
      ifProd(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"',
        },
      })),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          screw_ie8: true, // eslint-disable-line
          warnings: false,
        },
      })),
    ])
  };
};
