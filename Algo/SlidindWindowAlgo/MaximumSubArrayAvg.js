/**
 * Find maximum average possible for a contigous sub-array of size k
 * Input=> arr = [1, 12, -5, -6, 50, 3], k = 4;
 * Output=>
 */

function maximumAverage(arr, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }

  let maxSum = sum;

  let start = 0;
  let end = k;

  while (end < arr.length) {
    sum = sum - arr[start];
    start++;

    sum = sum + arr[end];
    end++;

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
}

console.log("max sum avg");

console.log(maximumAverage([1, 12, -5, -6, 50, 3], 4));
