class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListWithTail {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //Big-O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //Big-O(1)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  //Big-O(1)
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }

    this.size--;
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let str = "";
      while (curr) {
        str = str + `${curr.value} `;
        curr = curr.next;
      }
      console.log(str);
    }
  }
}

const list = new LinkedListWithTail();

console.log("list is empty?: ", list.isEmpty());
console.log("list size: ", list.getSize());
list.print();

list.append(10);
list.append(20);
list.append(30);
list.append(40);

list.print();

list.prepend(50);
list.prepend(60);
list.print();

console.log("Remove from front", list.removeFromFront());
list.print();

console.log("Remove from end", list.removeFromEnd());
list.print();
