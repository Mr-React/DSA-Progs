/**
 * IsPrime or not program
 * Big-O(n)
 */
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(3));
console.log(isPrime(6));
console.log(isPrime(5));

/**
 * Optimal Solution of isPrime program
 * Big-O(sqrt(n))
 */

function isPrimeOptimized(n) {
  if (n < 2) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeOptimized(3));
console.log(isPrimeOptimized(6));
console.log(isPrimeOptimized(5));
