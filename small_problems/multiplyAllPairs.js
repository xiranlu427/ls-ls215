function multiplyAllPairs(arr1, arr2) {
  let products = arr1.reduce((acc, num1) => acc.concat(
      arr2.map(num2 => num1 * num2)), []);
  
  return products.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]