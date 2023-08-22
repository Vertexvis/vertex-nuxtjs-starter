/* eslint-env node */

module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'simple-import-sort/imports': 'error',
    'prettier/prettier': 'error',
  },
};
