function isUrl(str) {
  const regex = /^https?:\/\/\S+$/;
  return regex.test(str);
}

// alternative approach
let isUrl = function (text) {
  return !!text.match(/^https?:\/\/\S+$/);
};


isUrl('https://launchschool.com');   // -> true
isUrl('http://example.com');         // -> true
isUrl('https://example.com hello');  // -> false
isUrl('   https://example.com');     // -> false