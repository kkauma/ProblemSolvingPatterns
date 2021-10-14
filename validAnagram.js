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

// console.log(validAnagram("hello", "ohlle")); // true
// console.log(validAnagram("hello", "world")); // false

// Solution #2
const validAnagram2 = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const lookup = {};

  for (let i = 0; i < s1.length; i++) {
    let letter = s1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < s2.length; i++) {
    let letter = s2[i];
    // if can't find letter or letter is 0 then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};

console.log(validAnagram2("python", "yhpotn"));
console.log(validAnagram2("ruby", "java"));
