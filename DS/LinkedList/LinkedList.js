class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert element at begining of the list
  //Big O - O(1)
  prepend(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //Insert element at end of the list
  //Big O - O(n)
  append(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = node;
    this.size++;
  }

  insert(data, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(data);
    } else {
      const node = new Node(data);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return;
    }

    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      removeNode = curr.next;
      curr.next = removeNode.next;
    }

    this.size--;
    return removeNode.data;
  }

  removeByData(data) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return data;
    } else {
      let curr = this.head;
      while (curr.next && curr.next.data !== data) {
        curr = curr.next;
      }
      if (curr.next) {
        const removeNode = curr.next;
        curr.next = removeNode.next;
        this.size--;
        return data;
      }
      return null;
    }
  }

  search(data) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.data === data) {
        return i;
      }
      curr = curr.next;
      i++;
    }

    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  isEmpty() {
    return this.size === 0;
  }

  get getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    }
    let curr = this.head;
    let str = "";
    while (curr) {
      str = str + `${curr.data} `;
      curr = curr.next;
    }
    console.log(str);
  }
}

const list = new LinkedList();
console.log(list.size);
console.log(list.isEmpty());

console.log("Prepend(20)");
list.prepend(10);
list.prepend(20);
console.log(list.size);
console.log(list.isEmpty());
list.append(30);
list.append(40);
list.print();

list.insert(50, 0);
list.print();

list.insert(70, 2);
list.print();
console.log(list.getSize);

console.log(list.removeFrom(0));
list.print();
console.log(list.removeFrom(3));
list.print();

console.log(list.removeByData(70));
list.print();
console.log(list.getSize);
console.log(list.removeByData(20));
list.print();
console.log(list.getSize);

console.log(list.removeByData(100));
list.print();

list.append(30);
list.append(60);
list.print();

console.log(list.search(30));
console.log(list.search(60));
console.log(list.search(600));

list.print();

list.reverse();
list.print();
