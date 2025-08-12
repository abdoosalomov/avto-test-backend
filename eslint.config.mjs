// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
export default tseslint.config(
    {
        ignores: [
            'eslint.config.mjs',
            '.lintstagedrc.js',
            'commitlint.config.js',
            '*.config.js',
            '*.config.mjs',
            '**/*.config.js',
            '**/*.config.mjs',
        ],
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    ...tseslint.configs.all,
    {
        languageOptions: {
            ecmaVersion: 5,
            sourceType: 'module',
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-unsafe-argument': 'error',
            '@/array-callback-return': 'error',
            '@/getter-return': 'error',
            '@/no-await-in-loop': 'error',
            '@/no-const-assign': 'error',
            '@/no-duplicate-imports': 'off',
            '@/no-setter-return': 'error',
            '@/no-unreachable': 'error',
            '@/no-unused-vars': 'error',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'function',
                    format: ['camelCase', 'PascalCase'], // Allow PascalCase for functions
                },
            ],
            '@/block-scoped-var': 'error',
            '@/default-case': 'warn',
            '@/eqeqeq': 'error',
            '@/no-console': 'warn',
            '@/no-undefined': 'error',
            '@/no-unused-expressions': 'error',
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/parameter-properties': 'off',
            '@typescript-eslint/prefer-readonly-parameter-types': 'off',
            '@typescript-eslint/explicit-member-accessibility': 'off',
            '@typescript-eslint/class-methods-use-this': 'off',
            '@typescript-eslint/no-extraneous-class': 'off',
            '@typescript-eslint/init-declarations': 'off',
            '@typescript-eslint/no-magic-numbers': [
                'error',
                {
                    ignore: [0, 1, -1, 7000], // Example valid numbers to ignore, 7000 is for PORT
                    ignoreArrayIndexes: true, // Correctly specify this option
                    ignoreClassFieldInitialValues: true, // Correctly specify this option
                },
            ],
            '@typescript-eslint/max-params': 'off',
            '@typescript-eslint/no-deprecated': 'off',
        },
    },
);
