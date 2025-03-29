function reverse(string) {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversed += string[i];
  }

  return reversed;
}

function reverse2(string) {
  return string.split('').reverse().join('');
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"