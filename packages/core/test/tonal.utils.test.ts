import { fillStr } from "../index";

describe("goldovsky-tone/core", () => {
  test("fillStr", () => {
    expect(fillStr("#", 5)).toEqual("#####");
  });
});
