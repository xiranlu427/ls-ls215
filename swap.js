/*
Write a function called swap that takes a string as an argument, and returns a
new string, where the alphabetic characters have taken the place of the numeric
characters, and vice versa.
*/

/*
PROBLEM
- input: a string that contains alphanumeric and other types of characters
- output: a new string where the alphabetic characters haven taken the place of
the numeric characters, and vice versa.
- rules:
  - if the input is an empty string, return the empty string
  - if there are non-alphanumeric characters, add them to the new string as is
  - if there are more characters of one type than the other, swap all
  occurrences of the type with fewer count, and add the remaining occurrences
  of the other type to the new strings as is

DS
- we can use an array to store the value of all alphabetic and numeric
characters in the original string, respectively
- we can use an intermediate array of characters to track the swaps

ALGO
- split the input string into an array of characters
- create two empty arrays to store the indices of alphabetic and numeric
characters to be swapped, respectively
- count the number of alphabetic and numeric characters respectively, and store
the smaller value as `swapCount`
- iterate through the array of characters and add the indices of alphabetic and
numeric characters to the corresponding array, stop when each array reaches a
length of `swapCount`
- zip both arrays into a nested array, with each subarray containing two
indices: [pos1, pos2]
- iterate through the nested array of indices and swap the values at the old
and new index on the array of characters
- join the modified array and return its value
*/


function swap(str) {
  if (str.length === 0) {
    return str;
  }
  // - split the input string into an array of characters
  const chars = str.split('');
  // - create two empty arrays to store the indices of alphabetic and numeric
  // characters to be swapped, respectively
  const alphaIndices = [];
  const numIndices = [];
  // - count the number of alphabetic and numeric characters respectively, and store
  // the smaller value as `swapCount`
  if (str.match(/[a-z]/ig) === null || str.match(/[0-9]/g) === null) {
    return str;
  }

  const alphaCount = str.match(/[a-z]/ig).length;
  const numCount = str.match(/[0-9]/g).length;
  const swapCount = Math.min(alphaCount, numCount);
  // - iterate through the array of characters and add the indices of alphabetic and
  // numeric characters to the corresponding array, stop when each array reaches a
  // length of `swapCount`
  for (let idx = 0; idx < chars.length; idx += 1) {
    if (alphaIndices.length < swapCount && chars[idx].match(/[a-z]/i)) {
      alphaIndices.push(idx);
    }

    if (numIndices.length < swapCount && chars[idx].match(/[0-9]/)) {
      numIndices.push(idx);
    }
  }
  // - zip both arrays into a nested array, with each subarray containing two
  // indices: [pos1, pos2]
  const pairedIndices = alphaIndices.map(
    (value, idx) => [value, numIndices[idx]]);
  // - iterate through the nested array of indices and swap the values at the old
  // and new index on the array of characters
  pairedIndices.forEach(pair => {
    let temp = chars[pair[0]];
    chars[pair[0]] = chars[pair[1]];
    chars[pair[1]] = temp;
  });
  // - join the modified array and return its value
  return chars.join('');
}

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true

// more test cases
console.log(swap("") === ""); // true
console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true