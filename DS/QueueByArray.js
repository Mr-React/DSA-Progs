class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

console.log("peek()", queue.peek());
console.log(queue.isEmpty());

queue.enqueue(10);
console.log(queue.isEmpty());
queue.enqueue(30);
queue.enqueue(20);

queue.print();
console.log(queue.dequeue());

console.log(queue.size());
queue.print();
