/*
f(1000) ---> 887 (even digits: 8, 8)

f(1210) ---> 1201 (even digits: 2, 0)

f(10000) ---> 8887

f(500) ---> 487

f(487) ---> 467
*/

import {
  countEvenDigits,
  isDivisible,
  isPrime,
  primeWithEvenDigits,
} from "./3-primesWithEvenDigits";

test("returns closest prime number with max num of even digits under a given number ", () => {
  //   expect(primeWithEvenDigits(10000)).toStrictEqual(8887);
  expect(primeWithEvenDigits(1210)).toStrictEqual(1201);
});

test("returns correct number of even digits in an integer", () => {
  expect(countEvenDigits(487)).toStrictEqual(2);
});

test("returns true when number is divisible by a number other than itself and one", () => {
  expect(isDivisible(488)).toStrictEqual(true);
});

test("returns false when number is divisible only by itself and one", () => {
  expect(isDivisible(487)).toStrictEqual(false);
  expect(isDivisible(0)).toStrictEqual(false);
});

test("returns false when number is divisible only by itself and one", () => {
  expect(isPrime(487)).toStrictEqual(true);
  expect(isPrime(887)).toStrictEqual(true);
});
