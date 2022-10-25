//Codewar Kata

// Challenge # 1 - It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

//Test log
console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));

// Better method of completing challenge:

//Implemented best practice on my own! 👏🏼👏🏼

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// function century(year) {
//   // Code here
//   if (Number(String(year)[-2]) > 0 || Number(String(year)[-1]) > 0) {
//     if (year > 1000) {
//       return Number(String(year).slice(0, 2)) + 1;
//     }

//     if (year > 101 && year <= 1000) {
//       return Number(String(year).slice(0, 1)) + 1;
//     }

//     if (year < 101) return 1;
//   }
// }

function century(year) {
  if (year % 100 === 0) {
    return year / 100;
  } else if (year % 100 > 0) {
    return Math.ceil(year / 100);
  } else return 1;
}

//Test log
console.log(century(1705));
console.log(century(1900));
console.log(century(89));
console.log(century(134985));

// Better method of completing challenge:

// const century = (year) => Math.ceil(year / 100);

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 3 - All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

//Test log
console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));

// Better method of completing challenge:

//Implemented best practice on my own! 👏🏼👏🏼

///////////////////////////////////////////////////////////////////////
