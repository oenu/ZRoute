import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';

export const perfectionistStrict = defineConfig({
  name: 'Perfectionist Strict Module',
  plugins: { perfectionist },
  ...perfectionist.configs['recommended-natural'],

  rules: {
    'import/order': 'off',
    'perfectionist/sort-array-includes': [
      'error',
      {
        order: 'asc',
        type: 'natural',
      },
    ],

    'perfectionist/sort-classes': [
      'error',
      {
        groups: [
          'index-signature',
          'static-property',
          'private-property',
          'property',
          'constructor',
          'static-method',
          'private-method',
          'static-private-method',
          'method',
          ['get-method', 'set-method'],
          'unknown',
        ],
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        ignoreCase: false,
        order: 'asc',
        type: 'natural',
      },
    ],
    // 'perfectionist/sort-imports': [
    //   'error',
    //   {
    //     groups: [
    //       'type-import',
    //       ['value-builtin', 'value-external'],
    //       'type-internal',
    //       'value-internal',
    //       ['type-parent', 'type-sibling', 'type-index'],
    //       ['value-parent', 'value-sibling', 'value-index'],
    //       'ts-equals-import',
    //       'unknown',
    //     ],
    //     ignoreCase: true,
    //     newlinesBetween: 1,
    //     order: 'asc',
    //     tsconfig: { filename: 'tsconfig.json', rootDir: '..' },
    //     type: 'natural',
    //   },
    // ],
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'type-import',
          ['value-builtin', 'value-external'],
          'type-internal',
          'value-internal',
          ['type-parent', 'type-sibling', 'type-index'],
          ['value-parent', 'value-sibling', 'value-index'],
          'ts-equals-import',
          'unknown',
        ],
        ignoreCase: true,
        newlinesBetween: 1,
        order: 'asc',
        tsconfig: { filename: 'tsconfig.json', rootDir: '..' },
        type: 'natural',
      },
    ],
    'perfectionist/sort-interfaces': [
      'error',
      {
        customGroups: [
          { elementNamePattern: '^id$', groupName: 'id' },
          { elementNamePattern: '^key$', groupName: 'key' },
          {
            elementNamePattern: ['^get.+', '^set.+', '^on.+'],
            groupName: 'method',
          },
        ],
        groups: ['id', 'key', 'method'],
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        customGroups: [
          { elementNamePattern: '^id$', groupName: 'id' },
          { elementNamePattern: '^key$', groupName: 'key' },
          { elementNamePattern: '^on.+', groupName: 'callback' },
          { elementNamePattern: '^data-.*', groupName: 'data' },
        ],
        groups: ['id', 'key', 'unknown', 'callback', 'shorthand-prop', 'data'],
        ignoreCase: false,
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-maps': ['error', { order: 'asc', type: 'natural' }],
    'perfectionist/sort-named-exports': [
      'error',
      { order: 'asc', type: 'natural' },
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        ignoreCase: true,
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-object-types': [
      'error',
      {
        ignoreCase: true,
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        customGroups: [
          { elementNamePattern: '^id$', groupName: 'id' },
          { elementNamePattern: '^key$', groupName: 'key' },
          {
            elementNamePattern: ['^get.+', '^set.+', '^on.+'],
            groupName: 'method',
          },
        ],
        groups: ['id', 'key', 'method'],
        ignoreCase: false,
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-switch-case': ['off'],
    'perfectionist/sort-union-types': [
      'error',
      {
        groups: [
          'conditional',
          'function',
          'import',
          'intersection',
          'keyword',
          'literal',
          'named',
          'object',
          'operator',
          'tuple',
          'union',
          'nullish',
        ],
        ignoreCase: true,
        order: 'asc',
        type: 'natural',
      },
    ],

    'sort-imports': 'off',
  },
});
