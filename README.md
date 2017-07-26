# tslint-config-prettier-ext

[![npm](https://img.shields.io/npm/v/tslint-config-prettier-ext.svg)](https://www.npmjs.com/package/tslint-config-prettier-ext)
[![build](https://img.shields.io/travis/ikatyang/tslint-config-prettier-ext/master.svg)](https://travis-ci.org/ikatyang/tslint-config-prettier-ext/builds)

disable all prettier-related rules

[Changelog](https://github.com/ikatyang/tslint-config-prettier-ext/blob/master/CHANGELOG.md)

## Features

- fully tested
- support rules from
  - [tslint](https://github.com/palantir/tslint)

## Install

```sh
# using npm
npm install --save-dev tslint-config-prettier-ext

# using yarn
yarn add --dev tslint-config-prettier-ext
```

## Usage

(tslint.json)

```json
{
  "extends": ["tslint-config-prettier-ext"]
}
```

## Development

```sh
# lint
yarn run lint

# build helpers
yarn run build

# generate rules.json
yarn run generate

# test
yarn run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
