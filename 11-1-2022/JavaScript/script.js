//Codewar Kata

// Challenge # 1 - Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  let str = "";
  for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) < 5) {
      str += "0";
    } else {
      str += "1";
    }
  }

  return str;
}

//Test log
// console.log(fakeBin("45385593107843568"));
// console.log(fakeBin("509321967506747"));
// console.log(fakeBin("366058562030849490134388085"));

// Better method of completing challenge:

// function fakeBin(x) {
//   return x
//     .split("")
//     .map((n) => (n < 5 ? 0 : 1))
//     .join("");
// }

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash(words) {
  return words.join(" ");
}

//Test log
// console.log();

// Better method of completing challenge:

// NONE

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 3 - Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let z = [];

  for (let i = x; i <= x * n; i += x) {
    z.push(i);
  }

  return z;
}

//Test log
// console.log(countBy(1, 10));
// console.log(countBy(2, 5));

// Better method of completing challenge:

// function countBy(x, n) {
//   var z = [];
//   for (i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;
// }

////////////////////////////////////////////////////////////////////////
