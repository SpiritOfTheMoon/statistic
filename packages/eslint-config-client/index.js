module.exports = {
  extends: [
    "react-app",
    "airbnb-typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript"
  ],
  plugins: [
    "jsx-a11y"
  ],
  rules: {
    "react/jsx-props-no-spreading": 0,
    "linebreak-style": 0,
    "react/no-array-index-key": 0,
    "react/prop-types": 0,
    "react/jsx-boolean-value": 0,
    "no-continue": 0,
    "no-underscore-dangle": 0,
    "react-hooks/exhaustive-deps": 0,
    "no-else-return": 0,
    "no-void": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "comma-dangle": 0,
    "import/no-cycle": 0,
    "no-param-reassign": 0,
    "max-len": [
      "error",
      {
        "code": 120,
        "tabWidth": 2,
        "ignoreStrings": true
      },
    ],
    "@typescript-eslint/comma-dangle": [
      "error"
    ],
    "no-loop-func": 0,
    "@typescript-eslint/no-loop-func": [
      "error"
    ],
    "no-redeclare": 0,
    "@typescript-eslint/no-redeclare": [
      "error"
    ],
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": [
      "error"
    ],
    "indent": "off",
    "@typescript-eslint/indent": 0,
    "react/jsx-indent": 0,
    "react/no-array-index-key": 0,
    "import/export": 0,
    "import/no-extraneous-dependencies": 0
  }
};
