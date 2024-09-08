module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb/hooks',
    'plugin:sonarjs/recommended-legacy',
    'prettier',
    '@react-native-community',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@babel/eslint-parser',
  ignorePatterns: [
    "*.svg",
    "*.json",
    "*.png",
    "**/node_modules/**",
    "package.json",
    "yarn.lock",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    Promise: false,
  },
  plugins: ['react', 'react-native', 'sonarjs', '@typescript-eslint'],
  env: {
    browser: true,
    amd: true,
    node: true,
    es2021: true,
  },
  rules: {
    //general rules
    'no-debugger': 1,
    'no-console': 1,
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': 1,
    'no-unused-vars': 1,
    'react/no-unescaped-entities': 1,
    //sonarqube rules setup
    'sonarjs/cognitive-complexity': 1,
    'sonarjs/no-identical-expressions': 1,
    'sonarjs/no-duplicate-string': 1,
    'sonarjs/no-duplicated-branches': 1,
    'sonarjs/no-nested-switch': 1,
    'sonarjs/no-collapsible-if': 1,
    'sonarjs/max-switch-cases': 1,
    'sonarjs/no-small-switch': 1,
    'sonarjs/no-redundant-boolean': 1,
    'sonarjs/prefer-single-boolean-return': 1,
    'sonarjs/no-all-duplicated-branches': 1,
    'sonarjs/no-one-iteration-loop': 1,
    'sonarjs/no-identical-functions': 1,
    'sonarjs/no-gratuitous-expressions': 1,
    'sonarjs/no-redundant-jump': 1,
    'sonarjs/prefer-object-literal': 1,
    'sonarjs/prefer-immediate-return': 1,
    'sonarjs/no-unused-collection': 1,
    'no-unsafe-optional-chaining': 1,
    'sonarjs/no-extra-arguments': 1,
    //react-hooks
    'react-hooks/exhaustive-deps': 1,
    //react native
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 1,
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 1,
    'react-native/no-raw-text': 1,
    'prettier/prettier': 1,
  },
};
