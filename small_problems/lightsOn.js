/*
> PROBLEM
- input: an int?, n: number of switches
- output: an array: numbers of switches that are on after n passes of toggling
- rules:
  - pass 0: all switches => off
  - pass 1: toggle all switches => on
  - pass 2: toggle switches whose numbers are multiples of 2: 2, 4, 6 ... => off
  - pass 3: toggle switches whose numbers multiples of 3: 3, 6, 9 ...

> EXAMPLES & TEST CASES
- edge cases
  - lightsOn(0) => []
  - lightsOn(-1) => undefined
  - lightsOn(0.5) => undefined
  - input of other types? => undefined

> DS
- use an array of booleans to represent all switches

- e.g. lightsOn(5)
  pass 0: [off, off, off, off, off]
  pass 1: numbers = [1, 2, 3, 4, 5] => [on, on, on, on, on]
  pass 2: numbers = [2, 4] => [on, off, on, off, on]
  pass 3: numbers = [3] => [on, off, off, off, on]
  pass 4: numbers = [4] => [on, off, off, on, on]
  pass 5: numbers = [5] => [on, off, off, on, off]

  final: numbers of ON = [1, 4]

  * idx of light = number of light - 1

> ALGO
- create an array that contains n boolean values of `false`
- iterate through numbers from 1 to n => pass
  - iterate through all values in the array
    - if the idx of each value plus 1 is a multiple of pass:
      - switch its value to the opposite
- filter out all indices of values of `true` and return each of them plus 1 in an array
*/

function lightsOn(n) {
  // considering edge cases
  if (n < 0 || typeof n !== 'number' || !Number.isInteger(n)) {
    return undefined;
  }
  // - create an array that contains n boolean values of `false`
  const switches = [];
  for (let idx = 0; idx < n; idx += 1) {
    switches.push(false);
  }
  // - iterate through numbers from 1 to n => pass
  //   - iterate through all values in the array
  //     - if the idx of each value plus 1 is a multiple of pass:
  //       - switch its value to the opposite
  for (let pass = 1; pass <= n; pass += 1) {
    for (let idx = 0; idx < n; idx += 1) {
      if ((idx + 1) % pass === 0) {
        switches[idx] = !switches[idx];
      }
    }
  }

  // - filter out all indices of values of `true` and return each of them plus 1 in an array 
  return switches.map((value, idx) => value ? idx + 1: null)
                 .filter(value => value !== null);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0)); // []
console.log(lightsOn(-1)); // undefined
console.log(lightsOn(0.5)); // undefined