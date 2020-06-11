module.exports = function(api) {
  // enable cacheing
  api.cache(true);

  const presets = [
    // transpile JSX
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        // Disable this in tests... we want this transpiled
        // if we aren't using webpack
        modules: false,
        targets: {
          ie: '11'
        },
        // Change polyfill declaration at the entry point to
        // only include necessary functions
        useBuiltIns: 'entry',
        corejs: '3',
      }
    ]
  ];

  let plugins = ['@babel/plugin-syntax-dynamic-import'];

  // only enable hot-loading in development
  if (process.env.NODE_ENV === 'development') {
    plugins.push('react-hot-loader/babel');
  }

  return { plugins, presets };
}
