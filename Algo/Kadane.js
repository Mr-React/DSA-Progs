/**
Program - Given an ineteger array nums, find the subarray with the largest sum,
and return its sum.

input - [-2, 1, -3, 4, -1, 2, 1, -5, 4] => output - 6 ([4, -1, 2, 1])
input - [5, 4, -1, 7, 8] => output - 23 ([5, 4, -1, 7, 8])
*/

//Kadane Algortihm - Big O(n)
function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));

// Brute force solution Big O(n*n)=>n^2
function maxSubArrayBruteForce(nums) {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let currSum = 0;
    for (let j = i; j < nums.length; j++) {
      currSum = currSum + nums[j];
      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
  }
  return maxSum;
}

console.log(maxSubArrayBruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArrayBruteForce([5, 4, -1, 7, 8]));
