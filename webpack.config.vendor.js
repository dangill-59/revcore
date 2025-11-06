const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);

  const sharedConfig = {
    mode: isDevBuild ? 'development' : 'production',
    stats: { modules: false },
    resolve: {
      extensions: ['.js'],
      fallback: {
        "domain": false,
        "url": false,
        "https": false,
        "http": false
      }
    },
    module: {
      rules: [
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 100000
            }
          }
        }
      ],
    },
    entry: {
      vendor: [
        'bootstrap',
        //'bootstrap/dist/css/bootstrap.css',  // Skip CSS in vendor bundle to avoid loader issues
        'domain-task',
        'event-source-polyfill',
        'history',
        'prop-types',
        'react',
        'react-dom',
        'react-router',
        'react-router-dom',
        'react-redux',
        'redux',
        'redux-thunk',
        'react-router-redux',
        'jquery',
        'redux-actions',
        'redux-promise',
        'react-router-bootstrap',
        'react-bootstrap',
        'auth0-js',
        'debounce-promise',
        'jwt-decode',
        'md5',
        'moment',
        'qs',
        'query-string',
        'react-bootstrap-typeahead',
        'react-dnd',
        'react-hotkeys',
        'react-image-lightbox',
        'react-media',
        //'react-rnd',
        'react-select',
        'react-table',
        'react-toggle-button',
        'react-resizable-box',
        'react-quill',
        'react-dropzone',
      ],
    },
    output: {
      publicPath: 'dist/',
      filename: '[name].js',
      library: '[name]_[hash]',
    },
    plugins: [
      new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
      new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, require.resolve('node-noop')),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"',
      }),
      // Strip all locales except "en" from moment.js
      new MomentLocalesPlugin({
        localesToKeep: ['en'],
      }),
    ],
    optimization: isDevBuild ? {} : {
      minimize: true,
      minimizer: [
        new TerserPlugin(),
      ],
    },
  };

  const clientBundleConfig = merge(sharedConfig, {
    output: { path: path.join(__dirname, 'wwwroot', 'dist') },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
        name: '[name]_[hash]',
      }),
    ],
  });

  const serverBundleConfig = merge(sharedConfig, {
    target: 'node',
    resolve: { mainFields: ['main'] },
    output: {
      path: path.join(__dirname, 'ClientApp', 'dist'),
      libraryTarget: 'commonjs2',
    },
    entry: { vendor: ['aspnet-prerendering', 'react-dom/server'] },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(__dirname, 'ClientApp', 'dist', '[name]-manifest.json'),
        name: '[name]_[hash]',
      }),
    ],
  });

  return [clientBundleConfig, serverBundleConfig];
};
