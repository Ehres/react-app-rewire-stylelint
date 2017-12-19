const StyleLintPlugin = require('stylelint-webpack-plugin');

function createRewireStylelint(options = {}) {
  return function(config, env) {
    config.plugins = (config.plugins || []).concat([
      new StyleLintPlugin(options)
    ]);

    return config;
  };
}

const rewireStylelint = createRewireStylelint();

rewireStylelint.withLoaderOptions = createRewireStylelint;

module.exports = rewireStylelint;
