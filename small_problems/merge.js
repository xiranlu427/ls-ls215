function merge(arr1, arr2) {
  const merged = [];
  let current1 = 0;
  let current2 = 0;

  while (current1 < arr1.length && current2 < arr2.length) {
    if (arr1[current1] < arr2[current2]) {
      merged.push(arr1[current1]);
      current1 += 1;
    } else {
      merged.push(arr2[current2]);
      current2 += 1;
    }
  }

  return merged.concat(arr1.slice(current1)).concat(arr2.slice(current2));
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]