/*
1. check if both version numbers are valid, if not => null
2. turn version numbers into two arrays (split)
3. find the shorter length of both arrays
4. iterate through both arrays, stopping at the shorter length:
    compare the values at each index position:
    IF value in arr1 is greater than value in arr2 => 1
    ELSE IF value in arr1 is less than value in arr2 => -1

    return 0
*/

function compareVersions(version1, version2) {
  const validVerNum = /^[0-9]+(\.[0-9]+)*$/;
  if (!version1.match(validVerNum) || !version2.match(validVerNum)) {
    return null;
  }

  const ver1 = version1.split('.').map(Number);
  const ver2 = version2.split('.').map(Number);
  const shorterLength = Math.min(ver1.length, ver2.length);

  for (let idx = 0; idx < shorterLength; idx += 1) {
    if (ver1[idx] > ver2[idx]) {
      return 1;
    } else if (ver1[idx] < ver2[idx]) {
      return -1;
    }
  }

  const longer = (ver1.length > ver2.length) ? version1 : version2;
  const longerRemaining = longer.slice(shorterLength);

  if (longerRemaining.match(/[^0.]/)) {
    if (longer === version1) {
      return 1;
    } else {
      return -1;
    }
  }

  return 0;
}


// improved version
/*
1.check if both version numbers are valid
  - if any inputs contain invalid characters (characters other than digits 
    and .) => null
  - if the version number starts or ends with . => null
  - if the version number contains two or more consecutive . => null
2.split version numbers into two arrays of integers
3.find the shorter length of both arrays
4.iterate through both arrays, stopping at the shorter length:
    - compare the values at each index position:
      - IF value in arr1 is greater than value in arr2 => 1
      - ELSE IF value in arr1 is less than value in arr2 => -1

    if both arrays contain the same numbers until the end of loop, we need to
    look at the remaining portion of the longer array:
      - IF the remaining portion contains any number that is greater than 0:
        - the longer version number is greater
        - IF the longer number is version1 => 1
        - ELSE => 2
      - ELSE
        - both version numbers are equal => 0
*/

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
// edge cases
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0