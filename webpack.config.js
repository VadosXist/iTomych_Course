const { merge } = require('webpack-merge')

const commonConfig = require('./webpack-configs/webpack.common')

module.exports = (env) => {
  const envConfig = require(`${__dirname}/webpack-configs/webpack.${env}.js`)
  return merge(commonConfig, envConfig)
}
