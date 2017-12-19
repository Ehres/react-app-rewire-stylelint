# react-app-rewire-stylelint
Add the stylelint webpack plugin to your create-react-app via react-app-rewired

# Install

npm:
```bash
$ npm install --saveDev react-app-rewire-stylelint
```

yarn:
```bash
$ yarn add --dev react-app-rewire-stylelint
```

# Add it to your project

* [Rewire your app](https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project) than modify `config-overrides.js`

```javascript
const rewireStylelint = require('react-app-rewire-stylelint');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireStylelint(config, env);
  // with override localIdentName
  // config = rewireCSSModules.withLoaderOptions({
  //   configBasedir: srcPath,
  //   allowEmptyInput: true,
  //   context: srcPath,
  //   files: ['**/*.css', '**/*.scss'],
  //   emitErrors: false
  // })(config, env);
  // ...
  return config;
}
```
