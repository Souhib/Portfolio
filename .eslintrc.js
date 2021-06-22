module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    // Warning
    'no-unused-vars': 1,
    'no-console': 1,
    'no-unreachable': 1,

    // Errors
    'import/no-unresolved': [2, { caseSensitive: false }],
    'no-duplicate-case': 2,
    'no-undef': 2,
    'import/order': [
      'error',
      {
        groups: ['external', 'internal', 'sibling'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@material-ui',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'components',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Tolerance
    'arrow-body-style': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
