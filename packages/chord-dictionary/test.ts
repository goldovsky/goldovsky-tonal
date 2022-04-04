import ChordDictionary from "./index";
import ChordType from "./../../chord-type";

describe("goldovsky-tone/chord-dictionary", () => {
  test("alias of ChordType", () => {
    expect(ChordDictionary).toEqual(ChordType);
  });
});
