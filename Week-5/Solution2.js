function vowelCount(s) {
  let vowels = new Map();
  for (char of s) {
    const lowercasedchar = char.toLowerCase();
    if ("aeiou".includes(lowercasedchar)) {
      if (vowels.has(lowercasedchar)) {
        vowels.set(lowercasedchar, vowels.get(lowercasedchar) + 1);
      } else {
        vowels.set(lowercasedchar, 1);
      }
    }
  }
  return vowels;
}

console.log(vowelCount("helleo"));
