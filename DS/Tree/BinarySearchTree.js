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

  //DFS postOrder traversal
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }

    return;
  }

  //BFS traversal
  levelOrder() {
    //Create Queue
    const queue = [];

    //Enqueue the root node
    queue.push(this.root);

    //As long as node exist in queue do following
    while (queue.length) {
      //Dequeue the node from the front of queue
      let curr = queue.shift();

      //Read node's value
      console.log(curr.value);

      //Enqueue the node's left child if it exist
      if (curr.left) {
        queue.push(curr.left);
      }

      //Enqueue the node's right child if it exist
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
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

console.log("Traverse tree using DFS->postOrder way");
bst.postOrder(bst.root);

console.log("Traverse tree using BFS");
bst.levelOrder();

console.log("Minimum value in tree");
console.log(bst.min(bst.root));

console.log("Maximum value in tree");
console.log(bst.max(bst.root));
