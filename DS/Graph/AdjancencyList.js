//Adjancency list
const adjancencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(adjancencyList["A"]);
console.log(adjancencyList["B"]);
console.log(adjancencyList["C"]);
