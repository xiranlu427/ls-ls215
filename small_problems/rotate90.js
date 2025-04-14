function rotate90(matrix) {
  const newColCount = matrix.length;
  return matrix[0].map((_, newRowIndex) => matrix.map(
    (_, newColIndex) => matrix[newColCount - 1 - newColIndex][newRowIndex])
  );
}

// alternative approach using the `transpose` function
function rotate90(matrix) {
  const transposed = transpose(matrix);
  transposed.forEach(row => row.reverse());
  return transposed;
}

function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}


const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
  /*
  newRow newCol newNum oldCord
  [0]       [0] 5 [1][0]
            [1] 3 [0][0]
  [1]       [0] 1 [1][1]
            [1] 7 [0][1]
  [2]       [0] 0 [1][2]
            [1] 4 [0][2]
  [3]       [0] 8 [1][3]
            [1] 2 [0][3]
                  [newColCount - 1 - newCol][newRow]
  */
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]