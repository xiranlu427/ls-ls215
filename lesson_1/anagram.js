function anagram(word, list) {
  const sortedWord = word.split('').sort().join('');
  return list.filter(candidate =>
     candidate.split('').sort().join('') === sortedWord);
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]