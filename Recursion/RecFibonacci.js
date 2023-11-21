/**
 * Recursive fibonacci solution
 * Big-O(2^n)
 */

function RecursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return RecursiveFibonacci(n - 1) + RecursiveFibonacci(n - 2);
}

console.log(RecursiveFibonacci(0));
console.log(RecursiveFibonacci(1));
console.log(RecursiveFibonacci(6));
