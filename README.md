# mac-icons

[![Travis](https://img.shields.io/travis/vutran/mac-icons/develop.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/vutran/mac-icons) [![Coveralls branch](https://img.shields.io/coveralls/vutran/mac-icons/develop.svg?maxAge=2592000&style=flat-square)](https://coveralls.io/github/vutran/mac-icons) [![license](https://img.shields.io/github/license/vutran/mac-icons.svg?maxAge=2592000&style=flat-square)](LICENSE)

> Retrieve an icon for a given file (Darwin only)

## Install

```bash
$ npm install --save mac-icons
```

## Usage

```js
const osApps = require('mac-icons');

osApps.getAll().then(apps => {
  // array of apps...
  apps.forEach(app => {
    console.log(app);
  });
})
```

## API

### getIcon(filePath)

Returns a `Promise` with the base64 encoded string of the icon.

#### filePath

Type: `String`

The file's path.

## License

MIT © [Vu Tran](https://github.com/vutran/)
