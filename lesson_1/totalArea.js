function totalArea(rectangles) {
  const areas = rectangles.map(value => value[0] * value[1]);
  return areas.reduce((total, area) => total + area);
}

function totalSquareArea(rectangles) {
  const squares = rectangles.filter(value => value[0] === value[1]);
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);    // 141
totalSquareArea(rectangles);    // 121


