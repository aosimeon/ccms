import { add, Subtract } from "../extest";

describe("Addition", () => {
  it("Given 3 and 7 inputs should return 10", () => {
    const expected = 10;
    const actual = add(3, 7);
    expect(actual).toEqual(expected);
  });

  it("Given 4 and 2 inputs should return 6", () => {
    const expected = 6;
    const actual = add(4, 2);
    expect(actual).toEqual(expected);
  });
});

describe("Subtraction", () => {
  it("Given 3 and 7 inputs should return -4", () => {
    const expected = -4;
    const actual = Subtract(3, 7);
    expect(actual).toEqual(expected);
  });

  it("Given 4 and 2 inputs should return 2", () => {
    const expected = 2;
    const actual = Subtract(4, 2);
    expect(actual).toEqual(expected);
  });
});
