module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "standard-with-typescript",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
