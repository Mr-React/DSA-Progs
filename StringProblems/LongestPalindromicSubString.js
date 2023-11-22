/**
 * LongestPalindromicSubString problem
 * Input- string=> "ABRBADAADAB" => output => "BADAADAB"
 * Input- string=> "asdcdcdasd" => output => "dcdcd"
 */

function LongestPalindromicSubString(str) {
  if (str.length <= 1) {
    return str;
  }

  let lps = "";

  for (let i = 1; i < str.length; i++) {
    //Consider odd length
    let left = i;
    let right = i;

    //Keep extending in both left and right directons till the condition
    //for palindrome aare met
    while (str.charAt(left) === str.charAt(right)) {
      left--;
      right++;

      if (left === -1 || right === str.length) {
        break;
      }
    }

    let palindrome = str.substring(left + 1, right);
    if (palindrome.length > lps.length) {
      lps = palindrome;
    }

    left = i - 1;
    right = i;

    while (str.charAt(left) === str.charAt(right)) {
      left--;
      right++;

      if (left === -1 || right === str.length) {
        break;
      }
    }

    palindrome = str.substring(left + 1, right);
    if (palindrome.length > lps.length) {
      lps = palindrome;
    }
  }
  return lps;
}

console.log(LongestPalindromicSubString("ABRBADAADAB"));
console.log(LongestPalindromicSubString("BADAADAB"));
console.log(LongestPalindromicSubString("asdcdcdasd"));
