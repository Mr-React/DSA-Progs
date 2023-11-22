/**
 * Quick Sort Algorithm
 * Bif-O(nlogn) avg case, Big-O(n^2) - worst case
 */

function QuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

const arr = [-6, 20, 8, -2, 4];
console.log(QuickSort(arr));
