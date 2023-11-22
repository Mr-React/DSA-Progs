/**
 * Climbing Staircase problem
 * Given a staircase of 'n' steps, count the number of distinct ways to climb to the top.
 * You can either climb 1 steps or 2 steps at a time
 * Big-O(n)
 */

function Staircase(n) {
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}

console.log(Staircase(1));
console.log(Staircase(2));
console.log(Staircase(3));
console.log(Staircase(4));
console.log(Staircase(5));
