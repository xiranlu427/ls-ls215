function isUppercase(str) {
  let letters = str.match(/[A-Z]+/i);
  if (!letters) {
    return true;
  }

  letters = letters.join('');

  return !!letters.match(/^[A-Z]+$/);
}

// alternative 1
function isUppercase(str) {
  const letters = str.replace(/[^a-zA-Z]/g, '');
  return letters === letters.toUpperCase();
}

// alternative 2 (LS Solution)
function isUppercase(string) {
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true