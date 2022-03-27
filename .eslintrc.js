const RULES = {
  WARN: 'warn',
  ERROR: 'error',
  OFF: 'off',
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    React: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '{react}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{hooks/**,context/**,models/**,utils/**,react-hook-form,react-router-dom,react-query,notistack,react-dom}',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '{pages/**,components/**,commons/**,layouts/**,appRouter/**}',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '{@mui/**,assets/**}',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'react/react-in-jsx-scope': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'no-console': [RULES.WARN, { allow: ['warn', 'error', 'info'] }],
    'no-redeclare': RULES.OFF,
    '@typescript-eslint/no-redeclare': [RULES.ERROR],
  },
}
