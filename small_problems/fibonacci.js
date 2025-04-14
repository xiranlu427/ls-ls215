function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else {
    return fibonacci(nth - 1) + fibonacci(nth - 2);
  }
}

// non-recursive solution
function fibonacci(nth) {
  let count = 2;
  let previous = 1;
  let current = 1;

  while (count < nth) {
    let temp = current;
    current += previous;
    previous = temp;
    count += 1;
  }

  return current;
}

// recursion with memoization
const memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (!(nth in memo)) {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2); 
    // console.log(memo);
  } 
  return memo[nth];
}

// using Immediately-Invoked Function Expression
const fibonacci = (function() {
  const memo = {};

  function fib(nth) {
    if (nth <= 2) {
      return 1;
    } else if (!(nth in memo)) {
      memo[nth] = fib(nth - 1) + fib(nth - 2);
    }
    return memo[nth];
  }

  return fib;
})();

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765
// console.log(fibonacci(10000));   // Infinity