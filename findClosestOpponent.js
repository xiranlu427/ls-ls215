/*
Write a function that returns the position of the closest active opponent.
If two opponents are equidistant, return the opponent with the higher position
on the board.
*/

/*
PROBLEM
- input: 
  - a positions object containing 0 to multiple key-value pairs: key is a
  string of any format specifying each opponent; value is a positive integer
  for active opponents and `null` for inactive opponents, representing the
  opponent's position
  - a positive integer representing the board position
- output: a positive integer representing the position of the opponent that is
closest to the board position

- rules:
  - if the object is empty => null
  - there will always be at least one active opponent
  - all opponents and the input position will have different positions
  - if two opponent positions have the same minimum distance, return the higher
  position

DS
- we can use an array of positive integers to represent the positions of
opponents
- we can use another array of positive integers to represent the absolute
difference between each opponent position and the board position

ALGO
- get an array of the object's values, filter out those values that are not
`null`, and sort the filtered values in descending order
- iterate through the array and calculate the absolute value of the difference
between the value at each index position and the value of the board position
- return the value in the array that has the minimum absolute difference from
the second input
*/

function findClosestOpponent(positions, position) {
  if (Object.keys(positions).length === 0) {
    return null;
  }
  // - get an array of the object's values, filter out those values that are
  // not `null`, and sort the filtered values in descending order
  const activePositions = Object.values(positions)
                                .filter(value => value !== null)
                                .sort((a, b) => b - a);
  // - iterate through the array and calculate the absolute value of the difference
  // between the value at each index position and the value of the board position
  let distances = activePositions.map(value => Math.abs(position - value));
  // - return the value in the array that has the minimum absolute difference from
  // the second input
  let idxOfClosest = distances.indexOf(Math.min(...distances));
  return activePositions[idxOfClosest];
}

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100

// additional test cases
console.log(findClosestOpponent({}, 74)); // null

console.log(findClosestOpponent({
  "Opponent 1a" : null, "Opponent 1b" : null,
  "Opponent 1c" : 50, "Opponent 1d" : null, "Opponent 1e" : null
}, 150)); // 50

console.log(findClosestOpponent({
  "Atlas" : 1,
  "Luna" : 15,
  "" : 37
}, 10)); // 15