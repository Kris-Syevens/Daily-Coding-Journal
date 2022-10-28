//Codewar Kata

// Challenge # 1 -The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  let hash = `#${str
    .split(" ")
    .map((el) => {
      if (el.length > 0) {
        let string = el[0].toUpperCase() + el.substr(1);
        el = string;
        return el;
      }
    })
    .join("")}`;

  if (str === "" || hash.length > 140 || hash.length === 1) {
    return false;
  } else {
    return hash;
  }
}

//Test logs
// console.log(generateHashtag(""));
// console.log(generateHashtag(" ".repeat(200)));
// console.log(generateHashtag("Do We have A Hashtag"));
// console.log(generateHashtag("Codewars"));
// console.log(generateHashtag("Codewars Is Nice"));
// console.log(generateHashtag("Codewars is nice"));
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
// console.log(
//   generateHashtag(
//     "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
//   )
// );

////////////////////////////////////////////////////////////////////////
