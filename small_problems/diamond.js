/*
> PROBLEM
- input: an odd int, size: number of rows of the diamond, which is also the
 number of stars of the longest (middle) row
- output: a string representation of the four-pointed diamond of n rows
  
- the middle row has n stars, and the rows above and below it have (n - 2x)
   stars
- the diamond is composed of stars (*) and spaces

> EXAMPLES
diamond(3);

  *
 ***
*****
 ***
  *

row 0: space * 2 + star * 1
row 1: space * 1 + star * 3
row 2: space * 0 + star * 5
row 3: space * 1 + star * 3
row 4: space * 2 + star * 1

top and bottom halves:
idx; ' ' * (rows - idx); '*' * (1 + rows * 2)


> DS
- a string

> ALGO
HELPER topHalf(rows) => rows = (n - 1) / 2
- iterate through 0 - rows => idx
  - concatenate (row - 1 - idx) of spaces and (1 + idx * 2) of stars

HELPER bottomHalf(rows)
- iterate through rows - 0
...

- create an empty string as result
- build the top half of diamond (excluding the longest row)
- build the bottom half of diamond (excluding the longest row)
- concatenate the top half, the longest row of n stars,
and the bottom half
- return the result
*/


function diamond(size) {
  let top = topHalf((size - 1) / 2);
  let bottom = bottomHalf((size - 1) / 2);
  let middle = '*'.repeat(size) + '\n';

  return top + middle + bottom;
}

// HELPER topHalf(row) => row = (size - 1) / 2
// - iterate through 0 - rows
//   - concatenate (rows - idx) of spaces and (1 + idx * 2) of stars
function topHalf(rows) {
  let result = '';

  for (let idx = 0; idx < rows; idx += 1) {
    result += ' '.repeat(rows - idx);
    result += '*'.repeat(1 + idx * 2);
    result += '\n';
  }
  return result;
}
// HELPER bottomHalf(rows)
// - iterate through rows - 0 => idx
// ...
function bottomHalf(rows) {
  let result = '';

  for (let idx = rows - 1; idx >= 0; idx -= 1) {
    result += ' '.repeat(rows - idx);
    result += '*'.repeat(1 + idx * 2);
    result += `\n`;
  }
  return result;
}


console.log(diamond(1));
// logs
// *

console.log(diamond(3));
// logs
//  *
// ***
//  *

console.log(diamond(9));
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *