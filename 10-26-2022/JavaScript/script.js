//Codewar Kata

// Challenge # 1 - Complete the solution so that it reverses the string passed into it.

const solution = (str) => str.split("").reverse().join("");

//Test log
console.log(solution("world"));
console.log(solution("hello"));
console.log(solution(""));

// Better method of completing challenge:

// Implemented best practice.

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  } else if (d >= 3) {
    return d * 40 - 20;
  } else return d * 40;
}

//Test log
// console.log();
// console.log();
// console.log();

// Better method of completing challenge:

// similar logic to best practice but less descriptive.

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 3 - Very simple, given an integer or a floating-point number, find its opposite.

const opposite = (number) => (number > 0 ? number * -1 : number * -1);

//Test log
console.log(opposite(1));
console.log(opposite(0));
console.log(opposite(4.25));
console.log(opposite(3.3333333));
console.log(opposite(-12525220.3325));

// Better method of completing challenge:

// function opposite(number) {
//   return -number;
// }

////////////////////////////////////////////////////////////////////////
