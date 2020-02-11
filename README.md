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

Although it is possible to run eslint with different configs for tests, we have decided to instead use a single config, and globals defined at the top of files for tests.

This decision was made to avoid errors in our apps when accidentally using test globals, and to prevent people's editors from complaining about undefined globals when multiple configs are present (as it'd only use the main one, and not the tests one).

## Code of conduct

For guidelines regarding the code of conduct when contributing to this repository please review [https://www.dabapps.com/open-source/code-of-conduct/](https://www.dabapps.com/open-source/code-of-conduct/)


------------- TSLINT RULES from tslint-dabapps-config -------------
{
  "extends": [
    "tslint:recommended",
    "tslint-eslint-rules",
    "tslint-react"
  ],
  "rules": {
    "variable-name": [ ---------------- DONE, camelcase
      true,
      "check-format", ----------------- DONE, "always"
      "allow-leading-underscore", ----- DONE Default
      "allow-pascal-case" ------------- DONE Default
    ],
    "ordered-imports": [
      true,
      {
        "grouped-imports": true,
        "groups": [
          {
            "name": "node modules",
            "match": "^[@a-zA-Z]",
            "order": 0
          },
          {
            "name": "local modules",
            "match": "^[^@a-zA-Z]",
            "order": 1
          },
          {
            "name": "unknown",
            "match": null,
            "order": 2
          }
        ]
      }
    ],
    "quotemark": [true, "single", "jsx-double", "avoid-template"], ------- DONE, quotes, updated existing
    "linebreak-style": [true, "LF"], ------------------------------------- DONE updated existing
    "semicolon": [true, "always", "ignore-interfaces"], ------------------ DONE, semi, @typescript-eslint/semi (for "ignore-interfaces"), updated existing
    "max-line-length": [true, 120], -------------------------------------- DONE, max-len
    "indent": [true, "spaces"], ------------------------------------------ DONE, Use existing eslint rules
    "align": [ ----------------------------------------------------------- NO Equivalent yet
      true,
      "arguments",
      "elements",
      "members",
      "parameters",
      "statements"
    ],
    "trailing-comma": [
      true,
      {
        "multiline": { --------------------------------------------------- Done, comma-dangle + combine eslint
          "arrays": "always",
          "objects": "always",
          "functions": "never",
          "imports": "always",
          "exports": "always",
          "typeLiterals": "always"
        },
        "singleline": {
          "arrays": "never",
          "objects": "never",
          "functions": "never",
          "imports": "never",
          "exports": "never",
          "typeLiterals": "never"
        },
        "esSpecCompliant": true
      }
    ],
    "space-before-function-paren": [true, "always"], ------------------- Done, use Eslint
    "strict-type-predicates": true, ------------------------------------ NO Equivalent yet

    "object-literal-sort-keys": ---------------------------------------- Done, false, sort-keys
    "interface-name": false, ------------------------------------------- Done, @typescript-eslint/interface-name-prefix

    "triple-equals": true, --------------------------------------------- Done, same as Eslint
    "no-constant-condition": true, ------------------------------------- Done, same as Eslint
    "no-console": true, ------------------------------------------------ Done, same as Eslint
    "no-debugger": true, ----------------------------------------------- Done, same as Eslint
    "no-extra-boolean-cast": true, ------------------------------------- Done, same as Eslint
    "no-irregular-whitespace": true, ----------------------------------- Done, same as Eslint
    "no-multi-spaces": true, ------------------------------------------- Done, same as Eslint
    "no-consecutive-blank-lines": true, -------------------------------- Done, same as eslint, no-multiple-empty-lines
    "no-eval": true, --------------------------------------------------- Done, same as eslint
    "no-shadowed-variable": true, -------------------------------------- Done, same as eslint, no-shadow
    "no-trailing-whitespace": true, ------------------------------------ Done, same as eslint, no-trailing-spaces
    "no-extra-semi": true, --------------------------------------------- Done, same as eslint

    "radix": true, ----------------------------------------------------- Done, same as eslint
    "curly": true, ----------------------------------------------------- Done, same as eslint
    "no-switch-case-fall-through": true, ------------------------------- Done, same as eslint, no-fallthrough
    "switch-default": true, -------------------------------------------- Done, same as eslint, default-case
    "eofline": true, --------------------------------------------------- Done, same as eslint, eol-last

    "no-var-keyword": true,--------------------------------------------- Done, same as eslint, no-var
    "no-unused-expression": true, -------------------------------------- Done, no-unused-expressions

    "jsx-alignment": true,
    "jsx-boolean-value": [true, "never"],
    "jsx-equals-spacing": [true, "never"],
    "jsx-key": true,
    "jsx-no-bind": true,
    "jsx-no-lambda": true,
    "jsx-no-multiline-js": true,
    "jsx-no-string-ref": true,
    "jsx-self-close": true,
    "jsx-wrap-multiline": true
  }
