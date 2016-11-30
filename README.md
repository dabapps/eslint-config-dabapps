# ESLint Config


## About
This repository includes a collection of eslint configs that can be combined to lint just about any project, and a default config for all projects that follow our recent patterns.


## Install

Install a specific version of the eslint-config with NPM. You can see a full list of versions [here](https://github.com/dabapps/eslint-config/releases).

```shell
npm i https://github.com/dabapps/eslint-config.git#v3.0.0 --save-dev
```

This will update your package.json automatically.

```json
"devDependencies": {
  "eslint-config": "https://github.com/dabapps/eslint-config.git#v3.0.0",
}
```


## Configuration


### NPM scripts

Add the following scripts to your package.json

```json
{
  "scripts": {
    "lint": "npm run lint-src && npm run lint-tests",
    "lint-src": "eslint -c .eslintrc.json src/",
    "lint-tests": "eslint -c .eslintrc-test.json tests/"
  }
}
```


### Default config

Create an `.eslintrc.json` in the route of the project. For most projects you can use the default config like so:

```json
{
  "extends": [
    "eslint-config"
  ]
}
```

Explanation of the default config below


### Custom config

But if you want to customise the project because, for example, this project is using a different ECMA version, module system, or framework, you can use a combination of the other configs available in this module. To replicate the default config for example, you could use the following:

```json
{
  "extends": [
    "eslint-config/commonjs",
    "eslint-config/browser",
    "eslint-config/es6",
    "eslint-config/react"
  ]
}
```

There's no need to extend the base config as all other configs extend the base anyway.


### Test config

If your project has tests (if it doesn't you're fired), create a second config named `.eslintrc-test.json`. This way you can have custom linting for your tests. A common pattern is to extend our existing `.eslintrc.json` and one of our test configs to allow globals like `describe` and `it` e.g.

```json
{
  "extends": [
    ".eslintrc.json",
    "eslint-config/jest"
  ]
}
```

You could also extend from any of the other configs in this module if necessary.
