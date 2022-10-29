//Codewar Kata

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

let repeatStr = (n, s) => s.repeat(n);

//Test log
console.log(repeatStr(5, "kris"));

//Codewar Kata

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

let squareSum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 2;
  }

  return sum;
};

//Test log
console.log(squareSum([1, 2, 2]));

//Codewar Kata

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

let boolToWord = (bool) => (bool ? "Yes" : "No");

//Test log
console.log(boolToWord(false));
