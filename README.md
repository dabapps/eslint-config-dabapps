# DabApps ESLint Configuration

## Install

If there's a suitable version of eslint-config, include the eslint-config in your package.json.
Recommended to pin a specific version.

```json
"devDependencies": {
  "eslint-config": "git://github.com/dabapps/eslint-config.git#1.0.0",
}
```

If you need additional plugins or some slightly different config, you can just copy the rules & create your own eslintrc file (but this shouldn't be nessecary).

You'll also need to include eslint & any other plugins that are needed in your package.json.
You can find out suitable versions from eslint-config's package.json.

```json
"devDependencies": {
  "eslint": "=1.5.1",
  "eslint-plugin-react": "=3.5.0"
}
```

## Running eslint

Add a script like the following to your package.json (-c defines the config location).

```json
"scripts": {
  "eslint": "eslint -c node_modules/eslint-config/.eslintrc 'src/js/'",
}
```

It's recommeneded to then run this in your test script e.g.

```json
"scripts": {
  "test": "npm run eslint && npm run jest",
}
```
