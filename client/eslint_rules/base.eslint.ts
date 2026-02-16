import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintn from 'eslint-plugin-n';
import { defineConfig } from 'eslint/config';

import { legacyPlugin } from './utils.ts';

export const baseStrict = defineConfig({
  name: 'Base Strict Module',
  ...eslint.configs.recommended,

  plugins: {
    ['@stylistic']: stylistic,
    ['eslint-plugin-n']: eslintn,
    ['no-type-assertion']: legacyPlugin(
      'eslint-plugin-no-type-assertion',
      'no-type-assertion',
    ),
  },
  rules: {
    'one-var': ['error', 'never'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'always'],
    'array-callback-return': 'error', // Don't forget to return in array methods
    'consistent-return': 'error', // Forces return in functions
    curly: ['error', 'all'], // Force curly braces for everything
    eqeqeq: ['error', 'always'], // Don't allow ==
    'eslint-plugin-n/no-process-exit': 'error',
    'logical-assignment-operators': 'error',
    'no-console': 'off',
    'no-else-return': 'error',
    'no-eval': 'error', // Don't run arbitrary code
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }], // Don't use extra boolean casts
    'no-fallthrough': [
      'error',
      { commentPattern: '.*intentional fallthrough.*' },
    ],
    'no-implicit-coercion': 'error', // Don't use implicit coercion
    'no-implicit-globals': 'error', // Don't use implicit globals
    'no-negated-condition': 'error', // Don't use negated conditions in if/elses, or in ternary expressions
    'no-plusplus': 'error', // Don't use ++ or --
    'no-shadow': 'error', // Don't shadow variables with the same name
    'no-type-assertion/no-type-assertion': 'error', // Don't disable type safety
    'no-undef': 'error', // Don't attempt to use undefined variables
    'no-useless-concat': 'error', // Don't use useless concatenation
    'sort-keys': 'off',
  },
});
