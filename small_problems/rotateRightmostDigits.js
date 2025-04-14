function rotateRightmostDigits(number, n) {
  const digits = String(number);
  const unrotated = digits.slice(0, digits.length - n);
  const rotated = digits.slice(digits.length - n);
  const resultDigits = unrotated + rotated.slice(1) + rotated[0];

  return Number(resultDigits);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917