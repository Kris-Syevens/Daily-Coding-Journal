//Codewar Kata

// Challenge # 1 - An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str) {
  //...
  let strSet = new Set(str.toLowerCase().split(""));
  let compStr = [...strSet].join("");
  return str.toLowerCase() === compStr;
}

//Test log
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false

// Better method of completing challenge:

// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }

////////////////////////////////////////////////////////////////////////
