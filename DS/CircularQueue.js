class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.capacity = capacity;
    this.currentLength = 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength = this.currentLength + 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength = this.currentLength - 1;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return item;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }

    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
        str = str + this.items[i] + " ";
      }
      str = str + this.items[i];
      console.log(str);
    }
  }

  size() {
    return this.capacity;
  }
}
const queue = new CircularQueue(5);

console.log("isEmpty", queue.isEmpty());
console.log("isFull", queue.isFull());
console.log("peek", queue.peek());

console.log("dequeue", queue.dequeue());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("peek", queue.peek());
queue.enqueue(40);
queue.enqueue(50);
console.log("isFull", queue.isFull());
console.log("peek", queue.peek());
queue.print();
queue.enqueue(60);

console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());

console.log("isEmpty", queue.isEmpty());
console.log("isFull", queue.isFull());
console.log("peek", queue.peek());

queue.enqueue(60);
queue.print();
console.log("size", queue.size());
