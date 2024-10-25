/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx,cjs}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [path.resolve(__dirname, 'tsconfig.json'), path.resolve(__dirname, 'tsconfig.eslint.json')],
        sourceType: 'module'
      },
      extends: [
        'eslint:recommended',
        'next',
        'eslint-config-prettier',
        'plugin:prettier/recommended',
        'prettier',
        'airbnb',
        'airbnb-typescript',
        'plugin:react/recommended'
      ],
      plugins: ['@typescript-eslint', 'import', 'prettier', 'simple-import-sort', 'unused-imports', 'tailwindcss'],
      settings: {
        react: {
          version: 'detect'
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
          node: {
            paths: [path.resolve(__dirname, '')],
            extensions: ['.js', '.jsx', '.ts', '.tsx']
          },
          typescript: {
            project: path.resolve(__dirname, 'tsconfig.json')
          }
        },
        env: {
          node: true
        }
      },
      rules: {
        'no-unused-vars': 'off',
        'no-nested-ternary': 'off',
        'object-curly-newline': 'off',
        'max-len': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true
          }
        ],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            fixStyle: 'inline-type-imports'
          }
        ],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            ignoreRestSiblings: true,
            destructuredArrayIgnorePattern: '[A-Z]',
            caughtErrors: 'none'
          }
        ],
        '@typescript-eslint/no-misused-promises': [
          2,
          {
            checksVoidReturn: {
              attributes: false
            }
          }
        ],
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto'
          }
        ],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
          }
        ], // Avoid missing file extension errors, TypeScript already provides a similar feature
        'react/function-component-definition': 'off', // Disable Airbnb's specific function type
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        // Overrides Airbnb configuration and enable no-restricted-syntax
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'simple-import-sort/imports': 'error', // Import configuration for `eslint-plugin-simple-import-sort`
        'simple-import-sort/exports': 'error', // Export configuration for `eslint-plugin-simple-import-sort`
        'import/order': 'off', // Avoid conflict rule between `eslint-plugin-import` and `eslint-plugin-simple-import-sort`
        'unused-imports/no-unused-imports': 'error',
        // 'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'react/jsx-wrap-multilines': [
          'error',
          {
            prop: 'ignore'
          }
        ],
        'react/state-in-constructor': ['error', 'never'],
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 'off',
        'react/no-danger': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'jsx-a11y/label-has-associated-control': [
          'error',
          {
            required: {
              some: ['nesting', 'id']
            }
          }
        ],
        'jsx-a11y/label-has-for': [
          'error',
          {
            required: {
              some: ['nesting', 'id']
            }
          }
        ]
      }
    }
  ]
}
