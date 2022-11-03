//Codewar Kata

// Challenge # 1 - Given an array of integers, return a new array with each value doubled.

function maps(x) {
  //
  return x.map((int) => int * 2);
}

//Test log

// Better method of completing challenge:

// **Best method voted at the time implemented above.**

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// EXAMPLE - - wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  // Code here
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let string = "";

    if (str[i] === " ") {
      continue;
    } else {
      for (let j = 0; j < str.length; j++) {
        if (i === j) {
          let char = str[j].toUpperCase();
          string += char;
        } else {
          string += str[j].toLowerCase();
        }
      }
    }
    arr.push(string);
  }

  return arr;
}

//Test log
console.log(wave("hello"));
console.log(wave("codewars"));
console.log(wave(""));
console.log(wave("Two words"));
console.log(wave(" gap "));

// Better method of completing challenge:

// function wave(str) {
//   let result = [];

//   str.split("").forEach((char, index) => {
//     if (/[a-z]/.test(char)) {
//       result.push(
//         str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
//       );
//     }
//   });

//   return result;
// }
