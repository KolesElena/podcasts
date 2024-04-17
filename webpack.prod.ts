const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const { merge } = require('webpack-merge');
 const common = require('./webpack.common.ts');


 module.exports = merge(common, {
   mode: 'production',
   performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
   optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
        },
      }),
    ],
  },
 });
