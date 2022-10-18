// Code Wars
// #1 - Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.
var past = function (h, m, s) {
  var hoursToSeconds = h * 60 * 60;
  var minsToSeconds = m * 60;
  var totalSeconds = hoursToSeconds + minsToSeconds + s;
  var totalMilliseconds = totalSeconds * 1000;
  return totalMilliseconds;
};
//Test Log
console.log(past(0, 1, 1));
// Code Wars
// #2 - Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// let invert = (array) => {
//   return array.map((int) => {
//     if (int === 0) {
//       return -0;
//     } else if (int == null) {
//       return null;
//     } else if (int > 0) {
//       return (int -= int * 2);
//     } else {
//       return (int += Math.abs(int) * 2);
//     }
//   });
// };
// console.log(invert([1, -2, 3, -4, 5]));
// console.log(invert([0]));
// console.log(invert([]));
var invert = function (array) {
  return array.map(function (int) {
    return -int;
  });
};
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([0]));
console.log(invert([]));
// Code Wars
// #3 - Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
var even_or_odd = (number) => (number % 2 === 0 ? "Even" : "Odd");

console.log(even_or_odd(2));
console.log(even_or_odd(16));
console.log(even_or_odd(17));
console.log(even_or_odd(31));
