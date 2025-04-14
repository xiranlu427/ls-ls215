/*
PROBLEM
- input:
  - a string of plain text (containing both letters and non-letters)
  - an int: shift value => `key`
- output: a new string with each letter right-shifted by `key` positions
- rules:
  - only letters are right-shifted, and non-letters are left as is
  - case matters: letters remain in the same case after shift
  - if the `key` is greater than the length of the alphabet, it wraps around from the beginning
    - e.g. 27 => 1
           30 => 4

TEST CASES
  - edge cases:
    - could key be negative? => NO

DS
- use a string to represent all lowercase letters
- use an array to represent all characters in the plain text

ALGO
- create an array containing all lowercase letters
- turn the input string into lowercase and split it into an array of characters
- iterate through the characters array, for each char:
  - IF it exists in the letters array:
    - find its index and increment it by `key`
    - check if the current letter is uppercase or lowercase
    - replace the current letter with the new letter at the new index and turn it into the correct case
  - ELSE:
    - do nothing
- join the modified characters into a string and return the result
*/

const letters = 'abcdefghijklmnopqrstuvwxyz';

function caesarEncrypt(text, key) {
  // - create a string containing all lowercase letters
  // - turn the input string into lowercase and split it into an array of characters
  // - iterate through the characters array, for each char:
  //   - IF it's a letter (HELPER):
  //     - replace the letter with the encrypted letter (HELPER)
  //     - turn the letter into uppercase if its plain counterpart is uppercase
  //   - ELSE:
  //     - do nothing
  // - join the modified characters into a string and rturn the result
  const plainChars = text.toLowerCase().split('');
  let newLetter;
  const encryptedChars = plainChars.map((char, idx) => {
    if (isLetter(char)) {
      newLetter = shiftLetter(char, key);
      if (text[idx].match(/[A-Z]/)) {
        newLetter = newLetter.toUpperCase();
      } 
      return newLetter;
    }
    return char;
  });

  return encryptedChars.join('');
}

//  - find the letter's index and increment it by `key
//    - replace the current letter with the new letter at the new index

function shiftLetter(letter, key) {
  let oldIdx = letters.indexOf(letter);
  let newIdx = (oldIdx + key) % 26;
  return letters[newIdx];
}

function isLetter(letter) {
  return letter.match(/[a-z]/i);
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"