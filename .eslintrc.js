module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["standard", "plugin:vue/essential", "plugin:prettier/recommended"],
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-empty": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-undef": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-path-concat": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/valid-template-root":
      process.env.NODE_ENV === "production" ? "error" : "off",
    eqeqeq: process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
