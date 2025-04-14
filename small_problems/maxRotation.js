function maxRotation(number) {
  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

function rotateRightmostDigits(number, n) {
  const digits = String(number);
  const unrotated = digits.slice(0, digits.length - n);
  const rotated = digits.slice(digits.length - n);
  const resultDigits = unrotated + rotated.slice(1) + rotated[0];

  return Number(resultDigits);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845