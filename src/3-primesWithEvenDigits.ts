/*
Find the closest prime number under a certain integer n that has the 
maximum possible amount of even digits.

function primeWithEvenDigits
parameters:
    - num, a positive integer
return: number
-------------------

//num will be between 1000 and 5000000

set currentMaxPrime to be 0
set primesToCheck to be an empty array
set numOfEvenDigits to be 0


    if isPrime(num) is true
        push num into primesToCheck
            for each prime of primesToCheck
                if countEvenDigits(prime) greater than numOfEvenDigits  
                    currentMaxPrime = prime
                    numOfEvenDigits = countEvenDigits(prime)
                else 
                    currentMaxPrime = max between prime and currentMaxPrime
                endif
            endfor
    endif

    return currentMaxPrime
====================
function isPrime
parameters:
    - num, an integer
return: boolean
--------------------
if isDivisible is true
    return false
endif

return true
===================
function isDivisible
parameters:
    - num, an integer
return: boolean
--------------------
set divisors to be [2,3,5,7,9,11]
    for each divisor of divisors
        if num modulo divisor is 0
            return true
        endif
    endfor
return false
===================
function countEvenDigits
parameters:
    - num, an integer
return: number
------------------
set evenDigitsCounter to be 0
for each digit in num
    if digit modulo 2 is 0
         increment evenDigitsCounter by 1
    endif
return evenDigitsCounter
*/

export function primeWithEvenDigits(num: number): number {
  let currentMaxPrime = 0;
  const primesToCheck = [];
  let currentMaxNumOfEvenDigits = 0;

  // for each integer below num
  for (let numToCheck = 0; numToCheck < num; numToCheck++) {
    if (isPrime(numToCheck)) {
      primesToCheck.push(numToCheck);
      // console.log({ primesToCheck: primesToCheck });
      for (const prime of primesToCheck) {
        if (countEvenDigits(prime) > currentMaxNumOfEvenDigits) {
          currentMaxPrime = prime;
          currentMaxNumOfEvenDigits = countEvenDigits(prime);
        } else {
          currentMaxPrime = Math.max(prime, currentMaxPrime);
        }
        // console.log({ currentMaxPrime: currentMaxPrime });
      }
    }
  }

  return currentMaxPrime;
}

export function countEvenDigits(num: number): number {
  let evenDigitsCounter = 0;
  const digits: number[] = [];
  num
    .toString()
    .split("")
    .forEach((dig) => digits.push(parseInt(dig)));
  for (const digit of digits) {
    if (digit % 2 === 0) {
      evenDigitsCounter++;
    }
  }
  return evenDigitsCounter;
}

export function isDivisible(num: number): boolean {
  const divisors = [2, 3, 5, 7, 9, 11, 17];
  // I need to revisit divisors, 17 is prime but isn't included in divisors
  for (const divisor of divisors) {
    if (num > 0 && num % divisor === 0) {
      return true;
    }
  }
  return false;
}

export function isPrime(num: number): boolean {
  if (isDivisible(num)) {
    return false;
  }
  return true;
}
