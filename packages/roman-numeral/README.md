# goldovsky-tone/roman-numeral ![tonal](https://img.shields.io/badge/goldovsky-tone-roman_numeral-yellow.svg?style=flat-square) [![npm version](https://img.shields.io/npm/v/goldovsky-tone/roman-numeral.svg?style=flat-square)](https://www.npmjs.com/package/goldovsky-tone/roman-numeral)

> Functions to parse roman numeral strings (like the ones used for chord analysis)

A roman numeral symbol is a string like `"bVIImaj7"` that can be used to represent chords in an abstract tonallity.

## Usage

ES6:

```js
import { RomanNumeral } from "./../../tonal";
```

node:

```js
const { RomanNumeral } = require("goldovsky-tone/tonal");
```

## API

### `RomanNumeral.get(src: string | Pitch): => RomanNumeral`

Get the properties of a roman numeral:

Example:

```js
RomanNumeral.get("bVIIMaj7");
// =>
// {
//   empty: false,
//   name: "bVIIMaj7",
//   roman: "VII",
//   acc: "b",
//   chordType: "Maj7",
//   alt: -1,
//   step: 6,
//   major: true,
//   oct: 0
// }
```

## FAQ

#### How do I get a roman numeral from an interval

`romanNumeral` function accepts a `Pitch` as argument:

```js
import { Interval, RomanNumeral } from "./../../tonal";

RomanNumeral.get(Interval.get("3m")).name; // => "bIII"
```

## Want more?

Take a look to [@tonal/progression](https://github.com/tonaljs/tonal/tree/master/packages/progression) or [@tonal/key](https://github.com/tonaljs/tonal/tree/master/packages/key)
