class Stack {
  constructor() {
    this.items = {};
    this.top = -1;
  }

  push(element) {
    if (this.top == -1) {
      this.top++;
    }

    this.items[this.top] = element;
    this.top++;
  }

  pop() {
    if (!this.isEmpty()) {
      const item = this.items[this.top - 1];
      delete this.items[this.top - 1];
      this.top--;
      return item;
    }
    return null;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.top - 1];
    }
    return null;
  }

  isEmpty() {
    return this.top === -1;
  }

  size() {
    if (!this.isEmpty()) {
      return this.top;
    }
    return 0;
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();
console.log("size", stack.size());
console.log(stack.isEmpty());

stack.push(10);
console.log(stack.isEmpty());
stack.push(20);
stack.push(30);
stack.print();
console.log("pop", stack.pop());
console.log("peek", stack.peek());

stack.print();
console.log("size", stack.size());
