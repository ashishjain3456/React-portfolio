module.exports = {
  "plugins": [
      "react"
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      "jsx": true
    },
  },
  "env": {
      "es6":     true,
      "browser": true,
      "node":    true
  },
  extends: [
    //'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
    'eslint-config-airbnb-base/rules/imports',
    './rules/best-practices',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {
    'no-else-return': 0,
  }
};
