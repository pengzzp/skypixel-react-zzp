module.exports = babelJest.createTransformer({
  presets: [
    // require.resolve('../presets.js'),
    require.resolve('babel-plugin-transform-decorators-legacy'),
  ],
  babelrc: false,
});