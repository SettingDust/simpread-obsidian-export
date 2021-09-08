import * as webpack from 'webpack'
import { Configuration } from 'webpack'

import LimitChunkCountPlugin = webpack.optimize.LimitChunkCountPlugin
import TerserPlugin from 'terser-webpack-plugin'

// noinspection JSUnusedGlobalSymbols
export default {
  entry: './src/index.ts',
  output: {
    filename: 'index.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['to-string-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/inline'
      },
      {
        test: /\.html/,
        type: 'asset/source'
      },
      {
        test: /\.md/,
        type: 'asset/source'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [new LimitChunkCountPlugin({ maxChunks: 1 })]
} as Configuration
