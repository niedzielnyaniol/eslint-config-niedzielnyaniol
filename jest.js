module.exports = {
  env: {
    jest: true,
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/**/*.+(js|ts)?(x)',
        '**/*.{spec,test}.+(js|ts)?(x)',
      ],
      rules: {
        'import/namespace': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/*.{spec,test}.ts?(x)'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
      },
    },
  ],
};
