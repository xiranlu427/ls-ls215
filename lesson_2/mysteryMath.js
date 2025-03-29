function mysteryMath(str) {
  return str.replace(/[+\-*/]/, '?');
}

mysteryMath('4 + 3 - 5 = 2');
// '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// '(4 ? 3 + 2) / 7 - 1 = 1'

function mysteriousMath(str) {
  return str.replace(/[+\-*/]/g, '?');
}

mysteriousMath('4 + 3 - 5 = 2');
// '4 ? 3 ? 5 = 2'
mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1');
// '(4 ? 3 ? 2) ? 7 ? 1 = 1'