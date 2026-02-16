import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export const prettierStrict = defineConfig({
  name: 'Prettier Strict Module',
  plugins: { prettier },
  rules: {
    'prettier/prettier': 'error',
  },
});
