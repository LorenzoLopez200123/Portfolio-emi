module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    eqeqeq: 1,
    'no-unused-vars': 'warn',
    'no-useless-escape': 'warn',
    'no-trailing-spaces': 0,
    'no-multiple-empty-lines': 1,
    'prefer-const': 'warn',
    'multiline-ternary': 0,
    'react/jsx-no-duplicate-props': 0,
    semi: 0,
    quotes: 0,
    'react/no-unescaped-entities': 0,
    'object-curly-spacing': 1,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    camelcase: 'warn',
    'eol-last': 0,
    'no-extra-semi': 'warn',
    curly: 'warn',
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    indent: 0,
    'handle-callback-err': ['error'],
  },
};
