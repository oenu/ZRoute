import { defineConfig } from 'eslint/config';

import { legacyPlugin } from './utils.js';

export const importsStrict = defineConfig({
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  name: 'import module',
  plugins: {
    import: legacyPlugin('eslint-plugin-import', 'import'),
  },
  rules: {
    // enforces consistent type specifier style for named imports
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'], // Don't use inconsistent type specifier styles
    'import/exports-last': 'error', // Don't put exports in the middle of the file
    // disallow non-import statements appearing before import statements
    'import/first': 'error',

    // Require a newline after the last import/require in a group
    'import/newline-after-import': 'error',

    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',

    // disallow AMD require/define
    'import/no-amd': 'error',

    // forbid default exports - we want to standardize on named exports so that imported names are consistent
    'import/no-default-export': 'error',

    // disallow imports from duplicate paths
    'import/no-duplicates': 'error',

    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: true,
      },
    ],

    // Forbid mutable exports
    'import/no-mutable-exports': 'error',

    // Prevent importing the default as if it were named
    'import/no-named-default': 'error',
    // Prohibit named exports
    'import/no-named-export': 'off', // we want everything to be a named export
    'import/no-relative-packages': 'error', // Don't use relative packages
    // Forbid a module from importing itself
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error', // Don't use useless path segments
    // Require modules with a single export to use a default export
    'import/prefer-default-export': 'off', // we want everything to be named
  },
});
