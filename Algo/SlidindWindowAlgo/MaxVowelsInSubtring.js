/**
 * Find the maximum vowels in substring
 * Input => string = 'abciiidef', k = 3
 * Output => 3
 */

// Using for Loop
function maxVowels(str, k) {
  if (k > str.length) return 0;

  let v = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };

  let count = 0;
  let maxVowel = 0;

  for (let i = 0; i < k; i++) {
    if (v[str[i]]) {
      count++;
    }
  }

  maxVowel = count;

  for (let i = k; i < str.length; i++) {
    if (v[str[i - k]]) {
      count--;
    }

    if (v[str[i]]) {
      count++;
    }

    maxVowel = Math.max(maxVowel, count);
    if (k === maxVowel) {
      return maxVowel;
    }
  }
  return maxVowel;
}

console.log("max vowels in substring");
console.log("string is 'abciiidef'");

console.log(maxVowels("abciiidef", 3));

// Using While Loop
function maxVowelsWhile(str, k) {
  if (k > str.length) return 0;

  let v = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };

  let count = 0;
  let maxVowel = 0;

  for (let i = 0; i < k; i++) {
    if (v[str[i]]) {
      count++;
    }
  }

  let start = 0;
  let end = k;

  maxVowel = count;

  while (end < str.length) {
    if (v[str[start]]) {
      count--;
    }
    start++;

    if (v[str[end]]) {
      count++;
    }
    end++;

    maxVowel = Math.max(maxVowel, count);

    if (maxVowel === k) {
      return maxVowel;
    }
  }

  return maxVowel;
}

console.log("max vowels in substring");
console.log("string is 'abciidef'");

console.log(maxVowelsWhile("abciidef", 3));
