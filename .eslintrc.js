module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  "settings": {
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
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
