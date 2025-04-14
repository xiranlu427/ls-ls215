function featured(int) {
  const MAX_FEATURED = 9876543201;
  do {
    int += 1;
  } while (!isFeatured(int) && int <= MAX_FEATURED);

  if (int > MAX_FEATURED) {
    return 'There is no possible number that fulfills those requirements.'
  } else {
    return int;
  }
}

function isFeatured(int) {
  if (int % 7 !== 0 || int % 2 !== 1) {
    return false;
  }

  const digits = String(int).split('');
  if (digits.length !== new Set(digits).size) {
    return false;
  }
  
  return true;
}
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."