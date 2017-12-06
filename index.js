const StyleLintPlugin = require('stylelint-webpack-plugin');

function rewireStylelint(config, env, options = {}) {
  config.plugins = (config.plugins || []).concat([
    new StyleLintPlugin(options)
  ])

  return config;
}

module.exports = rewireStylelint;
