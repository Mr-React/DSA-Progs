class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      node.prev = curr;
      curr.next = node;
    }

    this.size++;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      node.prev = curr;
      curr.next = node;
      node.next.prev = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      removeNode = curr.next;
      curr.next = removeNode.next;
      curr.next.prev = curr;
    }

    this.size--;
    return removeNode.value;
  }

  removeByValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === value) {
      removeNode = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      return value;
    } else {
      let curr = this.head;
      while (curr.next && curr.next.value !== value) {
        curr = curr.next;
      }

      if (curr.next) {
        const removeNode = curr.next;
        curr.next = removeNode.next;
        removeNode.next.prev = curr;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }

    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let backNode = null;
    let currNode = this.head;

    while (currNode) {
      let nextNode = currNode.next;
      currNode.next = backNode;
      currNode.prev = nextNode;
      backNode = currNode;
      currNode = nextNode;
    }
    this.head = backNode;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    }
    let curr = this.head;
    let str = "";
    while (curr) {
      str = str + `${curr.value} `;
      curr = curr.next;
    }
    console.log(str);
  }
}

const list = new DoublyLinkedList();

console.log("Add new element to list at begining");
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.print();

console.log("Add new element to list at end");
list.append(50);
list.print();

console.log("Add new element to list at index 2");
list.insert(2, 60);
list.print();

console.log("remove element from list at index 2");
list.removeFrom(2);
list.print();

console.log("remove element from list of value 10");
list.removeByValue(10);
list.print();

console.log("search 20 & 200 in list");
console.log(list.search(20));
console.log(list.search(200));

console.log("Add new element to list at end");
list.append(60);
list.print();

console.log("Reverse list");
list.reverse();
list.print();
