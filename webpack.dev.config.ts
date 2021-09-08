import * as webpack from 'webpack'
import { Configuration } from 'webpack'
import defaultConfiguration from './webpack.config'
import path from 'path'

// noinspection JSUnusedGlobalSymbols
export default {
  ...defaultConfiguration,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  mode: 'development',
  devtool: 'inline-source-map'
} as Configuration
