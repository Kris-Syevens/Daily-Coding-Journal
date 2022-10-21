//Codewar Kata

// Challenge # 1 - Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n: number): string {
  //your code here
  return n < 10
    ? "Keep at it until you get it"
    : "Great, now move on to tricks";
}
//Test log
console.log(hoopCount(6));
console.log(hoopCount(10));
console.log(hoopCount(22));

// Better method of completing challenge:

// *** Provided the solution that is ranked 1st :) ***

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack: any[]): string {
  let str: string = "";
  haystack.filter((arrItem: any, index: number) => {
    if (arrItem === "needle") {
      str = "found the needle at position " + index;
    }
  });

  return str;
}
//Test log
console.log(
  findNeedle([
    "3",
    "123124234",
    null,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
console.log(
  findNeedle([
    "283497238987234",
    "a dog",
    "a cat",
    "some random junk",
    "a piece of hay",
    "needle",
    "something somebody lost a while ago",
  ])
);
console.log(
  findNeedle([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    8,
    7,
    5,
    4,
    3,
    4,
    5,
    6,
    67,
    5,
    5,
    3,
    3,
    4,
    2,
    34,
    234,
    23,
    4,
    234,
    324,
    324,
    "needle",
    1,
    2,
    3,
    4,
    5,
    5,
    6,
    5,
    4,
    32,
    3,
    45,
    54,
  ])
);

// Better method of completing challenge:

// export function findNeedle(haystack: any[]): string {
//   return "found the needle at position " + haystack.indexOf("needle");
// }

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 3 - Rock Paper Scissors - Let's play! You have to return which player won! In case of a draw return Draw!.

function rps(p1: string, p2: string): string {
  if (
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "rock" && p2 === "scissors")
  ) {
    return "Player 1 won!";
  } else if (
    (p1 === "rock" && p2 === "paper") ||
    (p1 === "paper" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "rock")
  ) {
    return "Player 2 won!";
  } else return "Draw!";
}
//Test log

console.log(rps("rock", "scissors"));
console.log(rps("scissors", "rock"));
console.log(rps("rock", "rock"));

// Better method of completing challenge:

// const beats: { [index: string]: string } = {
//   scissors: "paper",
//   paper: "rock",
//   rock: "scissors",
// };

// export function rps(p1: string, p2: string): string {
//   if (p1 === p2) return "Draw!";

//   if (beats[p1] == p2) return "Player 1 won!";
//   return "Player 2 won!";
// }

////////////////////////////////////////////////////////////////////////
