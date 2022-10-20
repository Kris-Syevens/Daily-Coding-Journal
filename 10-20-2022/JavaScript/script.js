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
