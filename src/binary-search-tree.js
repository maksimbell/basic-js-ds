const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.root1 = null;
  }

  root() {
    return this.root1;
  }

  add(data) {

    function addNode(currentNode, newNode) {
      if (currentNode.data > newNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
        } else {
          addNode(currentNode.left, newNode);
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else {
          addNode(currentNode.right, newNode);
        }
      }
    }

    let newNode = new Node(data);
    if (this.root1) {
      let currentNode = this.root1;
      addNode(currentNode, newNode);
    } else {
      this.root1 = newNode
    }
  }

  has(data) {
    function findNode(currentNode, data) {
      if (currentNode.data == data) {
        return true;
      } else if (currentNode.data > data) {
        if (currentNode.left) {
          return findNode(currentNode.left, data);
        }
      } else {
        if (currentNode.right) {
          return findNode(currentNode.right, data);
        }
      }
    }

    if (this.root1) {
      return addNode(currentNode, data);
    } else {
      return false;
    }
  }

  find( /* data */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove( /* data */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}