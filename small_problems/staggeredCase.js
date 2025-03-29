function staggeredCase(str) {
  return str.split('')
            .map((char, idx) => {
              if (idx % 2 === 0) {
                return char.toUpperCase();
              } else {
                return char.toLowerCase();
              }
            })
            .join('');
}

function staggeredCase2(str) {
  let count = 0;
  return str.split('')
            .map(char => {
              if (char.match(/[a-z]/i)) {
                if (count % 2 === 0) {
                  count += 1;
                  return char.toUpperCase();
                } else {
                  count += 1;
                  return char.toLowerCase();
                }
              } else {
                return char;
                }
            })
            .join('');
}

// alternative approach - use a boolean switch
function staggeredCase(string) {
  let needUpper = true;
  let newChar;

  return string.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      if (needUpper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }

      needUpper = !needUpper;
      return newChar;
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase2('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase2('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase2('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"