function letterCaseCount(str) {
  const result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };
  str.split('').forEach(char => {
    if (char.match(/[a-z]/)) {
      result.lowercase += 1;
    } else if (char.match(/[A-Z]/)) {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  });

  return result;
}

// LS approach
function letterCaseCount(string) {
  const lowerArray = string.match(/[a-z]/g) || [];
  const upperArray = string.match(/[A-Z]/g) || [];
  const neitherArray = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neither: neitherArray.length,
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }