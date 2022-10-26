//Codewar Kata

// Challenge # 1 - Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name: string): string {
  return name.toLowerCase()[0] === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

//Test log
console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("raul"));

// Better method of completing challenge:

// Executed best possible practice at the time

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name: string): string {
  return `Hello, ${name} how are you doing today?`;
}

//Test log
console.log(greet("Ryan"));
console.log(greet("Shingles"));
console.log();

// Better method of completing challenge:

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 3 - Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str: string): string {
  // Your code here
}

//Test log
// console.log();
// console.log();
// console.log();

// Better method of completing challenge:

////////////////////////////////////////////////////////////////////////
