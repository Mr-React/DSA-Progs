/**
 * Recursive Binary Search
 * Program - Find the given number's index from given array
 */

function RecursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftindex, rightIndex) {
  if (leftindex > rightIndex) {
    return -1;
  }

  let mid = Math.floor((leftindex + rightIndex) / 2);
  if (target === arr[mid]) {
    return mid;
  }

  if (target < arr[mid]) {
    return search(arr, target, leftindex, rightIndex - 1);
  } else {
    return search(arr, target, mid + 1, rightIndex);
  }
}

console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 20));
