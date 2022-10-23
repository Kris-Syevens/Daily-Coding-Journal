//Codewar Kata

// Challenge # 1 - Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
  let arr = [];

  if (str.length > 0) {
    for (let i = 0; i < str.length; i += 2) {
      arr.push(str.slice(i, i + 2));
    }

    if (arr[arr.length - 1].length === 1) {
      arr[arr.length - 1] += "_";
    }
    return arr;
  } else return arr;
}

//Test log
// console.log(solution("abcdef"));
// console.log(solution("abcdefg"));
// console.log(solution(""));

// Better method of completing challenge:

////////////////////////////////////////////////////////////////////////

//Codewar Kata

// Challenge # 2 - Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string) {
  let arr = string.split(" ");
  let newArr = arr.map((el) => {
    if (el.length >= 5) {
      let reverseStr = "";
      for (let i = el.length - 1; i >= 0; i--) {
        reverseStr += el[i];
      }
      return (el = reverseStr);
    } else return el;
  });
  return newArr.join(" ");
}

spinWords("Hey fellow warriors");

//Test log
// console.log();
// console.log();
// console.log();

// Better method of completing challenge:

////////////////////////////////////////////////////////////////////////

//Codewar Kata
