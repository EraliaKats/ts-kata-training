import { validParentheses } from "./2-validParentheses";

test("returns true if the total of valid open and closing parentheses is the same", () => {
  expect(validParentheses("()")).toStrictEqual(true);
  expect(validParentheses("(())((()())())")).toStrictEqual(true);
  expect(validParentheses("()()")).toStrictEqual(true);
  expect(validParentheses("")).toStrictEqual(true);
});

test("returns false if the total of valid open and closing parentheses isn't the same", () => {
  expect(validParentheses("())(")).toStrictEqual(false);
  expect(validParentheses("(())((()())()")).toStrictEqual(false);
  expect(validParentheses(")()(())")).toStrictEqual(false);
});
