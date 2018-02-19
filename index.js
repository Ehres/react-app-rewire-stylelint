const StyleLintPlugin = require('stylelint-webpack-plugin');

const createRewireStylelint = function (opts = {}) {
  return function (config, env, options) {
    if (typeof options === 'undefined') {
      options = opts;
    }

    config.plugins = (config.plugins || []).concat([
      new StyleLintPlugin(options),
    ]);

    return config;
  };
};

const rewireStylelint = createRewireStylelint();

rewireStylelint.withLoaderOptions = createRewireStylelint;

module.exports = rewireStylelint;
