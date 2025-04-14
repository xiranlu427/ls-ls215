function triangle(angle1, angle2, angle3) {
  const sortedAngles = [angle1, angle2, angle3].sort((a, b) => a - b);
  const small = sortedAngles[0];
  const medium = sortedAngles[1];
  const large = sortedAngles[2];

  if (!isValidTriangle(small, medium, large)) {
    return 'invalid';
  }

  if (large === 90) {
    return 'right';
  } else if (large < 90) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function isValidTriangle(small, medium, large) {
  if (small + medium + large !== 180 || small <= 0) {
    return false;
  }
  return true;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"