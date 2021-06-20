module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  rules: {
    // Warning
    'no-unused-vars': 1,
    'no-console': 1,
    'no-unreachable': 1,
    'prettier/prettier': 1,

    // Errors
    'import/no-unresolved': [2, { caseSensitive: false }],
    'no-duplicate-case': 2,
    'no-undef': 2,

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
