# DabApps ESLint Configuration


## About
This repository includes 3 different configs that inherit from each other.

  - Base
  - React (extends the `base`)
  - React Native (extends `react`, `base`)


## Install

Install a specific version of the eslint-config in your package.json. 

```json
"devDependencies": {
  "eslint-config": "dabapps/eslint-config#2.0.0",
}
```

Then you have to choose between the different configs, depending on the project type. Currently there are 3 different configs.

  - base
  - react
  - react-native

You'll also need to include eslint & any other plugins/parsers that are needed in your package.json. Particularly:

##### Base

  - Requires no plugins.

##### React
`npm install --save-dev --save-exact babel-eslint eslint-plugin-react`

  - `babel-eslint`
  - `eslint-plugin-react`

##### React Native
`npm install --save-dev --save-exact babel-eslint eslint-plugin-react eslint-plugin-react-native`

  - `babel-eslint`
  - `eslint-plugin-react`
  - `eslint-plugin-react-native`


## Running eslint

Add an `.eslintrc` file in the root of your project that extends a particular config.

****
```json
{
  "extends": "eslint-config-dabapps/base/.eslintrc", // For Base
  "extends": "eslint-config-dabapps/react/.eslintrc", // For React
  "extends": "eslint-config-dabapps/react-native/.eslintrc", // For React-Native
}
```

It's recommeneded to then run this in your test script e.g.

```json
"scripts": {
  "eslint": "eslint 'src/js/'",
  "test": "npm run eslint && npm run jest",
}
```
