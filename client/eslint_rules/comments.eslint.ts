import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments';
import { defineConfig } from 'eslint/config';

export const commentsStrict = defineConfig({
  name: 'Comments Strict Module',

  plugins: {
    '@eslint-community/eslint-comments': eslintCommentsPlugin,
  },
  rules: {
    // disallow a eslint-enable comment for multiple eslint-disable comments
    '@eslint-community/eslint-comments/no-aggregating-enable': 'error',

    // disallow duplicate eslint-disable comments
    '@eslint-community/eslint-comments/no-duplicate-disable': 'error',

    // disallow eslint-disable comments without rule names
    '@eslint-community/eslint-comments/no-unlimited-disable': 'error',

    // disallow unused eslint-disable comments
    '@eslint-community/eslint-comments/no-unused-disable': 'error',

    // disallow unused eslint-enable comments
    '@eslint-community/eslint-comments/no-unused-enable': 'error',

    // disallow ESLint directive-comments
    '@eslint-community/eslint-comments/no-use': [
      'error',
      {
        allow: [
          'eslint-disable',
          'eslint-disable-line',
          'eslint-disable-next-line',
          'eslint-enable',
          'global',
        ],
      },
    ],

    // disallow unjustified eslint-disable comments
    '@eslint-community/eslint-comments/require-description': 'error',
  },
});
