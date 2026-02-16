import react from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export const reactStrict = defineConfig({
  name: 'React Strict Module',
  ...react.configs.flat.recommended,
  ...react.configs.flat['jsx-runtime'],
  settings: { react: { version: 'detect}' } },
  plugins: { react },
  rules: {
    'react/boolean-prop-naming': 'error', // Don't use non-boolean prop names
    'react/destructuring-assignment': ['warn'], // Always destructure props
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ], // Don't use named function components
    'react/hook-use-state': 'error', // Don't misuse useState
    'react/jsx-pascal-case': 'error', // Don't use non-pascal case component names
    'react/prop-types': 'error', // Don't forget to type props if you must use prop-types
  },
});
