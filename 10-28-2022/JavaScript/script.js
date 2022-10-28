//Codewar Kata

// Challenge # 1 - You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  //Code goes here!

  if (arr.length === 2) {
    if (arr[0] === arr[1]) {
      if (arr[0] === 0) {
        return 0;
      }
      return -1;
    } else if (arr[0] === 0) {
      return 1;
    } else return 0;
  } else if (arr.length >= 3) {
    for (let i = 0; i < arr.length; i++) {
      let left = 0;
      let right = 0;
      arr.slice(0, i).map((el) => {
        return (left += el);
      });
      arr.slice(i + 1, arr.length).map((el) => {
        return (right += el);
      });
      if (left === right) {
        return i;
      } else continue;
    }

    if (
      arr.slice(0, arr.length - 1).reduce((total, num) => (total += num)) === 0
    ) {
      return arr.length - 1;
    } else if (
      arr.slice(1, arr.length).reduce((total, num) => (total += num)) === 0
    ) {
      return 0;
    }
    return -1;
  } else if (arr.length === 1) {
    return 0;
  } else return -1;
  return -1;
}

//Test log
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([8, 0])); //0
console.log(findEvenIndex([0, 8])); //1
console.log(findEvenIndex([8, 8])); //-1

// Better method of completing challenge:

// function findEvenIndex(arr) {
//   var left = 0,
//     right = arr.reduce(function (pv, cv) {
//       return pv + cv;
//     }, 0);
//   for (var i = 0; i < arr.length; i++) {
//     if (i > 0) left += arr[i - 1];
//     right -= arr[i];

//     if (left == right) return i;
//   }

//   return -1;
// }

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 -

// ENTER CODE HERE

//Test log
// console.log();
// console.log();
// console.log();

// Better method of completing challenge:

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 3 -

// ENTER CODE HERE

//Test log
// console.log();
// console.log();
// console.log();

// Better method of completing challenge:

////////////////////////////////////////////////////////////////////////
