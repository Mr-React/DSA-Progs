/**
 * Find the first or last occurnece of (x) given number in
 * Input => arr = [1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 7, 7]; x = 5
 * Output => 6
 */

function Occurence(arr, target, flag = true) {
  let count = -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      count = mid;
      if (flag) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else if (target > arr[mid]) {
      left = mid + 1;
    }
  }
  return count;
}

const arr = [1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 7, 7];
console.log("find first occurence of number 5");
console.log(Occurence(arr, 5, true));

console.log("find last occurence of number 5");
console.log(Occurence(arr, 5, true));
