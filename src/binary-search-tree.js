const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.someRoot = null;
  }

  root() {
    return this.someRoot;
  }

  add(data) {
    this.someRoot = addElement(this.someRoot, data);

    function addElement(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        node.right = addElement(node.right, data);
      } else {
        node.left = addElement(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return searchElement(this.someRoot, data);

    function searchElement(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data > node.data) {
        return searchElement(node.right, data);
      } else {
        return searchElement(node.left, data);
      }
    }
  }

  find(data) {
    return findElement(this.someRoot, data);

    function findElement(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        return findElement(node.right, data);
      } else {
        return findElement(node.left, data);
      }
    }
  }

  remove(data) {
    this.someRoot = removeElement(this.someRoot, data);

    function removeElement(node, data) {
      if (!node) {
        return null;
      }
      if (data > node.data) {
        node.right = removeElement(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeElement(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeElement(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.someRoot) {
      return null;
    }
    let minElement = this.someRoot;
    while(minElement.left) {
      minElement = minElement.left;
    }
    return minElement.data;
  }

  max() {
    if (!this.someRoot) {
      return null;
    }
    let maxElement = this.someRoot;
    while(maxElement.right) {
      maxElement = maxElement.right;
    }
    return maxElement.data;
  }
}

module.exports = {
  BinarySearchTree,
};
