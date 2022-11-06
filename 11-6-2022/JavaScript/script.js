//Codewar Kata

// Challenge # 1 - Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

//Test log
console.log(removeExclamationMarks("I love you!"));
console.log(
  removeExclamationMarks(
    "Happy Birthday My Lovely AraBella!!! Daddy loves you!!!!!!"
  )
);

// Better method of completing challenge:

// function removeExclamationMarks(s) {
//   return s.replace(/!/gi, "");
// }

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  // ...
  let str = "";
  for (let i = 0; i < word.length; i++) {
    let count = 0;
    for (let j = 0; j < word.length; j++) {
      if (word.toLowerCase()[i] === word.toLowerCase()[j]) {
        count += 1;
      }
    }
    if (count > 1) {
      str += ")";
    } else {
      str += "(";
    }
  }
  return str;
}

//Test log
console.log(duplicateEncode("din"));
