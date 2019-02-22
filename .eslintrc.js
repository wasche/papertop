const path = require('path')

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'flowtype',
    'import',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.config.eslint.js')
      },
    },
    react: {
      version: 'detect'
    },
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'flowtype/require-valid-file-annotation': [
      2,
      'always',
      { annotationStyle: 'line' }
    ],
  },
  overrides: [
    {
      files: [
        'webpack.config.js',
        'webpack.config.eslint.js',
        'webpack.config.resolve.js',
      ],
      rules: {
        'flowtype/require-valid-file-annotation': 0,
      },
    },
  ]
}
