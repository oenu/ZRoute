import jsdocPlugin from 'eslint-plugin-jsdoc';
import jsoncParser from 'jsonc-eslint-parser';
import unicornPlugin from 'eslint-plugin-unicorn';
import tsEslint from 'typescript-eslint';
import * as tsDocPlugin from 'eslint-plugin-tsdoc';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

import {
  commentsStrict,
  eslintStrict,
  hooksStrict,
  importsStrict,
  jsdocStrict,
  baseStrict,
  packageStrict,
  pathsStrict,
  perfectionistStrict,
  prettierStrict,
  reactStrict,
} from './eslint_rules';
import { legacyPlugin } from './eslint_rules/utils.js';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  {
    name: 'Ignores Module',
    ignores: [
      '.idea/**',
      'build/**',
      'coverage/**',
      'dist/**',
      'eslint_rules/**',
      'node_modules/**',
      'src/generated/**',
      '*.config.{js,cjs,mjs,ts,cts,mts}',
      '*.d.ts',
    ],
  },

  jsdocPlugin.configs['flat/recommended-typescript-error'],
  ...perfectionistStrict,
  ...eslintStrict,
  ...importsStrict,
  ...baseStrict,
  ...reactStrict,
  ...prettierStrict,
  ...commentsStrict,
  ...jsdocStrict,
  ...hooksStrict,
  ...pathsStrict,
  ...packageStrict,
  {
    name: 'ZRoute Client Specific',
    plugins: {
      ['@typescript-eslint']: tsEslint.plugin,
      ['deprecation']: legacyPlugin('eslint-plugin-deprecation', 'deprecation'),
      ['tsdoc']: tsDocPlugin,
      ['unicorn']: unicornPlugin,
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: { project: './tsconfig.json' },
      },
      react: { version: 'detect' },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'deprecation/deprecation': 'error',
      'tsdoc/syntax': 'error',
      'unicorn/no-typeof-undefined': 'error',
    },
  },
  {
    files: ['**/*.js'],
    extends: [tsEslint.configs.disableTypeChecked],
    rules: {
      'deprecation/deprecation': 'off',
      'jsdoc/no-types': 'off',
      'tsdoc/syntax': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  {
    files: ['**/*.json'],
    extends: [tsEslint.configs.disableTypeChecked],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      'deprecation/deprecation': 'off',
    },
  },

  // config files
  {
    files: ['*.config.{js,cjs,mjs,ts,cts,mts}'],
    rules: {
      'import/no-default-export': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },

  eslintConfigPrettier,
);
