function sumSquareDifference(int) {
  const squareOfSum = (int * (int + 1) / 2) ** 2;
  let sumOfSquare = 0;

  for (let i = 1; i <= int; i += 1) {
    sumOfSquare += i ** 2;
  }

  return squareOfSum - sumOfSquare;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150