/*
PROBLEM
- input:
  - a string of plain text containig both alphabetic and non-alphabetic characters
  - a string as keyword for encryption
- output: a new encrypted string
- rules:
  - only letters are encrypted against the keyword
  - each letter of the keyword represents a shift value for the corresponding character in the plain text, i.e., the index of that letter in the alphabet (0 - 25)
  - the case of the keyword doesn't matter
  - the case of the plain text matters: encrypted letter should have the same case as the original letter

TEST CASES

DS 
- use a string to represent the alphabet in lowercase
- use an empty string to build the result incrementally

ALGO 
- create a string containing all lowercase letters
- create a string containing all uppercase letters
- create an empty string as result
- iterate through the plain text string, for each letter:
  - initialize the position in keyword to 0 => pos
  - IF the current char is a letter:
    - get the alphabetic index of the corresponding char in keyword at the `pos` and store it as `key`: pos = pos % keyword.length
    - get the new letter using the corresponding alphabet, the letter, and the `pos`
  - ELSE:
    - concatenate the non-alphabetic letter to result as is
- return result
*/

function vigenereEncrypt(plaintext, keyword) {
  // - create a string containing all lowercase letters
  // - create a string containing all uppercase letters
  // - create an empty string as result
  // - initialize the position in keyword to 0 => pos
  // - iterate through the plain text string, for each letter:
  //   - IF the current char is a letter:
  //     - get the alphabetic index of the corresponding char in keyword at the `pos` and store it as `key`: pos = pos % keyword.length
  //     - get the new letter using the corresponding alphabet, the letter, and the `pos`
  //   - ELSE:
  //     - concatenate the non-alphabetic letter to result as is
  // - return result

  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  let count = 0;
  for (let idx = 0; idx < plaintext.length; idx += 1) {
    let alphabet;
    if (isLetter(plaintext[idx])) {
      if (plaintext[idx] >= 'a' && plaintext[idx] <= 'z') {
        alphabet = lowerAlphabet;
      } else {
        alphabet = upperAlphabet;
      }
      let pos = count % keyword.length;
      let key = lowerAlphabet.indexOf(keyword.toLowerCase()[pos]);
      result += shiftLetter(plaintext[idx], key, alphabet);
      count += 1;
    } else {
      result += plaintext[idx];
    }
  }

  return result;
}

function shiftLetter(letter, key, alphabet) {
  let oldIdx = alphabet.indexOf(letter);
  let newIdx = (oldIdx + key) % 26;
  return alphabet[newIdx];
}

function isLetter(letter) {
  return letter.match(/[a-z]/i);
}

console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'meat')); // Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'mEAt')); // Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'A'));    // Pineapples don't go on pizzas!
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'Aa'));   // Pineapples don't go on pizzas!
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'cab'));  // Riogaqrlfu dpp't hq oo riabat!
console.log(vigenereEncrypt('Dog', 'Rabbit'));                           // Uoh