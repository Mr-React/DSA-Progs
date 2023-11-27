class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return item;
    }
    return null;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.peek());

queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(30);

queue.print();

console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.peek());

console.log(queue.dequeue());
queue.print();

console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.peek());
