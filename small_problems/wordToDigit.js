function wordToDigit(str) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine'];

  NUMBER_WORDS.forEach(word => {
    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    str = str.replace(regex, NUMBER_WORDS.indexOf(word));
  });

  return str;
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."