function triangle(side1, side2, side3) {
  if (!isValidTriangle(side1, side2, side3)) {
    return 'invalid';
  }

  const sides = new Set();
  sides.add(side1);
  sides.add(side2);
  sides.add(side3);

  if (sides.size === 1) {
    return 'equilateral';
  } else if (sides.size === 2) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function isValidTriangle(side1, side2, side3) {
  if (!(side1 > 0 && side2 > 0 && side3 > 0)) {
    return false;
  }

  const sortedSides = [side1, side2, side3].sort((a, b) => a - b);
  if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
    return false;
  }

  return true;
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"