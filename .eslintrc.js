module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  settings: {
    "import/resolver": {
      "import/extensions": [
        ".js",
        ".jsx",
        ".mjs",
        ".ts",
        ".tsx",
        ".vue"
      ],
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn',
    'max-len': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'arrow-parens': ["error", "always"],
    'no-unused-vars': 0,
    'typescript/no-unused-vars': 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
