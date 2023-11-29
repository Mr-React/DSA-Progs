//Undirected Graph
class Graph {
  constructor() {
    this.adjancencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) {
      this.adjancencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjancencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjancencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjancencyList[vertex1].add(vertex2);
    this.adjancencyList[vertex2].add(vertex1);
  }

  display() {
    for (let vertex in this.adjancencyList) {
      console.log(vertex + " -> " + [...this.adjancencyList[vertex]]);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjancencyList[vertex1].has(vertex2) &&
      this.adjancencyList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjancencyList[vertex1].delete(vertex2);
    this.adjancencyList[vertex2].delete(vertex1);
  }
}

const graph = new Graph();

console.log("Add 3 vertices (A,B,C)");
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
console.log(graph.adjancencyList);

console.log("Add edges to vertices");
graph.addEdge("A", "B");
graph.addEdge("B", "C");

console.log(graph.adjancencyList);

console.log("Display all vertices with edges");
graph.display();

console.log("hasEdge between A & B?: ", graph.hasEdge("A", "B"));
console.log("hasEdge between A & C?: ", graph.hasEdge("A", "C"));

console.log("");
graph.display();
console.log("Remove edge between A to B");
graph.removeEdge("A", "B");
graph.display();
