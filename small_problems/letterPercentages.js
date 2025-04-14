function letterPercentages(str) {
  const UPPER_CASE = /[A-Z]/g;
  const LOWER_CASE = /[a-z]/g;
  const OTHER = /[^a-z]/gi;
  const count = str.length;

  let upperPercentage = ((str.match(UPPER_CASE) || []).length / count * 100).toFixed(2);
  let lowerPercentage = ((str.match(LOWER_CASE) || []).length  / count * 100).toFixed(2);
  let otherPercentage = ((str.match(OTHER) || []).length / count * 100).toFixed(2);

  return {
    lowercase: lowerPercentage,
    uppercase: upperPercentage,
    neither: otherPercentage
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }