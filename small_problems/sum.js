function sum(num) {
  return String(num).split('')
                    .reduce((total, digit) => total + Number(digit), 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45