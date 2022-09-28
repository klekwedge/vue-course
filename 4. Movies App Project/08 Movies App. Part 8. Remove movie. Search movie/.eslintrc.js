module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'linebreak-style': 0,
    'comma-dangle': 0,
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
