import ScaleDictionary from "./index";
import ScaleType from "./../../scale-type";

describe("goldovsky-tone/scale-dictionary", () => {
  test("alias of ScaleType", () => {
    expect(ScaleDictionary).toEqual(ScaleType);
  });
});
