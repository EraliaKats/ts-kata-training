import {
  countErrorOccurances,
  isValidControlStr,
  printerError,
} from "./0-printerError";

test("return correct fraction when given a valid control string", () => {
  expect(printerError("aaaaaa")).toBe("0/6");
});

test("return correct fraction when given an invalid control string", () => {
  expect(printerError("aaaaaza")).toBe("1/7");
});

test("returns false if control string is invalid", () => {
  expect(isValidControlStr("aaaaaaaaaaaz")).toStrictEqual(false);
  expect(isValidControlStr("mmdfepifj")).toStrictEqual(false);
  expect(isValidControlStr("abcdefg")).toStrictEqual(true);
});

test("returns right number of error occurances in an invalid control string", () => {
  expect(countErrorOccurances("aaaaaaaxyz")).toStrictEqual(3);
});
