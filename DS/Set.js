/**
 * Set Data structure
 */

const set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(4));
set.delete(3);
console.log(set);
console.log(set.size);

console.log("print all element of set")
for (const item of set) {
  console.log(item);
}

set.clear();
