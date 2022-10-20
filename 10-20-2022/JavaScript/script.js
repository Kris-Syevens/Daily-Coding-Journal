//Codewar Kata

// Challenge # 1 - Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (let sheep of arrayOfSheep) {
    if (sheep === true) sum += 1;
  }
  return sum;
}

//Test log
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// Better method of completing challenge:

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true;
  } else return false;
}

//Test log
console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 1));
console.log(lovefunc(0, 0));

// Better method of completing challenge:

// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 3 - Convert number to reversed array of digits Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((n) => (n = Number(n)))
    .reverse();
}

//Test log
console.log(digitize(35231));
console.log(digitize(0));

// Better method of completing challenge:

// function digitize(n) {
//   return String(n).split("").map(Number).reverse();
// }

////////////////////////////////////////////////////////////////////////
