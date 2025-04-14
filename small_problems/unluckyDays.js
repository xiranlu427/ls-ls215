function fridayThe13ths(year) {
  const thirteenths = [];

  for (let idx = 0; idx < 12; idx += 1) {
    thirteenths.push(new Date(year, idx, 13));
  }

  return thirteenths.reduce(
    (count, day) => day.getDay() === 5 ? (count + 1) : count, 0);
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2