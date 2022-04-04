import AbcNotation from "./../abc-notation";
import * as Array from "./../array";
import Chord from "./../chord";
import ChordType from "./../chord-type";
import Collection from "./../collection";
import * as Core from "./../core";
import DurationValue from "./../duration-value";
import Interval from "./../interval";
import Key from "./../key";
import Midi from "./../midi";
import Mode from "./../mode";
import Note from "./../note";
import Pcset from "./../pcset";
import Progression from "./../progression";
import Range from "./../range";
import RomanNumeral from "./../roman-numeral";
import Scale from "./../scale";
import ScaleType from "./../scale-type";
import TimeSignature from "./../time-signature";

export * from "./../core";

// deprecated (backwards compatibility)
const Tonal = Core;
const PcSet = Pcset;
const ChordDictionary = ChordType;
const ScaleDictionary = ScaleType;

export {
  AbcNotation,
  Array,
  Chord,
  ChordType,
  Collection,
  Core,
  DurationValue,
  Note,
  Interval,
  Key,
  Midi,
  Mode,
  Pcset,
  Progression,
  Range,
  RomanNumeral,
  Scale,
  ScaleType,
  TimeSignature,
  // backwards API compatibility (3.0)
  Tonal,
  PcSet,
  ChordDictionary,
  ScaleDictionary,
};
