const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const merge = require('webpack-merge');
const BabiliPlugin = require('babili-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);

  // Configuration in common to both client-side and server-side bundles
  const sharedConfig = () => ({
    stats: { modules: false },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modules: [path.resolve(__dirname), 'node_modules', 'reactWebUtils', 'pullRequests'],
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
          loader: 'babel-loader',
        },
        { test: /\.tsx?$/, use: 'awesome-typescript-loader?silent=false&errorsAsWarnings=true' },
        //{ test: /\.tsx?$/, use: 'awesome-typescript-loader?silent=false' },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' },
        {
          test: /\.(woff2|woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          use: 'url-loader?limit=25000',
        },
      ],
    },
    plugins: [new CheckerPlugin()].concat(
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
            new webpack.DefinePlugin({
              'process.env.NODE_ENV': '"production"',
            }),

            /* new webpack.optimize.CommonsChunkPlugin({
                    name: 'commons',
                    // (the commons chunk name)

                    filename: 'commons.js',
                    // (the filename of the commons chunk)

                   minChunks: 2,
                    // (Modules must be shared between 3 entries)

                    // chunks: ["pageA", "pageB"],
                    // (Only use these entries)
                })
                */
          ],
    ),
  });

  // Configuration for client-side bundle suitable for running in browsers
  const clientBundleOutputDir = './wwwroot/dist';
  const clientBundleConfig = merge(sharedConfig(), {
    entry: { 'main-client': './reactWebUtils/base/boot-client.tsx' },
    module: {
      rules: [
        //{ test: /\.css$/, use: ExtractTextPlugin.extract({ use: isDevBuild ? ['style-loader', 'css-loader'] : ['style-loader', 'css-loader?minimize'] }) },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: isDevBuild ? 'css-loader' : 'css-loader?minimize',
          }),
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract([
            isDevBuild ? 'css-loader' : 'css-loader?minimize',
            'less-loader',
          ]),
        },
      ],
    },
    output: { path: path.join(__dirname, clientBundleOutputDir) },
    plugins: [
      new ExtractTextPlugin({ filename: 'site.css', disable: false, allChunks: true }),

      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"',
      }),
    ].concat(
      isDevBuild
        ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
              filename: '[file].map', // Remove this line if you prefer inline source maps
              moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]'), // Point sourcemap entries to the original file locations on disk
            }),
            new webpack.DllReferencePlugin({
              context: __dirname,
              manifest: require('./wwwroot/dist/vendor-manifest.json'),
            }),
            new HardSourceWebpackPlugin(),
          ]
        : [
            /*
 * uglify gives better errors
 
 */ new webpack.optimize.UglifyJsPlugin({
              minimize: true,
            }),

            // Plugins that apply in production builds only
            //new BabiliPlugin({}, { comments: false })
          ],
    ),
  });

  // Configuration for server-side (prerendering) bundle suitable for running in Node
  const serverBundleConfig = merge(sharedConfig(), {
    resolve: { mainFields: ['main'] },
    entry: { 'main-server': './reactWebUtils/base/boot-server.tsx' },
    module: {
      rules: [
        { test: /\.css$/, use: 'null-loader' },
        { test: /\.less$/, use: 'null-loader' },
        {
          test: /\.clientOnly.ts/,
          loaders: ['awesome-typescript-loader', './reactWebUtils/base/no-loader'],
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
            new HardSourceWebpackPlugin(),
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
