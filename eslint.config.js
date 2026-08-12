const eslint = require('@eslint/js');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs'
    },
    rules: {
      ...eslint.configs.recommended.rules
    }
  }
];
