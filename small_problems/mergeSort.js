function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let center = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, center)), mergeSort(arr.slice(center)));
}

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

console.log(mergeSort([9, 5, 7, 1]));               // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                     // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));            // [1, 2, 4, 6, 7]
console.log(mergeSort([9, 2, 7, 6, 8, 5, 0, 1]));   // [0, 1, 2, 5, 6, 7, 8, 9]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]