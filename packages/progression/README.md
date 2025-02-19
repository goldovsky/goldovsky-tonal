# goldovsky-tone/progression ![tonal](https://img.shields.io/badge/goldovsky-tone-progression-yellow.svg?style=flat-square) [![npm version](https://img.shields.io/npm/v/goldovsky-tone/progression.svg?style=flat-square)](https://www.npmjs.com/package/goldovsky-tone/progression)

> Convert chord list to roman numerals analysis chord and reverse

## Usage

ES6:

```js
import { Progression } from "./../../tonal";
```

node:

```js
const { Progression } = require("goldovsky-tone/tonal");
```

## API

### `Progression.fromRomanNumerals(keyTonic: string, chordProgression: string[]) => string[]`

Given a tonic and a chord progression expressed in roman numeral analisys chords, returns the progression expressed in leadsheet chords.

```js
Progression.fromRomanNumerals("C", ["IMaj7", "IIm7", "V7"]);
// => ["CMaj7", "Dm7", "G7"]
```

### `Progression.toRomanNumerals(keyTonic: string, chordProgression: string[]) => string[]`

The opposite of `fromRomanNumerals`. Given a tonic and a chord progression expressed in leadsheet chords, returns the progression using roman numeral analysis chords.

```js
Progression.toRomanNumerals("C", ["CMaj7", "Dm7", "G7"]);
// => "IMaj7", "IIm7", "V7"]
```

## Resources

- [Roman numeral analisys](https://en.wikipedia.org/wiki/Roman_numeral_analysis)
- [Leadsheet chord symbols](https://en.wikipedia.org/wiki/Lead_sheet)
