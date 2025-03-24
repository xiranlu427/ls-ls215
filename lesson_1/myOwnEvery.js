function myOwnEvery(array, func) {
  array.forEach((value, index) => {
    if (!func(value, index, array)) {
      return false;
    }
  });

  return true;
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true