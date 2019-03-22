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
      ]
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
      'vue/singleline-html-element-content-newline': 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
