/**
 * Binary Search
 * Program - Find the given number's index from given array
 * Big-O(logn)
 */

function BinarySearch(arr, target) {
  let leftindex = 0;
  let rightIndex = arr.length - 1;

  while (leftindex <= rightIndex) {
    let mid = Math.floor((leftindex + rightIndex) / 2);
    if (target === arr[mid]) {
      return mid;
    }

    if (target < arr[mid]) {
      rightIndex = mid - 1;
    } else {
      leftindex = mid + 1;
    }
  }
  return -1;
}

console.log(BinarySearch([-5, 2, 4, 6, 10], 10));
console.log(BinarySearch([-5, 2, 4, 6, 10], 6));
console.log(BinarySearch([-5, 2, 4, 6, 10], 20));
