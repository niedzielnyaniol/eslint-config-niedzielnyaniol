module.exports = {
  extends: [
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.stories.+(js|ts)?(x)'],
      rules: {
        'storybook/no-redundant-story-name': 'error',
        'storybook/no-stories-of': 'error',
        'storybook/no-title-property-in-meta': 'error',
        'storybook/prefer-pascal-case': 'error',
        'storybook/story-exports': 'error',
        '@typescript-eslint/no-magic-numbers': 'off',
      },
    },
  ],
};
