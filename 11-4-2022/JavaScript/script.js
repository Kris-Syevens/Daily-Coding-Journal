//Codewar Kata

// Challenge # 1 - There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function (busStops) {
  // Good Luck!
  let remainingPeople = 0;
  for (let i = 0; i < busStops.length; i++) {
    remainingPeople += busStops[i][0] - busStops[i][1];
  }
  return remainingPeople;
};

//Test log
console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); // 5

// Better method of completing challenge:

// const number = (busStops) =>
//   busStops.reduce((rem, [on, off]) => rem + on - off, 0);

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
  // your code
  let errNum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 109) {
      errNum += 1;
    }
  }

  return `${errNum}/${s.length}`;
}

//Test log
console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz") // 3
);

// Better method of completing challenge:

// Best method implemented

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 3 - Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : false;
}

//Test log
console.log(setAlarm(true, true)); // false
console.log(setAlarm(false, true)); // false
console.log(setAlarm(false, false)); // false
console.log(setAlarm(true, false)); // true

// Better method of completing challenge:

const setAlarm = (employed, vacation) => employed && !vacation;

////////////////////////////////////////////////////////////////////////
