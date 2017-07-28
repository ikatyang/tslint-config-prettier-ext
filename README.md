# tslint-config-prettier-ext

[![npm](https://img.shields.io/npm/v/tslint-config-prettier-ext.svg)](https://www.npmjs.com/package/tslint-config-prettier-ext)
[![build](https://img.shields.io/travis/ikatyang/tslint-config-prettier-ext/master.svg)](https://travis-ci.org/ikatyang/tslint-config-prettier-ext/builds)
[![dependencies](https://img.shields.io/david/ikatyang/tslint-config-prettier-ext.svg)](https://david-dm.org/ikatyang/tslint-config-prettier-ext)
[![devDependencies](https://img.shields.io/david/dev/ikatyang/tslint-config-prettier-ext.svg)](https://david-dm.org/ikatyang/tslint-config-prettier-ext?type=dev)

disable all prettier-related tslint rules

[Changelog](https://github.com/ikatyang/tslint-config-prettier-ext/blob/master/CHANGELOG.md)

## Features

- fully tested
- support rules from
  - [codelyzer](https://github.com/mgechev/codelyzer)
  - [tslint](https://github.com/palantir/tslint)
  - [tslint-consistent-codestyle](https://github.com/ajafff/tslint-consistent-codestyle)
  - [tslint-divid](https://github.com/jonaskello/tslint-divid)
  - [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)
  - [tslint-immutable](https://github.com/jonaskello/tslint-immutable)
  - [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)
  - [tslint-misc-rules](https://github.com/jwbay/tslint-misc-rules)
  - [tslint-react](https://github.com/palantir/tslint-react)
  - [vrsource-tslint-rules](https://github.com/vrsource/vrsource-tslint-rules)

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
