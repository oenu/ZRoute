import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export const eslintStrict = defineConfig(
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  {
    name: 'TypescriptEslint Strict Module',
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'error', // Use ts-expect-error with a comment instead of @ts-ignore
      '@typescript-eslint/consistent-type-exports': 'error', // Don't export types alongside other exports
      '@typescript-eslint/explicit-function-return-type': 'error', // Don't forget to type function returns
      '@typescript-eslint/explicit-module-boundary-types': 'error', // Don't export functions without all types
      '@typescript-eslint/no-empty-function': 'error', // Don't use empty functions (use void instead)
      '@typescript-eslint/no-empty-object-type': 'error', // Don't use empty objects as a type
      '@typescript-eslint/no-explicit-any': 'error', // Don't use any - Seriously. Don't.
      '@typescript-eslint/no-floating-promises': 'error', // Don't let promises float (handle them)
      '@typescript-eslint/no-inferrable-types': 'off', // Allow the use of explicit types when they might otherwise be inferred
      '@typescript-eslint/no-misused-new': 'error', // Don't use new incorrectly
      '@typescript-eslint/no-misused-promises': 'error', // Don't use promises incorrectly
      '@typescript-eslint/no-namespace': 'error', // Don't use namespaces
      '@typescript-eslint/no-non-null-assertion': 'error', // Don't use non-null assertions (use optional chaining instead)
      '@typescript-eslint/no-require-imports': 'error', // Don't use require for imports
      '@typescript-eslint/no-shadow': 'error', // Don't shadow variables with the same name (split into different scopes if you absolutely need to)
      '@typescript-eslint/no-this-alias': 'error', // Don't use 'this' as an alias
      '@typescript-eslint/no-unnecessary-condition': 'off', // Allow always-true checks for clarity and to prevent regression bugs
      '@typescript-eslint/no-unsafe-assignment': 'error', // Don't use unsafe assignments (setting `any` etc.)
      '@typescript-eslint/no-unsafe-return': 'error', // Don't use unsafe returns (`as any` etc)
      '@typescript-eslint/no-use-before-define': 'error', // Don't use variables before they are defined
    },
  },
);
