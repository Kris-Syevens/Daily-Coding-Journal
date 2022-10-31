//Codewar Kata

// Challenge # 1 - We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function (str) {
  return Number(str);
};

// //Test log

// console.log(stringToNumber("1234"));

// Better method of completing challenge:

// var stringToNumber = function (str) {
//   return parseInt(str);
// };

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  //code me
  let sum = 0;
  if (String(num).length > 1) {
    let placeholder = num;
    do {
      let current = 1;
      for (let i = 0; i < String(placeholder).length; i++) {
        current *= Number(String(placeholder)[i]);
      }
      placeholder = current;
      sum += 1;
    } while (String(placeholder).length > 1);
  }

  return sum;
}

//Test log
console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));

// Better method of completing challenge:

// function persistence(num) {
//    var times = 0;

//    num = num.toString();

//    while (num.length > 1) {
//      times++;
//      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//    }

//    return times;
// }

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 3 - Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet(name, owner) {
  // Add code here
  return owner === name ? "Hello boss" : "Hello guest";
}

//Test log
console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));

// Better method of completing challenge:

////////////////////////////////////////////////////////////////////////
