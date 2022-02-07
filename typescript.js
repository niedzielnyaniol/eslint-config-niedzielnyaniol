module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      { ignoreEnums: true, ignoreArrayIndexes: true, ignore: [0, 1], ignoreDefaultValues: true },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'error'
  },
};
