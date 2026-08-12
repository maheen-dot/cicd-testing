const eslint = require('@eslint/js');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: globals.node
    },
    rules: {
      ...eslint.configs.recommended.rules
    }
  },

  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: globals.jest
    }
  }
];
