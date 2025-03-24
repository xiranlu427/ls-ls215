function myReduce(array, func, initial) {
  let acc;
  if (initial !== undefined) {
    acc = initial;
  } else {
    acc = array[0];
    array = array.slice(1);
  }

  array.forEach((value, index) => {
    acc = func(acc, value, index, array);
  })

  return acc;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49