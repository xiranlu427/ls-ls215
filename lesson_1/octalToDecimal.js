function octalToDecimal(numberString) {
  // for (let index = 0; index < numberString.length; index += 1) {
  //   decimal += numberString[0] * Math.pow(8, numberString.length - 1 - index);
  // }
  const digits = numberString.split('').reverse();
  return Number(digits.reduce((total, value, index) => total + value *
   Math.pow(8, index), 0));
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9