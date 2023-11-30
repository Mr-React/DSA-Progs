class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
    this.next = null;
  }
}

class LinkedListForPriorityQueue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value, priority) {
    const node = new Node(value, priority);
    if (this.isEmpty()) {
      this.head = node;
    } else if (this.head.priority > priority) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next && curr.priority < priority) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
    }
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.size == 1) {
      let removeNode = this.head;
      this.head = null;
      this.size--;
      return { value: removeNode.value, priority: removeNode.priority };
    }

    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    if (curr.next) {
      let removeNode = curr.next;
      curr.next = null;
      this.size--;
      return { value: removeNode.value, priority: removeNode.priority };
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    }
    let curr = this.head;
    let value = "";
    let pr = "";
    while (curr) {
      value = value + `${curr.value} `;
      pr = pr + `${curr.priority} `;
      curr = curr.next;
    }
    console.log("Values: ", value);
    console.log("Priority: ", pr);
  }

  isEmpty() {
    return this.size === 0;
  }
}

const list = new LinkedListForPriorityQueue();

list.push(4, 1);
list.push(5, 2);
list.push(6, 3);
list.push(7, 0);

list.print();

console.log("Remove values");

while (!list.isEmpty()) console.log(list.pop());
