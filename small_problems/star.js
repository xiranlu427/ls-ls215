/*
PROBLEM
- input: an odd int, n: size of the grid, also width of the middle row of the star (n >= 7)
- ouput: a string representation of the 8-pointed star on a n * n grid, which is composed of asterisks * and spaces

TEST CASES
- edge cases 
  - Can n be an even number?
- example
- top & bottom half:
  - 3 stars on each row, with different numbers of spaces in between
- middle row:
  - n stars with no spaces
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

n = 7 => stars:
row1: 1, 4, 7 
row2: 2, 4, 6 
row3: 3, 4, 5 

row5: 3, 4, 5 
row6: 2, 4, 6 
row7: 1, 4, 7 

*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

n = 9 => stars:
r1: 1, 5, 9 
r2: 2, 5, 8 
r3: 3, 5, 7 
r4: 4, 5, 6 
...

DS
- use an array to build the top and bottom half of the star incrementally

ALGO
- HELPER: topHalf(rows) => rows = (n - 1) / 2
  - create an array of n spaces to build the top half incrementally
  - iterate through each row (1 to rows):
    - iterate through each position in the row (1 to rows), idx, with a step of (rows - row + 1):
      - replace the space at each position to *
  - return the string representation

- HELPER: create the top half of the star
- reverse the top half to get the bottom half of the star
- concatenate the string representations of the top half, the middle row, and the bottom half to create the star, and return the result
*/

function star(n) {
  const top = topHalf(n);
  const bottom = top.replace(/\n$/, '').split('\n').reverse().join('\n');
  const middleRow = Array(n).fill('*').join('');
  return top + middleRow + '\n' + bottom;
}

// - HELPER: topHalf(rows) => rows = (n - 1) / 2
//   - create an array of n spaces to build the top half incrementally
//   - iterate through each row (1 to rows):
//     - iterate through each position in the row (1 to rows), idx, with a step of (rows - row + 1):
//       - replace the space at each position to *
//   - return the string representation

function topHalf(n) {
  let rows = (n - 1) / 2;
  let halfStar = '';
  const mid = Math.floor(n / 2);

  for (let row = 0; row < rows; row += 1) {
    let positions = Array(n).fill(' ');
    positions[row] = '*';
    positions[mid] = '*';
    positions[n - 1 - row] = '*';

    halfStar += positions.join('') + '\n';
  }

  return halfStar;
}

console.log(star(7));
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

console.log(star(9));
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *