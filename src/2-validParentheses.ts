export function validParentheses(parentheses: string): boolean {
  if (parentheses === "") {
    return true;
  } else if (parentheses[0] === ")" || countParentheses(parentheses) !== 0) {
    return false;
  } else if (hasValidClosing(parentheses)) {
    return true;
  }
  return false;
}

function countParentheses(parentheses: string): number {
  const numOfOpening = parentheses
    .split("")
    .filter((char) => char === "(").length;
  const numOfClosing = parentheses
    .split("")
    .filter((char) => char === ")").length;
  return numOfOpening - numOfClosing;
}

export function hasValidClosing(parentheses: string): boolean {
  const numOfOpening = parentheses
    .split("")
    .filter((char) => char === "(").length;
  let validClosingCounter = 0;
  let counterpartClosingIndex = 0;
  let indexToLookFrom = 0;
  for (let i = 0; i < parentheses.length; i++) {
    if (parentheses[i] === "(") {
      indexToLookFrom = Math.max(i, counterpartClosingIndex + 1);
      counterpartClosingIndex = parentheses
        .split("")
        .indexOf(")", indexToLookFrom);
      if (counterpartClosingIndex === -1) {
        return false;
      } else {
        validClosingCounter++;
      }
    }
  }
  if (validClosingCounter === numOfOpening) {
    return true;
  }
  return false;
}
