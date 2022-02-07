module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'default-case': 'off',
    indent: 'off',
    'implicit-arrow-linebreak': 'off',
    'max-len': 'off',
    'newline-before-return': 'error',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'export' }],
  },
};
