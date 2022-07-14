module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    babelOptions: {
      parserOpts: {
        plugins: ['jsx']
      }
    },
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
