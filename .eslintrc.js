module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    babel: {
      env: { test: { plugins: ["@babel/plugin-transform-modules-commonjs"] } },
    },
  },
};
