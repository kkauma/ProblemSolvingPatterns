// Given two strings, write a function to determine if the second string
// is an anagram of the first.  An anagram is a word, phrase, or name
// formed by rearranging the letters of another, such as cinema, formed
// from iceman.

// First solution
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let letter of str1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }
  //   console.log(frequencyCounter1);
  //   console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("hello", "ohlle")); // true
console.log(validAnagram("hello", "world")); // false
