# ESLint Config


## About
This repository includes a collection of eslint configs that can be combined to lint just about any project, and a default config for all projects that follow our recent patterns.


## Install

Install a specific version of the eslint-config with NPM. You can see a full list of versions [here](https://github.com/dabapps/eslint-config/releases).

```shell
npm i dabapps/eslint-config#v3.0.0 --save-dev
```

This will update your package.json automatically.

```json
"devDependencies": {
  "eslint-config": "eslint-config#v3.0.0",
}
```


## Configuration


### NPM scripts

Add the following scripts to your package.json

```json
{
  "scripts": {
    "lint": "eslint src/ tests/"
  }
}
```


### Default config

Create an `.eslintrc.json` in the route of the project. For most projects you can use the default config like so:

```json
{
  "extends": [
    "dabapps"
  ]
}
```

Explanation of the default config below


### Custom config

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


### Test config

Although it is possible to run eslint with different configs for tests, we have decided to instead use a single config, and globals defined at the top of files for tests.

This decision was made to avoid errors in our apps when accidentally using test globals, and to prevent people's editors from complaining about undefined globals when multiple configs are present (as it'd only use the main one, and not the tests one).
