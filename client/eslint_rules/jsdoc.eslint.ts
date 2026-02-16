import jsdoc from 'eslint-plugin-jsdoc';
import { defineConfig } from 'eslint/config';

export const jsdocStrict = defineConfig({
  name: 'JSDoc Strict Module',
  plugins: { jsdoc },
  rules: {
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/1169
    'jsdoc/check-param-names': 'off',
    // We often use @remarks or other ad-hoc tag names
    'jsdoc/check-tag-names': 'off',
    'jsdoc/informative-docs': 'error',
    'jsdoc/no-types': 'error', // Don't use types in jsdoc
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/1175
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-yields': 'off',
    'jsdoc/tag-lines': 'off',
  },
});
