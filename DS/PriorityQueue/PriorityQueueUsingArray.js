class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.priorityQueue = [];
    this.size = -1;
  }

  isEmpty() {
    return this.size === -1;
  }

  // Function to insert a new element into priority queue
  enqueue(value, priority) {
    this.size++;
    this.priorityQueue[this.size] = new Node(value, priority);
  }

  peek() {
    let highestPriority = Number.MIN_SAFE_INTEGER;
    let index = -1;

    // Check for the element with
    // highest priority
    for (let i = 0; i <= this.size; i++) {
      // If priority is same choose
      // the element with the
      // highest value
      if (
        highestPriority == this.priorityQueue[i].priority &&
        index > -1 &&
        this.priorityQueue[index].value < this.priorityQueue[i].value
      ) {
        highestPriority = this.priorityQueue[i].priority;
        index = i;
      } else if (highestPriority < this.priorityQueue[i].priority) {
        highestPriority = this.priorityQueue[i].priority;
        index = i;
      }
    }

    // Return Object which holds index of the node which have value and priority
    return { index: index, node: this.priorityQueue[index] };
  }

  // Function to remove the element with the highest priority
  dequeue() {
    // Find the position of the element with highest priority
    let index = this.peek().index;

    let removeNode = this.priorityQueue[index];

    // Shift the element one index before from the position of the element with highest priority is found
    for (let i = index; i < this.size; i++) {
      this.priorityQueue[i] = this.priorityQueue[i + 1];
    }

    // Decrease the size of the priority queue by one
    this.size--;

    return removeNode;
  }
}

const pq = new PriorityQueue();

console.log(
  "Enqueue the elements(10, 14, 16, 12) in PQ with priority(2, 4, 4, 3)"
);
pq.enqueue(10, 2);
pq.enqueue(14, 4);
pq.enqueue(16, 4);
pq.enqueue(12, 3);

//console.log(pq.priorityQueue);
console.log("");

console.log("Get index of highest priority and highest value");
let highest = pq.peek();
console.log("Highest index with assigned node:\n", { ...highest }, "");
//console.log(pq.priorityQueue[highest.index]);

console.log("");

console.log("Dequeue the element whose priority and value is highest");
console.log(pq.dequeue());

console.log("Check the top element:");
highest = pq.peek();
console.log(pq.priorityQueue[highest.index]);
