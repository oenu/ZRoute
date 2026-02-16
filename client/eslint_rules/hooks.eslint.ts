import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export const hooksStrict = defineConfig([
  reactHooks.configs.flat.recommended,
  {
    name: 'Hooks Strict Module',
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
]);
