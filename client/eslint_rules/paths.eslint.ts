import pathPlugin from 'eslint-plugin-paths';
import { defineConfig } from 'eslint/config';

export const pathsStrict = defineConfig({
  name: 'Paths Strict Module',
  plugins: {
    paths: pathPlugin,
  },

  rules: {
    'paths/alias': 'error',
  },
});
