module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["import"],
  rules: {
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(error|warn|info)$/]",
        message:
          "You can only call the error(), warn(), and info() methods from the console object",
      },
    ],
  },
};
