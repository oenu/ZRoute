import packageJson from 'eslint-plugin-package-json';
import { defineConfig } from 'eslint/config';

export const packageStrict = defineConfig({
  name: 'Package JSON Strict Module',
  plugins: {
    'package-json': packageJson,
  },
  rules: {
    ...packageJson.configs.recommended.rules,
    ...packageJson.configs.stylistic.rules,
  },
});
