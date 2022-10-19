//Codewar Kata

// Challenge # 1 - Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

let descendingOrder = (n) => {
  let numStr = n.toString();
  let numArr = [];
  for (let char of numStr) {
    numArr.push(Number(char));
  }
  numArr.sort((a, b) => b - a);
  numStr = numArr.join("");
  return Number(numStr);
};

//Test log
console.log(descendingOrder(123456789));
console.log(descendingOrder(0));

// Better method of doing above - function descendingOrder(n){return parseInt(String(n).split('').sort().reverse().join(''))}

// Challenge # 2 -

//Test log
console.log();

// Challenge # 3 -

//Test log
console.log();
