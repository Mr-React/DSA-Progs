class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  //DFS preorder travseral
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }

    return;
  }

  //DFS inOrder traversal
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
    return;
  }

  isEmpty() {
    return this.root === null;
  }
}

const bst = new BinarySearchTree();

console.log("Tree is Empty?: ", bst.isEmpty());

console.log("Insert elements 10,5,15");
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("Search element(5,15,100) in tree exist or not");
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 100));

console.log("Traverse tree using DFS->preOrder way");
bst.preOrder(bst.root);

console.log("Traverse tree using DFS->inOrder way");
bst.inOrder(bst.root);

// console.log("Traverse tree using DFS->preOrder way");
// bst.preOrder(bst.root);
