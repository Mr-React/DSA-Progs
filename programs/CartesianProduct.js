/**
 * Cartesian Product Program
 * Big-O(n*m)
 * Input - A[1, 2], B[3, 4] => Output - [[1, 3], [1, 4], [2, 3], [2, 4]]
 */

function CartesianProduct(arr1, arr2) {
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      res.push([arr1[i], arr2[j]]);
    }
  }
  return res;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

console.log(CartesianProduct(arr1, arr2));
