function sumOfSums(arr) {
  let prefixSum = 0;
  return arr.reduce((total, num) => {
    prefixSum += num;
    return total + prefixSum;
  }, 0);
}

function sumOfSums2(arr) {
  return arr.map((num, index) => arr.slice(0, index + 1)
                                    .reduce((sum, num) => sum + num))
                                    .reduce((sum, num) => sum + num);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35