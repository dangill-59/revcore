const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);

  // Configuration in common to both client-side and server-side bundles
  const sharedConfig = () => ({
    mode: isDevBuild ? 'development' : 'production',
    stats: { modules: false },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modules: [path.resolve(__dirname), 'node_modules', 'reactWebUtils', 'pullRequests'],
      fallback: {
        "path": false
      }
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[id].[chunkhash].js',
      publicPath: 'dist/', // Webpack dev middleware, if enabled, handles requests for this URL prefix
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,  // Faster builds, type checking done separately
              compilerOptions: {
                noEmit: false
              }
            }
          }
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 25000
            }
          }
        },
        {
          test: /\.(woff2|woff|ttf|eot)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 25000
            }
          }
        },
      ],
    },
    plugins: [
      // Strip all locales except "en"
      new MomentLocalesPlugin({
        localesToKeep: ['en'],
      }),
    ].concat(
      isDevBuild
        ? [
            // Plugins that apply in development builds only
          ]
        : [
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new webpack.NormalModuleReplacementPlugin(
              /\/iconv-loader$/,
              require.resolve('node-noop'),
            ), // Workaround for https://github.com/andris9/encoding/issues/16
          ],
    ),
    optimization: isDevBuild ? {} : {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
        }),
      ],
    },
  });

  // Configuration for client-side bundle suitable for running in browsers
  const clientBundleOutputDir = './wwwroot/dist';
  const clientBundleConfig = merge(sharedConfig(), {
    entry: { 'main-client': './reactWebUtils/base/boot-client.tsx' },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isDevBuild ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: isDevBuild ? {} : {
                sourceMap: false
              }
            }
          ],
        },
        {
          test: /\.less$/,
          use: [
            isDevBuild ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: isDevBuild ? {} : {
                sourceMap: false
              }
            },
            'less-loader'
          ],
        },
      ],
    },
    output: { path: path.join(__dirname, clientBundleOutputDir) },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'site.css',
        chunkFilename: '[id].css',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"',
      }),
    ].concat(
      isDevBuild
        ? [
            // Plugins that apply in development builds only
            new webpack.DllReferencePlugin({
              context: __dirname,
              manifest: require('./wwwroot/dist/vendor-manifest.json'),
            }),
          ]
        : [
            // Plugins that apply in production builds only
          ],
    ),
    devtool: isDevBuild ? 'eval-source-map' : false,
  });

  // Configuration for server-side (prerendering) bundle suitable for running in Node
  const serverBundleConfig = merge(sharedConfig(), {
    resolve: { mainFields: ['main'] },
    entry: { 'main-server': './reactWebUtils/base/boot-server.tsx' },
    module: {
      rules: [
        { test: /\.css$/, type: 'asset/source', generator: { emit: false } },
        { test: /\.less$/, type: 'asset/source', generator: { emit: false } },
        {
          test: /\.clientOnly.ts/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            },
            './reactWebUtils/base/no-loader'
          ],
        },
      ],
    },
    plugins: [].concat(
      isDevBuild
        ? [
            // Plugins that apply in development builds only
            new webpack.DllReferencePlugin({
              context: __dirname,
              manifest: require('./ClientApp/dist/vendor-manifest.json'),
              sourceType: 'commonjs2',
              name: './vendor',
            }),
          ]
        : [],
    ),
    output: {
      libraryTarget: 'commonjs',
      path: path.join(__dirname, './ClientApp/dist'),
    },
    target: 'node',
    devtool: 'inline-source-map',
  });

  return [clientBundleConfig, serverBundleConfig];
};
