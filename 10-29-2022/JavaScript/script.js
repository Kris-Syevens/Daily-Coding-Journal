//Codewar Kata

// Challenge # 1 - Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

function encrypt(text, n) {
  let encryptMe = text;
  if (text === null) {
    return text;
  }
  if (!text || n > 0) {
    for (let i = 0; i < n; i++) {
      let odds = "";
      let evens = "";
      for (let j = 0; j < encryptMe.length; j += 2) {
        evens += encryptMe[j];
      }
      for (let k = 1; k < encryptMe.length; k += 2) {
        odds += encryptMe[k];
      }
      encryptMe = odds + evens;
    }
  } else return text;
  return encryptMe;
}

function decrypt(encryptedText, n) {
  let decryptMe = encryptedText;
  let oddsIndex = 0;
  let evensIndex = 0;

  if (encryptedText === null) {
    return encryptedText;
  }

  if (!encryptedText || n > 0) {
    for (let i = 0; i < n; i++) {
      let odds = "";
      let evens = "";
      let arr = [];

      if (decryptMe.length % 2 === 0) {
        // EVEN LENGTH STRING
        odds = decryptMe.slice(0, decryptMe.length / 2);
        evens = decryptMe.slice(decryptMe.length / 2);

        for (let j = 0; j < decryptMe.length; j += 2) {
          let x = evensIndex;
          arr[j] = evens[x];
          evensIndex++;
        }

        for (let k = 1; k < decryptMe.length; k += 2) {
          let x = oddsIndex;
          arr[k] = odds[x];
          oddsIndex++;
        }
      } else {
        // ODD LENGTH STRING
        odds = decryptMe.slice(0, (decryptMe.length - 1) / 2);
        evens = decryptMe.slice((decryptMe.length - 1) / 2);

        for (let j = 0; j < decryptMe.length; j += 2) {
          let x = evensIndex;
          arr[j] = evens[x];
          evensIndex++;
        }

        for (let k = 1; k < decryptMe.length; k += 2) {
          let x = oddsIndex;
          arr[k] = odds[x];
          oddsIndex++;
        }
      }
      decryptMe = arr.join("");
      evensIndex = 0;
      oddsIndex = 0;
    }
  } else return encryptedText;

  return decryptMe;
}

//Test log
// console.log(encrypt("This is a test!", 2));
console.log(decrypt(" Tah itse sits!", 3));
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));

// Better method of completing challenge:

// function encrypt(text, n) {
//   console.log(text, n);
//   if (!text || n <= 0) return text;
//   while (n--) {
//     let ans = "";
//     for (let i = 1; i < text.length; i += 2) {
//       ans += text[i];
//     }
//     for (let i = 0; i < text.length; i += 2) {
//       ans += text[i];
//     }
//     text = ans;
//   }
//   return text;
// }

// function decrypt(encryptedText, n) {
//   if (!encryptedText || n <= 0) return encryptedText;
//   const ans = new Array(encryptedText.length);
//   while (n--) {
//     let j = 0;
//     for (let i = 1; i < ans.length; i += 2) {
//       ans[i] = encryptedText[j++];
//     }
//     for (let i = 0; i < ans.length; i += 2) {
//       ans[i] = encryptedText[j++];
//     }
//     encryptedText = ans.join("");
//   }
//   return encryptedText;
// }

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
