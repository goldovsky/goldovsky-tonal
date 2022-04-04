# goldovsky-tone/tonal ![tonal](https://img.shields.io/badge/goldovsky-tone-modules-yellow.svg?style=flat-square) [![npm version](https://img.shields.io/npm/v/goldovsky-tone/tonal.svg?style=flat-square)](https://www.npmjs.com/package/goldovsky-tone/tonal)

`goldovsky-tone/tonal`

Tonal library

## Install

```bash
npm i --save goldovsky-tone/tonal
# or
yarn add goldovsky-tone/tonal
```

## Usage

Import:

```js
// ES6
import { Note, Key } from "./../../tonal";
// node
const { Note, Key } = require("goldovsky-tone/tonal");
// browser
const { Note, Key } = window.Tonal;
```

Use:

```js
Note.transpose("A4", "5P");
Key.majorKey("Gb");
```

See [README.md](/#documentation) for documentation.
