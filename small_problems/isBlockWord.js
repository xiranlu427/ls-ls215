/*
PROBLEM
- input: a word string
- output: a boolean true/false
- rules
  - given: a collection of spelling blocks: pairs of letters
  - each pair can only be used once at most
  - at most one letter in each pair can be used
  - case doesn't play a role

EXAMPLES
- edge cases
  - Does the input only contain letters? => yes
  - Can the input contain one or some letters that appear more than once? => false 

DS
- turn the collection of blocks into an object
  - if key in str, obj[key] cannot be in str
- turn the input string into an array of letters and iterate through them to check if it can be spelled

ALGO
- turn the input string into an array of letters and iterate through them to check if it can be spelled
  - check for duplicates => if duplicates, return false
- iterate through the array and check each letter against the letter block object: array.includes()
  - if a letter exists in object's keys:
    - if the array includes obj[key] => false
    - else: delete the property where the letter is key from the object
*/

function isBlockWord(word) {
  const blocks = {
    B: 'O',
    X: 'K',   
    D: 'Q',
    C: 'P',   
    N: 'A',
    G: 'T',
    R: 'E',
    F: 'S',
    J: 'W',
    H: 'U',
    V: 'I',   
    L: 'Y',
    Z: 'M',
  }
  // - iterate through the array and check each letter against the letter block object: array.includes()
  // - if a letter exists in object's keys:
  //   - if the array includes obj[key] => false
  //   - else: delete the property where the letter is key from the object
  const letters = word.toUpperCase().split('');

  const duplicates = letters.filter(
    letter => letters.indexOf(letter) !== letters.lastIndexOf(letter)); 
  if (duplicates.length > 0) return false;

  for (let idx = 0; idx < letters.length; idx += 1) {
    if (letters[idx] in blocks) {
      if (letters.includes(blocks[letters[idx]])) {
        return false;
      } else {
        delete blocks[letters[idx]];
      }
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false