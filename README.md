# tslint-config-prettier-ext

[![npm](https://img.shields.io/npm/v/tslint-config-prettier-ext.svg)](https://www.npmjs.com/package/tslint-config-prettier-ext)
[![build](https://img.shields.io/travis/ikatyang/tslint-config-prettier-ext/master.svg)](https://travis-ci.org/ikatyang/tslint-config-prettier-ext/builds)

disable all prettier-related tslint rules

[Changelog](https://github.com/ikatyang/tslint-config-prettier-ext/blob/master/CHANGELOG.md)

## Features

- fully tested
- support rules from
  - [tslint](https://github.com/palantir/tslint)
  - [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)
  - [tslint-react](https://github.com/palantir/tslint-react)

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
  "extends": ["your-tslint-config", "tslint-config-prettier-ext"]
}
```

**NOTE**: make sure `tslint-config-prettier-ext` is at the end.

## Development

```sh
# lint
yarn run lint

# build helpers
yarn run build

# format sources
yarn run format

# generate rules.json
yarn run generate

# test
yarn run test
```

## Related

- [tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier)

## License

MIT © [Ika](https://github.com/ikatyang)
