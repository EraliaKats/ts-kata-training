/*
notes:
valid colours -> letters from a to m
valid control str -> includes only valid colour letters
return a fraction AS A STRING-> occurances of invalid colour leters in a control string
input string has >1 length + contains letters from a to z

function printerError
parameters: 
  - controlStr, string
return: string
---------------------------
set errorOccurances to be 0
if isValidControlStr(controlStr)
  return 0 out of length of controlStr in a string
else
  reassign errorOccurances to be countErrorOccurances(controlStr)
  return errorOccurances out of length of controlStr in a string
endif

=============================
function isValidControlStr
parameters:
  - controlStr, a string
return: boolean
---------------------------

if controlStr contains letter less than "a" or greater than "m" //probably use .find() 
  return false
else
  return true
endif 

=============================
function countErrorOccurances
paramters:
  - controlStrWithErrors, a string
return: number
------------------------------

set errors to be the result of filtering controlStrWithErrors
  // filter to only include letters other than "a" to "m"

set numOfErrors to the length of errors

return numOfErrors
===============================
*/

export function printerError(controlStr: string): string {

  let errorOccurances = 0

  const lettersInStr = controlStr.length

  if (isValidControlStr(controlStr)) {
    return `0/${lettersInStr}`
  } 
  else {
    errorOccurances = countErrorOccurances(controlStr)
    return `${errorOccurances}/${lettersInStr}`
  }
}

export function isValidControlStr(controlStr: string): boolean {
  const letters = controlStr.split("")
  const invalidLetters =letters.filter((letter: string)=> letter < "a" || letter > "m")
  if (invalidLetters.length>0){
    return false
  }
  return true
}

export function countErrorOccurances(controlStr: string): number {
  const letters = controlStr.split("")
  const invalidLetters =letters.filter((letter: string)=> letter < "a" || letter > "m")
  const numOfErrors = invalidLetters.length
  return numOfErrors
}