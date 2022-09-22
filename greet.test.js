import { greet } from "./greet.js";

//1 - You can write tests within one all-encompassing block.
test('returns the correct string if called greet("<name>")', () => {
  const message = greet("Jane");
  expect(message).toEqual("Hello Jane!");
  expect(greet()).toEqual("Hello stranger!");
  expect(greet("Martin")).toEqual("Hello coach!");
  expect(greet("Marc")).toEqual("Hello coach!");
  expect(greet("Ernst")).toEqual("Hello coach!");
});


//2 - You can define data first and then traverse each date for a separate test.
const testData = [
  ["Jane", "Hello Jane!"],
  [undefined, "Hello stranger!"],
  ["Martin", "Hello coach!"],
  ["Marc", "Hello coach!"],
  ["Ernst", "Hello coach!"],
];

test.each(testData)("returns correct names", (inputName, expectedWelcomeMessage) => {
  expect(greet(inputName)).toEqual(expectedWelcomeMessage);
});


//3 - You can write a test suite for individual self-contained test.
describe("greet", () => {
  it('returns a String "Hello Jane!" if called greet("Jane")', () => {
    const result = greet("Jane");
    expect(result).toBe("Hello Jane!");
  });

  it('returns "Hello stranger!" if called greet()', () => {
    const result = greet();
    expect(result).toBe("Hello stranger!");
  });

  it('returns "Hello coach!" if called greet("Martin"), greet("Marc") and greet("Ernst")', () => {
    expect(greet("Martin")).toBe("Hello coach!");
    expect(greet("Marc")).toBe("Hello coach!");
    expect(greet("Ernst")).toBe("Hello coach!");
  });
});
