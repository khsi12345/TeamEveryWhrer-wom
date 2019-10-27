module.exports = {
  extends: ["airbnb", "eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  env: {
   browser: true,
  },
  plugins: ["react", "react-hooks"],
  parser: 'babel-eslint',
  rules: {
   indent: 0,
   'no-tabs': 0,
   'eol-last': ['error', 'always'],
   'no-underscore-dangle': 0,
   'react/jsx-indent': 0,
   'react/jsx-indent-props': 0,
   'react/jsx-filename-extension': 0,
   'react/forbid-prop-types': 0,
   'react/require-default-props': 0,
   'no-console':0,
   'react/display-name': 0
  },
 };