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
    "no-restricted-exports": "off"
  },
  overrides: {
    files: ['**/*.ts?(x)'],  
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        { ignoreEnums: true, ignoreArrayIndexes: true, ignore: [0, 1], ignoreDefaultValues: true },
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unused-vars': 'error',
      "no-useless-constructor": "off",
    },
  }
};
