// https://dev.to/suprabhasupi/learn-to-configure-eslint-and-prettier-in-react-4gp0
// https://medium.com/appstud/setup-eslint-and-prettier-together-for-react-and-react-native-projects-in-visual-studio-code-78772d58358d
module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:react/jsx-runtime",
    // "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": 1,
    "react/prop-types": 0,
    "linebreak-style": ["error", "unix"],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    quotes: [2, "double"],
    semi: [2, "never"],
  },
}
