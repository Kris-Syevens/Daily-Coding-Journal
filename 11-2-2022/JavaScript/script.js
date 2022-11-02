//Codewar Kata

// Challenge # 1 - Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

var number = function (array) {
  return array.map((str, i) => {
    return `${i + 1}: ${str}`;
  });
};

//Test log
// console.log();

// Better method of completing challenge:

// NONE👏🏼👏🏼😊😊

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let odd = 0;
  let mySet = new Set(A);

  if (A.length === 1) {
    return A[0];
  } else {
    mySet.forEach((i) => {
      let checkInt = 0;
      for (let j = 0; j < A.length; j++) {
        if (i === A[j]) {
          checkInt += 1;
        }
      }
      console.log(checkInt);
      if (checkInt % 2 !== 0) {
        odd = i;
      }
    });
  }

  return odd;
}

//Test log
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
// console.log(findOdd([7]));
console.log(findOdd([0, 1, 0, 1, 0]));

// Better method of completing challenge:

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b); **VOTED HIGHEST BEST PRACTICE BUT NOT REALLY READABLE**

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 3 - Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x) {
  let product = x[0];
  for (let i = 1; i < x.length; i++) {
    product *= x[i];
  }
  return product;
}

//Test log
// console.log();
// console.log();
// console.log();

// Better method of completing challenge:

// const grow = (x) => x.reduce((a, b) => a * b);

////////////////////////////////////////////////////////////////////////
