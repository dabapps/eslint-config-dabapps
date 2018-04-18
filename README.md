# ESLint Config


## About
This repository includes a collection of eslint configs that can be combined to lint just about any project, and a default config for all projects that follow our recent patterns.


## Install

Install a specific version of the eslint config with NPM. You can see a full list of versions [here](https://github.com/dabapps/eslint-config-dabapps/releases).

```shell
npm i dabapps/eslint-config-dabapps#v3.0.0 --save-dev
```

This will update your package.json automatically.

```json
"devDependencies": {
  "eslint-config-dabapps": "dabapps/eslint-config-dabapps#v3.0.0",
}
```


## Configuration


### NPM Scripts

Add the following scripts to your package.json

```json
{
  "scripts": {
    "lint": "eslint src/ tests/"
  }
}
```


### Default Config

Create an `.eslintrc.json` in the route of the project. For most projects you can use the default config like so:

```json
{
  "extends": [
    "dabapps"
  ]
}
```

Explanation of the default config below


### Custom Config

But if you want to customise the project because, for example, this project is using a different ECMA version, module system, or framework, you can use a combination of the other configs available in this module. To replicate the default config for example, you could use the following:

```json
{
  "extends": [
    "dabapps/commonjs",
    "dabapps/browser",
    "dabapps/es6",
    "dabapps/react"
  ]
}
```

There's no need to extend the base config as all other configs extend the base anyway.


#### React Native

Simply extend the base config, and the react-native config.

```
{
  "extends": [
    "dabapps",
    "dabapps/react-native"
  ]
}
```


### Test Config

You can add additional eslint configs within your tests directory to add the relevant globals for your test suite e.g.

```
{
  "extends": [
    "dabapps/jest"
  ]
}
```

Note: do not add these to the main eslint config in the project route.

