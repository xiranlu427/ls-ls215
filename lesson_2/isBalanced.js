function isBalanced(str) {
  const parentheses = str.match(/[()]/g);
  if (!parentheses) return true;

  if (parentheses.length % 2 !== 0) {
    return false;
  }

  let count = 0;
  for (let i = 0; i < parentheses.length; i += 1) {
    if (parentheses[i] === '(') {
      count += 1;
    } else {
      count -= 1;
    }

    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false